import { createSlice, type PayloadAction } from '@reduxjs/toolkit';
import type { UserProfile, CartItem } from '../types';
import { setUserCookie } from '../cookie';
import { clearCart, hydrateCart } from './cartSlice';
import type { AppDispatch, RootState } from '../store';

export interface UserState {
  profile: UserProfile | null;
}

const initialState: UserState = {
  profile: null,
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUser(state, action: PayloadAction<UserProfile>) {
      state.profile = action.payload;
    },
    clearUser(state) {
      state.profile = null;
    },
    hydrateUser(state, action: PayloadAction<UserProfile | null>) {
      state.profile = action.payload;
    },
  },
});

export const { setUser, clearUser, hydrateUser } = userSlice.actions;

const CART_BACKUP_PREFIX = 'apple-cart-';

export function loginUser(user: UserProfile) {
  return (dispatch: AppDispatch) => {
    let savedCart: CartItem[] = [];
    try {
      const raw = localStorage.getItem(CART_BACKUP_PREFIX + user.id);
      if (raw) savedCart = JSON.parse(raw);
    } catch { /* ignore */ }

    setUserCookie(user);
    dispatch(setUser(user));

    if (savedCart.length > 0) {
      dispatch(hydrateCart(savedCart));
    }
  };
}

export function logoutUser() {
  return (dispatch: AppDispatch, getState: () => RootState) => {
    const state = getState();
    const user = state.user.profile;
    const cartItems = state.cart.items;

    if (user && cartItems.length > 0) {
      try {
        localStorage.setItem(CART_BACKUP_PREFIX + user.id, JSON.stringify(cartItems));
      } catch { /* ignore */ }
    }

    setUserCookie(null);
    dispatch(clearUser());
    dispatch(clearCart());
  };
}

export default userSlice.reducer;
