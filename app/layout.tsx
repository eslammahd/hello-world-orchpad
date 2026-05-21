import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Hello World by Orchpad',
  description: 'A simple Hello World page'
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
