export interface Product {
  id: string;
  name: string;
  price: number;
  stock: number;
  description?: string;
  image?: string;
}

export interface Order {
  id: string;
  userId: string;
  products: Product[];
  total: number;
  status: 'pending' | 'processing' | 'completed' | 'cancelled';
  createdAt: Date;
}
