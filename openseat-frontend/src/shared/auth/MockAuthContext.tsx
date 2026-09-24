"use client";

import React, { createContext, useContext, useState } from "react";
import { useRouter } from "next/navigation";
import { RegisteredUser, UserRole, CandidateProfile } from "@/src/shared/types/auth";

interface MockAuthContextType {
  currentUser: RegisteredUser | null;
  profile: CandidateProfile;
  loginUser: (email: string, passwordText: string) => { success: boolean; error?: string };
  registerUser: (fullName: string, email: string, passwordText: string) => { success: boolean; error?: string };
  assignRole: (role: UserRole) => void;
  updateProfile: (updated: Partial<CandidateProfile>) => void;
  logoutUser: () => void;
}

const MockAuthContext = createContext<MockAuthContextType | undefined>(undefined);

export function MockAuthProvider({ children }: { children: React.ReactNode }) {
  const router = useRouter();

  const [users, setUsers] = useState<RegisteredUser[]>(() => {
    if (typeof window !== "undefined") {
      const savedUsers = localStorage.getItem("os_mock_db_users");
      return savedUsers ? JSON.parse(savedUsers) : [];
    }
    return [];
  });

  const [currentUser, setCurrentUser] = useState<RegisteredUser | null>(() => {
    if (typeof window !== "undefined") {
      const savedActive = localStorage.getItem("os_mock_db_active");
      return savedActive ? JSON.parse(savedActive) : null;
    }
    return null;
  });

  const [profile, setProfile] = useState<CandidateProfile>({
    title: "Full-Stack Next.js Developer",
    hourlyRate: "$45.00",
    bio: "Experienced developer building system tokens matching marketplace requirements layout parameters perfectly.",
    skills: ["Next.js", "TypeScript", "React"],
  });

  const registerUser = (fullName: string, email: string, passwordText: string) => {
    const exists = users.some((u) => u.email.toLowerCase() === email.toLowerCase());
    if (exists) return { success: false, error: "This email address is already registered." };

    const newUser: RegisteredUser = { email, passwordText, fullName, role: null };
    const nextUsers = [...users, newUser];

    setUsers(nextUsers);
    localStorage.setItem("os_mock_db_users", JSON.stringify(nextUsers));
    setCurrentUser(newUser);
    localStorage.setItem("os_mock_db_active", JSON.stringify(newUser));

    return { success: true };
  };

  const loginUser = (email: string, passwordText: string) => {
    const match = users.find(
      (u) => u.email.toLowerCase() === email.toLowerCase() && u.passwordText === passwordText
    );
    if (!match) return { success: false, error: "Invalid email credentials or missing user registry entry." };

    setCurrentUser(match);
    localStorage.setItem("os_mock_db_active", JSON.stringify(match));
    return { success: true };
  };

  const assignRole = (role: UserRole) => {
    if (!currentUser) return;
    const updatedUser = { ...currentUser, role };
    setCurrentUser(updatedUser);
    localStorage.setItem("os_mock_db_active", JSON.stringify(updatedUser));

    const updatedUsers = users.map((u) => (u.email === currentUser.email ? updatedUser : u));
    setUsers(updatedUsers);
    localStorage.setItem("os_mock_db_users", JSON.stringify(updatedUsers));
  };

  const updateProfile = (updated: Partial<CandidateProfile>) => {
    setProfile((prev) => ({ ...prev, ...updated }));
  };

  const logoutUser = () => {
    setCurrentUser(null);
    localStorage.removeItem("os_mock_db_active");
    router.push("/marketplace/login");
  };

  return (
    <MockAuthContext.Provider
      value={{ currentUser, profile, loginUser, registerUser, assignRole, updateProfile, logoutUser }}
    >
      {children}
    </MockAuthContext.Provider>
  );
}

export function useMockAuth() {
  const context = useContext(MockAuthContext);
  if (!context) {
    throw new Error("useMockAuth must be used within a MockAuthProvider.");
  }
  return context;
}
