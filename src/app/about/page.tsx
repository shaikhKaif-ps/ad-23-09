import Nav from '../Components/header';
import About_Spotlight from '../Components/about_sections/about_spotlight/about_spotlight'
import About_info_sec from '../Components/about_sections/about_info_sec/about_info_sec'
import About_counter_sec from '../Components/about_sections/about_counter_sec/about_counter_sec'
import About_vision_sec from '../Components/about_sections/about_vision_sec/about_vision_sec'
import About_team_sec from '../Components/about_sections/about_team_sec/about_team_sec';
import About_award_sec2 from '../Components/about_sections/about_award_sec/about_award_sec2';
import PremiumCollSection from '../Components/Home-page-section/premium-collection/premiumCollSection';
import Footer from '../Components/Footer/Footer'

const About = () => {
  return (
    <div>
      {/* <Nav /> */}
      <About_Spotlight/>
      <About_info_sec/>
      <About_counter_sec/>
      <About_vision_sec/>
      <About_team_sec/>
      {/* <About_award_sec2/> */}
      <PremiumCollSection />
      <Footer /> 
    </div>
  );
};

export default About;
