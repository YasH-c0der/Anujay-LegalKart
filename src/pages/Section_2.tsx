import React from "react";
import heroBg from '../assets/images/img_2.jpg'

function Section_2() {
  return (
    <div>
      <section
        className="relative w-full min-h-[420px] flex flex-col justify-end"
        style={{
          backgroundImage: `url(${heroBg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/60" />

        <div className="relative z-20 flex flex-col md:flex-row justify-between items-center w-full py-8 px-8 min-h-[335px]">
          {/* Empty left for image background effect */}
          <div className="md:w-1/2 h-0" />
          {/* Content right */}
          <div className="md:w-1/2 flex flex-col gap-4 text-white">
            <h1 className="font-extrabold text-white text-3xl md:text-4xl leading-tight text-left">
              We Support <span className="text-white">START UPS</span> In <br />
              Every Aspects
            </h1>
            <div className="flex flex-col md:flex-row gap-4 text-lg font-normal">
              <ul className="list-none space-y-1 md:space-y-2">
                <li>&gt; Investment Opportunity</li>
                <li>&gt; All Compliance's</li>
              </ul>
              <ul className="list-none space-y-1 md:space-y-2 md:ml-8">
                <li>&gt; Business Mentorship</li>
                <li>&gt; Product Development</li>
              </ul>
            </div>
            <button className="bg-yellow-200 text-black rounded px-5 py-2 mt-3 font-semibold w-max shadow hover:bg-yellow-300 focus:outline-none">
              Consult now
            </button>
          </div>
        </div>

        {/* Stats Bar */}
        {/* <div className="z-30 relative w-full border-t border-blue-400 bg-black/95 px-8 py-6 flex flex-col md:flex-row justify-center md:gap-32 gap-4">
          <div className="flex flex-col items-center text-white">
            <span className="font-bold text-2xl">10 Million +</span>
            <span className="text-base">Consulting Minutes</span>
          </div>
          <div className="flex flex-col items-center text-white">
            <span className="font-bold text-2xl">5 million pages</span>
            <span className="text-base">Drafted and Reviewed</span>
          </div>
          <div className="flex flex-col items-center text-white">
            <span className="font-bold text-2xl">100,000</span>
            <span className="text-base">Start-up mentored</span>
          </div>
        </div> */}
      </section>
    </div>
  );
}

export default Section_2;
