"use client";
/* import ReactCompareImage from "react-compare-image"; */
import Image from "next/image";
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
        {/* <ReactCompareImage
          leftImage="homepage/comp1.webp"
          rightImage="homepage/comp33.webp"
          sliderPositionPercentage={0.5}
        /> */}
        <div className="diff aspect-[16/9]">
          <div className="diff-item-1">
            <Image width={650} height={400} alt="daisy" src="/homepage/comp33.webp" />
          </div>
          <div className="diff-item-2">
            <Image width={650} height={400} alt="daisy" src="/homepage/comp1.webp" />
          </div>
          <div className="diff-resizer"></div>
        </div>
      </div>
    </div>
  );
};
export default CompareImages;
