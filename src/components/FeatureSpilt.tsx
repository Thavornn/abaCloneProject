import { featuresData } from "../data/MultiplePage";

export default function FeatureSpilt() {
  return (
    <div className="w-full max-w-screen-2xl mx-auto py-16 space-y-32  font-raleway ">
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
              <p className="w-[300px]">{feature.description}</p>
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
