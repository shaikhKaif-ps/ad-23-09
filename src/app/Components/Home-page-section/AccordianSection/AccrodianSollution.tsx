"use client";
import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import acrd from "../../../../../public/Accordian_img/acrd-img.jpg";
import acrd1 from "../../../../../public/Accordian_img/Image.jpg";
import acrd2 from "../../../../../public/Accordian_img/Image1.jpg";
import plus from "../../../../../public/Accordian_img/Plus.svg";
import minus from "../../../../../public/Accordian_img/minus.svg";
import arrowrgt from "../../../../../public/Accordian_img/arrow-rgt.svg";

import "../../../globals.css";
import "../AccordianSection/AccordianSollution.css";

export default function AccrodianSollution() {
  useEffect(() => {
    function changePlace(activePlace: number) {
      const placesItems = document.querySelectorAll(
        ".section-content__item"
      ) as NodeListOf<HTMLElement>;
      const placesItemImagesList = document.querySelector(
        ".section-images"
      ) as HTMLElement | null;

      if (!placesItemImagesList) return;

      // Initialize the accordion
      activatePlace(placesItems[activePlace], activePlace);

      placesItems.forEach((el, index) => {
        el.addEventListener("click", () => {
          if (!el.classList.contains("active")) {
            clearActiveClass();
            activatePlace(el, index);
            placesItemImagesList.style.transform = `translateY(-${index}00%)`;
          }
        });
      });

      function clearActiveClass() {
        placesItems.forEach((el) => {
          el.classList.remove("active");
          const content = el.querySelector(
            ".section-content__content"
          ) as HTMLElement | null;
          if (content) {
            content.style.height = "0";
            content.style.padding = "0 20px";
          }
        });
      }

      function activatePlace(element: HTMLElement, index: number) {
        element.classList.add("active");
        const content = element.querySelector(
          ".section-content__content"
        ) as HTMLElement | null;
        if (content) {
          content.style.height = content.scrollHeight + "px";
          content.style.padding = "20px 20px";
        }
      }
    }

    changePlace(0);
  }, []);

  return (
    <div className="AccrodianSollution">
      <div className="accordian_section">
        <div className="accordian_cont_section cstm-cont-wdt">
          <div className="row">
            <div className="col-md-12 col-lg-6 tab-hd-btm-spc accord_col_1">
              <h2 className="section_hd acr-hd">
                Full spectrum <br /> of <br /> <span>Solution</span>
              </h2>
            </div>

            <div className="col-md-6 col-lg-4 accord_col_2">
              <p>
                Providing synergies and advantages through market intelligence,
                scale, technology, and innovation for our partners, owners, and
                stakeholders.
              </p>
            </div>

            <div className="col-md-6 col-lg-2 mob-cnt-btn accord_col_3">
              {/* <button className="exp-tab-btn acr-btn">Explore solutions</button> */}
              <button className="acr-btn">Explore solutions</button>
            </div>

            <div className="accordian_tabs">
              <div className="container">
                <div className="section">
                  <ul className="section-images">
                    <li className="section-images__item">
                      <Image src={acrd} alt="First Image" />
                    </li>
                    <li className="section-images__item">
                      <Image src={acrd1} alt="second Image" />
                    </li>
                    <li className="section-images__item">
                      <Image src={acrd2} alt="Third Image" />
                    </li>
                  </ul>
                  <ul className="section-content">
                    <li className="section-content__item">
                      <div className="conatiner_top-section">
                        <div className="section-content__firstwdt">
                          <h2 className="section-content__title num-ttl">01</h2>
                        </div>
                        <div className="section-content__secondwdt"> </div>
                        <div className="section-content__thrdwdt">
                          <h2 className="section-content__title">
                            Development
                          </h2>
                        </div>
                        <div className="section-content__fourwdt">
                          <button className="section-content__btn puls">
                            <Image className="plus" src={plus} alt="" />
                          </button>
                          <button className="section-content__btn minus">
                            <Image className="minus" src={minus} alt="" />
                          </button>
                        </div>
                      </div>

                      <div className="section-content__content flx-content">
                        <div className="content-section_frsttab"></div>
                        <div className="content-section_scdtab"></div>
                        <div className="content-section_thrdtab">
                          <p className="section-content__text">
                            Lorem ipsum, dolor sit amet consectetur adipisicing
                            elit. Nisi at commodi quos deserunt cumque saepe
                            consequatur suscipit laudantium quibusdam
                            accusantium architecto animi ducimus, quis placeat,
                            aut necessitatibus pariatur velit alias?
                          </p>
                        </div>
                      </div>

                      <div className="section-content__content flx-content">
                        <div className="content-section_frsttab"></div>
                        <div className="content-section_scdtab"></div>
                        <div className="content-section_thrdtab">
                          <div className="rdm-btn larn-stn-con flex">
                            <a className="rd-mr-a lrnmore">Learn More</a>
                            <Image className="arrow" src={arrowrgt} alt="" />
                          </div>
                        </div>
                      </div>
                    </li>

                    {/* Second accord */}

                    <li className="section-content__item">
                      <div className="conatiner_top-section">
                        <div className="section-content__firstwdt">
                          <h2 className="section-content__title num-ttl">02</h2>
                        </div>
                        <div className="section-content__secondwdt"> </div>
                        <div className="section-content__thrdwdt">
                          <h2 className="section-content__title">Investment</h2>
                        </div>
                        <div className="section-content__fourwdt">
                          <button className="section-content__btn puls">
                            <Image src={plus} alt="" />
                          </button>
                          <button className="section-content__btn minus">
                            <Image src={minus} alt="" />
                          </button>
                        </div>
                      </div>

                      <div className="section-content__content flx-content">
                        <div className="content-section_frsttab"></div>
                        <div className="content-section_scdtab"></div>
                        <div className="content-section_thrdtab">
                          <p className="section-content__text">
                            Lorem ipsum, dolor sit amet consectetur adipisicing
                            elit. Nisi at commodi quos deserunt cumque saepe
                            consequatur suscipit laudantium quibusdam
                            accusantium architecto animi ducimus, quis placeat,
                            aut necessitatibus pariatur velit alias?
                          </p>
                        </div>
                      </div>

                      <div className="section-content__content flx-content">
                        <div className="content-section_frsttab"></div>
                        <div className="content-section_scdtab"></div>
                        <div className="content-section_thrdtab">
                          <div className="rdm-btn larn-stn-con flex">
                            <a className="rd-mr-a lrnmore">Learn More</a>
                            <Image className="arrow" src={arrowrgt} alt="" />
                          </div>
                        </div>
                      </div>
                    </li>

                    {/* Third accord */}
                    <li className="section-content__item">
                      <div className="conatiner_top-section">
                        <div className="section-content__firstwdt">
                          <h2 className="section-content__title num-ttl">03</h2>
                        </div>
                        <div className="section-content__secondwdt"> </div>
                        <div className="section-content__thrdwdt">
                          <h2 className="section-content__title">Management</h2>
                        </div>
                        <div className="section-content__fourwdt">
                          <button className="section-content__btn puls">
                            <Image src={plus} alt="" />
                          </button>
                          <button className="section-content__btn minus">
                            <Image src={minus} alt="" />
                          </button>
                        </div>
                      </div>

                      <div className="section-content__content flx-content">
                        <div className="content-section_frsttab"></div>
                        <div className="content-section_scdtab"></div>
                        <div className="content-section_thrdtab">
                          <p className="section-content__text">
                            Lorem ipsum, dolor sit amet consectetur adipisicing
                            elit. Nisi at commodi quos deserunt cumque saepe
                            consequatur suscipit laudantium quibusdam
                            accusantium architecto animi ducimus, quis placeat,
                            aut necessitatibus pariatur velit alias?
                          </p>
                        </div>
                      </div>

                      <div className="section-content__content flx-content">
                        <div className="content-section_frsttab"></div>
                        <div className="content-section_scdtab"></div>
                        <div className="content-section_thrdtab">
                          <div className="rdm-btn larn-stn-con flex">
                            <a className="rd-mr-a lrnmore">Learn More</a>
                            <Image className="arrow" src={arrowrgt} alt="" />
                          </div>
                        </div>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
