import { ClerkProvider } from "@clerk/nextjs";
import "./globals.css";
import { Plus_Jakarta_Sans } from "next/font/google";
import Script from 'next/script';
import InspectionPrevention from '@/components/InspectionPrevention';

export const metadata = {
  metadataBase: new URL("https://postgres-prisma.vercel.app"),
  title: "TaskMate App",
  description:
    "A TaskMate Next.js app with Vercel Postgres as the database and Prisma as the ORM",
};

const jakarta = Plus_Jakarta_Sans({
  variable: "--font-jakarta",
  subsets: ["latin"],
  display: "swap",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
      <html className={jakarta.variable} lang="en">
        <link rel="icon" href="/assets/favicon-32x32.png" />
        <body>
          <InspectionPrevention />
          {children}
        </body>
      </html>
    </ClerkProvider>
  );
}
