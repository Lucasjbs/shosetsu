import React from 'react'
import './header.css'

const Header = () => {
  return (
    <>
      <header>
        <h1>Write and save your stories here.</h1>
      </header>
      <section id='header-tutorial'>
        <div className='card-tutorial'>
          <p>Write your own story inside the text box, and once you finish it, assign a title to it.</p>
          <p>Then, use the download button to download your file.</p>
        </div>
        <div className='card-tutorial'>
          <img src='http://localhost:3000/dummyImg.png' alt='dummy'></img>
        </div>

        <div className='card-tutorial'>
          <p>Use our tags to add elements to your text.</p>
        </div>
        <div className='card-tutorial'>
          <img src='http://localhost:3000/dummyImg.png' alt='dummy'></img>
        </div>

        <div className='card-tutorial'>
          <p>You can upload the file on this website later to read the story again with your own elements 
            applied to it.
          </p>
        </div>
        <div className='card-tutorial'>
          <img src='http://localhost:3000/dummyImg.png' alt='dummy'></img>
        </div>
      </section>
    </>
  )
}

export default Header