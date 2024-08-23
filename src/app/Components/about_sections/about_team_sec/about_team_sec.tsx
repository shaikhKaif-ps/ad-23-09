"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import SmoothScroll from "../../smothScroll/SmoothScroll";

import DT1 from "../../../../../public/about_page/about_team_sec/DT1.jpg";
import rahulpandit from "../../../../../public/about_page/about_team_sec/rahulpandit.jpg";
import Vision_icon from "../../../../../public/about_page/about_vision_sec/vision_icon.svg";
import Stat_icon from "../../../../../public/about_page/about_counter_sec/stat_count_wht_icon.svg";
import Key_icon from "../../../../../public/about_page/about_counter_sec/key_count_wht_icon.svg";
import Market_icon from "../../../../../public/about_page/about_counter_sec/market_count_wht_icon.svg";
import LinkedIcon from "../../../../../public/linkedin.svg";

import "../../../globals.css";
import "./about_team_sec.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "react-responsive-modal/styles.css";
import { Modal } from "react-responsive-modal";
import "./popup_team.css";
import Link from "next/link";
import leadershipAPI from "./leadershipAPI";
import leadershipTeamAPI from "./leadershipTeamAPI.js";

export default function About_team_sec() {
//   const { stopScroll, startScroll } = SmoothScroll();

  //=================== Leadership Team data ===============
  const [modalOpen1, setModalOpen1] = useState(false);
  const [data, setData] = useState([]);
  const [selectedPost, setSelectedPost] = useState(null);

  const openModal1 = (post) => {
    setSelectedPost(post);
    setModalOpen1(true);
    // stopScroll();
  };

  const closeModal1 = () => {
    setModalOpen1(false);
    setSelectedPost(null);
    // startScroll();
  };

  useEffect(() => {
    async function fetchData() {
      const result = await leadershipAPI();
      setData(result);
    }
    fetchData();
  }, []);

  return (
    <>
     <div className="about_team_sec tab_padding">
      <div className="cstm-cont-wdt">
        <div className="row">
          <div className="col-12 leadership_col">
            <h2 className="section_hd">
              Leadership <span> Team </span>
            </h2>

            <div className="director_list">
              {data.length === 0 ? (
                Array.from({ length: 4 }).map((_, index) => (
                  <div key={index} className="LeaderShipskeleton">
                  </div>
                ))
              ) : (
                data.map((post) => (
                  <div key={post.id} className="team_dv" onClick={() => openModal1(post)} >
                    <div>
                      <Image
                        src={post.acf.leadership_photo}
                        width={100}
                        height={100}
                        alt="Director"
                      />
                      <h3>{post.title.rendered}</h3>
                    </div>
                    <p
                      className="leaderSubTitle"
                      dangerouslySetInnerHTML={{
                        __html: post.content.rendered,
                      }}
                    ></p>
                  </div>
                ))
              )}

              {selectedPost && (
                <Modal open={modalOpen1} onClose={closeModal1} center>
                  <div className="team_popup">
                    <Image
                      src={selectedPost.acf.leadership_photo}
                      width={100}
                      height={100}
                      className="team_img"
                      alt="Director"
                    />
                    <div className="team_popup_inner">
                      <h3 className="leaderModalTitle">
                        {selectedPost.title.rendered}
                      </h3>
                      <h4
                        className="leaderModalSubTitle"
                        dangerouslySetInnerHTML={{
                          __html: selectedPost.content.rendered,
                        }}
                      ></h4>
                      <p
                        className="team_popup_para"
                        dangerouslySetInnerHTML={{
                          __html: selectedPost.acf.leadership_designation,
                        }}
                      ></p>
                      <Link href="#" className="linkedin_box">
                        <Image
                          src={LinkedIcon}
                          alt="linkedIcon"
                          className="popupLinked"
                        />
                      </Link>
                    </div>
                  </div>
                </Modal>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
    </>
  );
}


















// {/* <div>
//      {/* Team 1 */}
//      <div className='team_dv' >
//                                 <Image  src={DT1} alt="Director" />
//                                 <h3>First and Last Name</h3>
//                                 <p>Vice Chairman & MD</p>

//                             </div>

//                             {/* Team 1 */}
//                             <div className='team_dv'>
//                                 <Image src={DT1} alt="Director" />
//                                 <h3>First and Last Name</h3>
//                                 <p>Vice Chairman & MD</p>
//                             </div>

//                             {/* Team 1 */}
// <div className='team_dv'>
//     <Image src={DT1} alt="Director" />
//     <h3>First and Last Name</h3>
//     <p>Vice Chairman & MD</p>
// </div>

//                             {/* Team 1 */}
//                             <div className='team_dv'>
//                                 <Image src={DT1} alt="Director" />
//                                 <h3>First and Last Name</h3>
//                                 <p>Vice Chairman & MD</p>
//                             </div>
// </div> */}

//     // Director Team data
// const [modalOpen2, setModalOpen2] = useState(false);
// const [teamdata, setTeamData] = useState([]);
// const [selectedTeamPost, setSelectedTeamPost] = useState(null);

// const openModal2 = (post) => {
//     setSelectedTeamPost(post);
//     setModalOpen2(true);
// };

// const closeModal2 = () => {
//     setModalOpen2(false);
//     setSelectedTeamPost(null);
// };

// useEffect(() => {
//     async function fetchTeamData() {
//         const result = await leadershipTeamAPI(); // Replace with your actual API call
//         setTeamData(result);
//     }
//     fetchTeamData();
// }, []);


  /* Director column */


  /* <div className='col-12' id='xyz'>
                        <h2 className='section_hd'>Board Of <span> Directors </span></h2>

                        <div className='director_list '>
                        {teamdata && teamdata.map((post) => (
                                    <div key={post.id} className='team_dv' onClick={() => openModal2(post)}>
                                        <Image src={DT1} alt="Director" />
                                        <h3>{post.title.rendered}</h3>
                                        <p>Vice Chairman & MD</p>
                                    </div>
                                ))}
                            {
                                selectedTeamPost && (
                                    <Modal open={modalOpen2} onClose={closeModal2} center>
                                        <div className="team_popup">
                                            <Image src={selectedTeamPost.acf.director_photo} width={100} height={100} className='team_img' alt="Director" />
                                            <div className='team_popup_inner'>
                                                <h3>{selectedTeamPost.title.rendered}</h3>
                                                <h4 dangerouslySetInnerHTML={{ __html: selectedTeamPost.content.rendered }}></h4>
                                                <p className='team_popup_para' dangerouslySetInnerHTML={{ __html: selectedTeamPost.acf.director_designation }}></p>
                                                <Link href='#' className="linkedin_box">
                                                    <Image src={LinkedIcon} alt="linkedIcon" className="popupLinked"/>
                                                </Link>
                                            </div>
                                        </div>
                                    </Modal>
                                )  
                            }
                        </div>

                    </div> */

