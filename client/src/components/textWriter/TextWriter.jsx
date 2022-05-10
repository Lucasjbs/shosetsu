import React, {useState, useCallback } from 'react'
import TextDisplayer from '../textDisplayer/TextDisplayer'
import TextUploader from '../textUploader/TextUploader'
import './textwriter.css'

const TextWriter = () => {
    const [rawText, setRawText] = useState("")
    const [title, setTitle] = useState("Text")

    //USE CALLBACK IS NEEDED FOR SAFELY SYNCHRONIZE WITH THE USEEFECT IN THE CHILD COMPONENT
    const readUploadedFile = useCallback((childdata) => { 
      setRawText(childdata)
    }, []);

    const handleSubmit = () =>{
        const element = document.createElement("a");
        const file = new Blob([rawText], {
          type: "text/plain"
        });
        element.href = URL.createObjectURL(file);
        element.download = title + ".txt";
        document.body.appendChild(element);
        element.click();
    }
  return (
      <article id='text-writing'>
        <TextUploader dataUploaded={readUploadedFile}/>
        
        <div className='form-group' >
          <label htmlFor='titleInput'>Enter Text Title:</label>
          <input
            type='text'
            id='titleInput'
            name='titleInput'
            className='form-control'
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          <label htmlFor='rawTextInput'>Enter Text Content:</label>
          <textarea 
              rows="12"
              type='text'
              id='rawTextInput'
              name='rawTextInput'
              className='form-control'
              value={rawText}
              onChange={(e) => setRawText(e.target.value)}
          />
        </div>
        <button className='btn btn-primary' onClick={handleSubmit}>Download Story</button>

        <TextDisplayer title={title} text={rawText}/>

        {/* {isError ? (<p>There IS an error...</p>) : (<div><p>There's NO error</p></div>)}
        const value1 = text || 'John'   (Displays the second value if the first one is FALSY) */}
      </article>
  )
}

export default TextWriter