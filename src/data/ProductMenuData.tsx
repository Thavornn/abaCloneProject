import React from "react";
import {
  ShoppingCart,
  QrCode,
  UserCheck,
  Link,
  FileText,
  Monitor,
  Split,
  Smartphone,
  Cpu,
  MessageSquare,
  Truck,
} from "lucide-react";

export interface NavItem {
  label: string;
  desc: string;
  icon: React.ReactNode;
}

export interface NavCategory {
  id: string;
  title: string;
  products: NavItem[];
  plugins?: NavItem[];
}

export const navbarMenuData: NavCategory[] = [
  {
    id: "online",
    title: "Online Sales",
    products: [
      {
        label: "Ecommerce Checkout",
        desc: "Grow your online sales",
        icon: <ShoppingCart size={20} className="text-blue-500" />,
      },
      {
        label: "ABA QR API",
        desc: "Display payment QR on any screen",
        icon: <QrCode size={20} className="text-cyan-500" />,
      },
      {
        label: "Credentials On File",
        desc: "Auto-Payments",
        icon: <UserCheck size={20} className="text-indigo-500" />,
      },
      {
        label: "Payment Link",
        desc: "Easiest way to get paid",
        icon: <Link size={20} className="text-blue-400" />,
      },
      {
        label: "Invoicing Tool",
        desc: "Start selling without having website",
        icon: <FileText size={20} className="text-slate-400" />,
      },
      {
        label: "Virtual Terminal",
        desc: "Accept card payments on your computer",
        icon: <Monitor size={20} className="text-sky-500" />,
      },
      {
        label: "Payout",
        desc: "Splitting payment between multiple accounts",
        icon: <Split size={20} className="text-blue-600" />,
      },
    ],
    plugins: [
      {
        label: "Shopify",
        desc: "Connect ABA PayWay to your Shopify store",
        icon: (
          <div className="w-6 h-6 rounded-full bg-[#96bf48] flex items-center justify-center text-white text-[11px] font-bold">
            S
          </div>
        ),
      },
      {
        label: "WooCommerce",
        desc: "Integrate ABA PayWay into your WordPress checkout",
        icon: (
          <div className="w-6 h-6 rounded-full bg-[#96588a] flex items-center justify-center text-white text-[11px] font-bold">
            W
          </div>
        ),
      },
      {
        label: "PrestaShop",
        desc: "Enable ABA PayWay payments for PrestaShop",
        icon: (
          <div className="w-6 h-6 rounded-full bg-[#df0067] flex items-center justify-center text-white text-[11px] font-bold">
            P
          </div>
        ),
      },
    ],
  },
  {
    id: "instore",
    title: "In-store Sales",
    products: [
      {
        label: "POS Terminal",
        desc: "Make your point of sale smart",
        icon: <Monitor size={20} className="text-slate-600" />,
      },
      {
        label: "Payment Link",
        desc: "Easiest way to get paid",
        icon: <Link size={20} className="text-blue-400" />,
      },
      {
        label: "Printed ABA KHQR",
        desc: "Get paid cashless",
        icon: <QrCode size={20} className="text-emerald-500" />,
      },
      {
        label: "ABA Merchant App",
        desc: "Turn your phone to mobile POS",
        icon: <Smartphone size={20} className="text-cyan-600" />,
      },
      {
        label: "ABA QR API",
        desc: "Display payment QR on any screen",
        icon: <QrCode size={20} className="text-cyan-500" />,
      },
    ],
    plugins: [],
  },
  {
    id: "social",
    title: "Social Commerce",
    products: [
      {
        label: "Payment Link",
        desc: "Easiest way to get paid over chat",
        icon: <MessageSquare size={20} className="text-pink-500" />,
      },
      {
        label: "Payment Link",
        desc: "Easiest way to get paid",
        icon: <Link size={20} className="text-blue-400" />,
      },
      {
        label: "Invoicing Tool",
        desc: "Start selling without having website",
        icon: <FileText size={20} className="text-slate-400" />,
      },
    ],
  },
  {
    id: "delivery",
    title: "Pay-On-Delivery",
    products: [
      {
        label: "ABA Merchant App",
        desc: "Collect payments at delivery",
        icon: <Truck size={20} className="text-amber-500" />,
      },
      {
        label: "Printed ABA KHQR",
        desc: "Get paid cashless",
        icon: <QrCode size={20} className="text-emerald-500" />,
      },
      {
        label: "ABA QR API",
        desc: "Display payment QR on any screen",
        icon: <QrCode size={20} className="text-cyan-500" />,
      },
    ],
  },
  {
    id: "services",
    title: "Services Offering",
    products: [
      {
        label: "Payout",
        desc: "Splitting payment between multiple accounts",
        icon: <Split size={20} className="text-blue-600" />,
      },
    ],
  },
];
