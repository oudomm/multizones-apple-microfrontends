'use client';

import { useMemo } from 'react';
import {
  useGetIphonesQuery,
  useAppSelector,
  useAppDispatch,
  addItem,
  removeItem,
} from '@repo/shared-state';
import type { IPhoneProduct } from '@repo/shared-state';

function getErrorKind(error: unknown): 'unauthorized' | 'server' | 'network' {
  if (
    typeof error === 'object' &&
    error !== null &&
    'status' in error
  ) {
    const status = (error as { status: number | string }).status;
    if (status === 401) return 'unauthorized';
    if (typeof status === 'number') return 'server';
  }
  return 'network';
}

export default function ShopIPhoneSection() {
  const { data: iphones, isLoading, error, refetch } = useGetIphonesQuery();
  const cartItems = useAppSelector((s) => s.cart.items);
  const user = useAppSelector((s) => s.user.profile);
  const dispatch = useAppDispatch();

  const grouped = useMemo(() => {
    if (!iphones) return {};
    return iphones.reduce<Record<string, IPhoneProduct[]>>((acc, phone) => {
      const cat = phone.category;
      if (!acc[cat]) acc[cat] = [];
      acc[cat].push(phone);
      return acc;
    }, {});
  }, [iphones]);

  const isInCart = (id: number) => cartItems.some((item) => item.id === String(id));

  const handleToggleCart = (phone: IPhoneProduct) => {
    const cartId = String(phone.id);
    if (isInCart(phone.id)) {
      dispatch(removeItem(cartId));
    } else {
      dispatch(
        addItem({
          id: cartId,
          name: phone.name,
          price: phone.price,
          quantity: 1,
          image: '📱',
        })
      );
    }
  };

  return (
    <section className="bg-[#f5f5f7] py-16 border-t border-[#d2d2d7]">
      <div className="max-w-6xl mx-auto px-6">
        <h3 className="text-center text-3xl md:text-4xl font-semibold tracking-[-0.015em]">
          Shop iPhone.
        </h3>
        <p className="mt-3 text-center text-[15px] text-[#6e6e73]">
          All models. Take your pick.
        </p>

        {isLoading && (
          <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {Array.from({ length: 6 }).map((_, i) => (
              <div
                key={i}
                className="rounded-3xl bg-white border border-[#d2d2d7] p-6 animate-pulse"
              >
                <div className="h-5 bg-gray-200 rounded-sm w-2/3 mb-3" />
                <div className="h-4 bg-gray-100 rounded-sm w-full mb-2" />
                <div className="h-4 bg-gray-100 rounded-sm w-3/4 mb-4" />
                <div className="h-3 bg-gray-100 rounded-sm w-1/2 mb-4" />
                <div className="h-10 bg-gray-200 rounded-full w-full" />
              </div>
            ))}
          </div>
        )}

        {error && (() => {
          const kind = getErrorKind(error);
          const needsAuth = kind === 'unauthorized' || !user;

          if (needsAuth) return (
            <div className="mt-10 text-center">
              <div className="inline-flex flex-col items-center gap-4 rounded-3xl border border-[#d2d2d7] bg-white px-10 py-10">
                <div className="text-4xl">🔒</div>
                <p className="text-[17px] font-semibold">Sign in to shop</p>
                <p className="text-[15px] text-[#6e6e73] max-w-sm">
                  Browse and purchase iPhones by signing in with your account.
                </p>
                <a
                  href="/oauth2/authorization/itp-frontbff"
                  className="mt-2 inline-flex items-center justify-center rounded-full px-6 py-3 text-[15px] font-medium bg-[#0071e3] text-white hover:opacity-90 transition"
                >
                  Sign in
                </a>
              </div>
            </div>
          );

          return (
            <div className="mt-10 text-center">
              <div className="inline-flex flex-col items-center gap-4 rounded-3xl border border-[#d2d2d7] bg-white px-10 py-10">
                <div className="text-4xl">{kind === 'network' ? '🌐' : '⚠️'}</div>
                <p className="text-[17px] font-semibold">
                  {kind === 'network'
                    ? 'Service unavailable'
                    : 'Something went wrong'}
                </p>
                <p className="text-[15px] text-[#6e6e73] max-w-sm">
                  {kind === 'network'
                    ? 'The iPhone service is not responding. It may be temporarily down.'
                    : 'We couldn\u2019t load products. Please try again.'}
                </p>
                <button
                  onClick={() => refetch()}
                  className="mt-2 inline-flex items-center justify-center rounded-full px-6 py-3 text-[15px] font-medium bg-[#0071e3] text-white hover:opacity-90 transition"
                >
                  Try again
                </button>
              </div>
            </div>
          );
        })()}

        {!isLoading && !error && iphones && (
          <div className="mt-10 space-y-12">
            {Object.entries(grouped).map(([category, phones]) => (
              <div key={category}>
                <h4 className="text-[22px] font-semibold tracking-tight mb-5">
                  {category}
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                  {phones.map((phone) => {
                    const inCart = isInCart(phone.id);
                    return (
                      <div
                        key={phone.id}
                        className="rounded-3xl bg-white border border-[#d2d2d7] p-6 flex flex-col"
                      >
                        <div className="text-3xl mb-3">📱</div>
                        <div className="text-[17px] font-semibold tracking-tight">
                          {phone.name}
                        </div>
                        <div className="mt-1 text-[15px] text-[#6e6e73] flex-1">
                          {phone.description}
                        </div>
                        <div className="mt-3 flex flex-wrap gap-2 text-[12px] text-[#6e6e73]">
                          <span className="px-2 py-1 bg-[#f5f5f7] rounded-full">
                            {phone.chipset}
                          </span>
                          <span className="px-2 py-1 bg-[#f5f5f7] rounded-full">
                            {phone.storage}
                          </span>
                          <span className="px-2 py-1 bg-[#f5f5f7] rounded-full">
                            {phone.color}
                          </span>
                        </div>
                        <div className="mt-4 flex items-center justify-between">
                          <div className="text-[17px] font-semibold">
                            ${phone.price.toLocaleString()}
                          </div>
                          <button
                            onClick={() => handleToggleCart(phone)}
                            className={`rounded-full px-4 py-2 text-[14px] font-medium transition ${
                              inCart
                                ? 'bg-[#f5f5f7] text-[#1d1d1f] hover:bg-gray-200'
                                : 'bg-[#0071e3] text-white hover:opacity-90'
                            }`}
                          >
                            {inCart ? 'Remove' : 'Add to Bag'}
                          </button>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
