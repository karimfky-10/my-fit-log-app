"use client";

import { useMemo, useState } from "react";
import File from "../component/file";
import PlanCard from "../component/planCard";
import { useFitLog } from "../provider";

const MyPlanPage = () => {
  const { todayPlan } = useFitLog();

  const [activeTab, setActiveTab] = useState("plan");

  const planStats = useMemo(
    () => ({
      exercises: todayPlan.length,
      minutes: todayPlan.reduce(
        (total, item) => total + Number(item.duration || 0),
        0
      ),
      calories: todayPlan.reduce(
        (total, item) => total + Number(item.caloriesBurned || 0),
        0
      ),
    }),
    [todayPlan]
  );

  return (
    <div className="mx-auto mt-9 max-w-7xl px-4 pb-10">
      {/* Header */}
      <div>
        <h1 className="text-2xl font-bold text-white">My Plan</h1>

        <p className="mt-1 text-gray-400">
          Cap of five lifts for today. Finish them, then load more.
        </p>
      </div>

      {/* Stats */}
      <div className="mt-5 grid grid-cols-1 sm:grid-cols-3">
        <div className="rounded-t-2xl border border-gray-800 bg-[#13161D] p-5 sm:rounded-l-2xl sm:rounded-tr-none">
          <p className="text-sm text-gray-500">Exercises</p>
          <p className="mt-1 text-2xl font-bold text-[#CCFF00]">
            {planStats.exercises}
          </p>
        </div>

        <div className="border border-gray-800 bg-[#13161D] p-5">
          <p className="text-sm text-gray-500">Minutes</p>
          <p className="mt-1 text-2xl font-bold text-white">
            {planStats.minutes}
          </p>
        </div>

        <div className="rounded-b-2xl border border-gray-800 bg-[#13161D] p-5 sm:rounded-r-2xl sm:rounded-bl-none">
          <p className="text-sm text-gray-500">Calories</p>
          <p className="mt-1 text-2xl font-bold text-white">
            {planStats.calories}
          </p>
        </div>
      </div>

      {/* Content */}
      <div className="mt-8 rounded-2xl border border-gray-800 bg-[#0F1218] p-4 md:p-6">
        {activeTab === "plan" ? (
          <File
            activeTab={activeTab}
            setActiveTab={setActiveTab}
          />
        ) : (
          <PlanCard
            activeTab={activeTab}
            setActiveTab={setActiveTab}
          />
        )}
      </div>
    </div>
  );
};

export default MyPlanPage;

