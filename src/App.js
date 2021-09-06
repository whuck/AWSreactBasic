// Author:      will huck
// Version:     0.3.5
import React, { Component } from 'react';
import Countries from './components/Countries';

// App.css should be imported after all child components
import './App.css';

class App extends Component {

  render() { 
    return ( 
      <div className="App">
        <header className="App-header">
          huck's awesome medal app
        </header>
        <Countries></Countries>
      </div>
     );
  }
}
 
export default App;
