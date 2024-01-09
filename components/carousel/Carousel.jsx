"use client";
import Carousel from "react-multi-carousel";

const ReactCarousel = ({ centerMode, partial, showDots, children }) => {
  const CustomDot = ({ index, onClick, active }) => {
    return (
      <div className="sm:hidden px-1 pt-8 pb-2 relative left-[calc(50%)] -translate-x-[calc(100%+50px)] bottom-[13px]">
        <button
          onClick={(e) => {
            onClick();
            e.preventDefault();
          }}
          className={`custom-dot border rounded-full border-info h-[10px] w-[10px] ${
            active ? "bg-info" : ""
          }`}
        ></button>
      </div>
    );
  };

  return (
    <section className="">
      <Carousel
        additionalTransfrom={0}
        customDot={<CustomDot />}
        arrows={false}
        centerMode={centerMode}
        className="absolute pl-2"
        containerClass="carousel-with-custom-dots"
        dotListClass="dotlist"
        draggable
        focusOnSelect={false}
        infinite
        partialVisbile={partial}
        itemClass=""
        keyBoardControl
        minimumTouchDrag={8}
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
          tablet: {
            breakpoint: {
              max: 1024,
              min: 630,
            },
            items: 2,
            partialVisibilityGutter: 40,
          },
          mobile: {
            breakpoint: {
              max: 630,
              min: 0,
            },
            items: 1,
            partialVisibilityGutter: 110,
          },
        }}
        rewind={false}
        rewindWithAnimation={false}
        rtl={false}
        shouldResetAutoplay
        showDots={showDots}
        sliderClass=""
        slidesToSlide={1}
        swipeable
      >
        {children}
      </Carousel>
    </section>
  );
};
export default ReactCarousel;
