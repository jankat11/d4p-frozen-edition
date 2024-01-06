import SidebarContent from "./SidebarContent";
import { useRef, useEffect, useState } from "react";
import Hamburger from "./Hamburger";

const Sidebar = ({
  handleClick,
  isMenuOpen,
  scrollDown,
  closeMenu,
  isOnNavbar,
}) => {
  const menuIconRef = useRef(null);

  const handleMenuClick = () => {
    menuIconRef.current.click();
  };

  const handleOverlay = () => {
    closeMenu();
  };

  return (
    <div className="drawer ">
      <input id="my-drawer" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content">
        <label htmlFor="my-drawer" className="">
          <div
            ref={menuIconRef}
            onClick={handleClick}
            className={`absolute hamburger cursor-pointer -top-[6px] block z-40 ${
              isMenuOpen && "open"
            }`}
          >
            <Hamburger
              classes={
                !scrollDown && !isMenuOpen && !isOnNavbar
                  ? "bg-white"
                  : "bg-primary"
              }
            />
          </div>
        </label>
      </div>
      <div className="drawer-side ">
        <label
          htmlFor="my-drawer"
          onClick={handleOverlay}
          aria-label="close sidebar"
          className="drawer-overlay"
        ></label>

        <div className="bg-white h-screen w-80">
          <div className="mt-16 px-6">
            <SidebarContent handleMenuClick={handleMenuClick} />
          </div>
        </div>
      </div>
    </div>
  );
};
export default Sidebar;
