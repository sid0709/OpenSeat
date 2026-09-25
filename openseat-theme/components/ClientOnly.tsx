"use client";

import { useSyncExternalStore, type ReactNode } from "react";

const subscribeToNothing = () => () => {
  // Hydration state does not change after the browser mounts.
};
const getMountedSnapshot = () => true;
const getServerSnapshot = () => false;

/** Render browser-only children after hydration, with a server fallback. */
export function ClientOnly({
  children,
  fallback = null,
}: {
  children: ReactNode;
  fallback?: ReactNode;
}) {
  const mounted = useSyncExternalStore(subscribeToNothing, getMountedSnapshot, getServerSnapshot);

  if (!mounted) return fallback;
  return children;
}
