import React, { PropTypes } from 'react'

const Link = React.createClass({
  propTypes: {
    to: PropTypes.string,
    handleClick: PropTypes.func,
    external: PropTypes.bool,
    classes: PropTypes.string
  },

  getDefaultProps () {
    return {
      to: '#',
      handleClick: () => { return },
      external: false
    }
  },

  render () {
    const { to, handleClick, external, classes } = this.props
    const target = external ? '_blank' : '_self'

    return(
      <a className={ classes } href={ to } onClick={ handleClick } target={ target }>
        { this.props.children }
      </a>
    )
  }
})

export default Link
