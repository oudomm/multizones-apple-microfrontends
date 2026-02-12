import { Navigation } from '@repo/ui';
import { useMemo } from 'react';
import HeroSection from '../components/HeroSection';
import IphoneSection from '../components/IphoneSection';
import WatchSection from '../components/WatchSection';
import GridProducstSection from '../components/GridProductsSection';
import FooterSection from '../components/FooterSection';

export default function HomePage() {


  const navItems = useMemo(
    () => [
      { label: 'Home', href: '/' },
      { label: 'Store', href: '/store' },
      { label: 'iPhone', href: '/iphone' },
      { label: 'Mac', href: '/mac' },
    ],
    []
  );

  return (
    <div className="min-h-screen bg-white text-[#1d1d1f]">
      <Navigation items={navItems} currentZone="/" />
      <HeroSection />
      <IphoneSection />
      <WatchSection />
      <GridProducstSection />
      <FooterSection />
    </div>
  );
}