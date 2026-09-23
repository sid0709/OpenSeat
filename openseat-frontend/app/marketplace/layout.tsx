"use client";

import React from "react";
import { MockAuthProvider } from "@/src/shared/auth/MockAuthContext";
import { JobRoomsProvider } from "@/src/shared/job-rooms/JobRoomsContext";

export default function MarketplaceRootLayout({ children }: { children: React.ReactNode }) {
  return (
    <MockAuthProvider>
      <JobRoomsProvider>{children}</JobRoomsProvider>
    </MockAuthProvider>
  );
}
