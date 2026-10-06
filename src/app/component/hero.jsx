import Image from "next/image";
import Link from "next/link";

const Hero = () => {
  return (
    <div className="mt-10 px-4 container mx-auto">
      <div className="flex flex-col items-center justify-between gap-8 rounded-2xl bg-[#15171D] px-5 py-10 md:flex-row md:px-8 md:py-12">
        {/* Content */}
        <div>
          <p className="mb-4 text-sm text-[#C2F800]">WORKOUT LIBRARY</p>

          <h1 className="text-3xl font-bold leading-tight text-white md:text-4xl">
            TRAIN WITH INTENT.
            <br />
            EVERY SET.
          </h1>

          <p className="mt-4 max-w-xl text-sm leading-6 text-gray-400">
            FitLog is a dark, no-nonsense gym companion: pick a lift, lock it
            into today&apos;s plan, and watch the week&apos;s work add up.
          </p>

          <Link
            href="#library"
            className="mt-5 inline-block rounded bg-[#C2F800] px-4 py-2 text-sm font-bold text-black transition hover:bg-[#CCFF00] active:scale-95"
          >
            BROWSE WORKOUTS
          </Link>
        </div>

        {/* Hero Image */}
        <div className="shrink-0">
          <Image
            src="/banner.png"
            width={250}
            height={350}
            alt="FitLog workout"
            priority
            className="h-auto w-[180px] object-contain md:w-[250px]"
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
