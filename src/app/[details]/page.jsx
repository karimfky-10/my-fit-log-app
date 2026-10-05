
import { Star } from "lucide-react";
import Image from "next/image";
import Button from "../component/button";

const DetailsPage = async ({ params }) => {
  const { details } = await params;

  const response = await fetch(
    `https://api.api-store.workers.dev/api/fitlog/${details}`
  );

  if (!response.ok) {
    throw new Error("Failed to fetch workout details");
  }

  const data = await response.json();

  return (
    <div className="min-h-screen bg-[#0B0D12] px-4 py-8 md:px-8 lg:px-12">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-8 lg:grid-cols-2">
        {/* Image Section */}
        <div className="relative overflow-hidden rounded-3xl border border-gray-800 bg-[#15171D] p-3 shadow-xl">
          <Image
            className="h-full min-h-[350px] w-full rounded-2xl object-cover"
            src={data.image}
            width={700}
            height={500}
            alt={data.equipment || "Workout image"}
          />

          <div className="absolute bottom-6 left-6 rounded-xl bg-black/70 px-4 py-2 backdrop-blur-md">
            <p className="text-sm font-semibold text-[#CCFF00]">
              {data.equipment}
            </p>
          </div>
        </div>

        {/* Details Section */}
        <div className="rounded-3xl border border-gray-800 bg-[#11141A] p-5 shadow-xl md:p-7">
          {/* Title */}
          <div className="mb-6">
            <p className="mb-2 text-sm font-medium uppercase tracking-widest text-[#CCFF00]">
              Workout Details
            </p>

            <h1 className="text-3xl font-bold tracking-tight text-white md:text-4xl">
              {data.equipment}
            </h1>

            <p className="mt-3 leading-7 text-gray-400">
              {data.description}
            </p>
          </div>

          {/* Muscle Groups */}
          <div className="mb-6 flex flex-wrap gap-2">
            {data.muscleGroups?.map((muscle, index) => (
              <span
                key={`${muscle}-${index}`}
                className="rounded-full border border-[#CCFF00]/30 bg-[#CCFF00]/10 px-4 py-1.5 text-sm font-semibold text-[#CCFF00]"
              >
                {muscle}
              </span>
            ))}
          </div>

          {/* Workout Information */}
          <div className="overflow-hidden rounded-2xl border border-gray-800 bg-[#151922]">
            <div className="flex justify-between px-4 py-4 text-sm">
              <span className="font-semibold text-gray-500">
                EQUIPMENT
              </span>

              <span className="font-semibold text-white">
                {data.equipment}
              </span>
            </div>

            <div className="border-t border-gray-800" />

            <div className="flex justify-between px-4 py-4 text-sm">
              <span className="font-semibold text-gray-500">
                DIFFICULTY
              </span>

              <span className="font-semibold text-white">
                {data.difficulty}
              </span>
            </div>

            <div className="border-t border-gray-800" />

            <div className="flex justify-between px-4 py-4 text-sm">
              <span className="font-semibold text-gray-500">
                SETS
              </span>

              <span className="font-semibold text-white">
                {data.sets}
              </span>
            </div>

            <div className="border-t border-gray-800" />

            <div className="flex justify-between px-4 py-4 text-sm">
              <span className="font-semibold text-gray-500">
                DURATION
              </span>

              <span className="font-semibold text-white">
                {data.duration}
              </span>
            </div>

            <div className="border-t border-gray-800" />

            <div className="flex justify-between px-4 py-4 text-sm">
              <span className="font-semibold text-gray-500">
                CALORIES
              </span>

              <span className="font-semibold text-white">
                {data.caloriesBurned}
              </span>
            </div>

            <div className="border-t border-gray-800" />

            <div className="flex justify-between px-4 py-4 text-sm">
              <span className="font-semibold text-gray-500">
                RATING
              </span>

              <span className="flex items-center gap-1 font-semibold text-white">
                <Star
                  size={16}
                  fill="#CCFF00"
                  className="text-[#CCFF00]"
                />

                {data.rating}
              </span>
            </div>
          </div>

          {/* Instructions */}
          <div className="mt-7">
            <h2 className="mb-4 text-xl font-bold text-white">
              INSTRUCTIONS
            </h2>

            <ol className="space-y-3">
              {data.instructions?.map((instruction, index) => (
                <li
                  key={`${instruction}-${index}`}
                  className="flex gap-3 rounded-xl border border-gray-800 bg-[#151922] p-3 text-sm leading-6 text-gray-300"
                >
                  <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-[#CCFF00] text-sm font-bold text-black">
                    {index + 1}
                  </span>

                  <span>{instruction}</span>
                </li>
              ))}
            </ol>
          </div>

          {/* Action Buttons */}
          <div className="mt-8">
            <Button items={data} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailsPage;
