import React from 'react'
import NewsPrSpotlight from '../Components/news_pr_sections/news_pr_Spotlight/NewsPrSpotlight'
import NewsPrLists from '../Components/news_pr_sections/news_pr_Lists/NewsPrLists'
import Footer from '../Components/Footer/Footer';

const page = () => {
  return (
    <>
        <NewsPrSpotlight />
        <NewsPrLists />
        <Footer/>
    </>
  )
}

export default page