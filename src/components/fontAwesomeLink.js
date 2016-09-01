import React from 'react'

import Link from './link'
import FontAwesome from './fontAwesome'

const FontAwesomeLink = (props) => {
  return(
    <Link { ...props }>
      <FontAwesome name={ props.name } />
    </Link>
  )
}

export default FontAwesomeLink
