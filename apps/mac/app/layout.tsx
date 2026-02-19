import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { CartDrawer } from '@repo/ui';
import { SharedStateProvider } from '@repo/shared-state';

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
});

export const metadata: Metadata = {
  title: 'Apple - Mac',
  description: 'Welcome to Apple Mac',
  icons: {
    icon: '/favicon.svg',
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        <SharedStateProvider>
          {children}
          <CartDrawer />
        </SharedStateProvider>
      </body>
    </html>
  );
}
