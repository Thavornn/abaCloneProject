import { useState } from "react";
import { ArrowRight } from "iconsax-reactjs";
import { navbarMenuData } from "../data/ProductMenuData";

interface ProductMegaMenuProps {
  isOpen: boolean;
  onClose: () => void; // Added an onClose callback option to shut the window when clicking the overlay
}

export default function ProductMegaMenu({
  isOpen,
  onClose,
}: ProductMegaMenuProps) {
  const [activeSubTab, setActiveSubTab] = useState("online");

  if (!isOpen) return null;

  const activeContent = navbarMenuData.find((cat) => cat.id === activeSubTab);
  const hasPlugins = activeContent?.plugins && activeContent.plugins.length > 0;

  return (
    <>
      {/* 🌟 1. THE DARK BACKDROP OVERLAY: Fades out the page content beneath */}
      <div
        className="fixed inset-0 bg-black/40 backdrop-blur-[2px] z-40 transition-opacity animate-in fade-in duration-200 h-screen w-screen"
        style={{ top: "100px" }} // Pushes the dark background directly below your navbar line
        onClick={onClose} // Clicking the background close layer instantly hides the menu panels
      />

      {/* 2. MAIN DROPDOWN CONTAINER */}
      <div
        className="absolute left-1/2 -translate-x-1/2 w-full max-w-[800px] bg-slate-50 shadow-2xl border border-gray-100 grid grid-cols-12 rounded-2xl overflow-hidden z-50 mt-[-15px] ml-27 animate-in fade-in slide-in-from-top-2 duration-200 font-ralway"
        style={{ top: "100%" }}
      >
        {/* Left Side Tab Links Selection Panel */}
        <div className=" col-span-3 bg-white border-r border-gray-100 py-6 p-2">
          {navbarMenuData.map((cat) => (
            <button
              key={cat.id}
              onMouseEnter={() => setActiveSubTab(cat.id)}
              className={`w-full flex items-center justify-between px-6 py-3.5 text-left  text-[13px] transition-all ${
                activeSubTab === cat.id
                  ? "text-primary bg-slate-100 rounded-lg   border-l-primary font-extrabold"
                  : "text-slate-500  border-l-transparent hover:bg-slate-100 rounded-lg font-medium"
              }`}
            >
              {cat.title}
              <ArrowRight
                size={14}
                className={`transition-opacity ${activeSubTab === cat.id ? "opacity-100 text-primary" : "opacity-100"}`}
              />
            </button>
          ))}
        </div>

        {/* Right Subgrid Links Presentation Area */}
        <div className="col-span-8 p-8 grid grid-cols-13 gap-1">
          {/* Main Products Container Layout Grid */}
          <div className={`${hasPlugins ? "col-span-6" : "col-span-15"}`}>
            <h4 className="text-[11px]  text-gray-500 uppercase tracking-widest mb-1 text-left">
              Products
            </h4>
            <div className="">
              {activeContent?.products.map((prod, idx) => (
                <a
                  key={idx}
                  href="#"
                  className="group flex gap-3.5 items-start p-1.5 rounded-lg transition-all"
                >
                  {/* 🌟 2. RENDERING PRODUCT ICON */}
                  <div className="mt-0.5 shrink-0 p-1.5 rounded-md bg-slate-50 text-slate-600 group-hover:bg-cyan-50 group-hover:text-primary transition-colors">
                    {prod.icon}
                  </div>
                  <div className="flex flex-col">
                    <div className="font-bold text-slate-800 group-hover:text-primary text-[15px] transition-colors">
                      {prod.label}
                    </div>
                    <div className="text-xs text-gray-500 mt-0.1 leading-normal">
                      {prod.desc}
                    </div>
                  </div>
                </a>
              ))}
            </div>
          </div>

          {/* Side Plug-ins Column Block */}
          {hasPlugins && (
            <div className="col-span-7  pl-6">
              <div className="flex items-center gap-2 mb-1">
                <h4 className="text-[11px] font-medium text-gray-400 uppercase tracking-widest text-left">
                  Plug-ins
                </h4>
                <span className="text-[9px] bg-cyan-50 text-primary font-bold px-1.5 py-0.5 rounded uppercase tracking-wider">
                  Quick Setup
                </span>
              </div>
              <div className="space-y-2 text-left">
                {activeContent?.plugins?.map((plug, idx) => (
                  <a
                    key={idx}
                    href="#"
                    className="group flex gap-3.5 items-start p-1.5 rounded-lg"
                  >
                    {/*  PLUG-IN */}
                    <div className="shrink-0 mt-0.5">{plug.icon}</div>
                    <div className="flex flex-col">
                      <div className="font-bold text-slate-800 group-hover:text-primary text-[14px]">
                        {plug.label}
                      </div>
                      <div className="text-xs text-gray-500 mt-0.1 leading-normal ">
                        {plug.desc}
                      </div>
                    </div>
                  </a>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
}
