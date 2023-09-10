import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import AllTrains from './AllTrains';
import SingleTrain from './SingleTrain';

function App() {
  return (
    <div className="App">
      <Router>
        <nav>
          <ul>
            <li>
              <Link to="/">All Trains</Link>
            </li>
          </ul>
        </nav>
        <Route path="/" exact component={AllTrains} />
        <Route path="/train/:trainNumber" component={SingleTrain} />
      </Router>
    </div>
  );
}

export default App;
