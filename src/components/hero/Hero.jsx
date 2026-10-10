import heroImg from "../../assets/ovqat.svg";

export default function Hero() {
  return (
    <section className="flex items-center justify-between px-16 py-12 bg-white">
      <div className="w-1/2 pr-8 py-5">
        <h1 className="text-5xl font-bold text-gray-900 leading-tight">
          Making time a good time by making food the good food.
        </h1>

        <p className="mt-6 text-gray-600 text-lg">
          There are many things are needed to start the Fast Food Business. You
          need not only Just Food Stalls with Persons but also specialized
          equipment,
        </p>

        <div className="mt-8 flex gap-4">
          <button className="bg-orange-500 hover:bg-orange-600 w-40  h-15 text-white font-medium px-8 py-3 rounded-md transition-colors">
            Order Now
          </button>

          <button className="border border-orange-200 text-orange-500 w-40  h-15 hover:bg-orange-50 font-medium px-8 py-3 rounded-md transition-colors">
            Food Details
          </button>
        </div>
      </div>

      <div className="w-1/2 flex justify-end">
        <img
          src={heroImg}
          alt="Food skillet"
          className="w-full max-w-lg object-contain"
        />
      </div>
    </section>
  );
}
