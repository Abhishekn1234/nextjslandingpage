"use client";

import { Play } from "lucide-react";
import Image from "next/image";

export default function Herosection() {
  return (
    <main className="relative min-h-screen bg-white overflow-hidden font-sans z-10">

      <div className="absolute top-0 right-0 -z-10">
        <svg
          width="600"
          height="600"
          viewBox="0 0 600 600"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-[350px] md:w-[600px]"
        >
          <path
            d="M500 100C600 250 450 450 300 500C150 550 50 400 100 250C150 100 350 -50 500 100Z"
            fill="#FFF1DA"
          />
        </svg>
      </div>

      <section className="max-w-7xl mx-auto px-6 pt-16 md:pt-20 pb-20 md:pb-32 flex flex-col-reverse lg:flex-row items-center gap-12">

        
        <div className="w-full lg:w-1/2 z-10 text-center lg:text-left">

          <h4 className="text-[#DF6951] font-bold uppercase tracking-wider mb-4 text-sm md:text-base">
            Best Destinations around the world
          </h4>

          <h1 className="text-[#181E4B] text-4xl md:text-6xl lg:text-7xl font-extrabold leading-tight mb-6 md:mb-8">
            Travel,{" "}
            <span className="relative inline-block">
              enjoy
              <svg
                className="absolute -bottom-2 left-0 w-full"
                width="385"
                height="12"
                viewBox="0 0 385 12"
                fill="none"
              >
                <path
                  d="M1 10C100 2 300 2 384 10"
                  stroke="#DF6951"
                  strokeWidth="6"
                  strokeLinecap="round"
                />
              </svg>
            </span>{" "}
            and live a new and full life
          </h1>

          <p className="text-[#5E6282] text-base md:text-lg leading-relaxed mb-8 max-w-md mx-auto lg:mx-0">
            Built Wicket longer admire do barton vanity itself do in it.
            Preferred to sportsmen it engrossed listening. Park gate sell they
            west hard for the.
          </p>

          <div className="flex flex-col sm:flex-row items-center gap-6 sm:gap-8 justify-center lg:justify-start">

            <button className="bg-[#F1A501] hover:bg-[#d99501] text-white px-6 md:px-8 py-3 md:py-4 rounded-xl font-medium transition shadow-lg shadow-orange-200 w-full sm:w-auto">
              Find out more
            </button>

            <button className="flex items-center gap-4 group">
              <div className="bg-[#DF6951] p-3 md:p-4 rounded-full text-white shadow-lg shadow-red-100 group-hover:scale-110 transition-transform">
                <Play fill="currentColor" size={18} />
              </div>
              <span className="text-[#686D77] font-medium">
                Play Demo
              </span>
            </button>

          </div>
        </div>

   
        <div className="w-full lg:w-1/2 flex justify-center relative">

          <div className="relative w-full max-w-sm sm:max-w-md md:max-w-lg">
            <Image
              src="/Traveller 1.png"
              alt="Traveler sitting on suitcase"
              width={600}
              height={700}
              priority
              className="object-contain w-full h-auto"
            />
          </div>

        </div>

      </section>
    </main>
  );
}