import React, { Component } from 'react';
//import logo from './logo.svg';

import PortfolioFixed from './components/PortfolioFixed';
import PortfolioContent from './components/PortfolioContent';

class App extends Component {
  render() {
    return (
      <div>
        <PortfolioFixed />
        <PortfolioContent />
      </div>
    )
  }
}

export default App;
