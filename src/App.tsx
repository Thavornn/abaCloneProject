import Advantage from "./components/Advantage";
import HeroSection from "./components/Hero";
import Navbar from "./components/Navbar";
import PaymentSolutions from "./components/PaymentSolutions";
import TrustedPartners from "./components/TrustedPartners";
function App() {
  return (
    <div className="">
      <div>
        <Navbar />
        <HeroSection />
        <TrustedPartners />
        <PaymentSolutions />
        <Advantage />

        
      </div>
    </div>
  );
}

export default App;
