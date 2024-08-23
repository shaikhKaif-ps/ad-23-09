'use client'
import React, { useEffect } from 'react';

import Image from 'next/image';
import Link from 'next/link';
import jQuery from "jquery";

import logo from '/public/logo.png';
import humbgr_icon from '/public/humbergr_icon.svg';
import menu_close_icon from '/public/menu_close_btn.svg';

import youtube from '/public/youtube.svg';
import facebook from '/public/facebook.svg';
import instagram from '/public/instagram.svg';
import linkedin from '/public/linkedin.svg';

import  '../Components/header.css'
import '../globals.css';

export default function Header() {

  useEffect(() => {

    jQuery(document).ready(function() {

      jQuery('.menu_open_icon').on('click',function() {

        // Icon hide / show
        jQuery(this).css('opacity','0');
        jQuery(this).css('z-index','-1');
        jQuery('.menu_open_close').css('opacity','1');
        jQuery('.menu_open_close').css('z-index','1');

        jQuery('.overlay').css('z-index','1');
        jQuery('.overlay').css('opacity','1');

        jQuery('body').css('overflow','hidden');

        // Mobile Side Menu hide / show
        jQuery('.mobile_menu_sidebar').css('right','0');
        jQuery('.mobile_menu_sidebar').css('z-index','9');

      });

      jQuery('.menu_open_close').on('click',function() {

        // Icon hide / show
        jQuery(this).css('opacity','0');
        jQuery(this).css('z-index','-1');
        jQuery('.menu_open_icon').css('opacity','1');
        jQuery('.menu_open_icon').css('z-index','1')

        jQuery('.overlay').css('opacity','0');
        jQuery('.overlay').css('z-index','-1');

        jQuery('body').css('overflow','auto');

        // Mobile Side Menu hide / show
        jQuery('.mobile_menu_sidebar').css('right','-100%');
        jQuery('.mobile_menu_sidebar').css('z-index','0');

      });

    });

  }, []);

  return (
    <>

    {/*--------------------------------------------------------------------------- Desktop Header */}
    <div  className='desktop_header'>
      <nav className="flex justify-between items-center cntr-hdr cstm-hdr">
        <div className="flex gap-12 con-lft">
          <a href='/about' className="font-museo header">About</a>
          <a href='/#' className="font-museo header">Solutions</a>
          <a href='/properties' className="font-museo header">Portfolio</a>
        </div>

        <a href='/'>
          <Image  className="ml-4" src={logo} alt="Logo" />
        </a>
      
        <div className="flex gap-12 con-rgt">
          {/* <a className="font-museo header" style={{visibility:'hidden'}}>ESG</a> */}
          <a href='/#' className="font-museo header">Investor Relations</a>
          <a href='/media' className="font-museo header">Media</a>
          <a href='/media/#footer' className="font-museo header">Contact us</a>
        </div>
      </nav>
    </div>



    {/*--------------------------------------------------------------------------- Mobile Header */}
    <div className='mobile_header'>
      <div className='inner_hd_dv'>
        <div className='dv1 '></div>
        <a href='/'><Image  className="" src={logo} alt="Logo" /></a>
        <div className='dv2 mob_menu_icon'>
          <Image  className="menu_open_icon" src={humbgr_icon} alt="Menu Open Icon" />
          <Image  className="menu_open_close" src={menu_close_icon} alt="Menu Open Icon" />
        </div>
      </div>
    </div>


    {/* Mobile Menu */}
    <div className="mobile_menu_sidebar">
        <div className="mm_inner_dv">

          <div className="mob_menu_links_dv">
            <ul>
              <li><a href='/about'>About</a></li>
              <li><a href='#'>Solutions</a></li>
              <li><a href='/properties'>Portfolio</a></li>
              <li><a href='#'>Investor Relations</a></li>
              {/* <li><a href='#'>ESG</a></li> */}
              <li><a href='/media'>Media</a></li>
            </ul>
          </div>

          <div className="social_dv">
            <h3>Follow us</h3>
            <ul>
              <li><a href='#'><Image  src={youtube} alt="Youtube" /></a></li>
              <li><a href='#'><Image  src={facebook} alt="Facebook" /></a></li>
              <li><a href='#'><Image  src={instagram} alt="Instagram" /></a></li>
              <li><a href='#'><Image  src={linkedin} alt="Linkedin" /></a></li>
            </ul>
          </div>

        </div>
    </div>

    </>
  );
}