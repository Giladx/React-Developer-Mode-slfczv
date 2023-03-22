import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Route } from 'react-router-dom'

import './style.css'
import Blog from './views/blog'
import Home from './views/home'
import Porfolio from './views/porfolio'
import About from './views/about'

const App = () => {
  return (
    <Router>
      <div>
        <Route component={Blog} exact path="/blog" />
        <Route component={Home} exact path="/" />
        <Route component={Porfolio} exact path="/porfolio" />
        <Route component={About} exact path="/about" />
      </div>
    </Router>
  )
}

ReactDOM.render(<App />, document.getElementById('app'))
