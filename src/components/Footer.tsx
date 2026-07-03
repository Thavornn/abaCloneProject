import { Mail, MapPin, Phone } from "lucide-react";
import logoFooter from "../assets/logo-footer.svg";
import { ToggleOnCircle } from "iconsax-reactjs";
import { footerLinks } from "../data/FooterData";

export default function Footer() {
  return (
    <footer className="bg-[#03162b] text-white w-full font-raleway py-10 px-6 md:px-16">
      <div className="max-w-screen-2xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-12">
        <div className="md:col-span-4 flex flex-col items-start text-left">
          {/* Logo */}
          <img src={logoFooter} className="h-13 object-contain" alt="Logo" />

          <div className="flex gap-5 mt-10">
            <div className="w-10 h-10 rounded bg-[#ffffff23] hover:bg-[#ffffff35] transition-colors flex justify-center items-center text-gray-300">
              <a
                href="https://tailwindcss.com/docs/flex"
                target="_blank"
                rel="noreferrer"
              >
                <Mail size={20} />
              </a>
            </div>
            <div className="w-10 h-10 rounded bg-[#ffffff23] hover:bg-[#ffffff35] transition-colors flex justify-center items-center text-gray-300">
              <a href="">
                <MapPin size={20} />
              </a>
            </div>
          </div>

          {/* Phone */}
          <div className="mt-6 flex items-center gap-5">
            <div className="w-10 h-10 rounded bg-[#ffffff23] flex justify-center items-center text-gray-300">
              <a href="">
                <Phone size={20} />
              </a>
            </div>
            <span className="text-gray-400 text-2xl tracking-wide font-sans ">
              1 800 203 203
            </span>
          </div>

          {/* Navi Button */}
          <button className="border border-purple-300 rounded-full w-40 p-2 mt-6 ">
            <div className="font-bold flex items-center gap-2 ml-2">
              <ToggleOnCircle size="28" color="#a778f8" variant="Bold" />
              <span className="bg-gradient-to-r from-purple-300 to-indigo-500 bg-clip-text text-transparent inline-block">
                Ask Navi
              </span>
            </div>
          </button>
        </div>

        {/* Right Side  */}
        <div className="md:col-span-8 grid grid-cols-1 sm:grid-cols-3 gap-8 text-left ">
          {footerLinks.map((section, idx) => (
            <div key={idx} className="space-y-4">
              {/* Category Header  */}
              <h3 className="text-white font-medium text-base tracking-wider uppercase">
                {section.title}
              </h3>

              {/* Links List  */}
              <ul className="space-y-3 ">
                {section.links.map((link, linkIdx) => (
                  <li key={linkIdx}>
                    <a
                      href={link.href}
                      className="text-gray-400  transition-colors text-[15px] font-medium block leading-relaxed"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </footer>
  );
}
