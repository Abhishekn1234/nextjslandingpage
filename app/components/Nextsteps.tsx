"use client";

import Image from "next/image";
import { MapPin, CreditCard, Plane } from "lucide-react";

export default function Nextsteps() {
  return (
    <section className="w-full bg-white py-20 px-6 md:px-16 font-sans">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

        {/* LEFT CONTENT */}
        <div>
          <p className="text-sm font-medium text-indigo-500 mb-3">
            Easy and Fast
          </p>

          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight mb-10">
            Book Your Next Trip <br /> In 3 Easy Steps
          </h2>

          <div className="space-y-8">

            {/* Step 1 */}
            <div className="flex gap-4">
              <div className="w-12 h-12 flex items-center justify-center rounded-lg bg-yellow-100">
                <MapPin className="text-yellow-600" />
              </div>
              <div>
                <h3 className="font-semibold text-gray-900">
                  Choose Destination
                </h3>
                <p className="text-gray-500 text-sm mt-1 max-w-md">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Urna,
                  tortor tempus.
                </p>
              </div>
            </div>

            {/* Step 2 */}
            <div className="flex gap-4">
              <div className="w-12 h-12 flex items-center justify-center rounded-lg bg-orange-100">
                <CreditCard className="text-orange-600" />
              </div>
              <div>
                <h3 className="font-semibold text-gray-900">
                  Make Payment
                </h3>
                <p className="text-gray-500 text-sm mt-1 max-w-md">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Urna,
                  tortor tempus.
                </p>
              </div>
            </div>

            {/* Step 3 */}
            <div className="flex gap-4">
              <div className="w-12 h-12 flex items-center justify-center rounded-lg bg-teal-100">
                <Plane className="text-teal-600" />
              </div>
              <div>
                <h3 className="font-semibold text-gray-900">
                  Reach Airport on Selected Date
                </h3>
                <p className="text-gray-500 text-sm mt-1 max-w-md">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Urna,
                  tortor tempus.
                </p>
              </div>
            </div>

          </div>
        </div>

        {/* RIGHT CONTENT */}
        <div className="relative flex justify-center lg:justify-end">

          {/* Main Card */}
          <div className="bg-white rounded-3xl shadow-xl p-5 w-[320px]">
            <div className="relative w-full h-48 rounded-2xl overflow-hidden">
              <Image
                src="/Rectangle 17.jpg"
                alt="Trip to Greece"
                fill
                className="object-cover"
              />
            </div>

            <h3 className="mt-4 font-semibold text-gray-900 text-lg">
              Trip To Greece
            </h3>

            <p className="text-sm text-gray-500 mt-1">
              14–29 June | by Robbin j
            </p>

            <div className="flex gap-3 mt-4 text-gray-400">
              <span>🧭</span>
              <span>🗺️</span>
              <span>📍</span>
            </div>

            <p className="mt-4 text-sm text-gray-500">
              24 people going
            </p>
          </div>

          {/* Floating mini card */}
                    <div className="absolute -bottom-10 right-0 bg-white shadow-lg rounded-xl p-4 w-[200px]">
            <div className="flex items-center gap-3">
                
                {/* Profile Image Circle */}
                <div className="relative w-10 h-10 rounded-full overflow-hidden bg-gray-200">
                <Image
                    src="/hosjd.png"
                    alt="User"
                    fill
                    className="object-cover"
                />
                </div>

                <div>
                <p className="text-xs text-gray-500">Ongoing</p>
                <p className="font-semibold text-sm">Trip to Rome</p>
                </div>
            </div>

            <p className="text-xs text-indigo-500 mt-2">40% completed</p>

            <div className="w-full h-2 bg-gray-200 rounded-full mt-2">
                <div className="w-2/5 h-2 bg-indigo-500 rounded-full" />
            </div>
            </div>

        </div>
      </div>
    </section>
  );
}