import PropTypes from "prop-types";
import Header from "./Header";
/* import { useState, useEffect } from "react"; */
import { useRouter, usePathname } from 'next/navigation'
import Footer from "./Footer";


const Layout = ({ children }) => {
/*   const [scrollHeight, setScrollHeight] = useState(0);
  const [initialLoad, setInitialLoad] = useState(true); */
/*   const fixedValue = scrollHeight >= 21; */
/*   const { pathname } = usePathname(); */

  /*  const fadeIn = "animate__animated animate__fadeIn animate__delay-1s"; */
  const fadeIn = "animate__animated animate__fadeIn";
  const isHomePage = true;
 /*  const scrollDown = scrollHeight >= 70 || !isHomePage; */

/*   useEffect(() => {
    document.body.style.overflowX = "hidden";
    const removeInitialAnimation = setTimeout(() => {
      setInitialLoad(false);
    }, 2000);
    const addScroll = () => setScrollHeight(window.scrollY);
    window.addEventListener("scroll", addScroll);
    return () => {
      window.removeEventListener("scroll", addScroll);
      clearTimeout(removeInitialAnimation);
    };
  }, []); */
  /* (initialLoad && isHomePage) && "opacity-0" */
  return (
    <>
      <section className="h-full flex justify-center ">
        <div
          className={`layout-align w-full z-30 absolute ${
           "" 
          }`}
        >
          <Header
            initialLoad={false}
            isHomePage={true}
            scrollDown={true}
           
            fadeIn={fadeIn}
          />
        </div>
        <div className={`layout-align bg-aside h-full w-full ${fadeIn}`}>
          {children}
          <Footer />
        </div>
      </section>
    </>
  );
};

Layout.propTypes = {
  children: PropTypes.node,
};

export default Layout;
