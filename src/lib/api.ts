/**
 * API Service - Utility functions for making API calls
 * Handles access tokens and automatic refresh on expiration
 */

import { GalleryItem } from '@/types';

const API_BASE_URL =
  process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3000/api';

interface ApiResponse<T = any> {
  message: string;
  data?: T;
  error?: string;
  accessToken?: string;
  refreshToken?: string;
}

export class ApiService {
  private static accessToken: string | null = null;
  private static refreshToken: string | null = null;

  // Initialize tokens from localStorage on client side
  static initialize(): void {
    if (typeof window !== 'undefined') {
      this.accessToken = localStorage.getItem('accessToken');
      this.refreshToken = localStorage.getItem('refreshToken');
    }
  }

  // Set tokens after login
  static setTokens(accessToken: string, refreshToken: string): void {
    this.accessToken = accessToken;
    this.refreshToken = refreshToken;
    if (typeof window !== 'undefined') {
      localStorage.setItem('accessToken', accessToken);
      localStorage.setItem('refreshToken', refreshToken);
    }
  }

  // Get access token from memory or localStorage
  static getAccessToken(): string | null {
    if (!this.accessToken && typeof window !== 'undefined') {
      this.accessToken = localStorage.getItem('accessToken');
    }
    return this.accessToken;
  }

  // Get refresh token
  private static getRefreshToken(): string | null {
    if (!this.refreshToken && typeof window !== 'undefined') {
      this.refreshToken = localStorage.getItem('refreshToken');
    }
    return this.refreshToken;
  }

  // Clear tokens on logout
  static clearTokens(): void {
    this.accessToken = null;
    this.refreshToken = null;
    if (typeof window !== 'undefined') {
      localStorage.removeItem('accessToken');
      localStorage.removeItem('refreshToken');
    }
  }

  // Refresh access token
  private static async refreshAccessToken(): Promise<boolean> {
    try {
      const refreshToken = this.getRefreshToken();
      if (!refreshToken) return false;

      const response = await fetch(`${API_BASE_URL}/auth/refresh`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ refreshToken }),
      });

      if (!response.ok) {
        this.clearTokens();
        return false;
      }

      const data = await response.json();
      this.accessToken = data.accessToken;
      if (typeof window !== 'undefined') {
        localStorage.setItem('accessToken', data.accessToken);
      }
      return true;
    } catch (error) {
      console.error('Token refresh failed:', error);
      return false;
    }
  }

  // Helper to make requests with automatic token refresh
  private static async request<T>(
    endpoint: string,
    options: RequestInit = {},
    retry: boolean = true
  ): Promise<ApiResponse<T>> {
    const headers: Record<string, string> = {
      'Content-Type': 'application/json',
    };

    if (options.headers && typeof options.headers === 'object') {
      Object.assign(headers, options.headers);
    }

    const token = this.getAccessToken();
    if (token) {
      headers['Authorization'] = `Bearer ${token}`;
    }

    const response = await fetch(`${API_BASE_URL}${endpoint}`, {
      ...options,
      headers,
    });

    const data = await response.json();

    // If 401 (Unauthorized) and we haven't retried yet, try to refresh token
    if (response.status === 401 && retry) {
      const refreshed = await this.refreshAccessToken();
      if (refreshed) {
        return this.request<T>(endpoint, options, false);
      }
    }

    if (!response.ok) {
      throw new Error(data.error || `API request failed with status ${response.status}`);
    }

    return data;
  }

  // AUTH ENDPOINTS
  static async login(email: string, password: string) {
    const response = await this.request<{ id: string; email: string }>(
      '/auth/login',
      {
        method: 'POST',
        body: JSON.stringify({ email, password }),
      },
      false
    );
    return response as ApiResponse<{ id: string; email: string }> & {
      accessToken: string;
      refreshToken: string;
    };
  }

  // GALLERY ENDPOINTS
  static async getGallery() {
    return this.request<GalleryItem[]>('/gallery');
  }

  static async getGalleryItem(id: string) {
    return this.request<GalleryItem>(`/gallery/${id}`);
  }

  static async createGalleryItem(
    title: string,
    imageUrl: string,
    description?: string,
    category?: string
  ) {
    return this.request<GalleryItem>('/gallery', {
      method: 'POST',
      body: JSON.stringify({ title, imageUrl, description, category }),
    });
  }

  static async updateGalleryItem(
    id: string,
    title?: string,
    imageUrl?: string,
    description?: string,
    category?: string
  ) {
    return this.request<GalleryItem>(`/gallery/${id}`, {
      method: 'PUT',
      body: JSON.stringify({ title, imageUrl, description, category }),
    });
  }

  static async deleteGalleryItem(id: string) {
    return this.request<{ message: string }>(`/gallery/${id}`, {
      method: 'DELETE',
    });
  }
}

export default ApiService;
