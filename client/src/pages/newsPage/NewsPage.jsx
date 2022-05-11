import React from 'react'
import {useParams} from 'react-router-dom'

import Navbar from '../../components/navbar/Navbar'
import P01_UkrainianWar from '../../components/newsArticles/P01_UkrainianWar'
import P02_CovidPandemic from '../../components/newsArticles/P02_CovidPandemic'
import P03_AustralianFirestorm from '../../components/newsArticles/P03_AustralianFirestorm'

const NewsPage = () => {
  return (
    <>
      <Navbar />
      {useParams().id==='1' && <P01_UkrainianWar />}
      {useParams().id==='2' && <P02_CovidPandemic />}
      {useParams().id==='3' && <P03_AustralianFirestorm />}
    </>
  )
}

export default NewsPage