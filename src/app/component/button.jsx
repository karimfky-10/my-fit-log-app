"use client";

import { Bookmark, CalendarPlus2 } from "lucide-react";
import { useFitLog } from "../provider";

const Button = ({ items }) => {
  const {
    addToPlan,
    saveWorkout,
    isInPlan,
    isSaved,
  } = useFitLog();

  const alreadyInPlan = isInPlan(items.id);
  const alreadySaved = isSaved(items.id);

  const handlePlan = () => {
    if (!alreadyInPlan) {
      addToPlan(items);
    }
  };

  const handleSave = () => {
    if (!alreadySaved) {
      saveWorkout(items);
    }
  };

  return (
    <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
      {/* Add to Today's Plan */}
      <button
        type="button"
        onClick={handlePlan}
        disabled={alreadyInPlan}
        className={`flex items-center justify-center gap-2 rounded-xl px-5 py-3 font-bold transition-all duration-300 ${
          alreadyInPlan
            ? "cursor-not-allowed bg-gray-700 text-gray-400"
            : "cursor-pointer bg-[#CCFF00] text-black hover:bg-[#b8e600] hover:shadow-[0_0_20px_rgba(204,255,0,0.25)] active:scale-95"
        }`}
      >
        <CalendarPlus2 size={19} />

        {alreadyInPlan ? "Already in today's plan" : "Add to today's plan"}
      </button>

      {/* Save for Later */}
      <button
        type="button"
        onClick={handleSave}
        disabled={alreadySaved}
        className={`flex items-center justify-center gap-2 rounded-xl px-5 py-3 font-bold transition-all duration-300 ${
          alreadySaved
            ? "cursor-not-allowed border border-gray-700 bg-gray-800 text-gray-400"
            : "cursor-pointer border border-gray-700 bg-transparent text-white hover:border-[#CCFF00] hover:bg-[#CCFF00]/10 hover:text-[#CCFF00] active:scale-95"
        }`}
      >
        <Bookmark
          size={19}
          fill={alreadySaved ? "currentColor" : "none"}
        />

        {alreadySaved ? "Saved" : "Save for later"}
      </button>
    </div>
  );
};

export default Button;
