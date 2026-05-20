import { featuresData } from "../data/MultiplePage";

export default function FeatureSpilt() {
  return (
    <div className="w-full py-16 space-y-24 font-raleway ">
      {featuresData.map((feature, index) => {
        const isOddRow = index % 2 == 1;
        return (
          <div className="flex justify-center flex-col md:flex-row items-center gap-12 ">
            {/* Text */}
            <div
              className={`px-50 ${isOddRow ? "md:order-last" : "md:order-first"}`}
            >
              <h2 className="font-bold text-[40px] text-gray">
                {feature.title}
              </h2>
              <p className="w-[700px]">{feature.description}</p>
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
