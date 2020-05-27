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

  getHoroscope = (event) => {
    console.log(event.target.value);
  }

  render() {
    return (
      <div className="App">
        <div className="Header">Horoscope</div>
        <Form submit={this.getHoroscope}/>
      </div>
    );
  }
}

export default App;
