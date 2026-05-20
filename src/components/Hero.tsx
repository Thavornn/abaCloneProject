import { useState } from "react";
useState
export default function HeroSection() {
  const [activeSlide, setActiveSlide] = useState(1);

  return (
    <div className="">
      <div className="flex font-raleway justify-between items-center max-w-[1460px] mx-auto mt-[200px] ">
        {/* LEFT */}
        <div className="space-y-4">
          <h1 className="text-[52px] mb-5 pt-4 font-bold text-gray leading-tight">
            <span>Payment Solution</span>
            <br />
            <span>for Online</span>
          </h1>

          <p className="text-[22px] text-gray font-medium leading-tight">
            Boost your sales by providing seamless <br />
            payment experience to your clients.
          </p>

          <button className="bg-primary text-white px-12 py-[15px] rounded-lg font-bold text-lg  hover:shadow-[0_0_12px_3px_rgba(17,188,212,0.5)]  ">
            Explore Now
          </button>
        </div>
        {/* Picture section */}
        <div>
          <img
            src="/hero.png"
            alt="hero"
            className="w-[500px] object-contain"
          />
        </div>
      </div>

      <div className="flex justify-center mt-[149px]">
        <div className="flex items-center gap-4.5 bg-gray-50 border border-gray-200 px-2 py-[8px] rounded-full ">
          {[1, 2, 3, 4, 5, 6].map((i) => (
            <button
              key={i}
              onClick={() => setActiveSlide(i)}
              className={`rounded-full py-[9px] px-[9px] transition-all ${
                activeSlide === i
                  ? "w-3 h-3 bg-primary "
                  : "w-2.5 h-2.5 bg-gray-200 hover:bg-gray-300 transition"
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
