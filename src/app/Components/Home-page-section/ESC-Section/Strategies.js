'use client'
import React, { useEffect } from 'react';
import Image from 'next/image';
import 'swiper/css';
import 'swiper/css/navigation';
import './Strategies-module.css';
import '../../../globals.css';
import homeImg from '../../../../../public/ESG-images/invester_main_img.jpg';
import esg from '../../../../../public/ESG-images/esg-img.jpg';
import dollar from '../../../../../public/ESG-images/dollar.svg';
import user from '../../../../../public/ESG-images/user.svg';
import rightic from '../../../../../public/ESG-images/right-icon.svg';

import esg_icon from '../../../../../public/ESG-images/esg_icon.svg';
import investor_yellow_icon from '../../../../../public/ESG-images/investor_yellow_icon.svg';

// import jQuery from "jquery";

export default function Strategies() {
  

  // useEffect(() => {

  //   jQuery(document).ready(function() {
  //     jQuery('.invest_col').mouseenter(
  //         function() {
  //           console.log('working');
  //           jQuery('.invest_img').css('opacity','1'); 
  //           jQuery('.esg_col').removeClass('esg_col_active');

  //           jQuery('.invest_brown_icon').css('opacity','0');
  //           jQuery('.invest_yellow_icon').css('opacity','1');
  //           jQuery('.esg_yellow_icon').css('opacity','0');
  //           jQuery('.esg_brown_icon').css('opacity','1');
  //         },
  //     );
  //     jQuery('.invest_col').mouseleave(
  //       function() {
  //         console.log('working');
  //         jQuery('.invest_img').css('opacity','0');
  //         jQuery('.esg_col').addClass('esg_col_active');

  //         jQuery('.invest_brown_icon').css('opacity','1');
  //         jQuery('.invest_yellow_icon').css('opacity','0');
  //         jQuery('.esg_yellow_icon').css('opacity','1');
  //         jQuery('.esg_brown_icon').css('opacity','0');

  //       }
  //     );

  //   });

  // }, []);


  return (
    <div className='StrategiesSection'>
        <div className='row '>
            <div className='col-md-12 col-lg-6 bg-clr pdg-lft'>
                <div className='esg-txt ' >
                        <h2 className='section_hd'>Exploring
                         <br /> <span>Investor Relations</span>
                         <br />Strategies
                        </h2> 
                        {/* <h2> <spn className='txt-clr'> Investor Relations </spn></h2> 
                        <h2> Strategies</h2> */}
                </div>

            <div className='row esg-btm-sec'>
               <div className='col-md-12 ecg-div ecg-brd tab-ecg-lft ecdg-br-lf esg_col esg_col_active'>
                     <div className='dlr-hv-img'>
                        <Image className='dlr-img-chg esg_yellow_icon' src={investor_yellow_icon} />
                        <Image className='esg-img-chg esg_brown_icon' src={user} />
                     </div>

                      <div className='esg_cont_dtls'>
                        <h2 className='esg-hd section_hd'>Investor Relations</h2>
                        <p className='str-para'>Our goal is to generate best-in-class EBITDA growth to drive long-term risk-adjusted returns for our stockholders.</p>
                       <div className='rdm-btn flex'>
                        <a className='rd-mr-a esg-btn'>Read More </a>
                        <Image src={rightic} />
                      </div>

                        </div>


                    </div>

                    {/* <div className='col-md-6 ecg-div ecg-brd tab-ecg-lft ecdg-br-lf esg_col esg_col_active'>
                     <div className='dlr-hv-img'>
                        <Image className='dlr-img-chg esg_yellow_icon' src={dollar} />
                        <Image className='esg-img-chg esg_brown_icon' src={esg_icon} />
                     </div>

                      <div className='esg_cont_dtls'>
                        <h3 className='esg-hd'>ESG</h3>
                        <p className='str-para'>we are committed to creating long-term value through investing responsibly in our business, environment, people and community.</p>
                       <div className='rdm-btn flex'>
                        <a className='rd-mr-a esg-btn'>Read More </a>
                        <Image src={rightic} />
                      </div>

                        </div>


                    </div> */}

                    {/* <div className='col-md-6 ecg-div invest_col' id="invest_col">
                    <div className='dlr-hv-img'>
                        <Image className='dlr-img-chg invest_brown_icon' src={user} />
                        <Image className='esg-img-chg invest_yellow_icon' src={investor_yellow_icon} />
                     </div>


                     <div className='esg_cont_dtls'>
                     <h3 className='esg-hd'>Investor Relations</h3>
                        <p className='str-para'>Our goal is to generate best-in-class EBITDA growth to drive long-term risk-adjusted returns for our stockholders.</p>
                        <div className='rdm-btn flex'>
                        <a className='rd-mr-a esg-btn'>Read More </a>
                        <Image src={rightic} />
                       </div>
                      </div>




                    </div> */}
                </div>

            </div>
            <div className='col-md-6 pd-lft esg_img_col'>
                  <Image className='esc-img-sec esg_img' src={homeImg}/>
                  <Image className='esc-img-sec invest_img' id='invest_img' src={homeImg} style='display: none;'/>
            </div>
        </div>

 
    </div>
  )
}