import PropTypes from "prop-types";
import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import D4P from "./D4P";
import CartLogo from "./CartLogo";
import CollectionNav from "./CollectionNav";
import ContactNav from "./ContactNav";
import Link from "next/link";
import Sidebar from "./Sidebar";

const Header = ({
  scrollDown,
  initialLoad,
  fadeIn,
  isHomePage,
  fixedValue,
}) => {
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

/*   useEffect(() => {
    console.log(scrollDown);
  }, [scrollDown]); */

  return (
    <>
      <section ref={headerRef} className="header z-40">
        <nav className={`nav-bar absolut ${isHomePage && "h-24"} `}>
          <ul
            className={`nav-link-container layout-align  lg:px-6 xl:px-12 2xl:px-24 font-bold ${
              (!isHomePage || fixedValue) && "fixed top-0"
            }
            ${scrollDown && "bg-aside border-b border-primaryDark"}
            `}
          >
            <div className="lg:block hidden">
              <D4P initialLoad={initialLoad} scrollDown={scrollDown} />
            </div>
            <div className={` nav-items text-xl  ${initialLoad && fadeIn}`}>
              <div className="sm:flex sm:flex-row sm:space-x-10 sm:justify-start">
                <CollectionNav scrollDown={scrollDown} />
                <ContactNav scrollDown={scrollDown} />
                <Link
                  href="/our-story"
                  className={`nav-link  whitespace-nowrap `}
                >
                  <span className={`${!scrollDown && "text-aside"}`}>
                    Our Story
                  </span>
                  {/* <div className="text-line"></div> */}
                </Link>
                <Link href="/" className={`nav-link  whitespace-nowrap `}>
                  <span className={`${!scrollDown && "text-aside"}`}>
                    New Arrivals
                  </span>
                </Link>
              </div>
            </div>
            <div className="lg:flex hidden items-center gap-1">
                  <span className={`text-xl opacity-0 cursor-default ${!scrollDown && "text-aside"}`}>Cart</span>
                  <span className={`text-xl opacity-0 cursor-default ${!scrollDown && "text-aside"}`}>Cart</span>
                  <span className={`text-xl opacity-0 cursor-default ${!scrollDown && "text-aside"}`}>Cart</span>

              <Link
                href="/"
                className={`nav-link  whitespace-nowrap `}
              >
                
                
                <span className={`text-xl ${!scrollDown && "text-aside"}`}>Cart</span>
              </Link>
              <CartLogo
                noText={true}
                scrollDown={scrollDown}
                size={18}
                fill={scrollDown || isMenuOpen ? "#5b4726" : "#fff"}
              />
            </div>
            <div
              className={`absolute z-50 left-4 block  lg:hidden ${
                initialLoad && fadeIn
              }`}
            >
              <Sidebar
                scrollDown={scrollDown}
                handleClick={handleClick}
                isMenuOpen={isMenuOpen}
              />
            </div>

            <div className="lg:hidden">
              <D4P initialLoad={initialLoad} scrollDown={scrollDown} />
            </div>
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
                fill={scrollDown || isMenuOpen ? "#5b4726" : "#fff"}
                isMenuOpen={isMenuOpen}
                scrollDown={scrollDown}
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
