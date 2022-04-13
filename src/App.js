import React from 'react';
import { Provider } from 'react-redux';
import store from './store';
import './App.css';
import Dashboard from './routers/Dashboard.routers';

class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
      <div className="App">
        <header className="App-header">
          <Dashboard />
        </header>
      </div>
      </Provider>
    );
  }
}

export default App;
