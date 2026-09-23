"use client";

import { useJobRoomsContext } from "@/src/shared/job-rooms/JobRoomsContext";
import { useMockAuth } from "@/src/shared/auth/MockAuthContext";

export function useCandidateDashboard() {
  const { rooms, filters, updateFilters, applyToJob } = useJobRoomsContext();
  const { currentUser, profile, logoutUser } = useMockAuth();

  const handleApplyToJob = (roomId: string) => {
    applyToJob(roomId, { ...profile, fullName: currentUser?.fullName });
  };

  return {
    rooms,
    filters,
    updateFilters,
    handleApplyToJob,
    currentUser,
    profile,
    logoutUser,
  };
}
