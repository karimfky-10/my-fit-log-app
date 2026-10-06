"use client";

import { useState } from "react";
import { Clock, Flame, Star, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useFitLog } from "../provider";
import After from "./after";

const PlanCard = ({ activeTab, setActiveTab }) => {
  const { savedWorkouts, removeSavedWorkout } = useFitLog();

  const [sortBy, setSortBy] = useState("");

  const sortedSaved = [...savedWorkouts].sort((a, b) => {
    if (sortBy === "duration") {
      return Number(a.duration) - Number(b.duration);
    }

    if (sortBy === "calories") {
      return Number(a.caloriesBurned) - Number(b.caloriesBurned);
    }

    if (sortBy === "rating") {
      return Number(b.rating) - Number(a.rating);
    }

    return 0;
  });

  return (
    <div>
      {/* Tabs + Sorting */}
      <div className="mb-6 flex flex-col justify-between gap-4 sm:flex-row sm:items-center">
        {/* Tab Buttons */}
        <div className="flex w-fit gap-1 rounded-2xl border border-gray-800 bg-[#13161D] p-2">
          <button
            type="button"
            onClick={() => setActiveTab("plan")}
            className={`rounded-xl px-4 py-2 text-sm font-semibold transition ${
              activeTab === "plan"
                ? "bg-[#2F3644] text-white"
                : "text-gray-400 hover:text-white"
            }`}
          >
            Today's Plan
          </button>

          <button
            type="button"
            onClick={() => setActiveTab("saved")}
            className={`rounded-xl px-4 py-2 text-sm font-semibold transition ${
              activeTab === "saved"
                ? "bg-[#2F3644] text-white"
                : "text-gray-400 hover:text-white"
            }`}
          >
            Saved
          </button>
        </div>

        {/* Sorting */}
        <div className="flex flex-wrap items-center justify-between gap-3">
          <span className="text-sm text-gray-400">
            {savedWorkouts.length} saved
          </span>

          <label
            htmlFor="savedSort"
            className="text-sm text-gray-400"
          >
            Sort by
          </label>

          <select
            id="savedSort"
            value={sortBy}
            onChange={(event) => setSortBy(event.target.value)}
            className="cursor-pointer rounded-xl border border-gray-700 bg-[#15171D] px-3 py-2 text-sm font-semibold text-white outline-none focus:border-[#C2F800]"
          >
            <option value="">Default</option>
            <option value="duration">Duration</option>
            <option value="calories">Calories</option>
            <option value="rating">Rating</option>
          </select>
        </div>
      </div>

      {/* Saved Workouts */}
      {sortedSaved.length === 0 ? (
        <After />
      ) : (
        <div className="space-y-4">
          {sortedSaved.map((items) => (
            <div
              key={items.id}
              className="flex flex-col gap-5 rounded-2xl border border-gray-800 bg-[#15171D] p-4 md:flex-row md:items-center md:justify-between"
            >
              {/* Workout Information */}
              <div className="flex min-w-0 flex-col gap-4 sm:flex-row sm:items-center">
                <Image
                  src={items.image}
                  width={200}
                  height={120}
                  alt={items.equipment || "Workout image"}
                  className="h-28 w-full rounded-xl object-cover sm:w-48"
                />

                <div className="min-w-0">
                  <h2 className="text-xl font-bold text-white">
                    {items.equipment}
                  </h2>

                  <p className="mt-1 text-sm text-gray-400">
                    {items.description}
                  </p>

                  {/* Workout Stats */}
                  <div className="mt-4 flex flex-wrap gap-4 text-sm text-gray-300">
                    <div className="flex items-center gap-2">
                      <Clock className="h-4 w-4 text-[#C2F800]" />
                      <span>{items.duration} min</span>
                    </div>

                    <div className="flex items-center gap-2">
                      <Flame className="h-4 w-4 text-orange-400" />
                      <span>{items.caloriesBurned} kcal</span>
                    </div>

                    <div className="flex items-center gap-2">
                      <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                      <span>{items.rating}</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Actions */}
              <div className="flex shrink-0 items-center justify-end gap-2">
                <Link
                  href={`/${items.id}`}
                  className="rounded-2xl border border-gray-700 px-4 py-3 text-center text-sm font-semibold text-white transition hover:border-[#C2F800] hover:text-[#C2F800]"
                >
                  View Details
                </Link>

                <button
                  type="button"
                  onClick={() => removeSavedWorkout(items.id)}
                  aria-label={`Remove ${items.equipment} from saved workouts`}
                  className="flex items-center justify-center rounded-xl p-3 text-red-400 transition hover:bg-red-500/10 active:scale-95"
                >
                  <X />
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default PlanCard;

