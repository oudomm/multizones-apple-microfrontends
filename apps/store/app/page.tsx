import { Navigation } from '@repo/ui';
import StoreContent from '../components/store-content';

const navItems = [
  { label: 'Home', href: '/' },
  { label: 'Store', href: '/store' },
  { label: 'iPhone', href: '/iphone' },
  { label: 'Mac', href: '/mac' },
];

export default function StorePage() {
  return (
    <div className="min-h-screen bg-white text-[#1d1d1f]">
      <Navigation items={navItems} currentZone="/store" />

      {/* Hero */}
      <header className="relative overflow-hidden border-b border-[#d2d2d7]">
        <div className="absolute inset-0 bg-linear-to-b from-[#f5f5f7] via-white to-white" />
        <div className="relative max-w-6xl mx-auto px-6 pt-14 pb-10 md:pt-20 md:pb-14">
          <div className="flex flex-col items-center text-center">
            <p className="text-[15px] text-gray-600">Apple Store</p>
            <h1 className="mt-3 text-5xl md:text-7xl font-semibold tracking-[-0.02em] leading-[1.05]">
              Shop the latest.
            </h1>
            <p className="mt-4 text-xl md:text-2xl text-gray-600 max-w-2xl">
              Built as a separate Next.js zone. Shared UI components and shared cart state across zones.
            </p>

            <div className="mt-8 flex flex-col sm:flex-row gap-3">
              <a
                href="#products"
                className="inline-flex items-center justify-center rounded-full px-5 py-3 text-[15px] font-medium bg-[#0071e3] text-white hover:opacity-90 transition"
              >
                Browse products
              </a>
              <a
                href="/"
                className="inline-flex items-center justify-center rounded-full px-5 py-3 text-[15px] font-medium border border-[#d2d2d7] text-[#1d1d1f] hover:bg-[#f5f5f7] transition"
              >
                Back to Home
              </a>
            </div>
          </div>
        </div>
      </header>

      <StoreContent />
    </div>
  );
}
