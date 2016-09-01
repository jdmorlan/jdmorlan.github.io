import React from 'react'
import '../css/header.css'

import FontAwesomeLink from './fontAwesomeLink'

const Header = React.createClass({
  handleClick (e) {
    e.preventDefault()
    console.log('Yo')
  },

  render () {
    return(
      <header>
        <h1 className="large-header">Jay Morlan</h1>
        <h1 className="small-header">JM</h1>
        <div className="action-bar">
          <FontAwesomeLink name="github" to="https://github.com/jdmorlan" external={ true } />
          <FontAwesomeLink name="medium" to="https://medium.com/@jdmorlan" external={ true } />
          <FontAwesomeLink name="twitter" to="https://twitter.com/j_morlan" external={ true } />
          <FontAwesomeLink name="envelope" to="mailto:jay.d.morlan@gmail.com" />
        </div>
      </header>
    )
  }
})

export default Header
