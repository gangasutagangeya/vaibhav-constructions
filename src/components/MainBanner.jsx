import frontView from "../assets/img/frontView.png";
import topView from "../assets/img/topView.png";
import sideView from "../assets/img/sideView.png";
import gateView from "../assets/img/gateView.png";

export default function MainBanner() {
  return (
    <section id="main-banner">
      <div className="container mx-auto pt-5">
        <img
          className="h-auto max-w-full"
          src={frontView}
          alt="Front apartment view"
        />
        <img
          className="h-auto max-w-full"
          src={topView}
          alt="Top apartment view"
        />
        <img
          className="h-auto max-w-full"
          src={sideView}
          alt="Side apartment view"
        />
        <img className="h-auto max-w-full" src={gateView} alt="Gate view" />
      </div>
    </section>
  );
}
