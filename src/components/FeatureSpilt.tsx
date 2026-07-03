import { featuresData } from "../data/MultiplePage";
import { motion } from "framer-motion";

export default function FeatureSpilt() {
  return (
    <div className="w-full mt-10 max-w-screen-2xl mx-auto py-16 space-y-32 font-raleway">
      {featuresData.map((feature, index) => {
        const isEvenNum = index % 2 === 1; // Standardized to strict equality

        return (
          <div
            key={index}
            className="grid justify-items-center items-center grid-cols-1 md:grid-cols-2 gap-8"
          >
            {/* Text Column */}
            <div
              className={`max-w-md ${isEvenNum ? "md:order-first" : "md:order-last"}`}
            >
              <h2 className="font-bold text-[40px] text-gray">
                {feature.title}
              </h2>
              <p className="w-full md:w-[450px] text-xl mt-5 tracking-wide text-gray font-medium">
                {feature.description}
              </p>
              {feature.button && (
                <button className="bg-primary p-4 rounded-xl px-12 mt-4 font-bold text-white text-lg hover:shadow-[0_0_12px_3px_rgba(17,188,212,0.5)]">
                  {feature.button}
                </button>
              )}
            </div>

            {/* Picture */}
            <motion.div
              initial={{ opacity: 0, scale: 1.5, y: 5 }} // the start when it is hidden
              whileInView={{ opacity: 1, scale: 1, y: 0 }} // when it is visible
              viewport={{ once: false, amount: 0.25 }} // when scroll reach that part 20%
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className={`w-full max-w-lg ${isEvenNum ? "md:order-last" : "md:order-first"}`}
            >
              <img
                src={feature.imageSrc}
                alt={feature.title}
                className="w-full h-auto object-contain"
              />
            </motion.div>
          </div>
        );
      })}
    </div>
  );
}
