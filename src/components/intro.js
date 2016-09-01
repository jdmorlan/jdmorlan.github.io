import React from 'react'
import '../css/intro.css'

import Link from './link'

const Intro = (props) => {
  return(
    <section id="intro">
      <div className="content">
        <h2>Hey I'm Jay Morlan...and I write codes!</h2>
        <p>
          Nice speech about my awesomeness...
        </p>
      </div>
      <div className="cta">
        <Link to="mailto:jay.d.morlan@gmail.com">Get In Touch</Link>
      </div>
    </section>
  )
}

export default Intro
