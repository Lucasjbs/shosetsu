import React from 'react'
import './newswire.css'

const NewsWire = () => {
  return (
      <article id='news-articles'>
        <h3>Use our tags to add elements to your text.</h3>

        <div className='card-news'>
          <img src='http://localhost:3000/dummyImg.png' alt='dummy'></img>
          <p>Use our tags to add elements to your text.</p>
        </div>
        <div className='card-news'>
          <img src='http://localhost:3000/dummyImg.png' alt='dummy'></img>
          <p>Use our tags to add elements to your text.</p>
        </div>

        <div className='remaining-content'>
          <p>Read some articles and news that may help you in your writting:</p>
          <p>[Pagination of articles here!]</p>
        </div>
        
      </article>
  )
}

export default NewsWire