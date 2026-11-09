import React from 'react';
import AdminPanel from '@/components/AdminPanel';

export const metadata = {
  title: 'Admin Portal | Agent Management Dashboard',
  description: 'Control panel for managing agents, categories, verification status, and complain number settings.'
};

export default function AdminPage() {
  return (
    <div style={{ padding: '20px 0' }}>
      <AdminPanel />
    </div>
  );
}
