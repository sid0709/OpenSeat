"use client";

import { useState } from "react";
import { JobRoomRecord, FilterState } from "../types/marketplace";
import { MOCK_JOB_ROOMS } from "../data/mockRooms";

export function useJobRooms() {
  // Switchboard State: Right now maps static files, later takes API JSON
  const [rooms] = useState<JobRoomRecord[]>(MOCK_JOB_ROOMS);
  const [filters, setFilters] = useState<FilterState>({
    searchQuery: "",
    experienceLevels: ["Intermediate", "Expert"], // Default active states matching screen specs
    budgetTypes: ["Hourly"],
  });

  const updateFilters = (newFilters: Partial<FilterState>) => {
    setFilters((prev) => ({ ...prev, ...newFilters }));
  };

  // Perform processing computation filter checks
  const filteredRooms = rooms.filter((room) => {
    const matchesSearch =
      room.title.toLowerCase().includes(filters.searchQuery.toLowerCase()) ||
      room.descriptionParagraph.toLowerCase().includes(filters.searchQuery.toLowerCase());

    const matchesExperience =
      filters.experienceLevels.length === 0 ||
      filters.experienceLevels.includes(room.experienceLevelRequired);

    const matchesBudget =
      filters.budgetTypes.length === 0 ||
      filters.budgetTypes.includes(room.budgetType);

    return matchesSearch && matchesExperience && matchesBudget;
  });

  return {
    rooms: filteredRooms,
    filters,
    updateFilters,
  };
}
