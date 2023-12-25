import { FaRecycle } from "react-icons/fa";
import { MdOutlineCrueltyFree, MdHealthAndSafety } from "react-icons/md";
import { GiEcology } from "react-icons/gi";

export const featureBoxes = [
  {
    id: 0,
    title: "upcycle",
    content:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. A expedita vel doloribus!",
  },
  {
    id: 1,
    title: "sustainable",
    content:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. A expedita vel doloribus!",
  },
  {
    id: 2,
    title: "non-toxic",
    content:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. A expedita vel doloribus!",
  },
  {
    id: 3,
    title: "cruelty-free",
    content:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. A expedita vel doloribus!",
  },
];

const iconProps = {
  size: 45,
  fill: "#ad9b7c",
  fillOpacity: 0.9, 
  className: "mb-2 inline-block",
};

export const iconData = {
  upcycle: <FaRecycle {...iconProps} />,
  sustainable: <GiEcology {...iconProps} />,
  "non-toxic": <MdHealthAndSafety {...iconProps} />,
  "cruelty-free": <MdOutlineCrueltyFree {...iconProps} />,
};
