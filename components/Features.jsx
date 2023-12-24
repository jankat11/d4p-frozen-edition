import FeatureBox from "./FeatureBox";
import { featureBoxes } from "../data";

const Features = () => {
  return (
    <section className="relative overflow-hidden mb-8"> 
      <div className=" w-fit grid grid-cols-2 md:grid-cols-4 mx-auto">
        {featureBoxes.map((box) => (
          <FeatureBox key={box.id} title={box.title} content={box.content} />
        ))}
      </div>
    </section>
  );
};
export default Features;
