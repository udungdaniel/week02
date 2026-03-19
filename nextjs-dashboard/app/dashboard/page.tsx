'use client';
import Link from 'next/link';
import { HomeIcon, DocumentDuplicateIcon, UserGroupIcon } from '@heroicons/react/24/outline';

export default function Page() {
  const cards = [
    { name: 'Home', href: '/week02/dashboard', icon: HomeIcon },
    { name: 'Invoices', href: '/week02/dashboard/invoices', icon: DocumentDuplicateIcon },
    { name: 'Customers', href: '/week02/dashboard/customers', icon: UserGroupIcon },
  ];

  return (
    <div className="flex flex-col items-center justify-center gap-6 p-6 md:flex-row md:justify-start md:gap-8">
      {cards.map((card) => {
        const Icon = card.icon;
        return (
          <Link
            key={card.name}
            href={card.href}
            className="flex flex-col items-center justify-center gap-2 rounded-lg border border-gray-300 bg-gray-50 p-6 text-center hover:bg-sky-100 hover:text-blue-600 transition"
          >
            <Icon className="w-10 h-10" />
            <span className="mt-2 font-medium">{card.name}</span>
          </Link>
        );
      })}
    </div>
  );
}