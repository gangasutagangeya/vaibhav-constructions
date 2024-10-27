import floorPlan from "../assets/img/floorPlan.png";
export default function FloorPlan() {
  return (
    <section id="floor-plan">
      <div className="container mx-auto pt-5 bg-vaibhav-800">
        <div className="flex">
          <div className="w-1/12">
            <p className="uppercase">add compass and text</p>
          </div>
          <img className="w-10/12" src={floorPlan} alt="Typical floor plan" />
          <div className="w-1/12">
            <p className="uppercase">Add 40 feet road</p>
          </div>
        </div>
      </div>
    </section>
  );
}
