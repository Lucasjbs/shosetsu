import React, {useState} from 'react'

function Translate() {
    const [rawText, setRawText] = useState("")
    const [translation, setTranslation] = useState("")
    const [result, setResult] = useState([])
    const [id, setId] = useState(1)
    const [warning, setWarning] = useState("")

    const handleSubmit = (e) => {
        e.preventDefault()

        const textSplitter = rawText.split('\n')
        const translationSplitter = translation.split('\n')

        if(textSplitter.length !== translationSplitter.length) setWarning("Different lenghts!!!")
        else if(rawText && translation){

            let flag = 0
            let keyId = id

            while(textSplitter.length !== flag){

                const displayer = {
                    id: keyId, 
                    rawText: textSplitter[flag],
                    translation: translationSplitter[flag]
                }
            
                setResult((data) => {
                    return [...data, displayer]
                })
    
                keyId++
                flag++
            }

            setId(keyId)
            setRawText('')
            setTranslation('')
            setWarning('')
        }
        else
          setWarning("Empty data")
    }

    const toggleColor = (e) => {
        e.preventDefault()
        if(e.target.style.backgroundColor === 'rgb(128, 128, 128)')
            e.target.style.backgroundColor = 'rgb(220, 20, 60)'
        else if (e.target.style.backgroundColor === 'rgb(220, 20, 60)')
            e.target.style.backgroundColor = 'rgb(128, 128, 128)'
    }

  return (
  <React.Fragment>
    <article>
      <form onSubmit={handleSubmit}>
        <div className='form-group' >
          <label htmlFor='rawTextInput'>Enter Raw Text:</label>
          <textarea 
            rows="6"
            type='text'
            id='rawTextInput'
            name='rawTextInput'
            className='form-control'
            value={rawText}
            onChange={(e) => setRawText(e.target.value)}
          />
        </div>

        <div className='form-group' >
          <label htmlFor='translationInput'>Enter Translation:</label>
          <textarea 
            rows="6"
            type='text'
            id='translationInput'
            name='translationInput'
            className='form-control'
            value={translation}
            onChange={(e) => setTranslation(e.target.value)}
          />
        </div>

        <button className='btn btn-primary' type='submit'>Display</button>
        <button className='btn btn-danger' type='button' onClick={() => setResult([])}>Clear All</button>
      </form>
    </article>
        <br></br>
    
        <h5>{warning}</h5>

        <br></br>
        <br></br>
        <h4>Side-by-side Display: </h4>
        <table>
            {result.map((data) => {
            const {id, rawText, translation} = data
            return(
            <tbody key={id}>
                <tr>
                    <th>{rawText}</th>
                    <td onClick={toggleColor} style={{ backgroundColor: 'rgb(128, 128, 128)' }}>{translation}</td>
                </tr>
            </tbody>
            )
            })}
        </table>

        <br></br>
        <br></br>
        <br></br>
        <br></br>
        
  </React.Fragment>
  )
}

export default Translate