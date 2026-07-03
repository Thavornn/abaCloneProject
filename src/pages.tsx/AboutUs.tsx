import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

export default function AboutUs() {
  return (
    <div>
      <Navbar />
      <div className="max-w-[1460px] mx-auto my-20 grid grid-cols-12 gap-15 py-12  items-center font-roboto text-gray">
        {/* About Us */}
        <div className="col-span-6">
          <h2 className="text-4xl  font-medium">About Us</h2>
          <p className="text-xl mt-7">
            <span className="font-bold">
              ABA PayWay is an all-in-one payment platform{" "}
            </span>
            developed by ABA Bank to help businesses of all sizes across
            Cambodia to receive payments securely in a modern way, both online
            and offline.
          </p>
          <p className="text-xl mt-7">
            <span>ABA Bank, Cambodia’s leading commercial bank,</span> provides
            individuals and businesses with innovative and reliable financial
            solutions. With a nationwide presence through its extensive branch
            network, advanced self-banking facilities, and cutting-edge digital
            channels, ABA Bank ensures that customers have seamless access to a
            full suite of financial services.
          </p>
          <p className="text-xl mt-7">
            ABA Bank is fully owned by the National Bank of Canada.
          </p>
        </div>
        {/* Picture */}
        <div className=" col-span-5 relative flex justify-end items-center">
          <div className="absolute inset-15 bg-[#f0f7fc]  rounded-4xl transform -rotate-8 scale-170  -z-10" />
          <div className="overflow-hidden  rounded-2xl shadow-xl border-white/40 transform transition-transform">
            <img
              src="https://www.payway.com.kh/image/aba-hq.webp"
              className=" object-cover  "
            />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
