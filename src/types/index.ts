/**
 * Type definitions for Gallery and Admin
 */

export interface GalleryItem {
  _id: string;
  title: string;
  description?: string;
  imageUrl: string;
  category: 'event' | 'activity' | 'achievement' | 'other';
  createdAt: string;
  updatedAt: string;
}

export interface Admin {
  id: string;
  email: string;
}

export interface LoginResponse {
  message: string;
  accessToken: string;
  refreshToken: string;
  admin: Admin;
}

export interface TokenRefreshResponse {
  message: string;
  accessToken: string;
}

export interface JWTPayload {
  adminId: string;
  type?: 'access' | 'refresh';
  iat?: number;
  exp?: number;
}
