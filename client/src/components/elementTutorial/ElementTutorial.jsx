import React from 'react'

const ElementTutorial = () => {
  return (
    <section id='element-tutorial'>
        <h3>Elements Briefing</h3>
        <p>You can use our tags to add elements to your text, and upload the file on this website later
            to read the story again with your own elements applied to it.
        </p>
        <p>Currently the site only accepts manually typed HTML tags. The original idea was to create these 
            tags using an interface (without manually typing).
        </p>

        <h3>Dev Notes</h3>
        {/*https://pragmaticwebsecurity.com/articles/spasecurity/react-xss-part2.html*/}
        <p>For now, SetInnerHtml is being used to convert the text into HTML to apply the elements.</p>
        <p>However, this seems unsafe so I must find a way to do it more safely.</p>

        <p>The Text Uploader can't send the title name yet. Will work on it later.</p>
    </section>
  )
}

export default ElementTutorial