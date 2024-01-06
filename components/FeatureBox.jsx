import { useInView } from "react-intersection-observer";
/* import { iconData } from "../data"; */
import PropTypes from "prop-types";

const FeatureBox = ({ title, content }) => {
  const [ref, inView] = useInView({
    threshold: 0.5,
    triggerOnce: true,
  });

  return (
    <article
      ref={ref}
      className={`feature-box w-full mx-auto px-6 relative right-2 sm:right-0 opacity-0 font-raleway ${
        inView && "opacity-100"
      }`}
    >
      {/*       {iconData[title]}
      <h3 className="text-accent">{title}</h3> */}
      {/* <p className="md:max-w-[11rem]  mx-auto">{content}</p> */}
    </article>
  );
};

/* FeatureBox.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
}; */

export default FeatureBox;
