import SidebarContent from "./SidebarContent";
import { useRef } from "react";

const Sidebar = ({handleClick, isMenuOpen, scrollDown}) => { 
  const menuIconRef = useRef(null);
  
  const handleMenuClick = () => {
    menuIconRef.current.click()
  }

  return (
    <div className="drawer">
      <input id="my-drawer" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content">
        {/* Page content here */}
        <label htmlFor="my-drawer" className="">
          <div
            ref={menuIconRef}
            onClick={handleClick}
            className={`absolute hamburger cursor-pointer -top-[6px] block z-50 ${
              isMenuOpen && "open"
            }`}
          >
            <span className={`hamburger-top ${!scrollDown && !isMenuOpen ? "bg-aside" : "bg-[#886b3a]"}`}></span>
            <span className={`hamburger-middle ${!scrollDown && !isMenuOpen ? "bg-aside" : "bg-[#886b3a]"}`}></span>
            <span className={`hamburger-bottom ${!scrollDown && !isMenuOpen ? "bg-aside" : "bg-[#886b3a]"}`}></span>
          </div>
        </label>
      </div>
      <div className="drawer-side">
        <label
          htmlFor="my-drawer"
          aria-label="close sidebar"
          className="drawer-overlay"
        ></label>
        <ul className="p-4 w-full min-h-full bg-aside">
          {/* Sidebar content here */}
          <li>
            <SidebarContent handleMenuClick={handleMenuClick} />
          </li>
        </ul>
      </div>
    </div>
  );
};
export default Sidebar;
