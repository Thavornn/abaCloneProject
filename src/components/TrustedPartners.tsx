import { Marquee } from "@/components/ui/marquee";
import type { LogoProps } from "@/types/TrustedPartners";

const row1 = [
  "/logo1.png",
  "/logo2.png",
  "/logo3.png",
  "/logo4.png",
  "/logo5.png",
  "/logo6.png",
  "/logo7.png",
  "/logo8.png",
  "/logo9.png",
  "/logo7.png",
  "/logo8.png",
  "/logo9.png",
];
const row2 = [
  "/logo4.png",
  "/logo5.png",
  "/logo6.png",
  "/logo7.png",
  "/logo8.png",
  "/logo9.png",
  "/logo7.png",
  "/logo8.png",
  "/logo9.png",
];
const row3 = [
  "/logo7.png",
  "/logo8.png",
  "/logo9.png",
  "/logo5.png",
  "/logo6.png",
  "/logo7.png",
  "/logo8.png",
  "/logo9.png",
  "/logo7.png",
  "/logo8.png",
  "/logo9.png",
];

function Logo({ src }: LogoProps) {
  return <img src={src} className="bg-primary w-22 h-22 rounded-full" />;
}

export default function TrustedPartners() {
  return (
    <div className="bg-gray-50 mt-34 h-105">
      <div className="font-raleway  flex justify-center  ">
        <h2 className="font-bold text-[42px] text-gray mt-6">
          Businesses Trusting PayWay
        </h2>
      </div>
      <div className=" mx-auto mt-8">
        {/* row 1 */}
        <div className="mb-5">
          <Marquee pauseOnHover className="[--duration:50s] ">
            {row1.map((src) => (
              <Logo key={src} src={src} />
            ))}
          </Marquee>
        </div>

        {/* row 2 */}
        <div className="mb-5">
          <Marquee reverse pauseOnHover className="[--duration:50s]">
            {row2.map((src) => (
              <Logo key={src} src={src} />
            ))}
          </Marquee>
        </div>
        {/* Row 3 */}
        <div>
          <Marquee pauseOnHover className="[--duration:50s]">
            {row3.map((src) => (
              <Logo key={src} src={src} />
            ))}
          </Marquee>
        </div>
      </div>
    </div>
  );
}
