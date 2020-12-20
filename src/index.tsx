import React from 'react'
import { render } from 'react-dom'
import { BrowserRouter as Router } from 'react-router-dom'

import { App } from './core/App/App'

const root = document.getElementById('root')

render(
  <Router basename="/">
    <App />
  </Router>,
  root
)
