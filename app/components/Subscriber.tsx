import React from "react";
import { Send, Mail } from "lucide-react";

export default function Subscriber() {
  return (
    <section className="relative w-full px-4 sm:px-8 lg:px-20 py-12 sm:py-16 lg:py-24">

      
      <div className="relative mx-auto max-w-6xl overflow-hidden rounded-2xl sm:rounded-[60px] lg:rounded-tl-[80px] lg:rounded-br-2xl bg-[#DFD7F9]/20 px-6 sm:px-10 lg:px-12 py-14 sm:py-20 lg:py-24">

       
        <div className="absolute left-[-10%] top-1/2 -translate-y-1/2 opacity-10 hidden sm:block">
          <div className="h-48 sm:h-64 w-48 sm:w-64 rounded-full border border-[#5E6282]" />
          <div className="absolute inset-4 sm:inset-6 h-40 sm:h-56 w-40 sm:w-56 rounded-full border border-[#5E6282]" />
        </div>

        <div className="absolute bottom-4 right-4 hidden lg:grid grid-cols-3 gap-2 opacity-20">
          {[...Array(9)].map((_, i) => (
            <span
              key={i}
              className="text-lg sm:text-xl font-bold text-[#5E6282]"
            >
              +
            </span>
          ))}
        </div>

        <div className="absolute -right-3 -top-3 sm:-right-4 sm:-top-4 flex h-12 w-12 sm:h-16 sm:w-16 items-center justify-center rounded-full bg-gradient-to-tr from-[#747DEF] to-[#5E73E1] text-white shadow-lg">
          <Send className="h-5 w-5 sm:h-6 sm:w-6 rotate-12" />
        </div>

    
        <div className="relative z-10 flex flex-col items-center text-center">

          <h2 className="mb-8 sm:mb-10 max-w-3xl text-lg sm:text-2xl md:text-3xl lg:text-[44px] font-bold leading-snug text-[#5E6282]">
            Subscribe to get information, latest news and other interesting offers about Jadoo
          </h2>

         
          <form className="flex w-full max-w-lg flex-col sm:flex-row gap-4">

        
            <div className="relative flex-1">
              <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-4">
                <Mail className="h-4 w-4 sm:h-5 sm:w-5 text-gray-400" />
              </div>

              <input
                type="email"
                placeholder="Your email"
                className="w-full rounded-xl bg-white py-3 sm:py-4 pl-10 sm:pl-12 pr-4 text-[#39425D] shadow-sm outline-none ring-1 ring-gray-100 transition focus:ring-2 focus:ring-purple-300 text-sm sm:text-base"
                required
              />
            </div>

           
            <button
              type="submit"
              className="w-full sm:w-auto rounded-xl bg-gradient-to-b from-[#FF946D] to-[#FF7D68] px-6 sm:px-10 py-3 sm:py-4 font-semibold text-white transition-transform hover:scale-105 active:scale-95"
            >
              Subscribe
            </button>

          </form>

        </div>
      </div>
    </section>
  );
}