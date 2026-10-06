"use client";

import { useState } from "react";
import SaveCard from "./saveCard";
import { useFitLog } from "../provider";
import After from "./after";

const File = ({ activeTab, setActiveTab }) => {
  const { todayPlan } = useFitLog();

  const [sortBy, setSortBy] = useState("");

  const sortedPlan = [...todayPlan].sort((a, b) => {
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
        <div className="flex flex-wrap items-center gap-3">
          <span className="text-sm text-gray-400">
            {todayPlan.length}/5 workouts
          </span>

          <label
            htmlFor="planSort"
            className="text-sm text-gray-400"
          >
            Sort by
          </label>

          <select
            id="planSort"
            value={sortBy}
            onChange={(event) => setSortBy(event.target.value)}
            className="cursor-pointer rounded-xl border border-gray-700 bg-[#15171D] px-4 py-2 text-sm font-semibold text-white outline-none transition focus:border-[#C2F800]"
          >
            <option value="">Default</option>
            <option value="duration">Duration</option>
            <option value="calories">Calories</option>
            <option value="rating">Rating</option>
          </select>
        </div>
      </div>

      {/* Today's Plan Workouts */}
      {sortedPlan.length === 0 ? (
        <After />
      ) : (
        <div className="space-y-4">
          {sortedPlan.map((items) => (
            <SaveCard items={items} key={items.id} />
          ))}
        </div>
      )}
    </div>
  );
};

export default File;
