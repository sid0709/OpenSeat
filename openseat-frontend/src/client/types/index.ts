import { BudgetType, ExperienceLevel } from "@/src/shared/types/job-room";

export interface ClientJobPost {
  title: string;
  budgetType: BudgetType;
  rateOrBudgetRangeText: string;
  experienceLevelRequired: ExperienceLevel;
  durationEstimateText: string;
  weeklyCommitmentText: string;
  descriptionParagraph: string;
  skillsTags: string[];
}
