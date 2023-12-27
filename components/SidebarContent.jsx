import Link from "next/link";
import { CiMail } from "react-icons/ci";

const SidebarContent = ({handleMenuClick}) => {
  return (
    <ul className="  text-lg menu p-2 px-4  relative mt-16 font-raleway font-medium">
      <li onClick={handleMenuClick}>
        <a className="nav-link">Coctail Picks</a>
      </li>
      <li onClick={handleMenuClick}>
        <a className="nav-link">Plates & Bowls</a>
      </li>
      <li onClick={handleMenuClick}>
        <a className="nav-link">Trays</a>
      </li>
      <li onClick={handleMenuClick}>
        <a className="nav-link">Drawer Knob</a>
      </li>
      <li onClick={handleMenuClick}>
        <a className="nav-link">Charcuterie Platter</a>
      </li>
      <li onClick={handleMenuClick}>
        <a className="nav-link">Pillowcase</a>
      </li>
      <li onClick={handleMenuClick}>
        <a className="nav-link">Backgammon</a>
      </li>
      <div  className="mt-4 border-t">
        <li onClick={handleMenuClick}>
          <Link href="/our-story" className="nav-link  whitespace-nowrap ">
            <span className="text-lg ">Our Story</span>
          </Link>
        </li>
        <li onClick={handleMenuClick}>
          <a className="nav-link">
            <span className=" flex justify-between items-center gap-1">
              Contact Us <CiMail fill="#6a532d" className="p-0 m-0" />
            </span>
          </a>
        </li>
        <li onClick={handleMenuClick}>
          <a className="nav-link">info@design4theplanet.com</a>
        </li>
        <li className="cursor-default relative mt-4 w-full bg-white"></li>
      </div>
    </ul>
  );
};
export default SidebarContent;
