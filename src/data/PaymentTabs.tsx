import React from "react";
import { ShoppingCart, CreditCard, Link, QrCode, FileText, Monitor } from "lucide-react";

export const PaymenTabs = [
  { 
    id: "online", 
    label: "FOR ONLINE SALES",
    cards: [
      {
        title: "Ecommerce Checkout",
        description: "Provide your clients with seamless checkout experience in your website or mobile app with simple API Integration.",
        icon: React.createElement(ShoppingCart, { size: 22 })
      },
      {
        title: "Credentials on File",
        description: "Automate regular payment collections from subscribers via credit/debit cards and ABA accounts.",
        icon: React.createElement(CreditCard, { size: 22 })
      },
      {
        title: "Payment Link",
        description: "Send your customer a Payment Link via any messenger like Telegram or SMS, and they just tap to pay.",
        icon: React.createElement(Link, { size: 22 })
      },
      {
        title: "ABA QR API",
        description: "Accept ABA KHQR, Alipay, and WeChat payments conveniently by displaying the respective QR codes on electronic screens or printing them on receipts.",
        icon: React.createElement(QrCode, { size: 22 })
      },
      {
        title: "Invoicing Tool",
        description: "Send professional e-invoices with your company logo and collect payments in multiple ways. No integration required.",
        icon: React.createElement(FileText, { size: 22 })
      },
      {
        title: "Virtual Terminal",
        description: "Ideal for hotels and travel agencies, this solution allows you to accept remote payments using credit/debit cards, even without the need for a company website or application.",
        icon: React.createElement(Monitor, { size: 22 })
      }
    ]
  },
  { id: "instore", label: "FOR IN-STORE SALES", cards: [] },
  { id: "social", label: "FOR SOCIAL COMMERCE", cards: [] },
  { id: "delivery", label: "FOR PAY-ON-DELIVERY", cards: [] }
];
