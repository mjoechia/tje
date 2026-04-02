export interface AppUser {
  id: string
  email: string | null
  name: string
  phone: string | null
  created_at: string
}

export interface Product {
  id: string
  name: string
  description: string | null
  price_cents: number
  image_url: string | null
  is_active: boolean
  sort_order: number
  created_at: string
  updated_at: string
}

export interface Order {
  id: string
  user_id: string | null
  status: 'pending' | 'confirmed' | 'dispatched' | 'delivered' | 'cancelled'
  total_cents: number
  delivery_address: DeliveryAddress | null
  delivery_date: string | null
  notes: string | null
  created_at: string
  updated_at: string
}

export interface OrderItem {
  id: string
  order_id: string
  product_id: string
  quantity: number
  price_cents: number
  created_at: string
}

export interface DeliveryAddress {
  name: string
  address: string
  postal_code: string
  phone: string
  instructions?: string
}
