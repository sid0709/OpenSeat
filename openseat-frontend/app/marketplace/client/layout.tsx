"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { useMockAuth } from "@/src/shared/auth/MockAuthContext";

export default function ClientLayout({ children }: { children: React.ReactNode }) {
  const router = useRouter();
  const { currentUser } = useMockAuth();

  useEffect(() => {
    if (!currentUser) {
      router.replace("/marketplace/login");
      return;
    }
    if (currentUser.role && currentUser.role !== "Client") {
      router.replace("/marketplace/candidate/dashboard");
    }
  }, [currentUser, router]);

  return <>{children}</>;
}
