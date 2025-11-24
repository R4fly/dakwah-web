// src/lib/database.types.ts

// This file defines the types for the Supabase database

export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[];

export type Database = {
  public: {
    Tables: {
      Penceramah: {
        Row: {
          id: number;
          nama: string;
          bio: string | null;
        };
        Insert: {
          nama: string;
          bio?: string | null;
        };
        Update: {
          nama?: string;
          bio?: string | null;
        };
      };
      Konten: {
        Row: {
          id: number;
          judul: string;
          deskripsi_singkat: string | null;
          penceramah_id: number;
          tipe_konten: string;
          kategori: string;
          link_video: string | null;
          isi_artikel: string | null;
          jumlah_suka: number;
          tanggal_publikasi: string;
        };
        Insert: {
          judul: string;
          deskripsi_singkat?: string | null;
          penceramah_id: number;
          tipe_konten: string;
          kategori: string;
          link_video?: string | null;
          isi_artikel?: string | null;
          jumlah_suka?: number;
          tanggal_publikasi?: string;
        };
        Update: {
          judul?: string;
          deskripsi_singkat?: string | null;
          penceramah_id?: number;
          tipe_konten?: string;
          kategori?: string;
          link_video?: string | null;
          isi_artikel?: string | null;
          jumlah_suka?: number;
          tanggal_publikasi?: string;
        };
      };
    };
    Views: {
      [_ in never]: never;
    };
    Functions: {
      [_ in never]: never;
    };
    Enums: {
      [_ in never]: never;
    };
    CompositeTypes: {
      [_ in never]: never;
    };
  };
};