"use client";

import React, { useRef, useState } from 'react';

import Image from 'next/image';


// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/navigation';
import 'swiper/css/thumbs';

import '../../../globals.css'
import './about_award_sec.css';


// import required modules
import { FreeMode, Navigation } from 'swiper/modules';

export default function About_award_sec2() {

  return (
    <div className='about_award_sec'>
      <div className='row no_margin'>
        <div className='col-12'>
          <h2 className='section_hd'>Awards and <br/><span> accreditations </span> </h2>
          <div className='awards_main_slider_dv'>
            <Swiper
                spaceBetween={25}
                navigation={{ nextEl: ".swiper-button-next", prevEl: ".swiper-button-prev" }}
                slidesPerView={3.3}
                modules={[FreeMode, Navigation]}
                breakpoints={{
                  320: {
                    slidesPerView: 1.2, // For mobile devices
                  },
                  480: {
                    slidesPerView: 1.2, // For mobile devices
                  },
                  767: {
                    slidesPerView: 3.2, // For larger screens
                  },
                }}
                className="mySwiper2"
            >
              <SwiperSlide>
                  <div className='award_sld'>
                    <h5>2024</h5>
                    <h3>Award 01</h3>
                    <p>Nemo enim ipsam voluptatem qoluptas sit aspernatur aut odit aut fugsed qui.</p>
                  </div>
              </SwiperSlide>
              <SwiperSlide>
              <div className='award_sld'>
                    <h5>2023</h5>
                    <h3>Award 01</h3>
                    <p>Nemo enim ipsam voluptatem qoluptas sit aspernatur aut odit aut fugsed qui.</p>
                  </div>
              </SwiperSlide>
              <SwiperSlide>
                  <div className='award_sld'>
                    <h5>2022</h5>
                    <h3>Award 01</h3>
                    <p>Nemo enim ipsam voluptatem qoluptas sit aspernatur aut odit aut fugsed qui.</p>
                  </div>
              </SwiperSlide>
              <SwiperSlide>
                  <div className='award_sld'>
                    <h5>2021</h5>
                    <h3>Award 01</h3>
                    <p>Nemo enim ipsam voluptatem qoluptas sit aspernatur aut odit aut fugsed qui.</p>
                  </div>
              </SwiperSlide>
              <SwiperSlide>
                  <div className='award_sld'>
                    <h5>2020</h5>
                    <h3>Award 01</h3>
                    <p>Nemo enim ipsam voluptatem qoluptas sit aspernatur aut odit aut fugsed qui.</p>
                  </div>
              </SwiperSlide>
              <SwiperSlide>
                  <div className='award_sld'>
                    <h5>2019</h5>
                    <h3>Award 01</h3>
                    <p>Nemo enim ipsam voluptatem qoluptas sit aspernatur aut odit aut fugsed qui.</p>
                  </div>
              </SwiperSlide>
              <SwiperSlide>
                  <div className='award_sld'>
                    <h5>2018</h5>
                    <h3>Award 01</h3>
                    <p>Nemo enim ipsam voluptatem qoluptas sit aspernatur aut odit aut fugsed qui.</p>
                  </div>
              </SwiperSlide>
              <SwiperSlide>
                  <div className='award_sld'>
                    <h5>2017</h5>
                    <h3>Award 01</h3>
                    <p>Nemo enim ipsam voluptatem qoluptas sit aspernatur aut odit aut fugsed qui.</p>
                  </div>
              </SwiperSlide>
            </Swiper>

            <button className="swiper-button-prev"></button>
            <button className="swiper-button-next"></button>
      
          </div>
        </div>
      </div>
    </div>
  );
}
