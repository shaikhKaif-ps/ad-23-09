import Image from "next/image"
import Pro_dtls_spotlight from "../../Components/property_Details_sections/pro_dtls_spotlight/pro_dtls_spotlight"
import Pro_dtls_info from "../../Components/property_Details_sections/pro_dtls_info_sec/pro_dtls_info"
import Pro_dtls_media from "../../Components/property_Details_sections/pro_dtls_media_sec/pro_dtls_media"
import Pro_dtls_loc from "../../Components/property_Details_sections/pro_dtls_loc_sec/pro_dtls_loc"
import PremiumCollSection from "../../Components/Home-page-section/premium-collection/premiumCollSection"
import Footer from "../../Components/Footer/Footer"

const PropertyDetail = async({params}) => {
  const apiResponse = await fetch(`https://wordpress-1034502-4717804.cloudwaysapps.com/wp-json/wp/v2/properties?slug=${params.property}`,{next:{revalidate:5}})
  const data = await apiResponse.json()
  

  const singleProperty = Array.isArray(data) ? data[0] : data;

  console.log(singleProperty,'-----');
  

  if (!singleProperty) {
    return <div>Property not found</div>;
  }

  return (
    <>
      <div key={crypto.randomUUID()}>
          
        <Pro_dtls_spotlight spotLight_Img={singleProperty?.acf?.banner_image} />
        <Pro_dtls_info 
            propLocation={singleProperty?.acf?.location} 
            propTitle={singleProperty?.title?.rendered}
            propDesp={singleProperty?.content?.rendered}
            propKeyList={singleProperty?.acf?.features}
        />
        <Pro_dtls_media propMediaImg={singleProperty?.acf?.photo} propVideo={singleProperty?.acf?.video?.[0]?.properties_video} />
        <Pro_dtls_loc propMapLink={singleProperty?.acf?.property_map_location} />
        <PremiumCollSection />
        <Footer />
              
          
      </div>
    </>
  )
}


export async function generateStaticParams() {
  const resp = await fetch('https://wordpress-1034502-4717804.cloudwaysapps.com/wp-json/wp/v2/properties',{next:{revalidate:5}})
  
  const propertiesData = await resp.json();

  return propertiesData.map((singleproperty)=>({
    property : singleproperty.slug
  }))
  
}








export async function generateMetadata({ params }) {
  const res = await fetch(
    `https://wordpress-1034502-4717804.cloudwaysapps.com/wp-json/wp/v2/properties?slug=${params.property}`
  );

  if (!res.ok) {
    return {
      title: 'Property Not Found',
      description: 'This property does not exist.',
    };
  }

  const data = await res.json();
  const singlepro = Array.isArray(data) ? data[0] : null;

  return {
    title: singlepro ? singlepro?.acf?.meta_title : 'Property Not Found',
    description: singlepro
      ? singlepro?.acf?.meta_description_
      : 'This property does not exist.',
  };
}



export default PropertyDetail