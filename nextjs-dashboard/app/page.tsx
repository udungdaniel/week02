'use client';
import { ArrowRightIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';

export default function Page() {
  return (
    <div className="flex flex-col items-center justify-center p-6 md:w-3/5 md:px-28 md:py-12">
      {/* Hero Images for GitHub Pages */}
      <img
        src="/week02/hero-desktop.png"  // Adjusted for GitHub Pages under '/week02/'
        width={1000}
        height={760}
        className="hidden md:block"
        alt="Screenshots of the dashboard project showing desktop version"
      />
      <img
        src="/week02/hero-mobile.png"  // Adjusted for GitHub Pages under '/week02/'
        width={560}
        height={620}
        className="block md:hidden"
        alt="Screenshot of the dashboard project showing mobile version"
      />
    </div>
  );
}