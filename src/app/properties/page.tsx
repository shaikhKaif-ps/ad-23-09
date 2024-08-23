import Property_spotligth from '../Components/property_sections/property_spotlight/property_spotlight';
import Property_info from '../Components/property_sections/propery_info_section/property_info';
import Property_list from '../Components/property_sections/property_list/property_list';
import Footer from '../Components/Footer/Footer';


async function fetchingAllProperties() {
  const resp = await fetch(`https://wordpress-1034502-4717804.cloudwaysapps.com/wp-json/wp/v2/properties`,
    {
      next:{revalidate:5}
    })

  if(!resp.ok){
      throw new Error('error from properties fetching ')
  }
  const finalData = await resp.json()
  return finalData
}





export default async function page() {
  const properties = await fetchingAllProperties()
  
  return (
    <>
       <Property_spotligth />
       <Property_info />
       <Property_list propertiesListData={properties}/>
       <Footer />
    </>
  )
}


    
export function generateMetadata(){
  return {
    title : 'properties of Advent',
    description :'properties of Advent International Hotel'
  }
}