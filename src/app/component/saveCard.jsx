"use client";

import { Check, Clock, Flame, Star, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useFitLog } from "../provider";

const PlanCard = ({items}) => {
    const { removeSavedWorkout, markAsDone } = useFitLog();

  const handleRemove = () => {
    removeSavedWorkout(items.id);
  };

    return (
            <div className=" flex h-40 justify-between  rounded-2xl border border-gray-800 bg-[#15171D] p-4 md:flex-row md:items-center md:justify-between">
      {/* Workout Information */}
      <div className="flex justify-start gap-4 w-2/3  sm:flex-row sm:items-center">
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
     
             <div className="flex w-1/2  items-center  justify-end  gap-2   ">
        <Link
          href={`/${items.id}`}
          className="rounded-2xl border border-gray-700 px-5 py-3 text-center text-sm font-semibold text-white transition hover:border-[#C2F800] hover:text-[#C2F800]"
        >
          View Details
        </Link>

        

        <button
          type="button"
          onClick={handleRemove}
          className="flex  items-center  gap-2 px-4  text-red-400 transition  active:scale-95"
        >
          <X />
        </button>
        </div>
      </div>
    
    );
};

export default PlanCard;