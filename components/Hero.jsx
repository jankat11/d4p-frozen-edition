import { useState, useRef } from "react";
import Image from "next/image";
import { SlArrowDown } from "react-icons/sl"

const Hero = () => {
  const [height, setHeight] = useState(0);
  const storeRef = useRef()

  const handleClick = () => {
    storeRef.current.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <div className="h-screen md:h-auto bg-aside shadow-neutral m-0 p-0  ">
        <div className="lg:w-full relative z-10 h-screen ">
          <Image 
            src={"/herosm.jpg"}
            width={2500}
            height={2500}
            alt="hero"
            quality={100}
            className="object-cover  object-center h-screen "
          />
        </div>
        <div className="w-full  px-4 sm:px-8  absolute top-[70%] z-10 left-0 flex flex-col  lg:top-[60%] items-center justify-center  gap-2 ">
          <p className="hero-text font-bold border-accent pt-0 py-4"><span className="">U</span>pcycled Products</p>
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