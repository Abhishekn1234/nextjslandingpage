"use client";



const Footer = () => {
  return (
    <footer className="w-full bg-white px-6 py-20 font-sans text-[#5E6282] md:px-12 lg:px-24">
      <div className="mx-auto max-w-7xl">
     
        <div className="grid grid-cols-1 gap-12 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
          
      
          <div className="lg:col-span-1">
            <h2 className="mb-6 text-4xl font-bold text-[#181E4B]">Jadoo.</h2>
            <p className="max-w-[200px] text-sm leading-relaxed">
              Book your trip in minute, get full Control for much longer.
            </p>
          </div>

          {/* Company Links */}
          <div>
            <h3 className="mb-6 text-xl font-bold text-[#080809]">Company</h3>
            <ul className="space-y-3 text-lg font-medium">
              <li><a href="#" className="hover:text-black transition-colors">About</a></li>
              <li><a href="#" className="hover:text-black transition-colors">Careers</a></li>
              <li><a href="#" className="hover:text-black transition-colors">Mobile</a></li>
            </ul>
          </div>

          <div>
            <h3 className="mb-6 text-xl font-bold text-[#080809]">Contact</h3>
            <ul className="space-y-3 text-lg font-medium">
              <li><a href="#" className="hover:text-black transition-colors">Help/FAQ</a></li>
              <li><a href="#" className="hover:text-black transition-colors">Press</a></li>
              <li><a href="#" className="hover:text-black transition-colors">Affilates</a></li>
            </ul>
          </div>

          
          <div>
            <h3 className="mb-6 text-xl font-bold text-[#080809]">More</h3>
            <ul className="space-y-3 text-lg font-medium">
              <li><a href="#" className="hover:text-black transition-colors">Airlinefees</a></li>
              <li><a href="#" className="hover:text-black transition-colors">Airline</a></li>
              <li><a href="#" className="hover:text-black transition-colors">Low fare tips</a></li>
            </ul>
          </div>

         
          <div className="flex flex-col items-center lg:items-start">
            <div className="mb-6 flex gap-4">
           
              <a href="#" className="flex h-10 w-10 items-center justify-center rounded-full bg-white shadow-md hover:shadow-lg transition-shadow">
                <img src="/facebook.svg" className="h-5 w-5 text-[#080809]" />
              </a>
              
              <a href="#" className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-tr from-[#F9ED32] via-[#EE2A7B] to-[#002AFF] text-white shadow-md">
                <img src="/instagram.svg" className="h-5 w-5" />
              </a>
             
              <a href="#" className="flex h-10 w-10 items-center justify-center rounded-full bg-white shadow-md hover:shadow-lg transition-shadow">
                <img src="/twitter-x.svg" className="h-5 w-5 text-[#080809]" />
              </a>
            </div>
            
            <p className="mb-4 text-xl font-medium">Discover our app</p>
            
            <div className="flex gap-2">
              <button className="flex items-center gap-2 rounded-full bg-white px-4 py-2 text-black">
                <img src="/google-play.svg" alt="Google Play" className="h-5" />
                <div className="text-left leading-none">
                  <p className="text-[8px] uppercase">Get it on</p>
                  <p className="text-[12px] font-bold">Google Play</p>
                </div>
              </button>
              <button className="flex items-center gap-2 rounded-full  bg-white px-4 py-2 text-black">
                <img src="/apple.svg" alt="App Store" className="h-5" />
                <div className="text-left leading-none">
                  <p className="text-[8px] uppercase">Available on the</p>
                  <p className="text-[12px] font-bold">Apple Store</p>
                </div>
              </button>
            </div>
          </div>
        </div>

        
        <div className="mt-20 text-center">
          <p className="text-sm font-medium">All rights reserved@jadoo.co</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;