import { Global, ToggleOnCircle } from "iconsax-reactjs";
import paywayLogo from "../assets/payway-logo.svg";
import divider from "../assets/navi-divider.svg";
import { useState } from "react";
import ProductMegaMenu from "./ProductMegaMenu";

export default function Navbar() {
  const [isProductOpen, setIsProductOpen] = useState(false);
  return (
    <nav className="w-full  sticky top-0 z-50 bg-white ">
      <div className="flex justify-between items-center max-w-[1459px] mx-auto  h-25 ">
        {/* logo */}
        <div className="">
          <img src={paywayLogo} alt="logo" className="h-[25px]" />
        </div>

        {/* Menu */}
        <div className="">
          <ul className="flex gap-8 list-none text-xl  items-center">
            <li className="">
              <button
                onClick={() => setIsProductOpen(!isProductOpen)}
                className={`hover:text-primary  transition-colors h-25 flex items-center ${
                  isProductOpen ? "text-primary border-b-2 border-primary" : ""
                }`}
              >
                Products
              </button>
            </li>
            <li>
              <a
                href="https://developer.payway.com.kh/"
                className="hover:text-primary"
                target="_blank"
              >
                Developers
              </a>
            </li>
            <li>
              <a href="/about-us" className="hover:text-primary">
                About Us
              </a>
            </li>
            <li>
              <button className="hover:text-primary flex item-center">
                Apply Now
              </button>
            </li>

            <li>
              <img src={divider} />
            </li>
            <li className="font-bold flex items-center gap-2  transition-opacity">
              <ToggleOnCircle size="28" color="#a778f8" variant="Bold" />
              <span className="bg-gradient-to-r from-purple-300 to-indigo-500 bg-clip-text text-transparent inline-block">
                Ask Navi
              </span>
            </li>
          </ul>
        </div>

        {/* Button */}
        <div className="flex item-center gap-4">
          <button className="border-2 border-primary rounded-lg px-3 py-2 hover:bg-gray-100">
            <Global size="20" color="#11bcd4" />
          </button>

          <button className=" border-2 border-primary text-primary px-8 py-2 rounded-lg font-bold text-l ">
            Login
          </button>
        </div>
      </div>
      <ProductMegaMenu
        isOpen={isProductOpen}
        onClose={() => setIsProductOpen(false)}
      />
    </nav>
  );
}
