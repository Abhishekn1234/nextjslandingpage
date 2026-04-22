"use client";

import React, { useState } from "react";
import { ChevronUp, ChevronDown } from "lucide-react";

const testimonials = [
  {
    name: "Mike Taylor",
    role: "Lahore, Pakistan",
    image: "https://randomuser.me/api/portraits/men/32.jpg",
    text: `“On the Windows talking painted pasture yet its express parties use. Sure last upon he same as knew next. Of believed or diverted no.”`,
  },
  {
    name: "Chris Thomas",
    role: "CEO of Red Button",
    image: "https://randomuser.me/api/portraits/men/44.jpg",
    text: `“Amazing service and support. Everything was smooth and highly recommended.”`,
  },
  {
    name: "Sarah Johnson",
    role: "Product Designer",
    image: "https://randomuser.me/api/portraits/women/65.jpg",
    text: `“Clean experience, great design, and very easy to use platform.”`,
  },
];

const Testimonials = () => {
  const [index, setIndex] = useState(0);

  const current = testimonials[index];

  const handleNext = () =>
    setIndex((prev) => (prev + 1) % testimonials.length);

  const handlePrev = () =>
    setIndex((prev) =>
      prev === 0 ? testimonials.length - 1 : prev - 1
    );

  return (
    <section className="bg-white py-16 md:py-24 px-4 sm:px-6 md:px-20 font-sans">

      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 md:gap-16 items-center">

        
        <div className="text-center lg:text-left space-y-4 md:space-y-6">

          <span className="text-gray-500 uppercase tracking-widest text-xs sm:text-sm font-semibold">
            Testimonials
          </span>

          <h2 className="text-3xl sm:text-4xl md:text-6xl font-serif font-bold text-slate-900 leading-tight">
            What People Say <br className="hidden sm:block" /> About Us.
          </h2>

      
          <div className="flex justify-center lg:justify-start gap-3 pt-6 md:pt-8">
            {testimonials.map((_, i) => (
              <span
                key={i}
                className={`h-2.5 w-2.5 md:h-3 md:w-3 rounded-full transition ${
                  i === index ? "bg-slate-800" : "bg-gray-200"
                }`}
              />
            ))}
          </div>
        </div>

       
        <div className="relative flex flex-col items-center lg:items-start">

     
          <div className="relative bg-white p-6 sm:p-8 md:p-10 rounded-2xl shadow-xl border border-gray-50 max-w-lg w-full">

            
            <div className="absolute -top-6 sm:-top-8 left-4 sm:-left-8">
              <img
                src={current.image}
                alt={current.name}
                className="w-12 h-12 sm:w-16 sm:h-16 rounded-full border-4 border-white shadow-lg object-cover"
              />
            </div>

            <p className="text-gray-600 leading-relaxed text-base sm:text-lg mb-6 sm:mb-8 mt-6 sm:mt-0">
              {current.text}
            </p>

            <div>
              <h4 className="font-bold text-slate-800 text-lg sm:text-xl">
                {current.name}
              </h4>
              <p className="text-gray-500 text-sm sm:text-base">
                {current.role}
              </p>
            </div>
          </div>

          
          <div className="hidden lg:block absolute top-10 right-0 w-full h-full border border-gray-100 rounded-2xl bg-white shadow-sm z-0 translate-x-10 translate-y-10">
            <div className="p-8 mt-48">
              <p className="font-bold text-slate-700">
                {testimonials[(index + 1) % testimonials.length].name}
              </p>
              <p className="text-gray-400 text-sm">
                {testimonials[(index + 1) % testimonials.length].role}
              </p>
            </div>
          </div>

          
          <div className="flex md:flex-col gap-6 md:gap-8 mt-8 md:mt-0 md:ml-10 z-20">

            <ChevronUp
              onClick={handlePrev}
              className="text-gray-400 hover:text-slate-800 cursor-pointer transition-colors"
              size={22}
            />

            <ChevronDown
              onClick={handleNext}
              className="text-slate-800 hover:text-slate-800 cursor-pointer"
              size={22}
            />

          </div>
        </div>

      </div>
    </section>
  );
};

export default Testimonials;