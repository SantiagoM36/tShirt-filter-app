import React from 'react';
import './App.css';
import Dashboard from './routers/Dashboard.routers';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <Dashboard />
        </header>
      </div>
    );
  }
}

export default App;
