import React, { Component } from 'react';
import Header from './Header.jsx';
import CoverSection from './Cover.jsx';

class App extends Component {
  render() {
    return (
      <div className="row justify-content-center pt-3">
	  	<div className="col-md-10 col-lg-8 port-item">
		  <div className="row">
			<div className="col-12">
				<h1 className="text-center pt-1">Item Title</h1>
			</div>
		  </div>
		  <div className="row alig-items-middle">
			<div className="col-6">
				<img src="static/img/phoneUsing.jpg" className="img-fluid pt-4"/>
			</div>
			<div className="col-6">
				<div className="text-center">
					<p className="text-center">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum mattis, tortor eu aliquam scelerisque, ligula urna convallis sapien, sit amet accumsan est ante eu erat. Sed dui enim, ultricies vitae tellus id, rhoncus vestibulum lectus. Nulla facilisi. Nunc lobortis, mi ut pharetra tempor, lorem sapien porta nisl, non pharetra risus ex sit amet turpis. Integer quis tortor elementum, iaculis arcu et, pellentesque tortor. Suspendisse a ligula nec dui pulvinar consequat. Aenean tristique risus non auctor hendrerit. Integer congue lectus nec lacus placerat, vitae suscipit urna dictum.</p>
					<button className="btn btn-info">Leia Mais</button>
				</div>
			</div>
		  </div>
		</div>
      </div>
    );
  }
}

export default App;
