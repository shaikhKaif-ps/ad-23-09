import React from 'react'
import "bootstrap/dist/css/bootstrap.min.css";
import './FooterLink.css'
import Link from 'next/link';


export default function FooterLink() {
  return (
    <div>


    
        <div className='FooterLinkSection tab_padding' id='footer'>
            <div className='Footer-ancher-section cstm-cont-wdt'>


                <div className='row'>
                    <div className='col-md-3 pd-rgt'>
                         <div className='ft-sec-one'>
                            <h6 className='tpc-hd'>Quick Links</h6>
                        </div>
                          <div className='anc-section'>
                                <a href='/' className='anc-hd'>Home</a>
                                <a href='/about' className='anc-hd'>About</a>
                                <a href='/#' className='anc-hd'>Investor Relations</a>
                                <a href='/media' className='anc-hd'>Media</a>
                                {/* <a href='news-press-release' className='anc-hd'>News & Press Release</a> */}
                                {/* <a href='#' className='anc-hd'>Careers</a> */}
                                {/* <a href='#' className='anc-hd'>Contact Us</a> */}

                        </div>
                    </div>
                    <div className='col-md-3 pd-rgt mob-ftr-sec'>
                      <div className='ft-sec-one'>
                            <h6 className='tpc-hd'>Properties</h6>
                        </div>
                        <div className='anc-section'>
                                <a href='/properties/hilton-international' className='anc-hd'>Hilton International </a>
                                <a href='/properties/grand-hayat' className='anc-hd'>Grand Hyatt Goa </a>
                                <a href='/properties/delhi-aerocity-hotel' className='anc-hd'>Delhi Aerocity Hotel</a>
                                <a href='/properties/marriot-marquis' className='anc-hd'>Marriot Marquis</a>
                                <a href='/properties/st-regis' className='anc-hd'>St. Regis </a>
                                <a href='/properties/esteem-shara-hotel' className='anc-hd'>Esteem-shara-hotel</a>
                                <a href='/properties/worli-hotel' className='anc-hd'>Worli hotel</a>
                                <a href='/properties/riverwalk-hotel' className='anc-hd'>Riverwalk hotel</a>
                                {/* <a href='#' className='anc-hd'>Luxury Hotel @ BKC </a> */}
                        </div>
                    </div>
                    <div className='col-md-3 pd-rgt mob-ftr-sec'>
                       <div className='ft-sec-one'>
                            <h6 className='tpc-hd'>Solutions</h6>
                        </div>
                        <div className='anc-section'>
                                <a href='/#' className='anc-hd'>Management</a>
                                <a href='/#' className='anc-hd'>Development</a>
                                <a href='/#' className='anc-hd'>Investment</a>
                        </div>
                    </div>
                    <div className='col-md-3 pd-rgt spc-top-mob'>
                       <div className='ft-sec-one'>
                            <h6 className='tpc-hd'>Contact</h6>
                        </div>
                        <div className='anc-section'>

                            <p className='para-ftr-add'>Address line 01, <br></br> Address line 02, <br></br>India, Pin - 000 XXX</p>
                            <a href='mailto:info@info.com' className='anc-hd mil-hd'>info@info.com</a> 
                            <a href='tel:+91 00000 00000' className='anc-hd'>+91 00000 00000</a> 

                        </div>
                    </div>
                </div>

                <div className='branding-section'>
                    <div className='row'>
                        <div className='col-md-8'>
                            <h3 className='rght-hd'>© 2024. Advent Hotel International. All rights reserved.</h3>
                        </div>
                        <div className='col-md-4'>
                        <h3 className='rght-hd prvi-hd'>Privacy Policy   |   Terms of Use</h3>
                        </div>
                    </div>
                </div>

                
            </div>
        </div>
      
    </div>
  )
}
