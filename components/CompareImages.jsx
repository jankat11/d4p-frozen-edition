import ReactCompareImage from "react-compare-image";
import SectionTitle from "./SectionTitle";

const CompareImages = () => {
  return (
    <div className="pb-16 pt-8">
      <div className="pb-6 max-w-5xl xl:max-w-7xl mx-auto">
        <SectionTitle first={"THE HEALING POVER OF ART"} second={"OUR STORY"} third={true}/>
      </div>
      <div className="overflow-hidden sm:rounded-sm flex flex-col sm:flex-row justify-around sm:gap-4 sm:px-4  xl:gap-12  mx-auto">
        <ReactCompareImage
          leftImage="homepage/comp1.png"
          rightImage="homepage/comp22.png"
          sliderPositionPercentage={0.6}
        />
        <ReactCompareImage
          leftImage="homepage/comp3.png"
          rightImage="homepage/comp11.png"
          sliderPositionPercentage={0.6}
        />
      </div>
    </div>
  );
};
export default CompareImages;