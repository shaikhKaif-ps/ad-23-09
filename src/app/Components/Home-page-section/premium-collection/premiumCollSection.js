"use client";
import { useEffect, useState } from "react";
import React from 'react';
// import '../../../globals.css';
import './PremiumSection_module.css';
import { Tab, Tabs } from 'react-bootstrap'; 
import SwTabOne from './SwTabOne'
import Link from 'next/link';


const PremiumCollSection = () => {
  const [propertiesFetchData, setPropertiesFetchData] = useState([]);

  useEffect(() => {
    const fetchingData = async () => {
      try {
        const resp = await fetch(
          "https://wordpress-1034502-4717804.cloudwaysapps.com/wp-json/wp/v2/properties"
        );
        const finalData = await resp.json();
        setPropertiesFetchData(finalData);
      } catch (error) {
        console.log(error);
      }
    };

    fetchingData();
  }, []);

  const all = propertiesFetchData.filter((property) => {
    return property.categories?.includes(3);
  });
  const operational = propertiesFetchData.filter((property) => {
    return property.categories?.includes(6);
  });
  const underConstruction = propertiesFetchData.filter((property) => {
    return property.categories?.includes(5);
  });
  const planning = propertiesFetchData.filter((property) => {
    return property.categories?.includes(4);
  });
  const landClearing = propertiesFetchData.filter((property) => {
    return property.categories?.includes(7);
  })




  return (
    <div className='premiumCollection_section'>
      <div className='premimum_inside_section'>
        <h2 className='section_hd'>Our premium collection
        <br/> of
        <span> Properties</span>  
        </h2>
        
      </div>

      <div className='tab-section'>
        <div className='row'>

          <div className='col-md-12'>
              <div className='pipeline_section'>
          

                <div className='btn-prm-sec'>
                  <Link href={'/properties'} className='exp-tab-btn hd-mob-btn'>EXPLORE ALL PROPERTIES</Link>
                </div>
    
                <Tabs defaultActiveKey="tab1" id="pipeline_tabs">
                  <Tab className='tab-ttl hd-mob' eventKey="tab1" title="All">
                    <SwTabOne propertiesData={all} />
                  </Tab>
                  <Tab className='tab-ttl' eventKey="tab2" title="Operational">
                    <SwTabOne propertiesData={operational} />
                  </Tab>
                  <Tab className='tab-ttl' eventKey="tab3" title="Under construction">
                    <SwTabOne propertiesData={underConstruction} />
                  </Tab>
                  <Tab eventKey="tab4"  title="Planning">
                    <SwTabOne propertiesData={planning} />
                  </Tab>
                  <Tab eventKey="tab5"  title="Land Clearing">
                    <SwTabOne propertiesData={landClearing} />
                  </Tab>
                </Tabs>
              </div>
          </div>

        </div>
      </div>


      {/* Mobile View All Button code start here  */}


      <div className='Mob_view_all_btn'>
          <a href='/property' className='mob-vw-btn'>EXPLORE ALL PROPERTIES</a>
      </div>


    </div>
    
  );
};

export default PremiumCollSection;
