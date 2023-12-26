import Image from "next/image";
import { useInView } from "react-intersection-observer";
import React, { useState, useEffect, useRef, useDebugValue } from 'react';


const IntroductionItem = ({ introImage, title }) => {

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

const [ref, inView] = useInView({
  threshold: 0,
  triggerOnce: false,
});
const [ref2, startView] = useInView({
  threshold: 0.1,
  triggerOnce: false,
});

const [isFixed, setIsFixed] = useState(false);
const photoRef = useRef()
const textRef = useRef()

useEffect(() => {
  const handleScroll = () => {
 
      const photoRect = photoRef.current.getBoundingClientRect();
      const textRect = textRef.current.getBoundingClientRect();

      // Fotoğrafın tepesi ekranın en üstündeyken
      if (photoRect.top >= 0 && photoRect.bottom <= window.innerHeight) {
        setIsFixed(true);
      } else if (textRect.top <= 0) {
        // Yazı ekranın üstünden geçerken ve fotoğrafın altına ulaşırken
        setIsFixed(false);
      }
    
  };

  window.addEventListener('scroll', handleScroll);

  return () => {
    window.removeEventListener('scroll', handleScroll);
  };
}, []);





  return (
    <section ref={ref} className="md:aspect-square overflow-hidden relative group">
      <div ref={photoRef}>
        <div ref={ref2} className="slideController "></div>
        <div  className="slideControllerBottom z-50 absolute w-1/2 bottom-0"></div>
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
        ref={textRef}
          className={`w-full ${
            !isFixed && startView
              ? "fixed"
              : "absolute"
          } md:hidden bottom-[32px]`}
        >
          <p className="home-images-title ">{title}</p>
        </div>
      </div>
    </section>
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