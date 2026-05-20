import { featuresData } from "../data/MultiplePage";

export default function FeatureSpilt() {
  return (
    <div className="w-full max-w-screen-2xl mx-auto py-16 space-y-32 px-6 font-raleway ">
      {featuresData.map((feature, index) => {
        const isOddRow = index % 2 == 1;
        return (
          <div className="flex justify-center flex-col md:flex-row items-center gap-12 ">
            {/* Text */}
            <div
              className={` ${isOddRow ? "md:order-first" : "md:order-last"}`}
            >
              <h2 className="font-bold text-[40px] text-gray">
                {feature.title}
              </h2>
              <p className="w-[300px]">{feature.description}</p>
            </div>

            {/* Picture */}
            <div>
              <img src={feature.imageSrc} className="" />
            </div>
          </div>
        );
      })}
    </div>
  );
}
