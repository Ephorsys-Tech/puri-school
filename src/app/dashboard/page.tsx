'use client';

import React from 'react';
import DashboardLayout from '@/components/admin/DashboardLayout';
import GalleryManager from '@/components/admin/GalleryManager';
import MessageManager from '@/components/admin/MessageManager';

export default function DashboardPage() {
  const [activeTab, setActiveTab] = React.useState<
    'gallery' | 'messages'
  >('gallery');

  return (
    <DashboardLayout
      activeTab={activeTab}
      setActiveTab={setActiveTab}
    >
      {activeTab === 'gallery' ? (
        <GalleryManager />
      ) : (
        <MessageManager />
      )}
    </DashboardLayout>
  );
}