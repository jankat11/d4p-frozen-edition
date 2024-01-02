import SidebarContent from "./SidebarContent";
import { useRef } from "react";
import Hamburger from "./Hamburger";

const Sidebar = ({ handleClick, isMenuOpen, scrollDown }) => {
  const menuIconRef = useRef(null);

  const handleMenuClick = () => {
    menuIconRef.current.click();
  };

  return (
    <section>
      <div
        ref={menuIconRef}
        onClick={handleClick}
        className={`absolute  -top-[6px] block z-50 ${isMenuOpen && "open"}`}
      >
        <Hamburger
          classes={!scrollDown && !isMenuOpen ? "bg-aside" : "bg-primary"}
        />
      </div>
      <div
        class={`absolute -top-8 -left-4 z-20  transition-all duration-500 transform ${
          !isMenuOpen && "-translate-x-full"
        } `}
      >
        <div class="px-6 py-4 bg-aside  h-screen w-screen">
          <div className="mt-12">
            <SidebarContent handleMenuClick={handleMenuClick} />
          </div>
        </div>
      </div>
    </section>
  );
};
export default Sidebar;
