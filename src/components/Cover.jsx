import React, { Component } from 'react';
import Header from './Header.jsx';

class App extends Component {
  render() {
    return (
      <div className="row coverSection background-code">
		<div className="col-12 p-0">
			<Header/>
		</div>
		<div className="main-quote">
			<h1>“Coming together is a beginning. Keeping together is progress. Working together is success.” -Henry Ford</h1>
		</div>
	  </div>
    );
  }
}

export default App;
