import ReactCompareImage from "react-compare-image";


const Slider = () => {
  return (
    <section className="sm:my-24">
      <div className="overflow-hidden sm:rounded-sm ">
        <ReactCompareImage
          leftImage="homepage/plts.png"
          rightImage="homepage/trash.png"
        />
      </div>
    </section>
  );
};
export default Slider;
