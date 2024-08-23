"use client";
import React from "react";
import "../../../globals.css";
import "./property_list.css";
import "../../Home-page-section/premium-collection/PremiumSection_module.css";
import "../../Home-page-section/premium-collection/SwiperTabs.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Tab, Tabs } from "react-bootstrap";
import PropertiesTab from '../../propertiesLanding/propertiesTab/PropertiesTab'

import Image from "next/image";
import MumImage from "../../../../../public/Premium-Slider/Hilton-Mumbai-International-Airport-Exterior 1.jpg";
import GrandHyyat from "../../../../../public/Premium-Slider/GrandHyyat.jpg";
import NewDelhi from "../../../../../public/Premium-Slider/NewDelhi.jpg";
import Marriott from "../../../../../public/Premium-Slider/marriottNewDelhi.jpg";
import Stregis from "../../../../../public/Premium-Slider/stregis.jpg";
import riverWalik from "../../../../../public/riverWalkHotel/riverWalkTab.png";
import rightic from "../../../../../public/ESG-images/right-icon.svg";

export default function Property_list({propertiesListData}) {

  const all = propertiesListData.filter((property) => {
    return property.categories?.includes(3);
  });
  const operational = propertiesListData.filter((property) => {
    return property.categories?.includes(6);
  });
  const underConstruction = propertiesListData.filter((property) => {
    return property.categories?.includes(5);
  });
  const planning = propertiesListData.filter((property) => {
    return property.categories?.includes(4);
  });
  const landClearing = propertiesListData.filter((property) => {
    return property.categories?.includes(7);
  })





  return (
    <div className="property_list_sec tab_padding">
      <div className="cstm-cont-wdt">
        <div className="row">
          <div className="col-lg-12 col-md-12 col-12 pro_list_grid_parent ">

            <Tabs defaultActiveKey="tab1" id="pipeline_tabs" className="">

              {/* All */}
              <Tab className="tab-ttl hd-mob" eventKey="tab1" title="All">
                <PropertiesTab tabsData={all}/>
              </Tab>


              {/* Operational */}
              <Tab className="tab-ttl" eventKey="tab2" title="Operational">
                <PropertiesTab tabsData={operational}/>
              </Tab>


              {/*Under construction */}
              <Tab className="tab-ttl" eventKey="tab3" title="Under construction">
                <PropertiesTab tabsData={underConstruction}/>
              </Tab>


              {/*Planning*/}
              <Tab className="tab-ttl" eventKey="tab4" title="Planning">
                <PropertiesTab tabsData={planning}/>
              </Tab>

              {/*land Clearing*/}
              <Tab className="tab-ttl" eventKey="tab5" title="Land Clearing">
                <PropertiesTab tabsData={landClearing}/>
              </Tab>

              
            </Tabs>
          </div>
        </div>
      </div>
    </div>
  );
}
