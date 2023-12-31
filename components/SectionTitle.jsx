const SectionTitle = ({ first, second, classes, third }) => {
  return (
    <div
      className={`ps-4 font-raleway  w-full whitespace-nowrap ${
        third && "flex sm:block items-end justify-between"
      } ${classes}`}
    >
      <span className={`${third && "flex flex-col gap-2 sm:inline"}`}>
        <span className={`${third && "hidden sm:inline"} text-letter/70`}>{first}</span>{" "}
        {second && <span
          className={`text-letter/70 text-2xl px-2 relative top-[1px] ${
            third && "hidden sm:inline"
          }`}
        >
          |
        </span>}
        <span className="text-letter">{second}</span>
      </span>
      {third && (
        <span className="text-infoDark px-4 cursor-pointer whitespace-nowrap">
          <div className="h-3 w-3 rounded-full inline-block bg-infoDark"></div>{" "}
          <span className="px-4 relative bottom-[1px] right-[2px]">
            {"explore"}
          </span>
        </span>
      )}
    </div>
  );
};
export default SectionTitle;
