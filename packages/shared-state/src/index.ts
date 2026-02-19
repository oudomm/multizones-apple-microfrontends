// Types
export type { CartItem, UserProfile } from './types';

// Store & hooks
export { useAppDispatch, useAppSelector } from './store';
export type { RootState, AppDispatch } from './store';

// Provider
export { SharedStateProvider } from './provider';

// Slices — actions
export { addItem, removeItem, updateQuantity, clearCart } from './slices/cartSlice';
export { setUser, clearUser, loginUser, logoutUser } from './slices/userSlice';

// RTK Query
export { authApi, useGetMeQuery } from './api/authApi';
export { iphoneApi, useGetIphonesQuery, useGetIphoneByIdQuery } from './api/iphoneApi';
export type { IPhoneProduct } from './api/iphoneApi';

// Cookie utilities
export { getUserFromCookie } from './cookie';

// UI events
export * from './ui-events';
