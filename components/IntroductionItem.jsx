import Image from "next/image";
import { useInView } from "react-intersection-observer";

const IntroductionItem = ({ introImage, title }) => {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: false,
  });
  const [ref2, endView] = useInView({
    threshold: 0,
    triggerOnce: false,
  });

  return (
    <div  className="md:aspect-square overflow-hidden relative group">
      <div ref={ref} className="slideController "></div>
      <div ref={ref2} className="slideControllerBottom z-50 absolute w-1/2 bottom-0"></div>
      <Image
        src={introImage}
        width={900}
        height={900}
        alt="plates"
        className="four-images"
      />
      <div className={`w-full absolute  hidden md:block  bottom-8`}>
        <p className="home-images-title">{title}</p>
      </div>
      <div
        className={`w-full ${
          inView && !endView
            ? "fixed animate__animated animate__fadeIn"
            : "absolute"
        } md:hidden bottom-8`}
      >
        <p className="home-images-title ">{title}</p>
      </div>
    </div>
  );
};
export default IntroductionItem;

/* object-bottom  md:aspect-square */
