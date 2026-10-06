"use client";

import { Check, Clock, Flame, Star, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useFitLog } from "../provider";

const SaveCard = ({ items }) => {
  const { removeFromPlan, markAsDone } = useFitLog();

  const handleRemove = () => {
    removeFromPlan(items.id);
  };



  return (
    <div className=" flex justify-between gap-4 rounded-2xl border border-gray-800 bg-[#15171D] p-4  md:items-center md:justify-between">
      {/* Workout Information */}
      <div className="flex gap-4 sm:flex-row  sm:items-center">
        <Image
          src={items.image}
          width={200}
          height={120}
          alt={items.equipment || "Workout image"}
          className="h-28 w-full rounded-xl object-cover sm:w-48"
        />

        <div>
          <h1 className="text-xl font-bold text-white">
            {items.equipment}
          </h1>

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
      <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-4">
        <Link
          href={`/${items.id}`}
          className="rounded-2xl border border-gray-700 py-3 w-40 h-12 text-center  text-sm font-semibold text-white transition hover:border-[#C2F800] hover:text-[#C2F800]"
        >
          View Details
        </Link>

        <div
          className="flex items-center justify-center gap-2 rounded-2xl bg-[#CCFF00]  w-40 h-12 text-center py-3 text-sm font-bold text-black transition hover:bg-[#b8e600] active:scale-95"
        >
          <Check size={18} />
          Mark as Done
        </div>

        </div>
        <button
          type="button"
          onClick={handleRemove}
          className="flex  sm:ml-15 items-center justify-center gap-2 px-4  text-red-400 transition hover:bg-red-500/10 active:scale-95"
        >
          <X />
        </button>
    </div>
  );
};

export default SaveCard;
