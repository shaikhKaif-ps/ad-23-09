import React from 'react'
import '../../../globals.css';
import './pro_dtls_spotlight.css';
import '../../../inside_pg_spotlight.css';
import "bootstrap/dist/css/bootstrap.min.css";
import Image from 'next/image';

import prop_dtl_spotlight_img from '../../../../../public/pro_dtls_page/pro_dtls_spotlight/pro_dtls_spotLight.webp'



export default function pro_dtls_spotlight({spotLight_Img}) {
  return (
    <div className='property_spotlight inside_spotlight'>
            <div className='row no_margin'>
                <div className='col-lg-12 col-md-12 col-12 in_spot_col2 no_padding'>
                    <div className='inner_spot_col2 pro_dlt_img_parent'>
                        <Image className="property_spot_img" width={100} height={100} src={spotLight_Img} alt='About Header Image'/>
                        
                    </div>
                </div>
            </div>

        </div>
    

    // <div className='property_spotlight inside_spotlight'>
    //         <div className='row no_margin'>
    //             <div className='col-lg-12 col-md-12 col-12 in_spot_col2 no_padding'>
    //                 <div className='inner_spot_col2 pro_dlt_img_parent'>
    //                     <Image className="property_spot_img" width={100} height={100} src={spotLight_Img} alt='About Header Image'/>
    //                 </div>
    //             </div>
    //         </div>

    //     </div>
  )
}
