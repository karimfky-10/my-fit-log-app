"use client";

import { useState } from "react";
import SaveCard from "./saveCard";
import { useFitLog } from "../provider";
import PlanCard from "./saveCard";

const File = ({isPlanTab  }) => {

  const { todayPlan,savedWorkouts } = useFitLog();

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
      {/* Sorting */}
      {todayPlan.length > 0 && (
        <div className="mb-6 flex items-center justify-end">
          <label htmlFor="sortPlan" className="mr-3 text-sm text-gray-400">
            Sort by
          </label>

          <select
            id="sortPlan"
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
      )}

      {/* Today's Plan */}
      {

      }
      <div className="space-y-4">
        { isPlanTab ? sortedPlan.map((items) => (
          <SaveCard items={items} key={items.id} />
        )):
         (
          <div className="space-y-4">
            {savedWorkouts.map((items) => (
              <PlanCard items={items} key={items.id} />
            ))}
          </div>
        )
        }
      </div>
    </div>
  );
};

export default File;
