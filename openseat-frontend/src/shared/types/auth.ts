export type UserRole = "Candidate" | "Client" | null;

export interface RegisteredUser {
  email: string;
  passwordText: string;
  fullName: string;
  role: UserRole;
}

export interface CandidateProfile {
  title: string;
  hourlyRate: string;
  bio: string;
  skills: string[];
}
