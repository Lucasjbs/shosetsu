import React from 'react'
import './newswire.css'

const NewsWire = () => {
  return (
      <article id='news-articles'>
        <h3>Read some articles and news that may help you in your writting:</h3>

        <div className='card-news'>
          <img src='http://localhost:3000/dummyImg.png' alt='dummy'></img>
          <p>News #1</p>
        </div>
        <div className='card-news'>
          <img src='http://localhost:3000/dummyImg.png' alt='dummy'></img>
          <p>News #2</p>
        </div>
        <div className='card-news'>
          <img src='http://localhost:3000/dummyImg.png' alt='dummy'></img>
          <p>News #3</p>
        </div>
        <div className='card-news'>
          <img src='http://localhost:3000/dummyImg.png' alt='dummy'></img>
          <p>News #4</p>
        </div>

        <div className='remaining-content'>
          <p>[Pagination of articles here!]</p>
          <p>The text diplayer page can be used to improve the visualization of translated texts from VNs.</p>
        </div>
      </article>
  )
}

export default NewsWire