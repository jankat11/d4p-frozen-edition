import ReactCompareImage from "react-compare-image";
import SectionTitle from "../SectionTitle";

const CompareImages = () => {
  return (
    <div className="pb-16 pt-8 sm:hidden overflow-x-hidden">
      <div className="pb-6 max-w-5xl xl:max-w-7xl mx-auto">
        <SectionTitle
          first={"THE HEALING POVER OF ART"}
          second={"OUR STORY"}
          third={true}
          link={"/our-story"}
        />
      </div>
      <div className="flex flex-col sm:flex-row sm:gap-4 sm:px-4  xl:justify-between ">
        <ReactCompareImage
          leftImage="homepage/asd.webp"
          rightImage="homepage/comp33.webp"
          sliderPositionPercentage={0.5}
        />
        {/*         <ReactCompareImage
          leftImage="homepage/comp3.png"
          rightImage="homepage/comp11.png"
          sliderPositionPercentage={0.6}
        /> */}
      </div>
    </div>
  );
};
export default CompareImages;
