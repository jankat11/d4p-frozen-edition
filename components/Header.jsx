import PropTypes from "prop-types";
import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import D4P from "./D4P";
import CartLogo from "./CartLogo";
import CollectionNav from "./CollectionNav";
import ContactNav from "./ContactNav";
import Link from "next/link";
import Sidebar from "./Sidebar";

const Header = ({ scrollDown, initialLoad, fadeIn, isHomePage }) => {
  const headerRef = useRef(null);

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const handleClick = () => setIsMenuOpen((prev) => !prev);

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflowY = "hidden";
    } else {
      document.body.style.overflowY = "auto";
    }
  }, [isMenuOpen]);

  useEffect(() => {
    console.log(scrollDown);
  }, [scrollDown])

  return (
    <>
      <section ref={headerRef} className="header z-40">
        <nav className={`nav-bar absolut ${isHomePage && "h-24"} `}>
          <ul
            className={`nav-link-container layout-align  ${
              (!isHomePage || scrollDown) && "fixed top-0 bg-aside"
            }
            `}
          >
            <div className={` nav-items ${initialLoad && fadeIn}`}>
              <div className="sm:flex sm:flex-row sm:space-x-10 sm:justify-start">
                <CollectionNav scrollDown={scrollDown} />
                <ContactNav scrollDown={scrollDown} />
                <Link
                  href="/our-story"
                  className={`nav-link  whitespace-nowrap `}
                >
                  <span className={`${!scrollDown && "text-aside"}`}>Our Story</span>
                  {/* <div className="text-line"></div> */}
                </Link>
                <CartLogo indicatorClass="" size={18} fill={"#5b4726"} />
              </div>
            </div>

            <div
              className={`absolute z-50 left-4 block  lg:hidden ${
                initialLoad && fadeIn
              }`}
            >
              <Sidebar scrollDown={scrollDown} handleClick={handleClick} isMenuOpen={isMenuOpen} />
            </div>

            <D4P initialLoad={initialLoad} scrollDown={scrollDown} />
            <div
              className={`absolute z-50 right-6 sm:right-8 translate-y-[2px] flex items-center gap-4 lg:hidden ${
                initialLoad && fadeIn
              }`}
            >
              {/*  <Link href={"/our-story"}>
                <PiInfo size={25} fill="#6a532d"/>
              </Link> */}
              <CartLogo
                noText={true}
                classes="relative bottom-[3px]"
                size={25}
                fill={(scrollDown || isMenuOpen) ? "#5b4726" : "#fff"}
                isMenuOpen={isMenuOpen}
              />
            </div>
          </ul>
        </nav>
      </section>
    </>
  );
};

Header.propTypes = {
  scrollDown: PropTypes.bool,
};

export default Header;
