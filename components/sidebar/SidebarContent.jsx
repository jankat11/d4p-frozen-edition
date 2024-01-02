import Link from "next/link";
import { CiMail } from "react-icons/ci";
import { BiDownArrow } from "react-icons/bi";

const categories = [
  "Coctail Picks",
  "Plates & Bowls",
  "Trays",
  "Drawer Knob",
  "Charcuterie Platter",
  "Pillowcase",
  "Backgammon",
];

const SidebarContent = ({ handleMenuClick }) => {
  return (
    <section className="  text-lg uppercase font-raleway font-semibold">
      <li className="py-4 flex items-baseline" onClick={handleMenuClick}>
        <a className="nav-link">Collections</a>
        <BiDownArrow size={17} fill="#674B24" className="p-0 m-2" />
      </li>
      <ul className="px-4 text-base">
        {categories.map((category, i) => (
          <li className="py-2" key={i} onClick={handleMenuClick}>
            <a className="nav-link">{category}</a>
          </li>
        ))}
      </ul>
      <ul className="mt-6 py-6 pt-8 border-t">
        <li onClick={handleMenuClick}>
          <Link href="/our-story" className="nav-link  whitespace-nowrap ">
            <span>Our Story</span>
          </Link>
        </li>
        <li className="py-6" onClick={handleMenuClick}>
          <a className="nav-link">
            <span className=" flex justify-start items-center gap-1">
              Contact
            </span>
          </a>
        </li>
       {/*  <li className="" onClick={handleMenuClick}>
          <a className="nav-link lowercase">info@design4theplanet.com</a>
        </li> */}
        <li className="cursor-default relative mt-4 w-full bg-white"></li>
      </ul>
    </section>
  );
};
export default SidebarContent;
