import Image from 'next/image'
import React from 'react'
import  '../../../Components/Home-page-section/YearSection/YearSection.css'
import '../../../globals.css'
import './pro_dtls_info.css'


import locationIcon from '../../../../../public/pro_dtls_page/LocationIcon1.png'
import upper from '../../../../../public/pro_dtls_page/prop_dtls_upper.png'
import upArrow from '../../../../../public/pro_dtls_page/prop_dtls_Booknow.png'
import listIcon from '../../../../../public/pro_dtls_page/listIcon.png'
import key from '../../../../../public/Year-Icon/key.svg'




export default function Pro_dtls_info({propLocation,propTitle,propDesp,propKeyList}) {
  return (
    <>
      <div className='prop_dtls_Section tab_padding'>
        <div className="cstm-cont-wdt">
          <div className='row '>
            <div className='col-lg-4 col-md-12 pro_dtls_name'>
                <h2 className='section_hd'>{propTitle}</h2>
                <div className="pro_dtl_address_Con">
                  <Image src={locationIcon}  alt=''/>
                  <span className='pro_dtl_adress'>{propLocation}</span>
                </div>
            </div>

            <div className='col-lg-8 col-md-12'>
              <div className="row prop_dtls_iconCon">
                <div className="col-md-4 prop_dtls_IconsDesp bg-prop ">
                  <Image src={key}  alt=''/>
                  <div className='prop_dtls_num '>
                    <h2>117 <br /> Keys</h2>
                  </div>
                </div>
                <div className="col-md-4 prop_dtls_IconsDesp bg-prop">
                  <Image src={upper}  alt=''/>
                  <div className='prop_dtls_num '>
                    <h2>Upper <br /> Upscale</h2>
                  </div>
                </div>
                <div className="col-md-4 prop_dtls_IconsDesp bg-prop-last">
                  <Image src={upArrow}  alt=''/>
                  <div className='prop_dtls_num '>
                    <h2>Book Now</h2>
                  </div>
                </div>
              </div>
            </div>

            

          </div>
          


          
        </div>
      </div>
      
      <div className="cstm-cont-wdt">
        <hr />
      </div>

      <div className="cstm-cont-wdt porp_dtls_desc tab_padding">
        <div className="row ">
          <div className="col-lg-8 col-md-12">
            {/* <p className='desp_text'>
            Hilton International, Mumbai, boasts 24 years of operational excellence. This prime property is developed on 1.26 acres of freehold land, strategically located just five minutes from Mumbai’s Domestic and International airports. The hotel offers 171 premium rooms and features a 10,000 sqft conference and events space. Known for its palace-style architecture and interiors, Hilton International achieves an impressive 88% average occupancy.
            </p> */}
            <div className='desp_text' dangerouslySetInnerHTML={{__html: propDesp}} ></div>
          </div>


          <div className="col-lg-4 col-md-12 prop_dtls_bulletCon ">
            <ul>
              {
                propKeyList.map((keyPoint,ind) => (
                  <li key={ind} dangerouslySetInnerHTML={{__html:keyPoint.list_features}}>
                  </li>
                ))
              }
              {/* <li>
                <span>Prime Location:</span> Located five minutes from the Domestic and International airports, Mumbai.  
              </li>

              <li>
                <span>Premium Facilities:</span> 171 premium rooms with a 10,000 sq ft conference and events space.
              </li>
              <li>
                <span>High Occupancy:</span> 88% average occupancy..
                </li>
              <li>
                <span>Architectural Excellence:</span> Features palace-style architecture and interiors.
              </li> */}
            </ul>
          </div>

        </div>
      </div>
      <hr />
    </>
  )
}

