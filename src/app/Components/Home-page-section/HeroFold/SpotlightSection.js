"use client";

import React, { useEffect, useRef, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { MotionDiv } from "../../MotionDiv/MotionDiv";

import Image from "next/image";
import homeImg from "../../../../../public/Spotlight-Images/Home-img.jpg";
import lstImg from "../../../../../public/Spotlight-Images/ltst-img.png";
import leftarwimg from "../../../../../public/Spotlight-Images/Arrow-left.svg";
import rgtarwimg from "../../../../../public/Spotlight-Images/Arrow-right.svg";
import "./SpolightModule.css";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Navigation, Thumbs, EffectFade } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";
import "swiper/css/effect-fade";

import Link from "next/link";
// import { FaLinkedin } from "react-icons/fa6";
// import { IoCloseCircle } from "react-icons/io5";

export default function SpotlightSection() {
  const videoEl = useRef(null);

  const attemptPlay = () => {
    if (videoEl.current) {
      videoEl.current.play().catch((error) => {
        console.error("Error attempting to play", error);
      });
    }
  };

  useEffect(() => {
    attemptPlay();
  }, []);

  const [thumbsSwiper, setThumbsSwiper] = useState(null);

  return (
    <>
      <div className="Spotloght_Section_main">
        <div className="row">
          <div className="col-md-12 col-lg-6  bgr-color-sec">
            <div className="insd-spotligt-hd">
              <Swiper
                thumbs={{ swiper: thumbsSwiper }}
                navigation={{
                  nextEl: ".spot-arrow-left",
                  prevEl: ".spot-arrow-right",
                }}
                spaceBetween={10}
                slidesPerView={1}
                draggable={false}
                freeMode={true}
                watchSlidesProgress={true}
                effect="fade"
                fadeEffect={{ crossFade: true }}
                speed={600} // Adjust the speed here (e.g., 1000ms = 1 second)
                modules={[FreeMode, Navigation, Thumbs, EffectFade]}
                className="mySwiper"
              >
                <SwiperSlide>
                  <div className="lft-container-txt">
                    <div className="font-museo top-hd" style={{overflow:'hidden'}}>
                      <MotionDiv initial={{y:100, opacity:0}} whileInView={{y:0, opacity:1}} transition={{delay:0.2, duration:1}}  viewport={{ once: true }}>
                        <h2 className="section_hd">Transforming <br /> Standards <span>Hospitality</span></h2>
                      </MotionDiv>
                    </div>
                    <div className="para-section">
                      <div className="row">
                        <div className="col-md-6 font-museo para-txt">
                          <p>
                            Advent Hotel International is a premier hospitality
                            company with a robust portfolio and a focus on
                            upscale branded assets in key markets.
                          </p>
                        </div>
                        <div className="col-md-6">
                          <div className="lern-btn">
                            <button className="stl-lrn-btn">Learn More</button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>

                <SwiperSlide>
                  <div className="lft-container-txt">
                    <div className="font-museo top-hd">
                      <h2 className="section_hd">Transforming <br /> Standards <span>Hospitality</span></h2>
                    </div>
                    <div className="para-section">
                      <div className="row ">
                        <div className="col-md-6 font-museo para-txt">
                          <p className="">
                            Advent Hotel International is a premier hospitality
                            company with a robust portfolio and a focus on
                            upscale branded assets in key markets.
                          </p>
                        </div>
                        <div className="col-md-6">
                          <div className="lern-btn">
                            <button className="stl-lrn-btn">Learn More</button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>

                <SwiperSlide>
                  <div className="lft-container-txt">
                    <div className="font-museo top-hd">
                      <h2 className="section_hd">Transforming <br /> Standards <span>Hospitality</span></h2>
                    </div>
                    <div className="para-section">
                      <div className="row">
                        <div className="col-md-6 font-museo para-txt">
                          <p className="">
                            Advent Hotel International is a premier hospitality
                            company with a robust portfolio and a focus on
                            upscale branded assets in key markets.
                          </p>
                        </div>
                        <div className="col-md-6">
                          <div className="lern-btn">
                            <button className="stl-lrn-btn">Learn More</button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              </Swiper>

              {/* <div className="btm-txt-main">
                <div className="row">
                  <div className="col-md-2 frt-fty-wd">
                    <p className="lts-para">Latest News</p>
                  </div>
                  <div className="col-md-10 bg-lst-clr">
                    <div className="lst-para-sec">
                      <div className="btm-txt-con">
                        <Image
                          className="o img-ltst"
                          alt="jdskj"
                          src={lstImg}
                        />
                        <div className="dt-wt-para font-museo">
                          <h4 className="ad-para">
                            Valor Estate News: New Deals, Launches & FY25
                            Outlook
                          </h4>
                          <p className="dt-txt">June, 2024</p>
                        </div>

                        <div className="spc-blnk"></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div> */}
            </div>
          </div>

          <div className="col-md-12 col-lg-6 sldr-con-main">
            <div className="slider-main">
              <Swiper
                // style={{
                //   "--swiper-navigation-color": "#fff",
                //   "--swiper-pagination-color": "#fff",
                // }}
                slidesPerView={1}
                onSwiper={setThumbsSwiper}
                spaceBetween={1}
                modules={[FreeMode, Navigation, Thumbs]}
                className="mySwiper2"
              >
                <SwiperSlide>
                  <div className="banner_video">
                    <video
                      autoPlay
                      playsInline
                      loop
                      muted
                      src="./Hotel_Video.mp4"
                      ref={videoEl}
                    />
                  </div>
                  {/* <Image className="spt-sld-img" src={homeImg} /> */}
                </SwiperSlide>

                <SwiperSlide>
                  <Image className="spt-sld-img" src={homeImg} />
                </SwiperSlide>

                <SwiperSlide>
                  <Image className="spt-sld-img" src={homeImg} />
                </SwiperSlide>
              </Swiper>
            </div>
          </div>
        </div>
        <button className="spot-arrow-left arrow">
          <Image src={leftarwimg} />
        </button>
        <button className="spot-arrow-right arrow">
          <Image src={rgtarwimg} />
        </button>
      </div>
    </>
  );
}
