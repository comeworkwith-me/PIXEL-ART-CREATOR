import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import { BrowserRouter as Router} from "react-router-dom";

ReactDOM.render(
  <Router>
    <div>
      <React.StrictMode>
        <App />
      </React.StrictMode>
      
      <div class="kirby bounce"></div>
      <div class="cloud cloud-1"></div>
      <div class="cloud cloud-2"></div>
      <div class="cloud cloud-3"></div>
      <div class="cloud cloud-4"></div>
      <div class="charizard"></div>
      <div class="trainer"></div>

    </div>
  </Router>
  ,
  document.getElementById('root')
)
