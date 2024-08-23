import React from 'react'
import "bootstrap/dist/css/bootstrap.min.css";
import '../../../app/inside_pg_spotlight.css';
import '../../../app/globals.css';
import Image from 'next/image';

import NewsAndPr_spotlight_img from '../../../../public/about_page/about_spotlight_sec/about_spotlight_img.jpg'

const PressSpotlight = ({pressReleaseTitle}) => {
  return (
    <div className='about_spotlight inside_spotlight'>
    <div className='row no_margin '>
        <div className='col-lg-6 col-md-6 col-12 in_spot_col1 mob_padding'>
            <div className='inner_spot_col1'>
                <h1 className='prSpotHeading'>{pressReleaseTitle}</h1>
                {/* <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla par.</p> */}
            </div>
        </div>
        <div className='col-lg-6 col-md-6 col-12 in_spot_col2 no_padding'>
            <div className='inner_spot_col2'>
                <Image className="about_spot_img" src={NewsAndPr_spotlight_img} alt='About Header Image'/>
            </div>
        </div>
    </div>
    </div>
  )
}

export default PressSpotlight