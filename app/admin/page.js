import AdminApp from '@/components/AdminApp';
import { notFound } from 'next/navigation';
import { BACKEND } from '@/lib/modules';
import { isAdmin } from '@/lib/auth';
import { usingMemory } from '@/lib/store';
import { emailConfigured } from '@/lib/notify';

export const dynamic = 'force-dynamic';
export const metadata = { title: 'Admin', robots: { index: false, follow: false } };

export default function AdminPage() {
  if (!BACKEND) notFound();
  return <AdminApp authed={isAdmin()} usingMemory={usingMemory} emailConfigured={emailConfigured()} />;
}
