import { PiShoppingCartSimple } from "react-icons/pi";
import Link from "next/link";

const CartLogo = ({noText, classes, size, fill, indicatorClass, isMenuOpen}) => {
  return (
    <a href="#" className={`nav-link ${classes}`}>
      <span className="flex items-center gap-1 justify-center ">
        {!noText && "Cart"}
        <div className="indicator">
          <span className="indicator-item badge absolute -top-[2px] px-[10px] right-[-3px] bg-infoDark border-none text-white mb-2">
            <span className="absolute">1</span>
          </span>
          <PiShoppingCartSimple size={size} fill={fill} />
        </div>
      </span>
      {/* <div className={`text-line`}></div> */}
    </a>
  );
};
export default CartLogo;
