const CustomDots = () => {
  const Dots = ({ index, onClick, active }) => {
    return (
      <div className="border-1 sm:hidden px-1 pt-6 pb-2 relative left-24 ">
        <button
          onClick={(e) => {
            onClick();
            e.preventDefault();
          }}
          className={`custom-dot border rounded-full border-primary   h-3 w-3 ${
            active ? "bg-primary" : ""
          }`}
        ></button>
      </div>
    );
  };
  return <Dots />;
};
export default CustomDots;
