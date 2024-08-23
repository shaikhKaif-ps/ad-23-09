import React from 'react';
import Image from 'next/image';
import "bootstrap/dist/css/bootstrap.min.css";
import './NewsLetterFooter.css';
import email from '../../../../public/Footer-News-Letter-img/email.svg';

export default function NewsLetterFooter() {
  return (
    <div>
      <div className='NewsLetterSection tab_padding'>
        <div className='Subscribe-section cstm-cont-wdt'>
          <div className='row'>
            <div className='col-lg-6 col-md-12'>
              <div className='subs-ttl-txt font-brandon-bold'>
                <h3 className='subs-txt'>Subscribe to our Newsletter</h3>
              </div>
            </div>
            <div className='col-lg-6 col-md-12'>
              <div className='mail-section'>
                <form className="d-flex mob-blck">
                  <div className="input-group subs-inpt">
                   <span className="input-group-text">
                      <Image className='eml-svg' src={email} alt=''/>
                    </span>
                    <input type="email" placeholder="Enter your email" className="form-control" />
                  </div>
                  <button type="submit" className="btn btn-primary news-ltr-sub-btn">Subscribe</button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
