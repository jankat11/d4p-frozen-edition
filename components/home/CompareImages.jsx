import Image from "next/image";
import SectionTitle from "../SectionTitle";
import { ReactCompareSlider } from "react-compare-slider";

const CompareImages = () => {
  return (
    <div className="lg:py-14 py-12 sm:hidden overflow-x-hidden">
      <div className="pb-6 max-w-5xl xl:max-w-7xl mx-auto">
        <SectionTitle
          first={"THE HEALING POVER OF ART"}
          second={"OUR STORY"}
          third={true}
          link={"/our-story"}
        />
      </div>
      <div className="flex flex-col sm:flex-row sm:gap-4 sm:px-4  xl:justify-between ">
        <ReactCompareSlider
          itemOne={
            <Image
              width={650}
              height={400}
              src="/homepage/comp1.jpg"
              alt="Image one"
            />
          }
          itemTwo={
            <Image
              width={650}
              height={400}
              src="/homepage/comp.jpg"
              alt="Image two"
            />
          }
        />
      </div>
    </div>
  );
};
export default CompareImages;
