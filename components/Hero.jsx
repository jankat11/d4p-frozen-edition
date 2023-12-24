import { useState, useRef } from "react";
import Image from "next/image";
import { SlArrowDown } from "react-icons/sl"
import ReactCompareImage from "react-compare-image";

const Hero = () => {
  const [height, setHeight] = useState(0);
  const storeRef = useRef()

  const handleClick = () => {
    storeRef.current.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <div className="h-screen md:h-auto bg-aside shadow-neutral m-0 p-0  ">
        <div className="lg:w-full relative z-10 mt-[146px]">
          <div className="carousel carousel-center bg-aside p-4 py-8 space-x-4 sm:space-x-0 border-none">
            <div className="carousel-item w-2/3 sm:w-1/2 border-none">
              <div className="sm:p-4 ">
                <Image
                  src={"/yenib.png"}
                  style={{ width: "700px", height: "auto" }}
                  quality={100}
                  width={700}
                  height={825}
                  className="rounded-md shadow-md"
                  alt="photo"
                />
              </div>
            </div>
            <div className="carousel-item  w-2/3 sm:w-1/2 ">
              <div className="sm:p-4 ">
                <Image
                  src={"/hero6.png"}
                  style={{ width: "700px", height: "auto" }}
                  quality={100}
                  width={700}
                  height={825}
                  className="rounded-md object-cover shadow-md "
                  alt="photo"
                />
              </div>
            </div>
          </div>
          {/* <p className="hero-text border-accent relative bg-white pt-0 py-4">the healing pover of art</p> */}
        </div>
        <div className="w-full md:hidden px-4 sm:px-8  relative mt-10 lg:mt-0 z-10 left-0 flex flex-col sm:flex-row items-center justify-center  gap-8 ">
          <a className="">
            <button
              onClick={handleClick}
              className="button-accent-outline w-full py-2 sm:py-4"
            >
              <div className="flex justify-center items-center gap-1">
                <span>Explore</span>{" "}
                <SlArrowDown size={17} className="p-0 m-0" />
              </div>
            </button>
          </a>
        </div>
      </div>
    </>
  );
};
export default Hero;

/*   useEffect(() => {
  let innerHeight = window.innerHeight;
  window.onresize = () => setHeight(window.innerHeight);
  setHeight(innerHeight);
}, [height, innerHeight]); */

{/*  <p className="hero-text  pt-0 py-4">
<span className="font-serif text-3xl sm:text-4xl md:text-5xl">t</span>he healing pover of art
</p> */}