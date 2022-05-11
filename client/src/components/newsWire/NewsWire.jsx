import React, {useState} from 'react'
import ReactPaginate from 'react-paginate';
import { Link } from 'react-router-dom';


import './newswire.css'
import {newsArray} from './newsList'

const NewsWire = () => {
  const [pageNumber, setPageNumber] = useState(0)

  const newsPerPage = 6
  const pagesVisited = pageNumber * newsPerPage
  const handlePageClick = ({selected}) => {
      setPageNumber(selected)
  }
  const pageCount = Math.ceil(newsArray.length / newsPerPage)
  const displayNews = newsArray.slice(pagesVisited, pagesVisited + newsPerPage).map((value) =>{
      return (
        <div className='card-news' key={value.id}>
          <Link to={{ pathname: "/news/" + value.id}}>
            <img src={value.img} alt='news_img'></img>
            <label>{value.label}</label>
          </Link>
        </div>
        )
  })

  return (
      <article id='news-articles'>
        <h3>Some news and articles that may be of use to you:</h3>

        {displayNews}
        <ReactPaginate
            nextLabel="next >"
            onPageChange={handlePageClick}
            pageCount={pageCount}
            previousLabel="< previous"
            containerClassName='paginationBttns'
            nextLinkClassName='nextBttn'
            activeClassName='paginationActive'
        />

        <div className='remaining-content'>
          <p>The text diplayer page can be used to improve the visualization of translated texts for VNs.</p>
        </div>
      </article>
  )
}

export default NewsWire