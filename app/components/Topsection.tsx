import Image from "next/image";

export default function Topsection() {
  const destinations = [
    {
      city: "Rome, Italy",
      price: "$5.42k",
      trip: "10 Days Trip",
      img: "/photo2.png",
    },
    {
      city: "London, UK",
      price: "$4.2k",
      trip: "12 Days Trip",
      img: "/photo1.png",
    },
    {
      city: "Full Europe",
      price: "$15k",
      trip: "28 Days Trip",
      img: "/photo3.png",
    },
  ];

  return (
    <section className="w-full py-16 md:py-24 bg-white font-sans">

      
      <div className="text-center mb-10 md:mb-14 px-4">
        <p className="text-xs sm:text-sm uppercase tracking-widest text-gray-500">
          Top Selling
        </p>

        <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold text-[#1a1a3c] mt-2">
          Top Destinations
        </h2>
      </div>

      
      <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-8">

        {destinations.map((item, index) => (
          <div
            key={index}
            className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden group"
          >

           
            <div className="relative w-full h-56 sm:h-60 md:h-64 overflow-hidden">
              <Image
                src={item.img}
                alt={item.city}
                fill
                className="object-cover group-hover:scale-110 transition-transform duration-500"
              />
            </div>

           
            <div className="p-4 sm:p-5 flex justify-between items-start gap-3">

              <div>
                <h3 className="text-base sm:text-lg font-semibold text-gray-800">
                  {item.city}
                </h3>
                <p className="text-xs sm:text-sm text-gray-500 mt-1">
                  {item.trip}
                </p>
              </div>

              <div className="text-right shrink-0">
                <p className="text-xs sm:text-sm text-gray-500">From</p>
                <p className="text-[#1a1a3c] font-bold text-sm sm:text-base">
                  {item.price}
                </p>
              </div>

            </div>
          </div>
        ))}

      </div>
    </section>
  );
}