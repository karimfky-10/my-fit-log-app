"use client";

import { Check, Clock, Flame, Star, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useFitLog } from "../provider";

const SaveCard = ({ items }) => {
  const { removeFromPlan, markAsDone } = useFitLog();

  return (
    <div className="flex flex-col gap-5 rounded-2xl border border-gray-800 bg-[#15171D] p-4 md:flex-row md:items-center md:justify-between">
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
      <div className="flex flex-wrap items-center gap-2">
        <Link
          href={`/${items.id}`}
          className="rounded-2xl border border-gray-700 px-4 py-3 text-center text-sm font-semibold text-white transition hover:border-[#C2F800] hover:text-[#C2F800]"
        >
          View Details
        </Link>

        <button
          type="button"
          onClick={()=> markAsDone(items)}
          className="flex items-center justify-center gap-2 rounded-2xl bg-[#CCFF00] px-4 py-3 text-sm font-bold text-black transition hover:bg-[#b8e600] active:scale-95"
        >
          <Check size={18} />
          Mark as Done
        </button>

        <button
          type="button"
          onClick={() => removeFromPlan(items.id)}
          aria-label={`Remove ${items.equipment} from today's plan`}
          className="flex items-center justify-center rounded-xl p-3 text-red-400 transition hover:bg-red-500/10 active:scale-95"
        >
          <X size={18} />
        </button>
      </div>
    </div>
  );
};

export default SaveCard;

