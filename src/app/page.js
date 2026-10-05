
import Card from "./component/card";
import Hero from "./component/hero";

const HomePage = async () => {
  const response = await fetch(
    "https://api.api-store.workers.dev/api/fitlog"
  );

  const data = await response.json();

  return (
    <div>
      <Hero />

      <div className="px-4 mt-12 mb-10">
        <h1 className="text-3xl font-bold text-white">THE LIBRARY</h1>
        <p className="text-gray-400">
          Twelve lifts covering every major muscle group.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 px-4">
        {data.map((item) => (
          <Card key={item.id} id={item.id} Item={item} />
        ))}
      </div>

      <div className="h-10" />
    </div>
  );
};

export default HomePage;
