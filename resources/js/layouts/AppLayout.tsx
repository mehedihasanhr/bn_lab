import { Link } from '@inertiajs/react';
import * as React from 'react';

export default function AppLayout({ children }: { children: React.ReactNode }) {
  return (
    <main className="flex-1 bg-sushi-50/10 p-6">
      <Link href={route('dashboard')} className="mb-8 block">
        <img src="/logo.png" alt="" width={200} />
      </Link>

      {children}
    </main>
  );
}
