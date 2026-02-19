'use client';

import { configureStore } from '@reduxjs/toolkit';
import { useDispatch, useSelector, type TypedUseSelectorHook } from 'react-redux';
import cartReducer from './slices/cartSlice';
import userReducer from './slices/userSlice';
import { authApi } from './api/authApi';
import { iphoneApi } from './api/iphoneApi';
import {
  createLocalStorageSyncMiddleware,
  readFromLocalStorage,
} from './middleware/localStorageSyncMiddleware';

function createPreloadedState() {
  if (typeof window === 'undefined') return undefined;

  const persisted = readFromLocalStorage();
  if (!persisted) return undefined;

  return {
    cart: { items: persisted.cart ?? [] },
    user: { profile: persisted.user ?? null },
  };
}

export function makeStore() {
  return configureStore({
    reducer: {
      cart: cartReducer,
      user: userReducer,
      [authApi.reducerPath]: authApi.reducer,
      [iphoneApi.reducerPath]: iphoneApi.reducer,
    },
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware()
        .concat(authApi.middleware)
        .concat(iphoneApi.middleware)
        .concat(createLocalStorageSyncMiddleware()),
    preloadedState: createPreloadedState(),
  });
}

export type AppStore = ReturnType<typeof makeStore>;
export type RootState = ReturnType<AppStore['getState']>;
export type AppDispatch = AppStore['dispatch'];

export const useAppDispatch: () => AppDispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
