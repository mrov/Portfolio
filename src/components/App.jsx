import React, { Component } from 'react';
import Header from './Header.jsx';
import CoverSection from './Cover.jsx';
import PortItem from './PortItem.jsx';

class App extends Component {
  render() {
    return (
      <div className="container-fluid">
        <div className="row">
          <div className="col-12 p-0">
            <CoverSection/>
            <PortItem/>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
