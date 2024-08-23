import React from 'react'
import Image from "next/image";

import Purpose_icon from "../../../../../public/about_page/about_vision_sec/purpose_icon.svg";
import Vision_icon from "../../../../../public/about_page/about_vision_sec/vision_icon.svg";
import Stat_icon from '../../../../../public/about_page/about_counter_sec/stat_count_wht_icon.svg'
import Key_icon from '../../../../../public/about_page/about_counter_sec/key_count_wht_icon.svg'
import Market_icon from '../../../../../public/about_page/about_counter_sec/market_count_wht_icon.svg'

import '../../../globals.css';
import './about_vision_sec.css';
import "bootstrap/dist/css/bootstrap.min.css";

export default function About_vision_sec() {
  return (
    <>
      <div className='about_vision_sec tab_padding'>
        <div className='cstm-cont-wdt'>
            <div className='row frst_row'>
                <div className='col-lg-6 col-md-12 col-12'>
                    <div className='inner_vision_dv'>
                        <h2 className='section_hd'>Purpose, <br/> Vision</h2>
                    </div>
                </div>
                <div className='col-lg-6 col-md-12 col-12'>
                    <div className='purpose_dv'>
                        <Image src={Purpose_icon} alt="Purpose Icon" />
                        <div className='purpose_cont'>
                            <h3>Purpose</h3>
                            <p>Develop benchmark hospitality assets & solutions generating superior value for market leading growth
                            </p>
                        </div>
                    </div>
                    <div className="vision_dv">
                        <Image src={Vision_icon} alt="Visoin Icon" />
                        <div className='purpose_cont'>
                            <h3>Vision</h3>
                            <p>Make Advent a dominant asset owner, investor and operator of high quality, sustainable, hospitality assets and services, preferred by partners and employees, delivering superior shareholder returns, contributing to the communities we serve</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="row ">
                <div className="col-lg-3 col-md-12 col-12">
                    <div className='inner_value_dv'>
                        <h2 className='section_hd'>Values</h2>
                        <p>Values define our DNA. These are principles that guide us as we create a sustainable future, delivering RoTI (Return on Time Invested) for all our stakeholders
                        </p>
                    </div>
                </div>
                <div className="col-lg-9 col-md-12 col-12">
                    <div className='inner_value_dv1'>
                        <div className='vlu_bx'>
                            <h5>AGILITY</h5>
                            <p>We are proactive and take accountability facilitating solutions for growth.</p>
                        </div>
                        <div className='vlu_bx'>
                            <h5>COLLABORATION</h5>
                            <p>We practice mutual respect, integrity, and teamwork to maximise value of partnerships.</p>
                        </div>
                        <div className='vlu_bx'>
                            <h5>EXCELLENCE</h5>
                            <p>We continuously hone systems and processes to establish and surpass benchmarks.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
      </div>
    </>
  )
}
