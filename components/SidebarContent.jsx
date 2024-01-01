import Link from "next/link";
import { CiMail } from "react-icons/ci";

const SidebarContent = ({handleMenuClick}) => {
  return (
    <ul className="  text-xl uppercase menu p-2 px-4  relative mt-16 font-raleway font-semibold">
      <li className="py-2" onClick={handleMenuClick}>
        <a className="nav-link">Coctail Picks</a>
      </li>
      <li className="py-2" onClick={handleMenuClick}>
        <a className="nav-link">Plates & Bowls</a>
      </li>
      <li className="py-2" onClick={handleMenuClick}>
        <a className="nav-link">Trays</a>
      </li>
      <li className="py-2" onClick={handleMenuClick}>
        <a className="nav-link">Drawer Knob</a>
      </li>
      <li className="py-2" onClick={handleMenuClick}>
        <a className="nav-link">Charcuterie Platter</a>
      </li>
      <li className="py-2" onClick={handleMenuClick}>
        <a className="nav-link">Pillowcase</a>
      </li>
      <li className="py-2" onClick={handleMenuClick}>
        <a className="nav-link">Backgammon</a>
      </li>
      <div  className="mt-4 pt-4 border-t">
        <li onClick={handleMenuClick}>
          <Link href="/our-story" className="nav-link  whitespace-nowrap ">
            <span>Our Story</span>
          </Link>
        </li>
        <li className="py-2" onClick={handleMenuClick}>
          <a className="nav-link">
            <span className=" flex justify-between items-center gap-1">
              Contact Us <CiMail fill="#674B24" className="p-0 m-0" />
            </span>
          </a>
        </li>
        <li className="" onClick={handleMenuClick}>
          <a className="nav-link lowercase">info@design4theplanet.com</a>
        </li>
        <li className="cursor-default relative mt-4 w-full bg-white"></li>
      </div>
    </ul>
  );
};
export default SidebarContent;
