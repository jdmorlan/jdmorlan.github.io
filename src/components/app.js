import React from 'react'

import Header from './header'
import Intro from './intro'
import Project from './project'

const App = React.createClass({
  render () {
    return(
      <div className="app">
        <Header />
        <Intro />
        <Project
          name="Spacecity Blackjack"
          live="http://www.jdmorlan.com/spacecity-blackjack"
          source="https://github.com/jdmorlan/spacecity-blackjack">

          <p>Using React and Redux to build a little blackjack game</p>
          <p>
            This was done the weekend before the spacecity-js conference,
            hence the styling choice!
          </p>
        </Project>
        <Project
          name="Github Labels"
          source="https://github.com/jdmorlan/github-labels"
          live="http://www.jdmorlan.com/github-labels">

          <p>
            Exploring React and Redux architecture by re-creating
            Github's label management view.
          </p>
        </Project>
        <Project
          name="Reducing"
          source="http://www.github.com/jdmorlan/reducing"
          live="http://www.jdmorlan.com/reducing">
          
          <p>
            Implement the reduce function in Redux, so you can see
            each operation.
          </p>
        </Project>
      </div>
    )
  }
})

export default App
