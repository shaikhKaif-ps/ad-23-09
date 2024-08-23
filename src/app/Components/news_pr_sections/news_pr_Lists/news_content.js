import React from "react";
import Image from "next/image";
import "../../../../app/globals.css";
import "bootstrap/dist/css/bootstrap.min.css";
// import '../../Home-page-section/premium-collection/PremiumSection_module.css';
// import './newsPrLists.css'
import News_thumb from "./News_thumb.jpg";
import News_thumb2 from "../../../../../public/NewsThumnails/thumb2.jpg";
import News_thumb3 from "../../../../../public/NewsThumnails/thumb3.jpg";
import Link from "next/link";

const News_content = ({ newsData }) => {
  return (
    <>
      <div className="news_sec">
        <div className="row">
          <div className="col-12">
            {newsData &&
              newsData.map((news) => (
                <Link
                  href={news?.acf?.news_external_link}
                  target="_blank"
                  key={news?.id}
                >
                  <div className="newsBlog">
                    <div className="newsImg">
                        <Image src={news?.acf?.news_thum_image?.url} width={100} height={100}/>
                    </div>
                    <div className="newsDescp">
                      <div className="tag">
                        <p>News</p>
                      </div>
                      <p className="new_title">
                        {news?.title?.rendered}
                      </p>
                      <p className="new_date">{news?.acf?.news_date}</p>
                    </div>
                  </div>
                </Link>
              ))}

            {/* <a
              href="https://www.foodandhospitality.org/appointment/rahul-pandit-takes-the-helm-of-db-realtys-hospitality-division/"
              target="_blank"
            >
              <div className="newsBlog">
                <div className="newsImg">
                  <img
                    src="https://wordpress-1034502-4717804.cloudwaysapps.com/wp-content/uploads/2024/07/News_thumb.jpg"
                    alt=""
                  />
                </div>
                <div className="newsDescp">
                  <div className="tag">
                    <p>News</p>
                  </div>
                  <p className="new_title">
                    Rahul Pandit Takes the Helm of DB Realty’s Hospitality
                    Division
                  </p>
                  <p className="new_date">05 MAR, 2024</p>
                </div>
              </div>
            </a>

            <a
              href="https://hospitality.economictimes.indiatimes.com/news/hotels/rahul-pandit-to-head-db-realtys-hospitality-division/108203465"
              target="_blank"
            >
              <div className="newsBlog">
                <div className="newsImg">
                  <img
                    src="https://wordpress-1034502-4717804.cloudwaysapps.com/wp-content/uploads/2024/07/thumb3-scaled.jpg"
                    alt=""
                  />
                </div>
                <div className="newsDescp">
                  <div className="tag">
                    <p>News</p>
                  </div>
                  <p className="new_title">
                    Rahul Pandit to head DB Realty’s hospitality division
                  </p>
                  <p className="new_date">04 MAR, 2024</p>
                </div>
              </div>
            </a>

            <a
              href="https://hospitalitybizindia.com/news-track/rahul-pandit-takes-the-helm-at-d-b-realtys-hospitality-division/"
              target="_blank"
            >
              <div className="newsBlog">
                <div className="newsImg">
                  <img
                    src="https://wordpress-1034502-4717804.cloudwaysapps.com/wp-content/uploads/2024/07/thumb2-scaled.jpg"
                    alt=""
                  />
                </div>
                <div className="newsDescp">
                  <div className="tag">
                    <p>News</p>
                  </div>
                  <p className="new_title">
                    Rahul Pandit Takes the Helm at D B Realty’s Hospitality
                    Division
                  </p>
                  <p className="new_date">04 MAR, 2024</p>
                </div>
              </div>
            </a> */}
          </div>
        </div>
      </div>
    </>
  );
};

export default News_content;
