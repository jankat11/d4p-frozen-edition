import PropTypes from "prop-types";
import Header from "./Header";
import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import Footer from "./Footer";

const Layout = ({ children }) => {
  const [scrollHeight, setScrollHeight] = useState(0);
  const [initialLoad, setInitialLoad] = useState(true);
  const scrollDown = scrollHeight >= 21;
  const {pathname} = useRouter()

 /*  const fadeIn = "animate__animated animate__fadeIn animate__delay-1s"; */
  const fadeIn = "animate__animated animate__fadeIn";
  const isHomePage = pathname == "/"

  useEffect(() => {
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
  }, []);


  return (
    <>
      <section className="h-full flex justify-center ">
        <div
          className={`bg-aside screen-cover ${fadeIn}`}
        ></div>
        <div className={`layout-align w-full z-30 absolute`}>
          <Header
            initialLoad={initialLoad}
            scrollDown={scrollDown}
            fadeIn={fadeIn}
            isHomePage={isHomePage}
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
