import ReactCompareImage from "react-compare-image";
import SectionTitle from "./SectionTitle";

const CompareImages = () => {
  return (
    <div className="pb-16 pt-8 overflow-x-hidden">
      <div className="pb-6 max-w-5xl xl:max-w-7xl mx-auto">
        <SectionTitle first={"THE HEALING POVER OF ART"} second={"OUR STORY"} third={true}/>
      </div>
      <div className="flex flex-col sm:flex-row sm:gap-4 sm:px-4  xl:justify-between ">
        <ReactCompareImage
          leftImage="homepage/comp1.png"
          rightImage="homepage/comp22.png"
          sliderPositionPercentage={0.5}
        />
        <ReactCompareImage
          leftImage="homepage/comp3.png"
          rightImage="homepage/comp11.png"
          sliderPositionPercentage={0.5}
        />
      </div>
    </div>
  );
};
export default CompareImages;
