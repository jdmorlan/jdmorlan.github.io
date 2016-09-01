import React, { PropTypes } from 'react'
import '../css/project.css'

import Link from './link'

const Project = (props) => {
  return(
    <section className="project">
      <h2>{ props.name }</h2>
      <div className="content">
        <div className="about">
          { props.children }
        </div>
        <div className="action-bar">
          <Link classes="source" to={ props.source } external={ true }>View Source</Link>
          <Link classes="live" to={ props.live } external={ true }>View Site</Link>
        </div>
      </div>
    </section>
  )
}

Project.propTypes = {
  name: PropTypes.string.isRequired,
  source: PropTypes.string,
  live: PropTypes.string
}


export default Project
