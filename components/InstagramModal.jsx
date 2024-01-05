"use client"
import Image from "next/image";
import { FaInstagram } from "react-icons/fa";
import { useRef, useState, useEffect } from "react";
import { createPortal } from "react-dom";
import InstagramTitle from "./InstagramTitle";

const InstagramModal = ({ imageItem }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [element, setElement] = useState(null);
  const overlayRef = useRef(null);
  const cardRef = useRef(null);
  const handleClose = () => setIsModalOpen(false);

  const handleOverlayClick = (event) => {
    if (event.target === overlayRef.current) {
      handleClose();
    }
  };

  const handleCardClick = (event) => {
    if (event.target === cardRef.current) {
      event.stopPropagation();
    }
  };

  useEffect(() => {
    setElement(document.getElementById("modal"))
  }, [])

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

      {element && createPortal(
        <div
          ref={overlayRef}
          onClick={handleOverlayClick}
          className={`modal-overlay ${
            isModalOpen ? "flex" : "hidden"
          }`}
        >
          <div
            ref={cardRef}
            onClick={handleCardClick}
            className="modal-card"
          >
            <div className="card h-full lg:h-auto lg:card-side bg-white shadow-xl overflow-y-auto">
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
                    <div className="mt-4">{imageItem.hash}</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>,
        element
      )}
    </>
  );
};
export default InstagramModal;
