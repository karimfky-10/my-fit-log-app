
import Link from "next/link";

const After = () => {
  return (
    <div className="flex min-h-[300px] flex-col items-center justify-center px-4 text-center">
      <h1 className="text-xl font-bold text-white">NOTHING HERE YET</h1>

      <p className="mt-2 text-gray-400">
        Browse the library and add a lift to get today moving.
      </p>

      <Link
        href="/"
        className="mt-5 rounded-3xl bg-[#C2F10E] px-6 py-3 font-bold text-black transition hover:bg-[#CCFF00]"
      >
        Go to workouts
      </Link>
    </div>
  );
};

export default After;