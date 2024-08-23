"use client";
import React from "react";
import Image from "next/image";
import "../../../globals.css";
import "./propertiesList.css";
import "../../Home-page-section/premium-collection/PremiumSection_module.css";
import "../../Home-page-section/premium-collection/SwiperTabs.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Tab, Tabs } from "react-bootstrap";



import PropertiesTab from "../propertiesTab/PropertiesTab";



const PropertiesList = ({propertiesListData}) => {
  
  
  
  const all = propertiesListData.filter((property)=>{
    return property.categories.includes(3)
  })
  
  const operational = propertiesListData.filter((property)=>{
    return property.categories.includes(6)
  })
  const underConstruction = propertiesListData.filter((property)=>{
    return property.categories.includes(5)
  })
  const pipeline = propertiesListData.filter((property)=>{
    return property.categories.includes(4)
  })





  return (
    <div className="property_list_sec tab_padding">
      <div className="cstm-cont-wdt">
        <div className="row">
          <div className="col-lg-12 col-md-12 col-12 pro_list_grid_parent ">
            <Tabs defaultActiveKey="tab1" id="pipeline_tabs" className="">
              <Tab className="tab-ttl hd-mob" eventKey="tab1" title="All">
               <PropertiesTab tabsData={all}/>
              </Tab>
              <Tab className="tab-ttl" eventKey="tab2" title="Operational">
                <PropertiesTab tabsData={operational} />
              </Tab>
              <Tab className="tab-ttl" eventKey="tab3" title="Under construction">
                <PropertiesTab tabsData={underConstruction} />
              </Tab>
              <Tab eventKey="tab4" title="Pipeline">
                <PropertiesTab tabsData={pipeline}/>
              </Tab>
            </Tabs>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PropertiesList;
