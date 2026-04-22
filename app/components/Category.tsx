"use client";

import { Plane, Mic, Settings, SatelliteDish } from "lucide-react";

export default function Category() {
  const services = [
    {
      title: "Calculated Weather",
      desc: "Built Wicket longer admire do barton vanity itself do in it.",
      icon: SatelliteDish,
    },
    {
      title: "Best Flights",
      desc: "Engrossed listening. Park gate sell they west hard for the.",
      icon: Plane,
    },
    {
      title: "Local Events",
      desc: "Barton vanity itself do in it. Prefered to men it engrossed listening.",
      icon: Mic,
    },
    {
      title: "Customization",
      desc: "We deliver outsourced aviation services for military customers",
      icon: Settings,
    },
  ];

  return (
    <section className="w-full bg-white py-16 md:py-24 px-4 sm:px-6 md:px-16 font-sans">
      <div className="max-w-6xl mx-auto text-center">

       
        <p className="text-xs sm:text-sm tracking-widest text-gray-500 uppercase">
          Category
        </p>

        <h2 className="mt-2 text-2xl sm:text-3xl md:text-4xl font-semibold text-[#14183E]">
          We Offer Best Services
        </h2>

    
        <div className="mt-10 md:mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-10">

          {services.map((item, idx) => {
            const Icon = item.icon;

            return (
              <div
                key={idx}
                className="relative group flex flex-col items-center text-center px-6 py-8 md:py-10 rounded-2xl transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
              >
                
                <div className="absolute top-5 right-5 w-8 h-8 md:w-10 md:h-10 bg-orange-100 rounded-xl -z-10 group-hover:scale-110 transition" />

              
                <div className="w-12 h-12 md:w-14 md:h-14 flex items-center justify-center mb-5 md:mb-6">
                  <Icon className="w-8 h-8 md:w-10 md:h-10 text-[#5E6282]" />
                </div>

             
                <h3 className="text-base md:text-lg font-semibold text-[#14183E] mb-2 md:mb-3">
                  {item.title}
                </h3>

                
                <p className="text-xs sm:text-sm text-[#5E6282] leading-relaxed">
                  {item.desc}
                </p>
              </div>
            );
          })}

        </div>
      </div>
    </section>
  );
}