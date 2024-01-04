import Image from "next/image";
import { FaInstagram } from "react-icons/fa";
import { useRef, useState, useEffect } from "react";
import { createPortal } from "react-dom";
import InstagramTitle from "./InstagramTitle";

const InstagramModal = ({ imageItem }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const overlayRef = useRef(null);
  const cardRef = useRef(null);
  const handleClose = () => setIsModalOpen(false);

  const handleOverlayClick = (event) => {
    if (event.target === overlayRef.current) {
    handleClose()
    }
  };

  const handleCardClick = (event) => {
    if (event.target === cardRef.current) {
      event.stopPropagation();
    }
  };


  useEffect(() => {
    if (isModalOpen) {
      document.body.style.overflowY = "hidden";
    } else {
      document.body.style.overflowY = "auto";
    }
  }, [isModalOpen]);

  return (
    <>
      <div onClick={() => setIsModalOpen(true)} className="relative group">
        <div className="home-instagram-logo">
          <FaInstagram fill="white" size={24} />
        </div>
        <Image
          src={imageItem.image}
          width={500}
          height={500}
          className="home-instagram-img"
          alt="instagram"
        />
      </div>
      <div
        ref={overlayRef}
        onClick={handleOverlayClick}
        className={`bg-black/80 fixed top-0 right-0 mmm left-0 bottom-0 h-full w-full justify-center items-center ${
          isModalOpen ? "flex" : "hidden"
        }`}
      >
        <div ref={cardRef} onClick={handleCardClick} className="md:max-w-2xl lg:max-w-4xl xl:max-w-6xl 2xl:max-w-7xl container ">
          <div className=" card max-h-[650px] lg:card-side bg-white shadow-xl overflow-y-auto ">
            <InstagramTitle handleClose={handleClose} classes={"lg:hidden"} />
            <figure>
              <Image
                className=""
                src={imageItem.image}
                alt="Album"
                height={800}
                width={800}
              />
            </figure>
            <div className="card-body p-0 lg:w-96">
              <InstagramTitle
                handleClose={handleClose}
                classes={"hidden lg:block"}
              />
              <div className="p-6 ">
                <div className="text-sm pb-6   text-gray-500">
                  {imageItem.description}
                  {imageItem.description}
                  {imageItem.description}
                  {imageItem.description}
                
                  <div className="mt-4">
                  {imageItem.hash}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default InstagramModal;
