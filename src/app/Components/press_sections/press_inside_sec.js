"use client";
import React, { useEffect, useRef } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../../../app/globals.css";
import "../../../app/inside_pg_spotlight.css";
import Image from "next/image";

// import NewsAndPr_spotlight_img from '../../../../public/about_page/about_spotlight_sec/about_spotlight_img.jpg'

const Press_inside_sec = ({videoLink}) => {
  const videoEl1 = useRef(null);

  const attemptPlay = () => {
    if (videoEl1.current) {
      videoEl1.current.play().catch((error) => {
        console.error("Error attempting to play", error);
      });
    }
  };

  useEffect(() => {
    attemptPlay();
  }, []);

  return (
    <div className="press_inside_sec tab_padding">
      <div className="cstm-cont-wdt">
        <div className="row no_margin ">
          <div className="col-lg-12 col-md-12 col-12 ">
            <div className="pro_dtl_medi_sld">
              <video
                className="property_video"
                controls
                playsInline
                loop
                muted
                // src="https://wordpress-1034502-4717804.cloudwaysapps.com/wp-content/uploads/2024/07/press_video.mp4"
                src={videoLink}
                ref={videoEl1}
              />
              {/* <iframe
                    id='property_video_id'
                    className="property_video"
                    src='https://wordpress-1034502-4717804.cloudwaysapps.com/wp-content/uploads/2024/07/press_video.mp4'
                    ></iframe> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Press_inside_sec;
