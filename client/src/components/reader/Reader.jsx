import React, {useState} from 'react'

const Reader = () => {
    const [text, setText] = useState("")

    const showFile = async (e) => {
        e.preventDefault()
        const reader = new FileReader()
        reader.onload = async (e) => { 
        const text = (e.target.result)
        setText(text)
        };
        reader.readAsText(e.target.files[0])
    }
  return (
      <article>
        <input type="file" onChange={(e) => showFile(e)} />
        <p>{text}</p>
      </article>
  )
}

export default Reader