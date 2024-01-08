"use client";
import PropTypes from "prop-types";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import D4P from "./D4P";
import CartLogo from "./CartLogo";
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

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDropdownVisible, setDropdownVisible] = useState(false);
  const [isOnNavbar, setIsOnNavbar] = useState(false);
  const [scrollHeight, setScrollHeight] = useState(0);
  const [initialLoad, setInitialLoad] = useState(true);

  const pathname = usePathname();
  const fadeIn = "animate__animated animate__fadeIn";
  const isHomePage = pathname === "/";
  const scrollDown = scrollHeight >= 70 || !isHomePage;
  const scrollTop = scrollHeight === 0;

  const handleClick = () => setIsMenuOpen((prev) => !prev);
  const closeMenu = () => setIsMenuOpen(false);
  const handleMouseEnter = () => setDropdownVisible(true);
  const handleMouseLeave = () => setDropdownVisible(false);
  const handleOnNav = () => setIsOnNavbar(true);
  const handleLeftNav = () => setIsOnNavbar(false);

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

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflowY = "hidden";
    } else {
      document.body.style.overflowY = "auto";
    }
  }, [isMenuOpen]);

  return (
    <>
      <nav
        className={`w-full border-b border-aside
                fixed top-0
              ${
                (scrollDown || isDropdownVisible || isOnNavbar) &&
                " border-b bg-white border-primary/30"
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
            className={` nav-items text-xs h-full `}
          >
            <div className="sm:flex sm:flex-row sm:justify-start">
              <Link
                href=""
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
                className={`nav-link top-nav px-5 flex items-center whitespace-nowrap `}
              >
                <span
                  className={`${
                    !scrollDown &&
                    !isOnNavbar &&
                    !isDropdownVisible &&
                    "text-white"
                  }`}
                >
                  Collections
                </span>
                <div
                  className={`text-line ${
                    isDropdownVisible && " w-[calc(100%-40px)] opacity-100"
                  }`}
                ></div>
              </Link>
              <Link
                href=""
                className={`nav-link top-nav px-5 flex items-center whitespace-nowrap `}
              >
                <span
                  className={`${
                    !scrollDown &&
                    !isOnNavbar &&
                    !isDropdownVisible &&
                    "text-white"
                  }`}
                >
                  Contact
                </span>
                <div className="text-line"></div>
              </Link>
              <Link
                href="/our-story"
                className={`nav-link top-nav flex px-5 items-center whitespace-nowrap `}
              >
                <span
                  className={`${
                    !scrollDown &&
                    !isOnNavbar &&
                    !isDropdownVisible &&
                    "text-white"
                  }`}
                >
                  Our Story
                </span>

                <div className="text-line"></div>
              </Link>
              <Link
                href="/"
                className={`nav-link top-nav px-5 flex items-center whitespace-nowrap `}
              >
                <span
                  className={`${
                    !scrollDown &&
                    !isOnNavbar &&
                    !isDropdownVisible &&
                    "text-white"
                  }`}
                >
                  New Arrivals
                </span>
                <div className="text-line"></div>
              </Link>
            </div>
          </div>
          <div className="lg:flex text-xs hidden items-center gap-1">
            <span
              className={` opacity-0 cursor-default ${
                !scrollDown && !isOnNavbar && !isDropdownVisible && "text-white"
              }`}
            >
              Cart
            </span>
            <span
              className={` opacity-0 cursor-default ${
                !scrollDown && !isOnNavbar && !isDropdownVisible && "text-white"
              }`}
            >
              Cart
            </span>
            <span
              className={` opacity-0 cursor-default ${
                !scrollDown && !isOnNavbar && !isDropdownVisible && "text-white"
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
                  "text-white"
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
            className={`absolute z-40 left-4 block  lg:hidden ${
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
          <div className="lg:hidden h-full flex items-center">
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
            ? `subnav border-t ${
                pathname.split("/")[1] === "collections" &&
                scrollTop &&
                "border-b-transparent"
              } border-b h-32 opacity-1`
            : "h-0 opacity-0"
        }  border-primary/30 bg-white overflow-hidden transition-all duration-200 fixed top-16  w-full`}
      >
        <ul className=" inside-container flex items-center h-full gap-8 text-xs uppercase font-medium ">
          {categories.map((category, i) => (
            <li className="nav-link" key={i}>
              {category}
            </li>
          ))}
        </ul>
      </nav>
    </>
  );
};

Header.propTypes = {
  scrollDown: PropTypes.bool,
};

export default Header;
