"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { useMockAuth } from "@/src/shared/auth/MockAuthContext";

export default function MarketplaceIndexPage() {
  const router = useRouter();
  const { currentUser } = useMockAuth();

  useEffect(() => {
    if (!currentUser) {
      router.replace("/marketplace/login");
      return;
    }

    if (!currentUser.role) {
      router.replace("/marketplace/join");
      return;
    }

    if (currentUser.role === "Candidate") {
      router.replace("/marketplace/candidate/dashboard");
      return;
    }

    if (currentUser.role === "Client") {
      router.replace("/marketplace/client/dashboard");
    }
  }, [currentUser, router]);

  return null;
}
