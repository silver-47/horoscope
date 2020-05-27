import React from 'react';
import Form from './components/Form'
import './App.css';

class App extends React.Component {
  constructor()
  {
    super();
    this.state = {
      Name: '',
      Sign: 'Aries'
    }
  }

  nameGet = (event) => {
    this.setState({Name: event.target.value});
  }

  signGet = (event) => {
    this.setState({Sign: event.target.value});
  }

  getHoroscope = () => {
    const { Name, Sign } = this.state;
    if (Name) {
      console.log(Name);
      console.log(Sign);
    }
  }

  render() {
    return (
      <div className="App">
        <div className="Header">Horoscope</div>
        <Form name={this.nameGet} sign={this.signGet} submit={this.getHoroscope} />
      </div>
    )
  }
}

export default App;
