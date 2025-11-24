// src/lib/database/operations.ts

import { supabase } from './client';

// Define TypeScript types based on the new schema
export type Penceramah = {
  id: number;
  nama: string;
  bio?: string | null;
};

export type Konten = {
  id: number;
  judul: string;
  deskripsi_singkat?: string | null;
  penceramah_id: number;
  tipe_konten: string; // 'Video' or 'Artikel'
  kategori: string; // 'Dermawan' or 'Merendahkan'
  link_video?: string | null;
  isi_artikel?: string | null;
  jumlah_suka: number;
  tanggal_publikasi: string;
};

export type ApiResponse<T> = {
  data: T | null;
  error: string | null;
  success: boolean;
};

// Penceramah operations
export const getPenceramahById = async (id: number): Promise<ApiResponse<Penceramah | null>> => {
  try {
    const { data, error } = await supabase
      .from('Penceramah')
      .select('*')
      .eq('id', id)
      .single();

    if (error) {
      throw error;
    }

    return { data, error: null, success: true };
  } catch (error: any) {
    return { data: null, error: error.message, success: false };
  }
};

export const getAllPenceramah = async (): Promise<ApiResponse<Penceramah[]>> => {
  try {
    const { data, error } = await supabase
      .from('Penceramah')
      .select('*');

    if (error) {
      throw error;
    }

    return { data: data || [], error: null, success: true };
  } catch (error: any) {
    return { data: null, error: error.message, success: false };
  }
};

export const createPenceramah = async (
  nama: string,
  bio?: string
): Promise<ApiResponse<Penceramah>> => {
  try {
    const { data, error } = await supabase
      .from('Penceramah')
      .insert([{ nama, bio }])
      .select()
      .single();

    if (error) {
      throw error;
    }

    return { data, error: null, success: true };
  } catch (error: any) {
    return { data: null, error: error.message, success: false };
  }
};

// Konten operations
export const getKontenById = async (id: number): Promise<ApiResponse<Konten | null>> => {
  try {
    const { data, error } = await supabase
      .from('Konten')
      .select(`
        *,
        Penceramah (nama, bio)
      `)
      .eq('id', id)
      .single();

    if (error) {
      throw error;
    }

    return { data, error: null, success: true };
  } catch (error: any) {
    return { data: null, error: error.message, success: false };
  }
};

export const getAllKonten = async (kategori?: string, tipe_konten?: string): Promise<ApiResponse<Konten[]>> => {
  try {
    let query = supabase
      .from('Konten')
      .select(`
        *,
        Penceramah (nama)
      `)
      .order('tanggal_publikasi', { ascending: false });

    if (kategori) {
      query = query.eq('kategori', kategori);
    }

    if (tipe_konten) {
      query = query.eq('tipe_konten', tipe_konten);
    }

    const { data, error } = await query;

    if (error) {
      throw error;
    }

    return { data: data || [], error: null, success: true };
  } catch (error: any) {
    return { data: null, error: error.message, success: false };
  }
};

export const getKontenByPenceramahId = async (penceramahId: number): Promise<ApiResponse<Konten[]>> => {
  try {
    const { data, error } = await supabase
      .from('Konten')
      .select('*')
      .eq('penceramah_id', penceramahId)
      .order('tanggal_publikasi', { ascending: false });

    if (error) {
      throw error;
    }

    return { data: data || [], error: null, success: true };
  } catch (error: any) {
    return { data: null, error: error.message, success: false };
  }
};

export const createKonten = async (
  judul: string,
  penceramah_id: number,
  deskripsi_singkat?: string,
  tipe_konten: string = 'Artikel',
  kategori: string = 'Dermawan',
  link_video?: string | null,
  isi_artikel?: string | null
): Promise<ApiResponse<Konten>> => {
  try {
    const { data, error } = await supabase
      .from('Konten')
      .insert([{
        judul,
        deskripsi_singkat,
        penceramah_id,
        tipe_konten,
        kategori,
        link_video,
        isi_artikel
      }])
      .select()
      .single();

    if (error) {
      throw error;
    }

    return { data, error: null, success: true };
  } catch (error: any) {
    return { data: null, error: error.message, success: false };
  }
};

export const updateKonten = async (
  id: number,
  updates: Partial<Konten>
): Promise<ApiResponse<Konten>> => {
  try {
    const { data, error } = await supabase
      .from('Konten')
      .update(updates)
      .eq('id', id)
      .select()
      .single();

    if (error) {
      throw error;
    }

    return { data, error: null, success: true };
  } catch (error: any) {
    return { data: null, error: error.message, success: false };
  }
};

export const deleteKonten = async (id: number): Promise<ApiResponse<boolean>> => {
  try {
    const { error } = await supabase
      .from('Konten')
      .delete()
      .eq('id', id);

    if (error) {
      throw error;
    }

    return { data: true, error: null, success: true };
  } catch (error: any) {
    return { data: false, error: error.message, success: false };
  }
};

export const incrementLike = async (id: number): Promise<ApiResponse<Konten | null>> => {
  try {
    const { data, error } = await supabase
      .from('Konten')
      .select('*')
      .eq('id', id)
      .single();

    if (error) {
      throw error;
    }

    const updatedLikes = (data?.jumlah_suka || 0) + 1;

    const { data: updatedData, error: updateError } = await supabase
      .from('Konten')
      .update({ jumlah_suka: updatedLikes })
      .eq('id', id)
      .select()
      .single();

    if (updateError) {
      throw updateError;
    }

    return { data: updatedData, error: null, success: true };
  } catch (error: any) {
    return { data: null, error: error.message, success: false };
  }
};