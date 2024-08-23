"use client";

import React, { useRef, useState, useEffect } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";

import img1 from "../../../../../public/NewsLetter_img/News-img.jpg";
import News_thumb from "../../../../../public/NewsLetter_img/News_thumb.jpg";
import pr_thumb from "../../../../../public/NewsLetter_img/pr_thumb.jpg";
import pr_Video2_thumb from "../../../../../public/NewsThumnails/valorEstate-news.png";
import arrow from "../../../../../public/NewsLetter_img/arrow.svg";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";

// import "../../../globals.css";
// import "../premium-collection/premiumSection_module.css";
import "./newsletter.css";

// import required modules
import { FreeMode, Navigation, Thumbs } from "swiper/modules";
import { Tab, Tabs } from "react-bootstrap";
import Link from "next/link";
// import SwTabOne from "../premium-collection/SwTabOne";

export default function NewsLetter() {
  const [newsData, setNewData] = useState([]);
  const [videoPressRelease, setVideoPressRelease] = useState([]);

  const fetchNewsData = async () => {
    try {
      const res = await fetch(
        "https://wordpress-1034502-4717804.cloudwaysapps.com/wp-json/wp/v2/news"
      );
      const finalData = await res.json();
      setNewData(finalData);
    } catch (error) {
      console.log(error);
    }
  };

  const fetchVideoPressRelease = async () => {
    try {
      const res = await fetch(
        "https://wordpress-1034502-4717804.cloudwaysapps.com/wp-json/wp/v2/press_release"
      );
      const finalData = await res.json();
      setVideoPressRelease(finalData);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchNewsData();
    fetchVideoPressRelease();
  }, []);

  return (
    <div className="newsletter-section cstm-cont-wdt">
      <div className="Newshd">
        <h2 className="section_hd">Media</h2>
      </div>

      <div className="newsletter-slider">
        <div className="tab-section">
          <div className="row">
            <div className="col-md-12">
              <div className="pipeline_section ">
                <Tabs defaultActiveKey="tab1" id="pipeline_tabs">



                  {/* News */}
                  <Tab className="tab-ttl hd-mob" eventKey="tab1" title="News">
                    <Swiper
                      spaceBetween={30}
                      navigation={true}
                      breakpoints={{
                        320: {
                          slidesPerView: 1, // For mobile devices
                        },
                        768: {
                          slidesPerView: 2, // For larger screens
                        },
                        1024: {
                          slidesPerView: 3, // For larger screens
                        },
                        1279: {
                          slidesPerView: 4, // For larger screens
                        },
                      }}
                      modules={[FreeMode, Navigation, Thumbs]}
                      className="mySwiper2"
                    >
                      {
                        newsData?.length === 0  
                        ? (
                          Array.from({length:3}).map((_,index)=>(
                            <SwiperSlide key={index}>
                              {/* <div id="newsskeleton" ></div> */}
                              <div id="newsSkeleton" ></div>
                            </SwiperSlide>
                          ))
                        )  
                        : (
                          
                          newsData &&
                            newsData.map((singleNew) => (
                              <SwiperSlide key={singleNew.id}>
                                <div className="news-container">
                                  <div className="news-img">
                                    <Image
                                      src={singleNew?.acf?.news_thum_image?.url}
                                      width={100}
                                      height={100}
                                    />
                                  </div>
                                  <div className="section-contain font-museo">
                                    <p className="date-cstm">
                                      {singleNew?.acf?.news_date}
                                    </p>
                                    <h3 className="para-sld">
                                      {singleNew?.title?.rendered}
                                    </h3>
                                    <div className="new-btn flex ">
                                      <Link
                                        href={singleNew?.acf?.news_external_link}
                                        target="_blank"
                                        className="font-museo rd-mr-a news-ltr-a"
                                      >
                                        Read More{" "}
                                      </Link>
                                      <Image src={arrow} />
                                    </div>
                                  </div>
                                </div>
                              </SwiperSlide>
                          ))
                        )
                      }
                      
                      
                    </Swiper>
                  </Tab>

                  {/* Media */}
                  <Tab
                    className="tab-ttl"
                    eventKey="tab2"
                    title="Press Release"
                  >
                    <Swiper
                      spaceBetween={30}
                      navigation={true}
                      breakpoints={{
                        320: {
                          slidesPerView: 1, // For mobile devices
                        },
                        768: {
                          slidesPerView: 2, // For larger screens
                        },
                        1024: {
                          slidesPerView: 3, // For larger screens
                        },
                        1279: {
                          slidesPerView: 4, // For larger screens
                        },
                      }}
                      modules={[FreeMode, Navigation, Thumbs]}
                      className="mySwiper2"
                    >
                      {videoPressRelease &&
                        videoPressRelease.map((videoRelease) => (
                          <SwiperSlide key={videoRelease}>
                            <div className="news-container">
                              <div className="news-img">
                                <Image
                                  src={
                                    videoRelease?.acf?.press_release_thumb_img
                                      ?.url
                                  }
                                  width={100}
                                  height={100}
                                />
                              </div>
                              <div className="section-contain font-museo">
                                <p className="date-cstm">
                                  {videoRelease?.acf?.press_release_date}
                                </p>
                                <h3 className="para-sld">
                                  {videoRelease?.title?.rendered}
                                </h3>
                                <div className="new-btn flex new-btn">
                                  <a
                                    href={`/media/${videoRelease?.slug}`}
                                    className="font-museo rd-mr-a news-ltr-a"
                                  >
                                    Read More{" "}
                                  </a>
                                  <Image src={arrow} />
                                </div>
                              </div>
                            </div>
                          </SwiperSlide>
                        ))}
                      {/* <SwiperSlide>
                        <div className="news-container">
                          <div className="news-img">
                            <Image src={pr_thumb} />
                          </div>
                          <div className="section-contain font-museo">
                            <p className="date-cstm">13 JUN, 2024</p>
                            <h3 className="para-sld">
                              Valor Estate to demerge hospitality business
                            </h3>
                            <div className="new-btn flex new-btn">
                              <a
                                href="valor-estate-to-demerge-hospitality-business"
                                className="font-museo rd-mr-a news-ltr-a"
                              >
                                Read More{" "}
                              </a>
                              <Image src={arrow} />
                            </div>
                          </div>
                        </div>
                      </SwiperSlide>
                      <SwiperSlide>
                        <div className="news-container">
                          <div className="news-img">
                            <Image src={pr_Video2_thumb} />
                          </div>
                          <div className="section-contain font-museo">
                            <p className="date-cstm">10 JUN, 2024</p>
                            <h3 className="para-sld">
                              Valor Estate News: New Deals, Launches & FY25
                              Outlook
                            </h3>
                            <div className="new-btn flex new-btn">
                              <a
                                href="/valor-estate-news"
                                className="font-museo rd-mr-a news-ltr-a"
                              >
                                Read More{" "}
                              </a>
                              <Image src={arrow} />
                            </div>
                          </div>
                        </div>
                      </SwiperSlide> */}
                    </Swiper>
                  </Tab>
                </Tabs>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
