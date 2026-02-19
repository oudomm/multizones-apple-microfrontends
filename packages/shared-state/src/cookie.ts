import type { UserProfile } from './types';

const USER_COOKIE = 'apple-user';

export function setUserCookie(user: UserProfile | null): void {
  if (typeof document === 'undefined') return;
  if (user) {
    const val = encodeURIComponent(JSON.stringify({ name: user.name, email: user.email }));
    document.cookie = `${USER_COOKIE}=${val};path=/;max-age=31536000;SameSite=Lax`;
  } else {
    document.cookie = `${USER_COOKIE}=;path=/;max-age=0;path=/`;
  }
}

export function getUserFromCookie(): { name: string; email: string } | null {
  if (typeof document === 'undefined') return null;
  const match = document.cookie.match(new RegExp(`(?:^|; )${USER_COOKIE}=([^;]*)`));
  if (!match) return null;
  try {
    return JSON.parse(decodeURIComponent(match[1]!));
  } catch {
    return null;
  }
}
