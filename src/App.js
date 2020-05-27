import React from 'react';
import Form from './components/Form'
import Aztro from './components/Aztro'
import './App.css';

class App extends React.Component {
  constructor()
  {
    super();
    this.state = {
      Name: '',
      Sign: 'Aries',
      Route: 'Form'
    }
  }

  nameGet = (event) => {
    this.setState({Name: event.target.value});
  }

  signGet = (event) => {
    this.setState({Sign: event.target.value});
  }

  getHoroscope = () => {
    if (this.state.Name) {
      this.setState({Route: 'Aztro'});
    }
  }

  getHome = () => {
    this.setState({Route: 'Form', Name: '', Sign: 'Aries'});
  }

  render() {
    return (
      <div className="App">
        <div className='header'>Horoscope</div>
        <div className='container'>
          {this.state.Route === 'Form'
          ? <Form name={this.nameGet} sign={this.signGet} submit={this.getHoroscope} />
          : <Aztro name={this.state.Name} sign={this.state.Sign} submit={this.getHome}/>
          }
        </div>
        <div className='footer'>© Silver</div>
      </div>
    )
  }
}

export default App;
