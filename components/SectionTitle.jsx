/* import Link from "next/link"; */

const SectionTitle = ({ first, second, classes, third, link }) => {
  return (
    <div
      className={`ps-4 font-raleway w-full sm:w-fit whitespace-nowrap ${
        third && "flex sm:block items-end justify-between"
      } ${classes}`}
    >
      <span
        className={`${
          third ? "flex flex-col gap-2 sm:inline" : "flex items-center"
        }`}
      >
        <span className={`${third && "hidden sm:inline"} `}>{first}</span>{" "}
        {second && (
          <span
            className={`text-letter/60 text-2xl px-2 relative top-[1px] ${
              third && "hidden sm:inline"
            }`}
          >
            |
          </span>
        )}
        <span className="">{second}</span>
      </span>
      {third && (
        <div
          href={link ? link : ""}
          className="text-info px-4 inline-block cursor-pointer whitespace-nowrap"
        >
          <div className="h-3 w-3 rounded-full inline-block bg-info "></div>{" "}
          <span className="px-2 relative bottom-[2px] right-[2px] text-xs tracking-widest font-medium">
            {"explore"}
          </span>
        </div>
      )}
    </div>
  );
};
export default SectionTitle;
