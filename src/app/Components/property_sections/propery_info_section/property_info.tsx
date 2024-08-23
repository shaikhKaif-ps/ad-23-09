import React from 'react'
import '../../../globals.css';
import "bootstrap/dist/css/bootstrap.min.css";
import './property_info.css'
import '../../Home-page-section/YearSection/YearSection.css';

import Image from 'next/image'
import hotel from '../../../../../public/Year-Icon/Cities.svg'
import key from '../../../../../public/Year-Icon/key.svg'
import new_hotel from '../../../../../public/Year-Icon/building.svg'

export default function property_info() {
  return (
    <>
        <div className='property_info_sec  tab_padding '>
            <div className='cstm-cont-wdt'>
                <div className='row'>
                    <div className='col-lg-8 col-md-12 col-12'>
                        <div className='inner_propertyinfo_col1'>
                            <h2 className='section_hd'>Our Premium collection <br /> of <span> properties </span></h2>
                        </div>
                    </div>

                    <div className='col-lg-4 col-md-12 col-12 '>                  
                        <div className='inner_propertyinfo_col2'>
                            <p>Advent Hotel International is a leading hospitality company, managing a portfolio of 484 operating keys and developing plans for 4,700 additional keys.</p>
                        </div>
                    </div>
                </div>
            

                <div className='row gap-30 cstmSe pro_info_box_parent'>

                    <div className='col-md-4 num-cont-wdt item'>
                        <div className='flex num-section'>
                        <Image src={new_hotel} width={50} height={50} alt="Hotel Icon" />
                        <div className='bloc font-museo'>
                        <h1>07</h1>        
                        <h6 className='num-txt'>Total Hotels</h6>
                        </div>
                        </div>
                    </div>

                    <div className='col-md-4 num-cont-wdt item'>
                        <div className='flex num-section'>
                        <Image src={key} width={50} height={50} alt="Hotel Icon" />
                        <div className='bloc font-museo'>
                        <h1>4287</h1>        
                        <h6 className='num-txt'>Total Keys</h6>
                        </div>
                        </div>
                    </div>

                    <div className='col-md-4 num-cont-wdt item'>
                        <div className='flex num-section'>
                        <Image src={hotel} width={50} height={50} alt="Hotel Icon" />
                        <div className='bloc font-museo'>
                        <h1>03</h1>        
                        <h6 className='num-txt'>No. Of Cities</h6>
                        </div>
                        </div>
                    </div>

                </div>

            </div>

        </div>

        <hr style={{backgroundColor:'#DDDDDD', height:'2px', border:'none'}} />
    </>
  )
}
