"use client";

import { useMemo, useState } from "react";
import File from "../component/file";
import After from "../component/after";
import SaveCard from "../component/saveCard";
import { useFitLog } from "../provider";
import PlanCard from "../component/saveCard";

const MyPlanPage = () => {
  const { todayPlan, savedWorkouts } = useFitLog();

  const [activeTab, setActiveTab] = useState("plan");

  const planStats = useMemo(() => {
    return {
      exercises: todayPlan.length,
      minutes: todayPlan.reduce(
        (total, item) => total + Number(item.duration || 0),
        0
      ),
      calories: todayPlan.reduce(
        (total, item) => total + Number(item.caloriesBurned || 0),
        0
      ),
    };
  }, [todayPlan]);

  const isPlanTab = activeTab === "plan";

  const currentWorkouts = isPlanTab ? todayPlan : savedWorkouts;

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
      <div className="mt-5 grid grid-cols-1  sm:grid-cols-3">
        <div className=" rounded-l-2xl border border-gray-800 bg-[#13161D] p-5">
          <p className="text-sm text-gray-500">Exercises</p>

          <p className="mt-1 text-2xl font-bold text-[#CCFF00]">
            {planStats.exercises}
          </p>
        </div>

        <div className=" border border-gray-800 bg-[#13161D] p-5">
          <p className="text-sm text-gray-500">Minutes</p>

          <p className="mt-1 text-2xl font-bold text-white">
            {planStats.minutes}
          </p>
        </div>

        <div className="rounded-r-2xl border border-gray-800 bg-[#13161D] p-5">
          <p className="text-sm text-gray-500">Calories</p>

          <p className="mt-1 text-2xl font-bold text-white">
            {planStats.calories}
          </p>
        </div>
      </div>

      {/* Tabs */}
      <div className="mt-10 flex justify-between gap-4 sm:flex-row sm:items-center">
        <div className="flex w-fit gap-1 rounded-2xl border border-gray-800 bg-[#13161D] p-2">
          <button
            type="button"
            onClick={() => setActiveTab("plan")}
            className={`rounded-xl px-5 py-2 text-sm font-semibold transition ${
              isPlanTab
                ? "bg-[#2F3644] text-white"
                : "text-gray-400 hover:text-white"
            }`}
          >
            Today's Plan
          </button>

          <button
            type="button"
            onClick={() => setActiveTab("saved")}
            className={`rounded-xl px-5 py-2 text-sm font-semibold transition ${
              !isPlanTab
                ? "bg-[#2F3644] text-white"
                : "text-gray-400 hover:text-white"
            }`}
          >
            Saved
          </button>
        </div>

        {/* Saved count */}
        <div className="text-sm text-gray-400">
          {isPlanTab
            ? `${todayPlan.length} workouts`
            : `${savedWorkouts.length} saved workouts`
            }
        </div>
      </div>

      {/* Content */}
      <div className="mt-8 rounded-2xl border border-gray-800 bg-[#0F1218] p-4 md:p-6">
        {currentWorkouts.length === 0 ? (
          <After />
        ) : 
        <File isPlanTab={isPlanTab} savedWorkouts={savedWorkouts}/>
        //  : (
        //   <div className="space-y-4">
        //     {savedWorkouts.map((items) => (
        //       <SaveCard items={items} key={items.id} />
        //     ))}
        //   </div>
        // )
        }
      </div>
    </div>
  );
};export default MyPlanPage;
