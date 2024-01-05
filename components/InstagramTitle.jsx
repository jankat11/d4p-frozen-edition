import { FaInstagram } from "react-icons/fa";
import { MdClose } from "react-icons/md";

const InstagramTitle = ({classes, handleClose}) => {
  return (
    <div className={`mt-0 ml-0 lg:border-b p-3 ${classes}`}>
      <div className="flex items-center justify-between gap-4">
        <div className="">
          <a href="https://www.instagram.com/design4theplanet" target="_blank" className="flex items-center gap-4">
          <div className="border p-2 rounded-full">
            <FaInstagram fill="black" size={30} />
          </div>
            <p className="text-black tracking-wider font-medium cursor-pointer">
              design4theplanet
            </p>
          </a>
        </div>
        <div className="card-actions justify-end">
          <button onClick={handleClose} className="mr-2">
            <MdClose fill="gray" size={24} />
          </button>
        </div>
      </div>
    </div>
  );
};
export default InstagramTitle;
