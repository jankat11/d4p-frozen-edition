/* import { useInView } from "react-intersection-observer"; */
import Image from "next/image";
import { Inter, Parisienne } from "next/font/google";
const paris = Parisienne({ weight: "400", subsets: ["latin"] });

const About = () => {
  /* const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  }); */

  return (
    <div
      id="about"
      className="flex flex-col items-center shadow relative pb-44 md:pb-24"
    >
      <div className="py-8  my-16 flex justify-center items-center gap-4">
        <h2 className=" relative top-8 md:py-10 z-1 text-4xl inline-block">
          <span className={`text-6xl ${paris.className}`}>O</span>ur story
        </h2>
      </div>
      <section className="about-gallery">
        <div className="md:w-fit w-full px-0 py-10 md:p-0  md:h-[550px] order-1 flex flex-col gap-10 md:gap-4 justify-between items-center md:items-start">
          <p className="about-text">
            <span className=" ">d</span>esign4theplanet is a nature-sensitive
            upcycling workshop founded by two close friends who have developed
            themselves in different disciplines and are united in the same
            worldview.
          </p>
          <div className="img-container md:aspect-square md:max-w-xs md:pr-4 md:mt-8 group">
            <div className="img-wrapper">
              <Image
                src="/about-3.png"
                alt="handmade product"
                className="about-images md:aspect-square"
                width={500}
                height={500}
              />
            </div>
          </div>
        </div>
        <div className="img-container  md:max-w-sm lg:max-w-sm order-0 md:order-1 md:ms-10 group">
          <div className="img-wrapper">
            <Image
              src="/about-1.png"
              alt="image could not loaded"
              className="about-images md:aspect-auto md:max-h-[570px]"
              priority
              width={500}
              height={1000}
            />
          </div>
        </div>
      </section>

      <div className="w-full md:mt-10 about-gallery flex-col items-center">
        <span>
          <p className="about-text md:ml-auto md:max-w-[748px] md:hyphens-auto">
            Although the concept of upcycle is as old as human history,
            unfortunately it cannot find the value it deserves in today&apos;s
            consumer society. 2.1 billion tons of garbage are produced in the
            world every year. In Turkey, this amount is 38 million tons and only
            15%-20% of it is recycled. As design4theplanet, we care about nature
            and make it our mission to do our part to improve it.
          </p>
          <div className="img-container md:max-w-sm  md:ml-10 my-10 group float-right">
            <div className="img-wrapper">
              <Image
                src="/about-4.png"
                alt="asd"
                className="about-images md:aspect-square"
                width={500}
                height={500}
              />
            </div>
          </div>
          <p className="about-text md:ml-auto mt-8 md:max-w-[748px] md:pt-4 md:hyphens-auto">
            Inspired by the healing power of art, we produce nature-friendly
            designs from various waste materials such as paper, plastic, glass,
            ceramics and textiles. We minimize the carbon footprint we leave to
            the world by developing solutions that respect nature at every stage
            of production, from non-toxic water-based paints and varnishes to
            the use of sea water instead of consuming clean water resources.
          </p>
        </span>
        <span className="relative md:bottom-10">
          <div className="img-container md:max-w-sm  md:ml-10 my-10 group float-right">
            <div className="img-wrapper">
              <Image
                src="/about-2.png"
                className="about-images md:aspect-square"
                width={500}
                height={500}
                alt="about"
              ></Image>
            </div>
          </div>
          <p className="about-text md:ml-auto mt-8 md:max-w-[748px] relative md:bottom-4 md:hyphens-auto">
            <span className="hidden md:inline-block md:opacity-0 select-none">
              asdasfdadf rwgt rew gety hety he{" "}
            </span>
            The number 4 in our logo represents the four principles we adopt:
            <br />
            <br />
            <span>• Upcycling </span> <br /> <br />
            <span>• Respect for nature</span> <br /> <br />
            <span>• Sustainability</span> <br /> <br />
            <span className="relative">
              • Collaboration with Local <br></br>
              <span className="relative left-[17px]">Craftsmen</span>
            </span>
          </p>
        </span>

        <div className="flex flex-col gap-10 max-w-3xl md:px-2 md:flex-row w-full justify-between h-72 md:h-auto relative -bottom-8 md:bottom-10">
          <p className="about-text  md:mx-0  md:w-1/2 relative  md:hyphens-auto ">
            We aim to contribute to sustainability and raise awareness on this
            issue with our designs that we work with pleasure at every stage.
          </p>
          <div className="flex gap-6 flex-col justify-center max-w-sm sm:max-w-lg md:max-w-sm mx-auto w-full mt-8 md:mt-0 md:mx-0">
            <button className="button-hillary font-light text-sm tracking-wider border border-hillary w-full">
              contact us
            </button>
            <button className="button-primary font-light text-sm tracking-wider border border-primary w-full ">
              shop now!
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default About;

{
  /* <div className="skeleton w-full md:w-[1000px] rounded-sm aspect-video md:aspect-square"></div> */
}
