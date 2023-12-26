import Image from "next/image";
import { useInView } from "react-intersection-observer";
import React, { useState, useEffect, useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const IntroductionItem = ({ introImage, title }) => {
  const [windowWidth, setWindowWidth] = useState(0);
  const [sectionHeight, setSectionHeight] = useState(500);

  const getHeight = () => {
    const height = `${(windowWidth / 4) * 5}` + "px"
    setSectionHeight(height)
  }

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
      getHeight()
      console.log(windowWidth);
    };

    // Check if window is defined (client-side)
    if (typeof window !== 'undefined') {
      setWindowWidth(window.innerWidth);
      window.addEventListener('resize', handleResize);
      getHeight()
      console.log(windowWidth, sectionHeight);
      return () => {
        window.removeEventListener('resize', handleResize);
      };
    }
  }, [windowWidth]); 


  return (
    <div className={`md:aspect-square group containerss md:overflow-hidden aspect-[400/490]`}>
      <Image
        src={introImage}
        width={900}
        height={900}
        alt="plates"
        className="four-images absolute md:relative"
      />

      <div
        className={`w-full md:hidden py-8  shark-3 bottom-0
        
                `}
      >
        <div className={`w-full absolute hidden md:block  bottom-8`}>
          <p className="home-images-title">{title}</p>
        </div>
        <p className="home-images-title ">{title}</p>
      </div>
    </div>
  );
};
export default IntroductionItem;
/* ${!should ? "fixed" : "absolute"} */
/* object-bottom  md:aspect-square */

/* const [isScrollDown, setIsScrollDown] = useState(false);
const [isScrollUp, setIsScrollUp] = useState(false);
const [prevScrollPos, setPrevScrollPos] = useState(0);
const [elementPosition, setElementPosition] = useState(0);
const [onplace, setOnplace] = useState(false);

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
    if(!endView && inView) {
      const elementHeight = currentScrollPos - elementPosition
      if (elementHeight >= sectionRef.current.offsetHeight){
        setOnplace(true)
        console.log(title, "onplace")
      } else {
        setOnplace(false)
      }
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
  console.log(title, "element height is: ", sectionRef.current.offsetHeight);
}, [inView]) */

/*   const [isScrollDown, setIsScrollDown] = useState(false);
  const [isScrollUp, setIsScrollUp] = useState(false);
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [elementPosition, setElementPosition] = useState(0);
  const [onplace, setOnplace] = useState(false);
  
  const sectionRef = useRef()
  const [ref, inView, entry] = useInView({
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
  console.log(title, ref, inView, entry);
}, [inView]) */

/* const ref = useRef(null);
const { scrollYProgress } = useScroll({
  target: ref,
  offset: ["0 1", "end end"]
});
const [prevScrollPos, setPrevScrollPos] = useState(0);
const [progress, setProgress] = useState(0);

useEffect(() => {
  const handleScroll = () => {
    const currentScrollPos = window.scrollY;
    setPrevScrollPos(currentScrollPos);
    setProgress(scrollYProgress.prev)
    console.log(progress);
  };
  window.addEventListener('scroll', handleScroll);

  return () => {
    window.removeEventListener('scroll', handleScroll);
  };
}, [prevScrollPos]) */

/* const [isFixed, setIsFixed] = useState(0);
const [should, setShould] = useState(false);
const ref = useRef(null);

useEffect(() => {
  const handleScroll = () => {
    if (ref.current) {
      const { top, bottom } = ref.current.getBoundingClientRect();
      const scrollPosition = window.scrollY;
      const shouldFix = scrollPosition - top;
      const height = window.innerHeight;
      setIsFixed(shouldFix);
      setShould(height > bottom);
      console.log(title, height, bottom, should);
    }
  };

  window.addEventListener("scroll", handleScroll);
  return () => {
    window.removeEventListener("scroll", handleScroll);
  };
}, [isFixed]); */
