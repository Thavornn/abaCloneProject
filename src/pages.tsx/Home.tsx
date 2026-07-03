import Advantage from "../components/Advantage";
import FeatureSpilt from "../components/FeatureSpilt";
import Footer from "../components/Footer";
import HeroSection from "../components/Hero";
import Navbar from "../components/Navbar";
import PaymentSolutions from "../components/PaymentSolutions";
import TrustedPartners from "../components/TrustedPartners";
function Home() {
  return (
    <div className="">
      <div>
        <Navbar />
        <HeroSection />
        <TrustedPartners />
        <PaymentSolutions />
        <Advantage />
        <FeatureSpilt />
        <Footer />
      </div>
    </div>
  );
}

export default Home;
