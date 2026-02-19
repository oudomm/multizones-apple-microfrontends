"use client";

import { useGetMeQuery } from "@repo/shared-state";

export default function AuthBootstrapper() {
  useGetMeQuery();
  return null;
}
