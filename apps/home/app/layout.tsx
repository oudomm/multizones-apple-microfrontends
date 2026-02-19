import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { CartDrawer } from '@repo/ui';
import { SharedStateProvider } from '@repo/shared-state';
import AuthBootstrapper from "../components/auth-bootstrapper";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
});


export const metadata: Metadata = {
  title: 'Apple',
  description: 'Welcome to Apple',
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
          <AuthBootstrapper />
          {children}
          <CartDrawer />
        </SharedStateProvider>
      </body>
    </html>
  );
}
