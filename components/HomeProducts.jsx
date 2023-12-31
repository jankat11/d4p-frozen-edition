import Image from "next/image";
import SectionTitle from "./SectionTitle";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { useState } from "react";

const HomeProducts = () => {
  const [slide, setSlide] = useState(2)
  const [prev, setPrev] = useState(3)
  const CustomDot = ({ index, onClick, active }) => {
    return (
      <div className="border-1 sm:hidden px-1 pt-6 pb-2 relative left-24 ">
        <button
          onClick={(e) => {
            onClick();
            e.preventDefault();
          }}
          className={`custom-dot border rounded-full border-accent   h-3 w-3 ${
            active ? "bg-accent" : "bg-aside"
          }`}
        ></button>
      </div>
    );
  };
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
          afterChange={function (previousSlide, _ref) {
            var currentSlide = _ref.currentSlide;
            _ref.onMove;
            setSlide(currentSlide)
            setPrev(previousSlide)
          }}
          customDot={<CustomDot />}
          arrows={false}
          centerMode={false}
          className="absolute pl-2"
          containerClass="carousel-with-custom-dots"
          dotListClass="dotlist"
          draggable
          focusOnSelect={false}
          infinite
          partialVisbile
          itemClass=""
          keyBoardControl
          minimumTouchDrag={50}
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
                max: 530,
                min: 0,
              },
              items: 1,
              partialVisibilityGutter: 70,
            },
            tablet: {
              breakpoint: {
                max: 1024,
                min: 530,
              },
              items: 2,
              partialVisibilityGutter: 30,
            },
          }}
          rewind={false}
          rewindWithAnimation={false}
          rtl={false}
          shouldResetAutoplay
          showDots
          sliderClass=""
          slidesToSlide={1}
          swipeable
        >
          <div className=" border-none cursor-pointer flex gap-4 mx-2">
            <div >
              <div className="homeproducts-img-cover">
                <Image
                  src={"/plates/p3.png"}
                  quality={100}
                  width={700}
                  height={825}
                  className="homeproducts-img"
                  alt="photo"
                />
              </div>
              {(slide == 2  || slide == 8 || true) && <div className="homeproducts-info">
                <p>büyük tabak</p>
                <p>500tl</p>
              </div>}
            </div>
          </div>
          <div className=" cursor-pointer mx-2">
            <div >
              <div className="homeproducts-img-cover">
                <Image
                  src={"/plates/p2.png"}
                  quality={100}
                  width={700}
                  height={825}
                  className="homeproducts-img"
                  alt="photo"
                />
              </div>
              {(slide == 3 || slide == 7 || true)&& <div className="homeproducts-info">
                <p>büyük tabak</p>
                <p>500tl</p>
              </div>}
            </div>
          </div>
          <div className=" cursor-pointer mx-2">
            <div >
              <div className="homeproducts-img-cover">
                <Image
                  src={"/plates/p4.png"}
                  quality={100}
                  width={700}
                  height={825}
                  className="homeproducts-img"
                  alt="photo"
                />
              </div>
              {(slide == 4 || slide == 6 || true) && <div className="homeproducts-info">
                <p>büyük tabak</p>
                <p>500tl</p>
              </div>}
            </div>
          </div>
          <div className=" cursor-pointer mx-2">
            <div >
              <div className="homeproducts-img-cover">
                <Image
                  src={"/plates/p1.png"}
                  quality={100}
                  width={700}
                  height={825}
                  className="homeproducts-img"
                  alt="photo"
                />
              </div>
              {(slide == 5 || true )&& <div className="homeproducts-info">
                <p>büyük tabak</p>
                <p>500tl</p>
              </div>}
            </div>
          </div>

{/*           <div className=" cursor-pointer mx-2">
            <div className="">
              <Image
                src={"/plates/p1.png"}
                quality={100}
                width={700}
                height={825}
                className="rounded-md object-cover shadow home-prod-img h-96 "
                alt="photo"
              />
              {(slide == 6 || slide == 0 || true) && <div className="homeproducts-info">
                <p>büyük tabak</p>
                <p>500tl</p>
              </div>}
            </div>
          </div>
          <div className=" cursor-pointer mx-2">
            <div className="">
              <Image
                src={"/plates/p1.png"}
                quality={100}
                width={700}
                height={825}
                className="rounded-md object-cover shadow home-prod-img h-96 "
                alt="photo"
              />
              {(slide == 7 || slide == 1 || true) && <div className="homeproducts-info">
                <p>büyük tabak</p>
                <p>500tl</p>
              </div>}
            </div>
          </div> */}
        </Carousel>
      </div>
    </section>
  );
};
export default HomeProducts;
