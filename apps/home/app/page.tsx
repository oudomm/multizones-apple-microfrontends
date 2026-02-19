import { Navigation } from '@repo/ui';
import HeroSection from '../components/hero-section';
import IphoneSection from '../components/iphone-section';
import WatchSection from '../components/watch-section';
import GridProducstSection from '../components/grid-products-section';
import FooterSection from '../components/footer-section';

const navItems = [
  { label: 'Home', href: '/' },
  { label: 'Store', href: '/store' },
  { label: 'iPhone', href: '/iphone' },
  { label: 'Mac', href: '/mac' },
];

export default function HomePage() {
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