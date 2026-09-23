import { JobRoomRecord } from "@/src/shared/types/job-room";

export const MOCK_JOB_ROOMS: JobRoomRecord[] = [
  {
    id: "room-cmo-001",
    title: "Chief Marketing Officer (CMO) – eCommerce & Direct Response Focus",
    postedTimeText: "Posted 4 minutes ago",
    isPaymentVerified: true,
    clientRating: 4.7,
    clientTotalSpentText: "$2K+ spent",
    clientLocationCode: "HKG",
    budgetType: "Hourly",
    rateOrBudgetRangeText: "$30.00 - $85.00",
    experienceLevelRequired: "Expert",
    durationEstimateText: "More than 6 months",
    weeklyCommitmentText: "30+ hrs/week",
    descriptionParagraph:
      "Chief Marketing Officer (CMO) – Data-Driven & Direct Response eCommerce. Remote (Full-Time). Competitive salary + performance-based bonuses. Work directly with a 9-figure entrepreneur in the eCommerce industry.",
    skillsTags: ["Creative Strategy", "Advertisement", "Direct Response Copywriting"],
    proposalsCountText: "Less than 5",
  },
  {
    id: "room-dev-002",
    title: "Magento or WooCommerce Website Development",
    postedTimeText: "Posted 16 minutes ago",
    isPaymentVerified: false,
    clientTotalSpentText: "$0 spent",
    clientLocationCode: "Slovenia",
    budgetType: "Hourly",
    rateOrBudgetRangeText: "$7.00 - $11.00",
    experienceLevelRequired: "Intermediate",
    durationEstimateText: "1 to 3 months",
    weeklyCommitmentText: "Less than 30 hrs/week",
    descriptionParagraph:
      "We are seeking a skilled web developer to create a robust e-commerce website using either Magento or WooCommerce. The ideal candidate should have experience in building user-friendly online stores.",
    skillsTags: ["WooCommerce", "Ecommerce Website Development", "Magento", "Web Development", "PHP"],
    proposalsCountText: "Less than 5",
  },
];
