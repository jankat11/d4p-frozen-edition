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
            <span className={`hamburger-top ${!scrollDown && !isMenuOpen ? "bg-aside" : "bg-primary"}`}></span>
            <span className={`hamburger-middle ${!scrollDown && !isMenuOpen ? "bg-aside" : "bg-primary"}`}></span>
            <span className={`hamburger-bottom ${!scrollDown && !isMenuOpen ? "bg-aside" : "bg-primary"}`}></span>
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

/* 
<div class="flex ">
    <input type="checkbox" id="drawer-toggle" class="relative sr-only peer" checked>
    <label for="drawer-toggle" class="absolute top-0 left-0 inline-block p-4 transition-all duration-500 bg-indigo-500 rounded-lg peer-checked:rotate-180 peer-checked:left-64">
        <div class="w-6 h-1 mb-3 -rotate-45 bg-white rounded-lg"></div>
        <div class="w-6 h-1 rotate-45 bg-white rounded-lg"></div>
  
    
    </label>
    <div class="fixed top-0 left-0 z-20 w-64 h-full transition-all duration-500 transform -translate-x-full bg-white shadow-lg peer-checked:translate-x-0">
      <div class="px-6 py-4">
        <h2 class="text-lg font-semibold">Drawer</h2>
        <p class="text-gray-500">This is a drawer.</p>
      </div>
    </div>
  </div>
*/