import { useState, useRef } from "react";
import Image from "next/image";
import { SlArrowDown } from "react-icons/sl";

const Hero = () => {
  const [height, setHeight] = useState(0);
  const storeRef = useRef();

  const handleClick = () => {
    storeRef.current.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="h-screen md:h-auto bg-aside m-0 p-0  relative ">
      <div className="lg:w-full relative z-10 h-screen ">
        <Image
          src={"/hero.jpg"}
          width={2500}
          height={2500}
          alt="hero"
          priority
          quality={100}
          className="object-cover  object-center h-screen home-prod-img"
        />
      </div>
  
        <div className=" absolute top-[72%] z-10 w-full ">
          <div className="flex flex-col inside-container relative bottom-4 items-center lg:items-start lg:justify-center  gap-2">
            <p className="hero-text  pt-0 py-4">
              <span className="">U</span>pcycled Products
            </p>
            <a className="">
              <button className="button-primary w-full ">
                <div className="flex justify-center items-center gap-1">
                  <span className="font-light text-sm tracking-wider">shop now</span>{" "}
                  {/* <SlArrowDown size={17} className="p-0 m-0" /> */}
                </div>
              </button>
            </a>
          </div>
        </div>

    </section>
  );
};
export default Hero;

/*   useEffect(() => {
  let innerHeight = window.innerHeight;
  window.onresize = () => setHeight(window.innerHeight);
  setHeight(innerHeight);
}, [height, innerHeight]); */

{
  /*  <p className="hero-text  pt-0 py-4">
<span className="font-serif text-3xl sm:text-4xl md:text-5xl">t</span>he healing pover of art
</p> */
}
