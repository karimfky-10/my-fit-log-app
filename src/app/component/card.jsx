"use client";

import Image from "next/image";
import { Clock, Flame, Star, Heart, Dumbbell } from "lucide-react";
import Link from "next/link";
import { useFitLog } from "../provider";

const Card = ({ Item, id }) => {
  const { saveWorkout, isSaved } = useFitLog();

  const alreadySaved = isSaved(Item.id);

  const handleSave = (event) => {
    event.preventDefault();
    event.stopPropagation();

    if (!alreadySaved) {
      saveWorkout(Item);
    }
  };

  return (
    <div className="container mx-auto">
    <div
      className=" group overflow-hidden rounded-2xl border border-gray-800 bg-[#15171D]
      shadow-lg transition-all duration-300 hover:-translate-y-1
      hover:border-[#C2F800]/50 hover:shadow-2xl"
      >
      {/* Image Section */}
      <div className="relative overflow-hidden">
        <Link href={`/${id}`}>
          <Image
            src={Item.image}
            width={500}
            height={200}
            alt={Item.equipment || "Workout Image"}
            className="h-50 w-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
        </Link>

        {/* Dark Gradient */}
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

        {/* Favourite Button */}
        <button
          type="button"
          onClick={handleSave}
          aria-label={alreadySaved ? "Saved workout" : "Save workout"}
          disabled={alreadySaved}
          className={`absolute right-4 top-4 flex h-10 w-10 items-center justify-center rounded-full
            backdrop-blur-sm transition ${
              alreadySaved
              ? "cursor-not-allowed bg-[#C2F800] text-black"
              : "cursor-pointer bg-black/50 hover:bg-[#C2F800]"
            }`}
            >
          <Heart
            className={`h-5 w-5 transition ${
              alreadySaved
              ? "fill-black text-black"
              : "text-white hover:text-black"
            }`}
            />
        </button>

        {/* Workout Badge */}
        <Link
          href={`/${id}`}
          className="absolute bottom-4 left-4 flex items-center gap-2 rounded-full
          bg-[#C2F800] px-3 py-1.5 text-xs font-bold text-black"
          >
          <Dumbbell className="h-4 w-4" />
          WORKOUT
        </Link>
      </div>

      {/* Content */}
      <Link href={`/${id}`} className="block">
        <div className="p-5">
          {/* Categories */}
          <div className="mb-4 flex flex-wrap gap-2">
            {Item.muscleGroups?.length > 0 ? (
              Item.muscleGroups.slice(0, 2).map((muscle, index) => (
                <span
                key={`${muscle}-${index}`}
                className="rounded-full border border-[#C2F800]/30
                bg-[#C2F800]/10 px-3 py-1 text-xs font-semibold
                text-[#C2F800]"
                >
                  {muscle}
                </span>
              ))
            ) : (
              <>
                <span
                  className="rounded-full border border-[#C2F800]/30
                  bg-[#C2F800]/10 px-3 py-1 text-xs font-semibold
                  text-[#C2F800]"
                  >
                  WORKOUT
                </span>
              </>
            )}
          </div>

          {/* Title */}
          <h2
            className="text-xl font-bold text-white transition-colors
            duration-300 group-hover:text-[#C2F800]"
            >
            {Item.equipment}
          </h2>

          {/* Equipment */}
          <p className="mt-2 text-sm text-gray-400">
            {Item.equipment || "Workout Equipment"}
          </p>

          {/* Divider */}
          <hr className="my-5 border-gray-800" />

          {/* Workout Information */}
          <div className="grid grid-cols-3 gap-3">
            {/* Time */}
            <div
              className="flex flex-col items-center gap-1 rounded-xl
              bg-[#1D2027] p-3"
              >
              <Clock className="h-5 w-5 text-[#C2F800]" />

              <span className="text-xs text-gray-500">Time</span>

              <span className="text-sm font-semibold text-white">
                {Item.duration} min
              </span>
            </div>

            {/* Calories */}
            <div
              className="flex flex-col items-center gap-1 rounded-xl
              bg-[#1D2027] p-3"
              >
              <Flame className="h-5 w-5 text-orange-400" />

              <span className="text-xs text-gray-500">Calories</span>

              <span className="text-sm font-semibold text-white">
                {Item.caloriesBurned} Kcal
              </span>
            </div>

            {/* Rating */}
            <div
              className="flex flex-col items-center gap-1 rounded-xl
              bg-[#1D2027] p-3"
              >
              <Star className="h-5 w-5 fill-yellow-400 text-yellow-400" />

              <span className="text-xs text-gray-500">Rating</span>

              <span className="text-sm font-semibold text-white">
                {Item.rating}
              </span>
            </div>
          </div>
        </div>
      </Link>
    </div>
  </div>
  );
};

export default Card;