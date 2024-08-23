
"use client";
import React from 'react'
import '../../../globals.css';
import "bootstrap/dist/css/bootstrap.min.css";

import './pro_dtls_loc.css'
import Link from 'next/link';



export default function pro_dtls_loc({propMapLink}) {
  return (
    <div className='pro_dtls_loc_Main tab_padding'>
      <div className="cstm-cont-wdt">
        <div className='pro_dtl_loc_header'>
          <h2 className='section_hd'>Location </h2>
          {/* <h2 className='premium-hd'>Location </h2> */}
          <Link href="" className='mapBtn_link'>
            view in google map
          </Link>
        </div>
      </div>


    
      <div className="cstm-cont-wdt">
        <div className="row pro_dtls_locParent">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3770.073082098574!2d72.86815921055808!3d19.104449582031346!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7ce224b4c04c7%3A0xbf859322b983d3b9!2sHilton%20Mumbai%20International%20Airport!5e0!3m2!1sen!2sin!4v1720180687531!5m2!1sen!2sin"
            loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          ></iframe> 
        </div>
      </div>
    </div>
  )
}
