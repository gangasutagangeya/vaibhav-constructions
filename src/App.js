import Navbar from "./components/navbar";
import MainBanner from "./components/MainBanner";
import FloorPlan from "./components/FloorPlan";
import Location from "./components/Location";
import Architecture from "./components/Architecture";

export default function App() {
  return (
    // <div className="bg-[#521b2a]">
    <div className="">
      <Navbar />
      {/* <div className="bg-gradient-to-r from-vaibhav-900 w-full h-20"></div> */}
      {/* <div class="bg-gradient-to-t from-vaibhav-900 from-10% via-vaibhav-300 via-30% to-vaibhav-50 w-full h-full">
        dafd
      </div> */}
      <MainBanner />
      <FloorPlan />
      <Location />
      <Architecture />

      {/* <img className="h-auto" src={logo} alt="logo" /> */}
      {/* <div className="bg-vaibhav-900 w-full h-20"></div>
      <div className="bg-vaibhav-800 w-full h-20"></div>
      <div className="bg-vaibhav-700 w-full h-20"></div>
      <div className="bg-vaibhav-600 w-full h-20"></div>
      <div className="bg-vaibhav-500 w-full h-20"></div>
      <div className="bg-vaibhav-400 w-full h-20"></div>
      <div className="bg-vaibhav-300 w-full h-20"></div>
      <div className="bg-vaibhav-200 w-full h-20"></div>
      <div className="bg-vaibhav-100 w-full h-20"></div>
      <div className="bg-vaibhav-90 w-full h-20"></div>
      <div className="bg-vaibhav-80 w-full h-20"></div>
      <div className="bg-vaibhav-70 w-full h-20"></div>
      <div className="bg-vaibhav-60 w-full h-20"></div>
      <div className="bg-vaibhav-50 w-full h-20"></div>
      <div className="bg-vaibhav-40 w-full h-20"></div> */}
    </div>
  );
}
