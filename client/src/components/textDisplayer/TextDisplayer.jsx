import React from 'react'
import './textdisplayer.css'

const TextDisplayer = (props) => {
  return (
    <section id='text-display'>
        <h2>{props.title}</h2>
        <div dangerouslySetInnerHTML={{__html: props.text}}></div>
    </section>
  )
}

export default TextDisplayer