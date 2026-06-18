import { Mail, MapPin, Phone } from "lucide-react";
import logoFooter from "../assets/logo-footer.svg";
import { ToggleOnCircle } from "iconsax-reactjs";

export default function Footer() {
  return (
    <footer className="bg-[#03162b] text-white h-auto flex justify-center font-raleway py-16 px-6">
      <div className="">
        {/* Logo */}
        <div>
          <img src={logoFooter} className="h-13" />
          <div className="flex gap-5 mt-10">
            <div className="w-10 h-10 rounded bg-[#ffffff23] flex justify-center items-center text-gray-300">
              <a href="https://tailwindcss.com/docs/flex" target="_blank">
                <Mail size={20} />
              </a>
            </div>
            <div className="w-10 h-10 rounded bg-[#ffffff23] flex justify-center items-center text-gray-300">
              <a href="">
                <MapPin size={20} />
              </a>
            </div>
          </div>
          <div className="mt-6 flex gap-5">
            <div className="w-10 h-10 rounded bg-[#ffffff23] flex justify-center items-center text-gray-300">
              <a href="">
                <Phone size={20} />
              </a>
            </div>
            <span className="text-gray-400 text-2xl  tracking-wide font-sans mt-1">
              1 800 203 203
            </span>
          </div>
          <button className="border border-purple-300 rounded-full w-38  p-2 mt-6  ">
            <div className="font-bold flex items-center gap-2  transition-opacity ml-2  ">
              <ToggleOnCircle size="28" color="#a778f8" variant="Bold" />
              <span className="bg-gradient-to-r from-purple-300 to-indigo-500 bg-clip-text text-transparent inline-block">
                Ask Navi
              </span>
            </div>
          </button>
        </div>

        <div></div>

        <div></div>

        <div></div>
      </div>
    </footer>
  );
}
