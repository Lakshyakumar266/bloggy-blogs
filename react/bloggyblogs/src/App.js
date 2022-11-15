import './App.css';
import Nav from './components/nav'
import Footer from './components/footer'
import Content from './components/content'
import About from './components/about'
import Contact from './components/contact'
import Blogpost from './components/blogpost'
// eslint-disable-next-line
import React, { useState, useEffect } from 'react'

import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

import LoadingBar from 'react-top-loading-bar'


const App = () => {
  document.title = 'BloggyBlogs - Read the Blogs & make your coding life eassy.'
  const [progress, setProgress] = useState(0)

  return (
    <div>
      <LoadingBar color='#f11946' height={5} progress={progress} />
      <Router>
        <Nav />
        <Switch>

          <Route exact path="/">
            <Content setProgress={setProgress} />
          </Route>
          <Route path="/blog">
            <Blogpost setProgress={setProgress} />
          </Route>
          <Route exact path="/about">
            <About setProgress={setProgress} />
          </Route>
          <Route exact path="/contact">
            <Contact setProgress={setProgress} />
          </Route>

        </Switch>
        <Footer />
      </Router>
    </div>
  )

}
export default App