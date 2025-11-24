// src/lib/database/types.ts

// User type based on the database schema
export type User = {
  id: number;
  email: string;
  password_hash: string;
  full_name: string | null;
  role: string; // 'admin', 'customer', 'staff'
  created_at: string;
};

// Item type based on the database schema
export type Item = {
  id: number;
  title: string;
  content: string | null;
  user_id: number;
  status: string; // 'draft', 'published', 'archived'
  created_at: string;
};

// Settings type based on the database schema
export type Setting = {
  key: string;
  value: string | null;
  description: string | null;
};

// Response types for API calls
export type ApiResponse<T> = {
  data: T | null;
  error: string | null;
  success: boolean;
};