export type BudgetType = "Hourly" | "Fixed-Price";
export type ExperienceLevel = "Entry Level" | "Intermediate" | "Expert";

export interface JobRoomRecord {
  id: string;
  title: string;
  postedTimeText: string;
  isPaymentVerified: boolean;
  clientRating?: number;
  clientTotalSpentText: string;
  clientLocationCode: string;
  budgetType: BudgetType;
  rateOrBudgetRangeText: string;
  experienceLevelRequired: ExperienceLevel;
  durationEstimateText: string;
  weeklyCommitmentText: string;
  descriptionParagraph: string;
  skillsTags: string[];
  proposalsCountText: string;
}

export interface FilterState {
  searchQuery: string;
  experienceLevels: ExperienceLevel[];
  budgetTypes: BudgetType[];
}
