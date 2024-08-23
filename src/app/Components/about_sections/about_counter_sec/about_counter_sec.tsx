import React from "react";
import Image from "next/image";

import About_spotlight_img from "../../../../../public/about_page/about_spotlight_sec/about_spotlight_img.jpg";
import Hotel_icon from "../../../../../public/about_page/about_counter_sec/hotel_count_wht_icon.svg";
import Stat_icon from "../../../../../public/about_page/about_counter_sec/stat_count_wht_icon.svg";
import Key_icon from "../../../../../public/about_page/about_counter_sec/key_count_wht_icon.svg";
import Market_icon from "../../../../../public/about_page/about_counter_sec/market_count_wht_icon.svg";

import "../../../globals.css";
import "./about_counter_sec.css";
import "bootstrap/dist/css/bootstrap.min.css";

export default function About_counter_sec() {
  return (
    <>
      <div className="about_counter_sec">
        <div className="row no_margin">
          <div className="white_col"></div>

          <div className="bg_col ">
            <div className="counter_bg">
              <div className="row no_margin degg">
                <div className="col-lg-5 col-md-5 col-12 "></div>
                <div className="col-lg-7 col-md-7 col-12 no_padding">
                  <div className="inner_counter_col2">
                    <h3>
                      We are dedicated to becoming a leading player in the
                      hospitality industry with a portfolio of luxury and
                      upscale hotels across key markets.
                    </h3>
                    <div className="about_counter_dv">
                      {/* Counter 1 */}
                      <div className="counter_bx cb_1">
                        <div className="c_icon">
                          <Image src={Hotel_icon} alt="Hotel Icon" />
                        </div>
                        <div className="c_dtls">
                          <p className="c_no">07</p>
                          <p className="c_desc">Total Hotels</p>
                        </div>
                      </div>
                      {/* Counter 2 */}
                      <div className="counter_bx cb_2">
                        <div className="c_icon">
                          <Image src={Key_icon} alt="Hotel Icon" />
                        </div>
                        <div className="c_dtls">
                          <p className="c_no">4287</p>
                          <p className="c_desc">Total Keys</p>
                        </div>
                      </div>
                      {/* Counter 3 */}
                      {/* <div className="counter_bx  cb_3"> */}
                      <div className="counter_bxLast  cb_3">
                        <div className="c_icon">
                          <Image src={Stat_icon} alt="Hotel Icon" />
                        </div>
                        <div className="c_dtls">
                          <p className="c_no">09</p>
                          <p className="c_desc">No. Of Cities</p>
                        </div>
                      </div>
                      {/* Counter 4 */}
                      {/* <div className="counter_bx  cb_4">
                        <div className="c_icon">
                          <Image src={Stat_icon} alt="Hotel Icon" />
                        </div>
                        <div className="c_dtls">
                          <p className="c_no">09</p>
                          <p className="c_desc">No. Of Cities</p>
                        </div>
                      </div> */}

                      {/* Counter 4 */}
                      {/* <div className='counter_bx cb_4'>
                                        <div className='c_icon'>
                                            <Image src={Market_icon} alt="Hotel Icon" />
                                        </div>
                                        <div className='c_dtls'>
                                            <p className='c_no'>08</p>
                                            <p className='c_desc'>Markets</p>
                                        </div>
                                    </div> */}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
