import { auth } from "@clerk/nextjs";
import { prisma } from "./db";
import { redirect } from "next/navigation";

export const getUserByClerkId = async () => {
  const { userId } = auth();

  if (!userId) {
    redirect("/sign-in");
  }

  const user = await prisma.user.findUnique({
    where: { clerkId: userId },
  });

  if (!user) {
    redirect("/new-user");
  }

  return user;
};
