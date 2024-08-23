"use client";
import React from 'react'
import '../../../globals.css';
import "bootstrap/dist/css/bootstrap.min.css";
import { Tab, Tabs } from 'react-bootstrap'; 
import './pro_dtls_media.css'

import '../../Home-page-section/premium-collection/PremiumSection_module.css';


import Image from 'next/image';
import MumImage from '../../../../../public/Premium-Slider/Hilton-Mumbai-International-Airport-Exterior 1.jpg'
import GrandHyyat from '../../../../../public/Premium-Slider/GrandHyyat.jpg'
import NewDelhi from '../../../../../public/Premium-Slider/NewDelhi.jpg'
import Marriott from '../../../../../public/Premium-Slider/marriottNewDelhi.jpg'
import Stregis from '../../../../../public/Premium-Slider/stregis.jpg'
import rightic from '../../../../../public/ESG-images/right-icon.svg';


// slider-sec
import Pro_dtls_img_slider from '../pro_dtls_img_slider_sec/pro_dtls_img_slider';
import Pro_dtls_video_slider from '../pro_dtls_img_slider_sec/pro_dtls_video_slider';


export default function pro_dtls_media({propMediaImg,propVideo}) {
  return (
    <div className='property_media_list_sec  '>
      <div className='cstm-cont-wdt pro_dtls_media_heading tab_padding'>
          <div className='row'>
              <div className='col-lg-12 col-md-12 col-12 '>
                <div className='media_hd_dv'>
                  <h2 className='section_hd '>Media Gallary</h2>
                </div>
              </div>
          </div>
      </div>
      <div className='row no_margin '>
        <div className='col-12 no_padding'>
          <Tabs defaultActiveKey="tab1" id="pipeline_tabs">
            <Tab className='tab-ttl hd-mob' eventKey="tab1" title="Photos">
              <Pro_dtls_img_slider propMediaImg={propMediaImg} />
            </Tab>
            <Tab className='tab-ttl' eventKey="tab2" title="Videos">
              <Pro_dtls_video_slider propVideo={propVideo}/>
            </Tab>
          </Tabs>
        </div>
      </div>
    </div>
  )
}

