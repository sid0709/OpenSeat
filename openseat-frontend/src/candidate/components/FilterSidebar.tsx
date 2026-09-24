"use client";

import React from "react";
import { FilterState, ExperienceLevel, BudgetType } from "@/src/candidate/types";

interface FilterSidebarProps {
  filters: FilterState;
  onFilterChange: (newFilters: Partial<FilterState>) => void;
}

export function FilterSidebar({ filters, onFilterChange }: FilterSidebarProps) {
  const toggleExperience = (level: ExperienceLevel) => {
    const next = filters.experienceLevels.includes(level)
      ? filters.experienceLevels.filter((l) => l !== level)
      : [...filters.experienceLevels, level];
    onFilterChange({ experienceLevels: next });
  };

  const toggleBudget = (type: BudgetType) => {
    const next = filters.budgetTypes.includes(type)
      ? filters.budgetTypes.filter((t) => t !== type)
      : [...filters.budgetTypes, type];
    onFilterChange({ budgetTypes: next });
  };

  return (
    <aside style={{ display: "flex", flexDirection: "column", gap: "var(--space-4, 16px)" }}>
      <div style={{ display: "flex", flexDirection: "column", gap: "var(--space-2, 8px)" }}>
        <p className="body-strong">Experience Level</p>
        <div className="label text-ink-muted" style={{ display: "flex", flexDirection: "column", gap: "var(--space-2, 8px)" }}>
          {(["Entry Level", "Intermediate", "Expert"] as ExperienceLevel[]).map((level) => (
            <label key={level} style={{ display: "flex", alignItems: "center", gap: "var(--space-2, 8px)", cursor: "pointer" }}>
              <input
                type="checkbox"
                checked={filters.experienceLevels.includes(level)}
                onChange={() => toggleExperience(level)}
              />
              {level}
            </label>
          ))}
        </div>
      </div>

      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "var(--space-2, 8px)",
          borderTop: "var(--border-width-hairline, 1px) solid var(--border-subtle)",
          paddingTop: "var(--space-4, 16px)",
        }}
      >
        <p className="body-strong">Job Type</p>
        <div className="label text-ink-muted" style={{ display: "flex", flexDirection: "column", gap: "var(--space-2, 8px)" }}>
          {(["Hourly", "Fixed-Price"] as BudgetType[]).map((type) => (
            <label key={type} style={{ display: "flex", alignItems: "center", gap: "var(--space-2, 8px)", cursor: "pointer" }}>
              <input type="checkbox" checked={filters.budgetTypes.includes(type)} onChange={() => toggleBudget(type)} />
              {type}
            </label>
          ))}
        </div>
      </div>
    </aside>
  );
}
