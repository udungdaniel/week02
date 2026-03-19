import '@/app/ui/global.css';
import { inter } from '@/app/ui/fonts';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      {/* Add base path class to body if needed */}
      <body className={`${inter.className} antialiased`}>{children}</body>
    </html>
  );
}