import React from 'react';
import Form from './Form'
import './App.css';

class App extends React.Component {
  constructor()
  {
    super();
    this.state = {
      'Name': '',
      'Sign': ''
    }
  }

  render() {
    return (
      <div className="App">
        <header className="Header">Horoscope</header>
        <Form />
      </div>
    );
  }
}

export default App;
