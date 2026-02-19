'use client';

import { useState } from 'react';
import Image from 'next/image';
import { useAppSelector } from '@repo/shared-state';

function Avatar({ name, src }: { name: string; src?: string }) {
  const [failed, setFailed] = useState(false);

  if (src && !failed) {
    return (
      <Image
        src={src}
        alt={name}
        width={96}
        height={96}
        className="w-24 h-24 rounded-full object-cover border border-gray-200"
        onError={() => setFailed(true)}
      />
    );
  }

  return (
    <div className="w-24 h-24 rounded-full bg-gray-100 flex items-center justify-center text-3xl font-semibold text-gray-400">
      {name.charAt(0).toUpperCase()}
    </div>
  );
}

function InfoRow({ label, value }: { label: string; value?: string | null }) {
  if (!value) return null;
  return (
    <div className="flex justify-between py-3 border-b border-gray-100 last:border-0">
      <span className="text-sm text-gray-500">{label}</span>
      <span className="text-sm text-gray-900">{value}</span>
    </div>
  );
}

export default function ProfileContent() {
  const user = useAppSelector((s) => s.user.profile);

  if (!user) {
    return (
      <div className="text-center py-20">
        <p className="text-gray-500">You are not signed in.</p>
        <a
          href="/oauth2/authorization/itp-frontbff"
          className="mt-4 inline-block text-sm font-medium text-blue-600 hover:underline"
        >
          Sign in
        </a>
      </div>
    );
  }

  return (
    <>
      {/* Avatar + Name */}
      <div className="flex flex-col items-center gap-3 mb-10">
        <Avatar name={user.name} src={user.avatar} />
        <h1 className="text-2xl font-semibold tracking-tight">{user.name}</h1>
        {user.username && (
          <p className="text-sm text-gray-500">@{user.username}</p>
        )}
      </div>

      {/* Info Card */}
      <div className="rounded-2xl border border-gray-200 bg-white px-5 py-2">
        <InfoRow label="Email" value={user.email} />
        <InfoRow label="Phone" value={user.phoneNumber} />
        <InfoRow label="Gender" value={user.gender} />
        <InfoRow label="Date of birth" value={user.birthdate} />
      </div>
    </>
  );
}
