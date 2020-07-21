import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom'
import './App.css';

import SearchMeasurers from './components/SearchMeasurers'

function App() {
  return (
    <Router>
      <SearchMeasurers />
    </Router>
  );
}

export default App;
