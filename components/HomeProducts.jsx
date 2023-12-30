import Image from "next/image";
import SectionTitle from "./SectionTitle";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const HomeProducts = () => {
  return (
    <section className="relative">
      <div className="pb-6 sm:pb-2 max-w-5xl xl:max-w-7xl mx-auto">
        <SectionTitle
          first={"DIRECT AVAILABLE"}
          second={"IN STOCK"}
          third={true}
        />
      </div>

      <div className="">
        <Carousel
        
          additionalTransfrom={0}
          arrows={false}
          centerMode
          className="absolute"
          dotListClass=""
          draggable
          focusOnSelect={false}
          infinite
          itemClass=""
          keyBoardControl
          minimumTouchDrag={80}
        
          pauseOnHover
          renderArrowsWhenDisabled={false}
          renderButtonGroupOutside={false}
          renderDotsOutside={false}
          responsive={{
            desktop: {
              breakpoint: {
                max: 3000,
                min: 1024,
              },
              items: 3,
              partialVisibilityGutter: 40,
            },
            mobile: {
              breakpoint: {
                max: 810,
                min: 0,
              },
              items: 1,
              partialVisibilityGutter: 30,
            },
            tablet: {
              breakpoint: {
                max: 1024,
                min: 810,
              },
              items: 2,
              partialVisibilityGutter: 30,
            },
          }}
          rewind={false}
          rewindWithAnimation={false}
          rtl={false}
          shouldResetAutoplay
          showDots={false}
          sliderClass=""
          slidesToSlide={1}
          swipeable
        >
          <div className=" border-none cursor-pointer flex gap-4">
            <div className="sm:p-4 ">
              <Image
                src={"/plates/p3.png"}
        
                quality={100}
                width={700}
                height={825}
                className="rounded-md shadow object-cover home-prod-img h-56 md:h-72"
                alt="photo"
              />
              <div className="homeproducts-info">
                <p>büyük tabak</p>
                <p>500tl</p>
              </div>
            </div>
          </div>
          <div className=" cursor-pointer">
            <div className="sm:p-4 ">
              <Image
                src={"/plates/p2.png"}
        
                quality={100}
                width={700}
                height={825}
                className="rounded-md object-cover shadow home-prod-img h-56 md:h-72"
                alt="photo"
              />
              <div className="homeproducts-info">
                <p>büyük tabak</p>
                <p>500tl</p>
              </div>
            </div>
          </div>
          <div className=" cursor-pointer">
            <div className="sm:p-4 ">
              <Image
                src={"/plates/p4.png"}
        
                quality={100}
                width={700}
                height={825}
                className="rounded-md object-cover shadow home-prod-img h-56 md:h-72"
                alt="photo"
              />
              <div className="homeproducts-info">
                <p>büyük tabak</p>
                <p>500tl</p>
              </div>
            </div>
          </div>
          <div className=" cursor-pointer">
            <div className="sm:p-4 ">
              <Image
                src={"/plates/p1.png"}
        
                quality={100}
                width={700}
                height={825}
                className="rounded-md object-cover shadow home-prod-img h-56 md:h-72"
                alt="photo"
              />
              <div className="homeproducts-info">
                <p>büyük tabak</p>
                <p>500tl</p>
              </div>
            </div>
          </div>
        </Carousel>
      </div>
    </section>
  );
};
export default HomeProducts;
