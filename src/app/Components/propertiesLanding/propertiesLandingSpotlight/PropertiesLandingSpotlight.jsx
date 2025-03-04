import Image from "next/image"
import property_spotlight_img from '../../../../../public/property_page/property_spotlight/property_Spotligth.jpg'
import '../propertiesLandingSpotlight/propertiesLandingSpotlight.css'

const PropertiesLandingSpotlight = () => {
  return (
    <>
    <div className='property_spotlight inside_spotlight'>
        <div className='row no_margin'>
            <div className='col-lg-12 col-md-12 col-12 in_spot_col2 no_padding'>
                <div className='inner_spot_col2 pro_dlt_img_parent'>
                    <Image className="property_spot_img" src={property_spotlight_img} alt='About Header Image'/>
                </div>
            </div>
        </div>

    </div>
</>
  )
}

export default PropertiesLandingSpotlight