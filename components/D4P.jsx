import Image from "next/image";
import Link from "next/link";

const D4P = ({ initialLoad }) => {
  return (
    <Link href={"/"} className="relative lg:right-[24px] bottom-[1px]  shrink-0">
      <Image
        width={1560}
        height={50}
        src="/brandMobile.png"
        quality={100}
        className={`w-[156px] pt-2 lg:pe-2 z-40  ${
          initialLoad && "" /* "animate__animated animate__flipInY animate__delay-1s" */
        }`}
        style={{width: "156px", height: "auto"}}
        alt="logo"
      />
    </Link>
  );
};
export default D4P;
