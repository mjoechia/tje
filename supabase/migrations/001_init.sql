-- TJE & Co. — Initial Schema Migration
-- File: 001_init.sql
-- Schema: app_tje
-- Run in Supabase SQL Editor on project: nqnhyxdwqwufdgprodcs

-- ============================================================
-- 1. Create schema
-- ============================================================
CREATE SCHEMA IF NOT EXISTS app_tje;

-- ============================================================
-- 2. Users table (id mirrors auth.users.id — same UUID)
-- ============================================================
CREATE TABLE app_tje.users (
  id         UUID PRIMARY KEY REFERENCES auth.users(id) ON DELETE CASCADE,
  email      TEXT,
  name       TEXT NOT NULL DEFAULT 'Customer',
  phone      TEXT,
  created_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

ALTER TABLE app_tje.users ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Users can view own record"
  ON app_tje.users FOR SELECT
  USING (auth.uid() = id);

CREATE POLICY "Users can update own record"
  ON app_tje.users FOR UPDATE
  USING (auth.uid() = id);

-- ============================================================
-- 3. Products table (managed by admin / service_role)
-- ============================================================
CREATE TABLE app_tje.products (
  id          UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  name        TEXT NOT NULL,
  description TEXT,
  price_cents INTEGER NOT NULL CHECK (price_cents >= 0),
  image_url   TEXT,
  is_active   BOOLEAN NOT NULL DEFAULT true,
  sort_order  INTEGER NOT NULL DEFAULT 0,
  created_at  TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  updated_at  TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

ALTER TABLE app_tje.products ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can view active products"
  ON app_tje.products FOR SELECT
  USING (is_active = true);

-- ============================================================
-- 4. Orders table
-- ============================================================
CREATE TABLE app_tje.orders (
  id               UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id          UUID REFERENCES app_tje.users(id) ON DELETE SET NULL,
  status           TEXT NOT NULL DEFAULT 'pending'
                     CHECK (status IN ('pending','confirmed','dispatched','delivered','cancelled')),
  total_cents      INTEGER NOT NULL CHECK (total_cents >= 0),
  delivery_address JSONB,
  delivery_date    DATE,
  notes            TEXT,
  created_at       TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  updated_at       TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

ALTER TABLE app_tje.orders ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Users can view own orders"
  ON app_tje.orders FOR SELECT
  USING (auth.uid() = user_id);

CREATE POLICY "Users can create orders"
  ON app_tje.orders FOR INSERT
  WITH CHECK (auth.uid() = user_id OR user_id IS NULL);

-- ============================================================
-- 5. Order items table
-- ============================================================
CREATE TABLE app_tje.order_items (
  id          UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  order_id    UUID NOT NULL REFERENCES app_tje.orders(id) ON DELETE CASCADE,
  product_id  UUID NOT NULL REFERENCES app_tje.products(id),
  quantity    INTEGER NOT NULL CHECK (quantity > 0),
  price_cents INTEGER NOT NULL CHECK (price_cents >= 0),
  created_at  TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

ALTER TABLE app_tje.order_items ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Users can view items of own orders"
  ON app_tje.order_items FOR SELECT
  USING (
    EXISTS (
      SELECT 1 FROM app_tje.orders
      WHERE id = order_id AND user_id = auth.uid()
    )
  );

-- ============================================================
-- 6. Trigger function (WHEN-gated — never blocks auth)
-- ============================================================
CREATE OR REPLACE FUNCTION app_tje.handle_new_user()
RETURNS TRIGGER AS $$
BEGIN
  INSERT INTO app_tje.users (id, email, name)
  VALUES (
    NEW.id,
    NEW.email,
    COALESCE(NEW.raw_user_meta_data->>'name', 'Customer')
  );

  INSERT INTO internal.user_map (auth_user_id, app_schema, app_user_id)
  VALUES (NEW.id, 'app_tje', NEW.id)
  ON CONFLICT (auth_user_id, app_schema) DO NOTHING;

  RETURN NEW;

EXCEPTION
  WHEN OTHERS THEN
    RAISE WARNING 'app_tje.handle_new_user failed for user %: %', NEW.id, SQLERRM;
    RETURN NEW; -- never block auth
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

-- ============================================================
-- 7. WHEN-gated trigger (fires only for app_tje signups)
-- ============================================================
CREATE TRIGGER on_auth_user_created_tje
  AFTER INSERT ON auth.users
  FOR EACH ROW
  WHEN (NEW.raw_user_meta_data->>'app' = 'app_tje')
  EXECUTE FUNCTION app_tje.handle_new_user();

-- ============================================================
-- 8. Expose schema via PostgREST
--    Dashboard → Project Settings → API → Exposed Schemas → add "app_tje"
-- ============================================================

-- ============================================================
-- 9. Seed initial products
-- ============================================================
INSERT INTO app_tje.products (name, description, price_cents, is_active, sort_order)
VALUES
  (
    'Pure Cold-Pressed Sugarcane Juice',
    'Our flagship elixir. Simple, honest, and incredibly refreshing. 500ml of pure vitality — nothing else.',
    650,
    true,
    1
  ),
  (
    '6 Bottle Pack',
    'Perfect for a work week boost. Six 500ml bottles of pure cold-pressed sugarcane juice.',
    3600,
    true,
    2
  ),
  (
    '12 Bottle Pack',
    'Share the goodness with family. Twelve 500ml bottles at our best single-purchase price.',
    6800,
    true,
    3
  );
