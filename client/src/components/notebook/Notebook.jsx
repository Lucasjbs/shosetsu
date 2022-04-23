import React, {useState} from 'react'

const Notebook = () => {
    const [rawText, setRawText] = useState("")

    const handleSubmit = () =>{
        const element = document.createElement("a");
        const file = new Blob([rawText], {
          type: "text/plain"
        });
        element.href = URL.createObjectURL(file);
        element.download = "myFile.txt";
        document.body.appendChild(element);
        element.click();
    }
  return (
      <article>
        <form onSubmit={handleSubmit}>
            <div className='form-group' >
            <label htmlFor='rawTextInput'>Enter Raw Text:</label>
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

            <button className='btn btn-primary' type='submit'>Display</button>
        </form>
        <p>{rawText}</p>
      </article>
  )
}

export default Notebook