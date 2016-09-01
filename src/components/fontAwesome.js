import React, { PropTypes } from 'react'

const FontAwesome = (props) => {
  const fontAwesomeClass = `fa fa-${props.name}`
  return(
    <i className={ fontAwesomeClass } aria-hidden="true"></i>
  )
}

FontAwesome.propTypes = {
  name: PropTypes.string
}

export default FontAwesome
