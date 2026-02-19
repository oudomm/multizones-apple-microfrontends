import { Navigation } from '@repo/ui';
import ProfileContent from '../../components/profile-content';

const navItems = [
  { label: 'Home', href: '/' },
  { label: 'Store', href: '/store' },
  { label: 'iPhone', href: '/iphone' },
  { label: 'Mac', href: '/mac' },
];

export default function ProfilePage() {
  return (
    <div className="min-h-screen bg-white text-[#1d1d1f]">
      <Navigation items={navItems} currentZone="/profile" />

      <main className="max-w-xl mx-auto px-6 py-16">
        <ProfileContent />
      </main>
    </div>
  );
}
