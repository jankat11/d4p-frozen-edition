import { PiShoppingCartSimple } from "react-icons/pi";
import Link from "next/link";

const CartLogo = ({ noText, classes, size, fill, scrollDown, isMenuOpen }) => {
  return (
    <Link href="/" className={`nav-link ${classes}`}>
      <span
        className={`flex items-center gap-1 justify-center ${
          !scrollDown && "text-white"
        }`}
      >
        {!noText && "Cart"}
        <div className="indicator font-raleway">
          {/* <span className={`indicator-item badge absolute -top-[2px] px-[10px] right-[-3px] ${scrollDown || isMenuOpen ? " bg-[#6b593c] border-[#6b593c] text-white" : " border-aside "} transition-all duration-0 mb-2`}>
            <span className="absolute">1</span>
          </span> */}
          <PiShoppingCartSimple size={size} fill={fill ? fill : "#674B24"} />
        </div>
      </span>
      {/* <div className={`text-line`}></div> */}
    </Link>
  );
};
export default CartLogo;
