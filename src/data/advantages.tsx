import {
  Star,
  Zap,
  RefreshCw,
  Layers,
  ShieldCheck,
  Headphones,
} from "lucide-react";

export const advantages = [
  {
    title: "Great Check-Out Experience",
    desc: "Attract more clients and keep them loyal by offering a smooth payment experience during checkout.",
    icon: <Star size={20} className="text-blue-900" />,
  },
  {
    title: "Instant Payments",
    desc: "Enjoy accepting instant payments from your clients with multiple payment methods.",
    icon: <Zap size={20} className="text-blue-900" />,
  },
  {
    title: "Auto Payment",
    desc: "Automate recurring payments from your clients with their stored payment option details.",
    icon: <RefreshCw size={20} className="text-blue-900" />,
  },
  {
    title: "Flexible Integration",
    desc: "PayWay offers a variety of integration options to suit your business needs and technical capabilities.",
    icon: <Layers size={20} className="text-blue-900" />,
  },
  {
    title: "Secure",
    desc: "Using data encryption, 3DS 2.0 protocol and rules based fraud detection.",
    icon: <ShieldCheck size={20} className="text-blue-900" />,
  },
  {
    title: "24/7 Support",
    desc: "Our support team is available 24/7 via phone, email or live chat.",
    icon: <Headphones size={20} className="text-blue-900" />,
  },
];
