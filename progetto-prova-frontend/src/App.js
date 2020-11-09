import React, { Component } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import RouterComponent from './component/RouterComponent.jsx';

class App extends Component {

  render() {
                                                       console.log("class App extends Component {render() {");
     return (
      <div className="container">
        {console.log (this.props)} 
        <RouterComponent/>
      </div>

    );

  }
}

export default App;