import { paths } from "@/logoData";
import Image from "next/image";
import { useState, useEffect } from "react";

const Opening = () => {
  const [hidden, setHidden] = useState(false);
  useEffect(() => {
    setTimeout(() => {
      setHidden(true);
    }, 4500);
  }, []);

  useEffect(() => {
    if (!hidden) {
      document.body.style.overflowY = "hidden";
    } else {
      document.body.style.overflowY = "auto";
    }
  }, [hidden]);

  /* animate__animated animate__fadeOut animate__delay-5s */

  return (
    <section
      className={`opening opening-logo overflow-hidden translate-x-[-100%]`}
    >
      <Image
        src="/brand.png"
        width={500}
        height={500}
        className="absolute z-[9999] animate__animated animate__flipInY animate__delay-2s"
        alt="brand"
      />
    </section>
  );
};
export default Opening;

{
  /*       <svg
        version="1.0"
        xmlns="http://www.w3.org/2000/svg"
        width="300.000000pt"
        height="275.000000pt"
        viewBox="0 0 300.000000 275.000000"
        preserveAspectRatio="xMidYMid meet"
        className="absolute"
      >
        <metadata>
          Created by potrace 1.10, written by Peter Selinger 2001-2011
        </metadata>
        <g
          transform="translate(0.000000,275.000000) scale(0.100000,-0.100000)"
          className=""
          
        >
          {paths.map((path, i) => {
            const delay = `${i * 0.02}s`;
            let style = {
              animationName: "appear",
              animationDuration: "100s",
              animationDelay: delay,
              opacity: "1",
            };
            const newpath = {
              ...path.props,
              
              style,
            };
            return <path key={Math.random()} {...newpath} />;
          })}
        </g>
      </svg> */
}
