'use client';
import NavLinks from '@/app/ui/dashboard/nav-links';
import { ArrowRightIcon } from '@heroicons/react/24/outline';

export default function Page() {
  return (
    <div className="flex min-h-screen bg-gray-50">
      {/* Sidebar */}
      <aside className="hidden md:flex md:flex-col md:w-60 md:bg-white md:border-r md:border-gray-200">
        <div className="p-6">
          <h1 className="text-xl font-bold">Dashboard</h1>
        </div>
        <nav className="flex flex-col gap-2 px-4">
          <NavLinks />
        </nav>
      </aside>

      {/* Main content */}
      <main className="flex-1 p-6">
        <h2 className="text-2xl font-bold mb-4">Welcome to the Dashboard</h2>

        {/* Hero Images for GitHub Pages */}
        <div className="flex items-center justify-center p-6 md:px-28 md:py-12">
          <img
            src="/week02/hero-desktop.png"
            width={1000}
            height={760}
            className="hidden md:block"
            alt="Dashboard hero desktop"
          />
          <img
            src="/week02/hero-mobile.png"
            width={560}
            height={620}
            className="block md:hidden"
            alt="Dashboard hero mobile"
          />
        </div>

        {/* Quick links */}
        <div className="mt-8 flex flex-col gap-4 md:flex-row md:gap-6">
          <a
            href="dashboard/customers"
            className="flex items-center gap-2 rounded-md bg-gray-100 p-3 font-medium hover:bg-sky-100 hover:text-blue-600"
          >
            <ArrowRightIcon className="w-5" />
            Customers
          </a>
          <a
            href="dashboard/invoices"
            className="flex items-center gap-2 rounded-md bg-gray-100 p-3 font-medium hover:bg-sky-100 hover:text-blue-600"
          >
            <ArrowRightIcon className="w-5" />
            Invoices
          </a>
        </div>
      </main>
    </div>
  );
}