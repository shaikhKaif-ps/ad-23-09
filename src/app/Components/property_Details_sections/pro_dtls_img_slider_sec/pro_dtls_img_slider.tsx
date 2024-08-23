"use client";

import React, { useRef, useState } from "react";
import Image from "next/image";

// PopUP
import "react-responsive-modal/styles.css";
import { Modal } from "react-responsive-modal";
import Link from "next/link";
import "../../about_sections/about_team_sec/popup_team.css";

// Slider
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";

import "../../../globals.css";
import "./pro_dtls_img_slider.css";
import { FreeMode, Navigation } from "swiper/modules";

import sliderImg1 from "../../../../../public/pro_dtls_page/pro_dtls_media_slider/Hilton_image1.jpg";
import sliderImg2 from "../../../../../public/pro_dtls_page/pro_dtls_media_slider/Hilton_image2.jpg";
import sliderImg3 from "../../../../../public/pro_dtls_page/pro_dtls_media_slider/Hilton_image3.jpg";
import sliderImg4 from "../../../../../public/pro_dtls_page/pro_dtls_media_slider/Hilton_image4.jpg";
import sliderImg5 from "../../../../../public/pro_dtls_page/pro_dtls_media_slider/Hilton_image5.jpg";
import sliderImg6 from "../../../../../public/pro_dtls_page/pro_dtls_media_slider/Hilton_image6.jpg";
import sliderImg7 from "../../../../../public/pro_dtls_page/pro_dtls_media_slider/Hilton_image7.jpg";
import sliderImg8 from "../../../../../public/pro_dtls_page/pro_dtls_media_slider/Hilton_image8.jpg";
import sliderImg9 from "../../../../../public/pro_dtls_page/pro_dtls_media_slider/Hilton_image9.jpg";
import sliderImg10 from "../../../../../public/pro_dtls_page/pro_dtls_media_slider/Hilton_image10.jpg";

export default function Pro_dtls_img_slider({ propMediaImg }) {
  const [modalOpen1, setModalOpen1] = useState(false);
  const [modalOpen2, setModalOpen2] = useState(false);
  const [modalOpen3, setModalOpen3] = useState(false);

  const openModal1 = () => setModalOpen1(true);
  const closeModal1 = () => setModalOpen1(false);

  const openModal2 = () => setModalOpen2(true);
  const closeModal2 = () => setModalOpen2(false);

  const openModal3 = () => setModalOpen3(true);
  const closeModal3 = () => setModalOpen3(false);
  return (
    <div className="pro_media_main_slider_dv">
      <Swiper
        spaceBetween={0}
        navigation={{
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        }}
        slidesPerView={2.8}
        // centeredSlides={true}
        loop={true}
        modules={[FreeMode, Navigation]}
        breakpoints={{
          320: {
            slidesPerView: 1, // For mobile devices
          },
          480: {
            slidesPerView: 1.2, // For mobile devices
          },
          767: {
            slidesPerView: 2.3, // For larger screens
          },
          1270: {
            slidesPerView: 2.8, // For larger screens
          },
        }}
        className="mySwiper2"
      >
        {propMediaImg &&
          propMediaImg.map((propImg, ind) => (
            <SwiperSlide key={ind}>
              <div className="pro_dtl_medi_sld">
                <Image src={propImg} alt="" width={100} height={100} />
              </div>
            </SwiperSlide>
          ))}
      </Swiper>

      <button className="swiper-button-prev"></button>
      <button className="swiper-button-next"></button>
      <button className="swiper-pop-button " onClick={openModal1}></button>

      <Modal open={modalOpen1} onClose={closeModal1} center>
        <Swiper
          spaceBetween={0}
          navigation={{
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
          }}
          slidesPerView={1}
          // centeredSlides={true}
          loop={true}
          modules={[FreeMode, Navigation]}
          breakpoints={{
            320: {
              slidesPerView: 1,
            },
            480: {
              slidesPerView: 1,
            },
            767: {
              slidesPerView: 1,
            },
          }}
          className="mySwiper2 popup_slider"
        >
          {propMediaImg.map((propImg, ind) => (
            <SwiperSlide key={ind}>
              <div className="pro_dtl_medi_sld">
                <Image src={propImg} alt="" width={100} height={100} />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
        <button className="swiper-button-prev"></button>
        <button className="swiper-button-next"></button>
      </Modal>
    </div>
  );
}
