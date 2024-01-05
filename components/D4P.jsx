import Image from "next/image";
import Link from "next/link";

const D4P = ({ scrollDown, isOnNavbar, isDropdownVisible }) => {
  return (
    <Link href={"/"} className="relative h-full flex items-center shrink-0">
      <Image
        width={1560}
        height={50}
        src="/brandMobile.png"
        quality={100}
        priority
        className={`w-[156px] pt-2  lg:pe-2 z-30 ${
          !scrollDown && !isOnNavbar && !isDropdownVisible
            ? "invert brightness-0"
            : ""
        }`}
        style={{ width: "156px", height: "auto" }}
        alt="logo"
      />
    </Link>
  );
};
export default D4P;
