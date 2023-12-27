import SocialIcons from "./SocialIcons";
import { BiDownArrow } from "react-icons/bi";
import { CiMail } from "react-icons/ci";

const ContactNav = ({scrollDown}) => {
  return (
    <div className="nav-link dropdown dropdown-hover relative ">
      <span
        tabIndex={0}
        role="button"
        className={` flex justify-between items-center gap-1 ${!scrollDown && "text-aside"}`}
      >
        Contact {/* <BiDownArrow size={17} fill="#6a532d" className="p-0 m-0" /> */}
      </span>
      <ul className="dropdown-content rounded-none  h-36 text-lg menu p-2 shadow relative   bg-base-100  w-68">
        <li>
          <a className="nav-link">
            <span className=" flex justify-between items-center gap-1">
              Contact Us <CiMail fill="#6a532d" className="p-0 m-0" />
            </span>
          </a>
        </li>
        <li>
          <a className="nav-link">info@design4theplanet.com</a>
        </li>
        <li className="cursor-default relative mt-4 w-full bg-white">
          <SocialIcons size={20} color="#6a532d" />
        </li>
      </ul>
    </div>
  );
};
export default ContactNav;
