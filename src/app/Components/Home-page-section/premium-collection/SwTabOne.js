import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";
import rightic from "../../../../../public/ESG-images/right-icon.svg";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/free-mode";
import "swiper/css/thumbs";

import "./SwiperTabs.css";

import { FreeMode, Navigation } from "swiper/modules";
import Link from "next/link";

export default function SwTabOne({ propertiesData }) {
  return (
    <div className="tab-swiper-slider">
      <div className="tabs-inside-slider">
        <button className="arrow-left arrow"></button>
        <button className="arrow-right arrow"></button>

        <Swiper
          spaceBetween={20}
          navigation={{ nextEl: ".arrow-left", prevEl: ".arrow-right" }}
          breakpoints={{
            320: {
              slidesPerView: 1.2, // For mobile devices
            },
            768: {
              slidesPerView: 2.2, // For larger screens
            },
            1024: {
              slidesPerView: 3.2, // For larger screens
            },
          }}
          modules={[FreeMode, Navigation]}
          className="mySwiper2"
        >
          {propertiesData?.length === 0 
            ? ( Array.from({length:8}).map((_,index)=>(
              <SwiperSlide key={index}>
                
                <div className="New skeleton">
                   
                </div> 
            


              </SwiperSlide>
            )) )   
            : (
              propertiesData.map((property) => (
                <SwiperSlide key={property.id}>
                  <div className="">
                    <div className="insd_tab ">
                      <div className="img_tab">
                        <Image
                          src={property?.acf?.thumb_image}
                          width={100}
                          height={100}
                          alt="Property Thumbnail"
                        />
                      </div>
                      <div className="content_tab">
                        <div>
                          <h3 className="hd-tb-tp">{property?.slug}</h3>
                          <p className="para-tb-md">{property?.acf?.location}</p>
                        </div>
                        <div className="rdm-btn rdm-btnCon">
                          <Link
                            href={`/properties/${property?.slug}`}
                            className="font-museo rd-mr-a rd-mr-tbtn mob-read-btn"
                          >
                            Read More{" "}
                          </Link>
                          <Image
                            className="slider-img-prem"
                            src={rightic}
                            alt="Right Icon"
                           
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              ))
            )
          }
        </Swiper>
      </div>
    </div>
  );
}




// .swiper-slide 