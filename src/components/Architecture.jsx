import architecture from "../assets/img/architecture.png";
import topArchitecureView from "../assets/img/topArchitectureView.png";

export default function Architecture() {
  return (
    <section id="architecture">
      <div className="container mx-auto pt-5">
        <img
          className="h-auto max-w-full"
          src={architecture}
          alt="Apartment architecture"
        />
        <img
          className="h-auto max-w-full"
          src={topArchitecureView}
          alt="Top architecture"
        />
      </div>
    </section>
  );
}
