import React from "react";
import {v4} from 'uuid';
import "../../../../app/globals.css";
import { Tab, Tabs } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
// import '../../Home-page-section/premium-collection/PremiumSection_module.css';
// import './newsPrLists.css'
import valorEstate from '../../../../../public/NewsThumnails/valorEstate-news.png'
import Pro_dtls_img_slider from "../../property_Details_sections/pro_dtls_img_slider_sec/pro_dtls_img_slider";
import Image from "next/image";

const Press_release_content = ({pressData}) => {
  return (
    <>
      <div className="press_release_sec">
        <div className="row">
          {
            pressData &&
            pressData.map((singlePressData)=>(
              <div className="col-12" key={v4()}>
                <a href={`media/${singlePressData?.slug}`}>
                  <div className="newsBlog">
                    <div className="newsImg">
                      <img
                        src={singlePressData?.acf?.press_release_thumb_img?.url}
                        alt=""
                      />
                    </div>
                    <div className="newsDescp">
                      <div className="tag">
                        <p>Press Release</p>
                      </div>
                      <p className="new_title">
                        {singlePressData?.title?.rendered}
                      </p>
                      <p className="new_date">{singlePressData?.acf?.press_release_date}</p>
                    </div>
                  </div>
                </a>
              </div>
            ))
          }
          {/* <div className="col-12">
            <a href="/valor-estate-to-demerge-hospitality-business">
              <div className="newsBlog">
                <div className="newsImg">
                  <img
                    src="https://wordpress-1034502-4717804.cloudwaysapps.com/wp-content/uploads/2024/07/pr_thumb.jpg"
                    alt=""
                  />
                </div>
                <div className="newsDescp">
                  <div className="tag">
                    <p>Press Release</p>
                  </div>
                  <p className="new_title">
                    Valor Estate to demerge hospitality business
                  </p>
                  <p className="new_date">13 JUN, 2024</p>
                </div>
              </div>
            </a>
          </div>
          <div className="col-12">
            <a href="/valor-estate-news">
              <div className="newsBlog">
                <div className="newsImg">
                  <Image
                    src={valorEstate}
                    alt=""
                  />
                </div>
                <div className="newsDescp">
                  <div className="tag">
                    <p>Press Release</p>
                  </div>
                  <p className="new_title">
                    Valor Estate News: New Deals, Launches & FY25 Outlook
                  </p>
                  <p className="new_date">10 JUN, 2024</p>
                </div>
              </div>
            </a>
          </div> */}
        </div>
      </div>
    </>
  );
};

export default Press_release_content;
