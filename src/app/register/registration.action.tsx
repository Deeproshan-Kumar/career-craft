"use server";

import { db } from "@/db";
import { users } from "@/db/schema";
import argon2 from "argon2";

export const registrationAction = async (data: {
  name: string;
  userName: string;
  email: string;
  phoneNumber: string;
  role: "applicant" | "employer";
  password: string;
  confirmPassword: string;
}) => {
  const { name, userName, email, phoneNumber, role, password } = data;
  const hashPassword = await argon2.hash(password);
  try {
    await db.insert(users).values({
      name,
      userName,
      email,
      phoneNumber,
      role,
      password: hashPassword,
    });

    return { success: true };
  } catch (error) {
    console.error("Error inserting user:", error);
    return { success: false, error: "Registration failed." };
  }
};
