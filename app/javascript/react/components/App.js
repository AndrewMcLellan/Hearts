import React from 'react'
import { Router } from '@reach/router';
import Home from './Home';

export const App = (props) => {
  return (
    <Router>
      <Home path='/' />
    </Router>
  )
}

export default App
