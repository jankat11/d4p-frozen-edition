const SectionTitle = ({ first, second, classes, third }) => {
  return (
    <div
      className={`ps-4 font-raleway  w-full whitespace-nowrap ${
        third && "flex sm:block items-end justify-between"
      } ${classes}`}
    >
      <span className={`${third && "flex flex-col gap-2 sm:inline"}`}>
        <span className={`${third && "hidden sm:inline"} text-napa`}>
          {first}
        </span>{" "}
        {second && (
          <span
            className={`text-napa text-2xl px-2 relative top-[1px] ${
              third && "hidden sm:inline"
            }`}
          >
            |
          </span>
        )}
        <span className="text-primary">{second}</span>
      </span>
      {third && (
        <span className="text-info px-4 cursor-pointer whitespace-nowrap">
          <div className="h-3 w-3 rounded-full inline-block bg-info "></div>{" "}
          <span className="px-4 relative bottom-[2px] right-[2px] text-xs tracking-widest font-medium">
            {"explore"}
          </span>
        </span>
      )}
    </div>
  );
};
export default SectionTitle;
