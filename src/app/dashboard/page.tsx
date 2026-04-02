import React from 'react';
import DashboardLayout from '@/components/admin/DashboardLayout';
import GalleryManager from '@/components/admin/GalleryManager';

export default function DashboardPage() {
  return (
    <DashboardLayout>
      <GalleryManager />
    </DashboardLayout>
  );
}
