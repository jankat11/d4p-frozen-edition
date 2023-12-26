import Image from "next/image";
import { useInView } from "react-intersection-observer";
import React, { useState, useEffect, useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const IntroductionItem = ({ introImage, title }) => {
  const ref = useRef(null);
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
  }, [prevScrollPos])
  
  return (
    <motion.div ref={ref} className="md:aspect-square overflow-hidden relative group">
      <div>
        <div  className="slideController "></div>
        <div
          className="slideControllerBottom z-50 absolute w-full h-0 bottom-0"
        ></div>
        <Image
          src={introImage}
          width={900}
          height={900}
          alt="plates"
          className="four-images"
         
        />
        <div className={`w-full absolute hidden md:block  bottom-8`}>
          <p className="home-images-title">{title}</p>
        </div>
        <motion.div
        style={{position : `${scrollYProgress.current < 1 ? "fixed" : "absolute"}`}}
          className={`w-full md:hidden bottom-0
          `}
        >
          <p className="home-images-title ">{title}</p>
        </motion.div>
      </div>
    </motion.div>
  );
};
export default IntroductionItem;

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
