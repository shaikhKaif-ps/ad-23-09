import Image from "next/image";
import rightic from "../../../../../public/ESG-images/right-icon.svg";
import "bootstrap/dist/css/bootstrap.min.css";
import "../../../Components/propertiesLanding/propertiesList/propertiesList.css";
import "../../../globals.css";
import "../../Home-page-section/premium-collection/PremiumSection_module.css";
import "../../Home-page-section/premium-collection/SwiperTabs.css";
import Link from "next/link";


const PropertiesTab = ({ tabsData }) => {
    return (
      <>
        <div className="row tabsRow">
          {tabsData.map((property) => {
            return (
              <div className="col-lg-4 col-md-6 col-12" key={property.id}>
                <div className="insd_tab">
                  <div className="img_tab">
                    <Image
                      src={property?.acf?.thumb_image}
                      alt=""
                      width={500}
                      height={300}
                    />
                  </div>
                  <div className="content_tab">
                    <h3 className="hd-tb-tp">{property?.title?.rendered}</h3>
                    <p className="para-tb-md">{property?.acf?.location}</p>
                    <div className="rdm-btn flex">
                      <Link
                        href={`/properties/${property?.slug}`}
                        className="font-museo rd-mr-a rd-mr-tbtn mob-read-btn"
                      >
                        Read More{" "}
                      </Link>
                      <Image
                        className="slider-img-prem"
                        src={rightic}
                        alt=""
                        width={20}
                        height={20}
                      />
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </>
    );
  };
  
  export default PropertiesTab;