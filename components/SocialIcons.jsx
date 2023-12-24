import { FaInstagram } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaPinterestP } from "react-icons/fa";

const SocialIcons = ({ size, classes, color }) => {
  return (
    <div className="nav-link ">
      <span className={`flex gap-4 w-full cursor-default ${classes}`}>
        <a href="https://instagram.com/">
          <FaInstagram fill={color} size={size} />{" "}
        </a>
        <a href="https://facebook.com/">
          <FaFacebookF fill={color} size={size} />{" "}
        </a>
        <a href="https://twitter.com/">
          <FaXTwitter fill={color} size={size} />{" "}
        </a>
        <a href="https://pinterest.com/">
          <FaPinterestP fill={color} size={size} />
        </a>
      </span>
    </div>
  );
};
export default SocialIcons;
