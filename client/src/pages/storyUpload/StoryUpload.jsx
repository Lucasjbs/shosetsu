import React, {useState, useCallback } from 'react'

import Navbar from '../../components/navbar/Navbar'
import TextUploader from '../../components/textUploader/TextUploader'
import TextDisplayer from '../../components/textDisplayer/TextDisplayer'

const StoryUpload = () => {
  const [rawText, setRawText] = useState("")

  //USE CALLBACK IS NEEDED FOR SAFELY SYNCHRONIZE WITH THE USEEFECT IN THE CHILD COMPONENT
  const readUploadedFile = useCallback((childdata) => { 
    setRawText(childdata)
  }, []);

  return (
    <>
      <Navbar />
      <TextUploader dataUploaded={readUploadedFile}/>
      <TextDisplayer title={"Text"} text={rawText}/>
    </>
  )
}

export default StoryUpload