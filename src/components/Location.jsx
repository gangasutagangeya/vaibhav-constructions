import ApartmentLocation from "../assets/img/location.png";

export default function Location() {
  return (
    <section id="apartment-location">
      <div className="container mx-auto pt-5 bg-vaibhav-900">
        <img
          className="h-auto max-w-full"
          src={ApartmentLocation}
          alt="Apartment location"
        />
      </div>
    </section>
  );
}
