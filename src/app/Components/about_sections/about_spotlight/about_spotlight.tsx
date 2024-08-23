import React from 'react'
import Image from "next/image";

import About_spotlight_img from "../../../../../public/about_page/about_spotlight_sec/about_spotlight_img.jpg";


import '../../../globals.css';
import '../../../inside_pg_spotlight.css';
import './about_spotlight.css';
import "bootstrap/dist/css/bootstrap.min.css";

export default function About_spotlight() {
  return (
    <>
        <div className='about_spotlight inside_spotlight'>
            <div className='row no_margin '>
                <div className='col-lg-6 col-md-6 col-12 in_spot_col1 mob_padding'>
                    <div className='inner_spot_col1'>
                        <h1>About <br></br> Advent</h1>
                        <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla par.</p>
                    </div>
                </div>
                <div className='col-lg-6 col-md-6 col-12 in_spot_col2 no_padding'>
                    <div className='inner_spot_col2'>
                        <Image className="about_spot_img" src={About_spotlight_img} alt='About Header Image'/>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}
