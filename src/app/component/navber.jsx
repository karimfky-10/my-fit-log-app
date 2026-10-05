"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useFitLog } from "../provider";

export default function Navbar() {
  const pathname = usePathname();

  const { todayPlan, savedWorkouts } = useFitLog();

  const isHome = pathname === "/";
  const isMyPlan = pathname === "/myPlan";

  const activeStyle =
    "rounded-2xl bg-[#405019] px-4 py-1 text-[#C2F800]";

  const normalStyle =
    "rounded-2xl px-4 py-1 text-white transition hover:bg-[#2B301D] hover:text-[#C2F800]";

  return (
    <nav className="sticky top-0 z-50 border-b border-gray-800 bg-[#15171D] px-4 py-8">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4">
        {/* Logo */}
        <Link href="/" className="shrink-0">
          <div className="flex items-center gap-2">
            <Image
              src="/logo.png"
              alt="FitLog Logo"
              width={25}
              height={40}
              priority
            />

            <p className="text-sm font-bold text-white">FITLOG</p>
          </div>
        </Link>

        {/* Navigation */}
        <div className="flex items-center gap-1 sm:gap-3">
          <Link
            href="/"
            className={`text-sm font-medium ${
              isHome ? activeStyle : normalStyle
            }`}
          >
            Workouts
          </Link>

          <Link
            href="/myPlan"
            className={`text-sm font-medium ${
              isMyPlan ? activeStyle : normalStyle
            }`}
          >
            My Plan
          </Link>
        </div>

        {/* Counts */}

        
        <div className="flex items-center gap-3 text-xs text-gray-300 sm:gap-5 sm:text-sm">
        <Link href='/myPlan'>
          <div className="flex items-center gap-1.5 ">
            <span>Plan</span>

            <span className="flex min-w-6 items-center justify-center rounded-full bg-[#C2F800] px-1.5 py-1 font-bold text-black">
              {todayPlan.length}
            </span>
          </div>
        </Link>
            <Link href="/myPlan">
          <div className="flex items-center gap-1.5">
            <span>Saved</span>

            <span className="flex min-w-6 items-center justify-center rounded-full border border-[#C2F800] px-1.5 py-1 font-bold text-[#C2F800]">
              {savedWorkouts.length}
            </span>
          </div>
            </Link>
        </div>
        
      </div>
    </nav>
  );
}
