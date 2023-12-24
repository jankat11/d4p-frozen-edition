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
      document.body.style.overflowY = "hidden"
    } else {
      document.body.style.overflowY = "auto"
    }
  }, [isMenuOpen])

  return (
    <>
      {isHomePage && (
        <div>
          <div
            className={`layout-align stripeConst overflow-hidden ${
              initialLoad && " " /* "scale-in-hor-left" */
            }`}
          ></div>
        </div>
      )}

      <section ref={headerRef} className="header z-40">
        <nav className={`nav-bar absolut ${isHomePage && "h-24"}`}>
          {isHomePage && (
            <Image
              style={{ width: "100%" }}
              className={`absolute top-[100px] opacity-100 ${
                initialLoad && fadeIn
              }`}
              quality={100}
              src={"/phfull.png"}
              width={1000}
              height={200}
              alt="plates"
            />
          )}
          <ul
            className={`nav-link-container layout-align ${
              (!isHomePage || scrollDown) && "fixed top-0"
            }
            `}
          >
            <div className={` nav-items ${initialLoad && fadeIn}`}>
              <div className="sm:flex sm:flex-row sm:space-x-10 sm:justify-start">
                <CollectionNav />
                <ContactNav />
                <Link
                  href="/our-story"
                  className="nav-link  whitespace-nowrap "
                >
                  <span className="">Our Story</span>
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
              <Sidebar handleClick={handleClick} isMenuOpen={isMenuOpen} />
            </div>

            <D4P initialLoad={initialLoad} />
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
                fill={"#5b4726"}
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
