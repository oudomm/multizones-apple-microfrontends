import type { Middleware, MiddlewareAPI } from '@reduxjs/toolkit';
import type { RootState } from '../store';
import { hydrateCart } from '../slices/cartSlice';
import { hydrateUser } from '../slices/userSlice';

const STORAGE_KEY = 'apple-global-state';

/** Only write to localStorage when cart or user state actually changes */
const PERSIST_PREFIXES = ['cart/', 'user/'];

const HYDRATE_ACTIONS = new Set([
  'cart/hydrateCart',
  'user/hydrateUser',
]);

function writeToLocalStorage(state: RootState): void {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify({
      cart: state.cart.items,
      user: state.user.profile,
    }));
  } catch { /* localStorage full or unavailable */ }
}

export function readFromLocalStorage(): { cart: any[]; user: any } | null {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return null;
    return JSON.parse(raw);
  } catch {
    return null;
  }
}

export function createLocalStorageSyncMiddleware(): Middleware {
  return (storeApi: MiddlewareAPI) => {
    if (typeof window !== 'undefined') {
      window.addEventListener('storage', (event: StorageEvent) => {
        if (event.key !== STORAGE_KEY || !event.newValue) return;
        try {
          const incoming = JSON.parse(event.newValue);
          storeApi.dispatch(hydrateCart(incoming.cart ?? []));
          storeApi.dispatch(hydrateUser(incoming.user ?? null));
        } catch { /* ignore */ }
      });
    }

    return (next) => (action) => {
      const result = next(action);

      if (
        typeof window !== 'undefined' &&
        typeof action === 'object' &&
        action !== null &&
        'type' in action
      ) {
        const type = (action as { type: string }).type;
        if (
          !HYDRATE_ACTIONS.has(type) &&
          PERSIST_PREFIXES.some((p) => type.startsWith(p))
        ) {
          writeToLocalStorage(storeApi.getState() as RootState);
        }
      }

      return result;
    };
  };
}
