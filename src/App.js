import logo from "./logo.png";
import apartmentLogo from "./apartmentLogo.png";

export default function App() {
  return (
    // <div className="bg-[#521b2a]">
    <>
      {/* <div className="bg-[rgba(69,31,41,0.98)]"> */}
      <div className="bg-[#620d0d]">
        <img className="h-auto" src={logo} alt="logo" />
        <img className="h-auto max-w-full" src={apartmentLogo} alt="logo" />
      </div>
      <button className="bg-slate-500">Hello</button>
    </>
  );
}
