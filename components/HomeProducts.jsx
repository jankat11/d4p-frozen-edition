import Image from "next/image";
import SectionTitle from "./SectionTitle";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const HomeProducts = () => {
  return (
    <section className="">
      <div className="pb-6 sm:pb-2 max-w-5xl xl:max-w-7xl mx-auto">
        <SectionTitle
          first={"DIRECT AVAILABLE"}
          second={"IN STOCK"}
          third={true}
        />
      </div>

      <Carousel
        autoPlay
        autoPlaySpeed={3000}
        additionalTransfrom={0}
        arrows={false}
  
        centerMode
        className="max-h-56 sm:max-h-full"
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
              max: 464,
              min: 0,
            },
            items: 1,
            partialVisibilityGutter: 30,
          },
          tablet: {
            breakpoint: {
              max: 1024,
              min: 464,
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
              style={{ width: "700px", height: "auto" }}
              quality={100}
              width={700}
              height={825}
              className="rounded-md shadow object-cover home-prod-img"
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
              style={{ width: "700px", height: "auto" }}
              quality={100}
              width={700}
              height={825}
              className="rounded-md object-cover shadow home-prod-img"
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
              style={{ width: "700px", height: "auto" }}
              quality={100}
              width={700}
              height={825}
              className="rounded-md object-cover shadow home-prod-img"
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
              style={{ width: "700px", height: "auto" }}
              quality={100}
              width={700}
              height={825}
              className="rounded-md object-cover shadow home-prod-img"
              alt="photo"
            />
            <div className="homeproducts-info">
              <p>büyük tabak</p>
              <p>500tl</p>
            </div>
          </div>
        </div>
      </Carousel>
    </section>
  );
};
export default HomeProducts;
