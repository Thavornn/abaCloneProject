import { advantages } from "../data/advantages";
import { motion } from "framer-motion";

export default function Advantage() {
  return (
    <div className="bg-gray-50 mt-5 h-200">
      <div className="font-raleway max-w-screen-2xl mx-auto text-center mt-20 h-30">
        {/* first sec */}
        <div className="pt-30">
          <h2 className="font-bold text-[42px] flex justify-center text-gray">
            Key Advantages
          </h2>
        </div>
        {/* Second sec */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-x-12 gap-y-16 mt-10">
          {advantages.map((item, idx) => (
            <div key={idx} className="flex flex-col items-center text-center ">
              {/*Icon */}
              <div className="w-12 h-12 rounded-full bg-white shadow-sm flex items-center justify-center mb-6 border  border-slate-100">
                <motion.div
                  initial={{ opacity: 0, scale: 2, y: -5 }}
                  whileInView={{ opacity: 1, scale: 1, y: 0 }}
                  viewport={{ once: false, amount: 0.9 }}
                  transition={{ duration: 3, ease: [0.16, 1, 0.3, 1] }}
                >
                  {item.icon}
                </motion.div>
              </div>
              {/*Text */}
              <h3 className="text-[22px] font-semibold text-gray">
                {item.title}
              </h3>
              {/*Caption */}
              <p className="font-medium text-[19px] text-light-gray mt-2 w-[370px]">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
