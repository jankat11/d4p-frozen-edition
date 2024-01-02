import PropTypes from "prop-types";
import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import D4P from "./D4P";
import CartLogo from "./CartLogo";
import CollectionNav from "./CollectionNav";
import ContactNav from "./ContactNav";
import Link from "next/link";
import Sidebar from "./sidebar/Sidebar";

const categories = [
  "Coctail Picks",
  "Plates & Bowls",
  "Trays",
  "Drawer Knob",
  "Charcuterie Platter",
  "Pillowcase",
  "Backgammon",
];

const Header = ({ scrollDown, initialLoad, fadeIn, isHomePage }) => {
  const headerRef = useRef(null);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDropdownVisible, setDropdownVisible] = useState(false);
  const [isOnNavbar, setIsOnNavbar] = useState(false);

  const handleClick = () => setIsMenuOpen((prev) => !prev);
  const closeMenu = () => setIsMenuOpen(false);

  const handleMouseEnter = () => setDropdownVisible(true);
  const handleMouseLeave = () => setDropdownVisible(false);
  const handleOnNav = () => setIsOnNavbar(true);
  const handleLeftNav = () => setIsOnNavbar(false);

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflowY = "hidden";
    } else {
      document.body.style.overflowY = "auto";
    }
  }, [isMenuOpen]);

  return (
    <section ref={headerRef} className="">
   
        <nav
          className={`w-full border-b border-aside
                fixed top-0
              ${
                (scrollDown || isDropdownVisible || isOnNavbar) &&
                "bg-aside border-b border-primary"
              }`}
        >
          <ul className={`nav-link-container font-medium inside-container`}>
            <div className="lg:block hidden">
              <D4P
                initialLoad={initialLoad}
                scrollDown={scrollDown}
                isOnNavbar={isOnNavbar}
                isDropdownVisible={isDropdownVisible}
              />
            </div>
            <div
              onMouseEnter={handleOnNav}
              onMouseLeave={handleLeftNav}
              className={` nav-items text-xs h-full ${initialLoad && fadeIn}`}
            >
              <div className="sm:flex sm:flex-row sm:justify-start">
                {/* <CollectionNav scrollDown={scrollDown} />
                  <ContactNav scrollDown={scrollDown} /> */}
                <Link
                  href=""
                  onMouseEnter={handleMouseEnter}
                  onMouseLeave={handleMouseLeave}
                  className={`nav-link px-5 flex items-center whitespace-nowrap `}
                >
                  <span
                    className={`${
                      !scrollDown &&
                      !isOnNavbar &&
                      !isDropdownVisible &&
                      "text-aside"
                    }`}
                  >
                    Collections
                  </span>
                </Link>
                <Link
                  href=""
                  className={`nav-link px-5 flex items-center whitespace-nowrap `}
                >
                  <span
                    className={`${
                      !scrollDown &&
                      !isOnNavbar &&
                      !isDropdownVisible &&
                      "text-aside"
                    }`}
                  >
                    Contact
                  </span>
                </Link>
                <Link
                  href="/our-story"
                  className={`nav-link flex px-5 items-center whitespace-nowrap `}
                >
                  <span
                    className={`${
                      !scrollDown &&
                      !isOnNavbar &&
                      !isDropdownVisible &&
                      "text-aside"
                    }`}
                  >
                    Our Story
                  </span>
                  {/* <div className="text-line"></div> */}
                </Link>
                <Link
                  href="/"
                  className={`nav-link px-5 flex items-center whitespace-nowrap `}
                >
                  <span
                    className={`${
                      !scrollDown &&
                      !isOnNavbar &&
                      !isDropdownVisible &&
                      "text-aside"
                    }`}
                  >
                    New Arrivals
                  </span>
                </Link>
              </div>
            </div>
            <div className="lg:flex text-xs hidden items-center gap-1">
              <span
                className={` opacity-0 cursor-default ${
                  !scrollDown &&
                  !isOnNavbar &&
                  !isDropdownVisible &&
                  "text-aside"
                }`}
              >
                Cart
              </span>
              <span
                className={` opacity-0 cursor-default ${
                  !scrollDown &&
                  !isOnNavbar &&
                  !isDropdownVisible &&
                  "text-aside"
                }`}
              >
                Cart
              </span>
              <span
                className={` opacity-0 cursor-default ${
                  !scrollDown &&
                  !isOnNavbar &&
                  !isDropdownVisible &&
                  "text-aside"
                }`}
              >
                Cart
              </span>
              <Link href="/" className={`nav-link  whitespace-nowrap `}>
                <span
                  className={` ${
                    !scrollDown &&
                    !isOnNavbar &&
                    !isDropdownVisible &&
                    "text-aside"
                  }`}
                >
                  Cart
                </span>
              </Link>
              <CartLogo
                noText={true}
                scrollDown={scrollDown}
                size={18}
                fill={
                  scrollDown || isOnNavbar || isDropdownVisible
                    ? "#674B24"
                    : "#fff"
                }
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
                isOnNavbar={isOnNavbar}
                closeMenu={closeMenu}
              />
            </div>
            <div className="lg:hidden">
              <D4P
                initialLoad={initialLoad}
                scrollDown={scrollDown}
                isOnNavbar={isOnNavbar}
              />
            </div>
            <div
              className={`absolute right-6 sm:right-8 translate-y-[2px] flex items-center gap-4 lg:hidden ${
                initialLoad && fadeIn
              }`}
            >
              <CartLogo
                noText={true}
                classes="relative bottom-[3px]"
                size={25}
                fill={scrollDown || isOnNavbar ? "#674B24" : "#fff"}
                isMenuOpen={isMenuOpen}
                scrollDown={scrollDown}
              />
            </div>
          </ul>
        </nav>

        <nav
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          className={`${
            isDropdownVisible
              ? "subnav border-t border-b h-32 opacity-1"
              : "h-0 opacity-0"
          }  border-primary/30  overflow-hidden transition-all duration-200 fixed top-16 bg-aside w-full`}
        >
          <ul className=" inside-container flex items-center h-full gap-8 text-xs uppercase font-medium text-primary">
            {categories.map((category, i) => (
              <li className="nav-link" key={i}>
                {category}
              </li>
            ))}
          </ul>
        </nav>
   
    </section>
  );
};

Header.propTypes = {
  scrollDown: PropTypes.bool,
};

export default Header;
