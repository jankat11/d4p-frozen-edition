import Image from "next/image";
import { useInView } from "react-intersection-observer";
import React, { useState, useEffect, useRef } from 'react';


const IntroductionItem = ({ introImage, title }) => {

  const [isScrollDown, setIsScrollDown] = useState(false);
  const [isScrollUp, setIsScrollUp] = useState(false);
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [elementPosition, setElementPosition] = useState(0);
  
  const sectionRef = useRef()
  const [ref, inView] = useInView({
    threshold: 0,
    triggerOnce: false,
  });
  const [ref2, startView] = useInView({
    threshold: 0.1,
    triggerOnce: false,
  });
  const [ref3, endView] = useInView({
    threshold: 0,
    triggerOnce: false,
  });

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.scrollY;
      if(!endView, inView) {
        const elementHeight = currentScrollPos - elementPosition
        console.log(title, "height is ", elementHeight);
      }
      
      if (currentScrollPos > prevScrollPos) {
        setIsScrollDown(true);
        setIsScrollUp(false);
      } else {
        setIsScrollDown(false);
        setIsScrollUp(true);
      }

      setPrevScrollPos(currentScrollPos);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [prevScrollPos]);


  useEffect(() => {
    if (inView) {
      const currentScroll = window.scrollY;
      setElementPosition(currentScroll)
    }
  }, [inView])

  useEffect(() => {
    console.log("element height is: ", sectionRef.current.offsetHeight);
  }, [])


  return (
    <section ref={sectionRef} className="md:aspect-square overflow-hidden relative group">
      <div ref={ref}>
        <div ref={ref2} className="slideController "></div>
        <div ref={ref3} className="slideControllerBottom z-50 absolute w-1/2 bottom-0"></div>
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
            startView && !endView
              ? "fixed"
              : "absolute"
          } md:hidden bottom-0`}
        >
          <p className="home-images-title ">{title}</p>
        </div>
      </div>
    </section>
  );
};
export default IntroductionItem;

/* object-bottom  md:aspect-square */
