import React, {useState, useEffect} from 'react'

import './textuploader.css'

const TextUploader = ({dataUploaded}) => {
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
    useEffect(() => {
        dataUploaded(text);
    }, [text])
  return (
      <section>
        <div className='upload-input' >
          <input type="file" onChange={(e) => showFile(e)} />
        </div>
      </section>
  )
}

export default TextUploader