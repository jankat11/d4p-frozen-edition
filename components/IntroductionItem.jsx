import Image from "next/image";
import { useInView } from "react-intersection-observer";
import React, { useState, useEffect, useRef, useDebugValue } from "react";

const IntroductionItem = ({ introImage, title }) => {
  const [isTouching, setIsTouching] = useState(false);
  const [start, setStart] = useState(0);

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

  const fixedRef = useRef();
  const imageRef = useRef();
  const [prevScrollPos, setPrevScrollPos] = useState(0);

  const getScroll = () => {
    return window.scrollY;
  };
  const getOffset = () => {
    return imageRef.current.offsetHeight;
  };

  useEffect(() => {
    const handleScroll = () => {
      const fixedRect = fixedRef.current.getBoundingClientRect();
      const otherRect = getOffset();
      const currentIsTouching = !(fixedRect.bottom <= otherRect.top - 13);
      const scroll = getScroll()
      setIsTouching(scroll - start > otherRect )
      setPrevScrollPos(scroll);
      if (title === "our collection" && inView && !endView)
        console.log(scroll, otherRect, start);
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [prevScrollPos]);

  useEffect(() => {
    if (inView) {
      setStart(getScroll())
    }
  }, [inView])

  return (
    <section
      
      className="md:aspect-square overflow-hidden relative group"
    >
      <div ref={ref}>
        <div ref={ref2} className="slideController "></div>
        <div
          ref={ref3}
          className="slideControllerBottom z-50 absolute w-full h-0 bottom-0"
        ></div>
        <Image
          src={introImage}
          width={900}
          height={900}
          alt="plates"
          className="four-images"
          ref={imageRef}
        />
        <div className={`w-full absolute hidden md:block  bottom-8`}>
          <p className="home-images-title">{title}</p>
        </div>
        <div
          ref={fixedRef}
          className={`w-full ${
            !isTouching ? "fixed" : "absolute"
          } md:hidden bottom-[44px]
          ${!startView && "hidden"}
          `}
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
