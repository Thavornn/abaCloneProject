import { featuresData } from "../data/MultiplePage";

export default function FeatureSpilt() {
  return (
    <div className="w-full mt-10  max-w-screen-2xl mx-auto py-16 space-y-32  font-raleway ">
      {featuresData.map((feature, index) => {
        const isEvenNum = index % 2 == 1;
        return (
          <div className="grid justify-items-center items-center grid-cols-1 md:grid-cols-2 ">
            {/* Text */}
            <div
              className={` ${isEvenNum ? "md:order-first" : "md:order-last"}`}
            >
              <h2 className="font-bold text-[40px] text-gray">
                {feature.title}
              </h2>
              <p className="w-[450px] text-xl mt-5 tracking-wide text-gray font-medium ">
                {feature.description}
              </p>
              {feature.button && (
                <button
                  className="bg-primary p-5 rounded-xl px-10 mt-4 font-bold text-white text-xl
                  
                  "
                >
                  {feature.button}
                </button>
              )}
            </div>

            {/* Picture */}
            <div
              className={` ${isEvenNum ? "md:order-last" : "md:order-first"}`}
            >
              <img src={feature.imageSrc} className="" />
            </div>
          </div>
        );
      })}
    </div>
  );
}
