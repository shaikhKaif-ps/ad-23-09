import PressSpotlight from "../../Components/press_sections/PressSpotlight";
import Footer from "../../Components/Footer/Footer";
import Press_inside_sec from "../../Components/press_sections/press_inside_sec";
// import Footer from '../Components/Footer/Footer';
// import Press_inside_sec from '../Components/press_sections/press_inside_sec'

const Page = async ({ params }) => {
  try {
    const apiResponse = await fetch(
      `https://wordpress-1034502-4717804.cloudwaysapps.com/wp-json/wp/v2/press_release?slug=${params.videoPressRelease}`,
      { next: { revalidate: 5 } }
    );

    if (!apiResponse.ok) {
      throw new Error('Failed to fetch press release');
    }

    const data = await apiResponse.json();

    const singlePressRelease = Array.isArray(data) ? data[0] : data;

    if (!singlePressRelease) {
      return <div>Press release not found</div>;
    }

    return (
     <>
     <PressSpotlight pressReleaseTitle={singlePressRelease?.title?.rendered} />
     <Press_inside_sec videoLink={singlePressRelease?.acf?.press_release_video}/>
     <Footer />
     </>
    );
  } catch (error) {
    return <div>Error: {error.message}</div>;
  }
};

export async function generateStaticParams() {
  const resp = await fetch(
    'https://wordpress-1034502-4717804.cloudwaysapps.com/wp-json/wp/v2/press_release',
    { next: { revalidate: 5 } }
  );

  if (!resp.ok) {
    throw new Error('Failed to fetch press releases');
  }

  const pressReleaseData = await resp.json();

  return pressReleaseData.map((singlePress) => ({
    videoPressRelease: singlePress.slug,
  }));
}

export default Page;
