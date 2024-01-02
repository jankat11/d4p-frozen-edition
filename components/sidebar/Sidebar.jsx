import SidebarContent from "./SidebarContent";
import { useRef } from "react";
import Hamburger from "./Hamburger";

const Sidebar = ({ handleClick, isMenuOpen, scrollDown }) => {
  const menuIconRef = useRef(null);

  const handleMenuClick = () => {
    menuIconRef.current.click();
  };

  return (
    <section className="drawer">
      <input id="my-drawer" type="checkbox" className="drawer-toggle" />
      <div
        ref={menuIconRef}
        onClick={handleClick}
        className={` drawer-content  ${isMenuOpen && "open"}`}
      >
        <label htmlFor="my-drawer" className="">

          <Hamburger
            classes={!scrollDown && !isMenuOpen ? "bg-aside" : "bg-primary"}
          />

        </label>
        
      </div>
      <div className={`drawer-side  ${""} `}>
        <label
          htmlFor="my-drawer"
          aria-label="close sidebar"
          className="drawer-overlay"
        ></label>
        <div className="  bg-aside  h-screen w-72">
          <div className="mt-12">
            <SidebarContent handleMenuClick={handleMenuClick} />
          </div>
        </div>
      </div>
    </section>
  );
};
export default Sidebar;




/* 
import SidebarContent from "./SidebarContent";
import { useRef } from "react";
import Hamburger from "./Hamburger";

const Sidebar = ({ handleClick, isMenuOpen, scrollDown }) => {
  const menuIconRef = useRef(null);

  const handleMenuClick = () => {
    menuIconRef.current.click();
  };

  return (
    <section className="drawer">
      <input id="my-drawer" type="checkbox" className="drawer-toggle" />
      <div
        ref={menuIconRef}
        onClick={handleClick}
        className={` drawer-content  ${isMenuOpen && "open"}`}
      >
        <label htmlFor="my-drawer" className="">

          <Hamburger
            classes={!scrollDown && !isMenuOpen ? "bg-aside" : "bg-primary"}
          />

        </label>
        
      </div>
      <div className={`drawer-side  ${""} `}>
        <label
          htmlFor="my-drawer"
          aria-label="close sidebar"
          className="drawer-overlay"
        ></label>
        <div className="  bg-aside  h-screen w-72">
          <div className="mt-12">
            <SidebarContent handleMenuClick={handleMenuClick} />
          </div>
        </div>
      </div>
    </section>
  );
};
export default Sidebar;


*/