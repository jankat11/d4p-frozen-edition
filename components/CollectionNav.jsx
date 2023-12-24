import { BiDownArrow } from "react-icons/bi";

const CollectionNav = () => {
  return (
    <div className="nav-link dropdown dropdown-hover group z-50 relative ">
      <span
        tabIndex={0}
        role="button"
        className="flex justify-between items-center gap-1 "
      >
        Collection {/* <BiDownArrow size={17} fill="#6a532d" className="p-0 m-0" /> */}
      </span>
      <ul className="dropdown-content rounded-none text-lg menu p-2 shadow relative pt-8 bg-base-100 w-56 ">
        <li>
          <a className="nav-link">Coctail Picks</a>
        </li>
        <li>
          <a className="nav-link">Plates & Bowls</a>
        </li>
        <li>
          <a className="nav-link">Trays</a>
        </li>
        <li>
          <a className="nav-link">Drawer Knob</a>
        </li>
        <li>
          <a className="nav-link">Charcuterie Platter</a>
        </li>
        <div>
          <div  className="card bg-white">
            <div className="collapse-title nav-link pt-0 flex items-center bg-white">
              Textile{" "}
              <BiDownArrow size={17} fill="#6a532d" className="p-0 m-0" />
            </div>
            <div className="  relative bottom-4 left-4  bg-transparent">
              <li>
                <a className="nav-link">Pillowcase</a>
              </li>
              <li>
                <a className="nav-link">Backgammon</a>
              </li>
            </div>
          </div>
        </div>
      </ul>
    </div>
  );
};
export default CollectionNav;
