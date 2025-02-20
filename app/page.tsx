import ThemeToggle from "@/components/themeToggle/toggle-theme";
import { auth } from "@clerk/nextjs";
import Image from "next/image";
import Link from "next/link";

export const dynamic = "force-dynamic";

export default async function Home() {
  const { userId } = auth();

  let href = userId ? `/taskmate/` : "/new-user";

  return (
    <main className="flex relative flex-col justify-center items-center min-h-screen">
      <h1 className="pt-12 pb-4 bg-gradient-to-br from-black via-[#171717] to-[#575757] bg-clip-text text-center text-4xl font-bold tracking-tight text-transparent md:text-7xl">
        TaskMate
      </h1>
      <div className="w-screen h-[200px] flex justify-center items-center text-black">
        <div className="flex flex-col justify-center items-center w-full max-w-[600px] mx-auto">
          <p className="mb-4 text-2xl font-bold text-center">
            A Task Management Tool by Sannidhan Katta.
          </p>
          <div className="py-4">
            <Link href={href}>
              <div className="px-4 py-2 text-white bg-black rounded-lg text-md">
                {userId ? "Check it Out →" : "Get Started"}
              </div>
            </Link>
          </div>
        </div>
      </div>

      <div className="flex justify-between px-20 py-10 w-full sm:absolute sm:bottom-0">
        <Link href="https://vercel.com">
          <Image
            src="/vercel.svg"
            alt="Vercel Logo"
            width={100}
            height={24}
            priority
          />
        </Link>
        <Link
          href="https://github.com/SannidhanKatta/TaskMate"
          target="_blank"
          className="flex items-center space-x-2"
        >
          <Image
            src="/github.svg"
            alt="GitHub Logo"
            width={24}
            height={24}
            priority
          />
          <p className="font-light">Source</p>
        </Link>
      </div>
    </main>
  );
}
