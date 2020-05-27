import React from 'react';
import './Aztro.css'

class Aztro extends React.Component {
    constructor(props){
        super(props);
        this.state = {
          json: {}
        }
    }

    componentDidMount () {
        const URL = `https://aztro.sameerkumar.website/?sign=${this.props.sign}&day=today`;
        fetch(URL, {
            method: 'POST'
        }).then(response => response.json())
        .then(json => this.setState({json}));
    }

    render() {
        return (
          <div className='aztro'>
            <h2>Hi, {this.props.name}... </h2>
            <p><b>Your Horoscope for {this.state.json.current_date} is: </b></p>
            <p>
                <b>Compatibility:</b> {this.state.json.compatibility} <br />
                <b>Mood:</b>          {this.state.json.mood} <br />
                <b>Lucky Number:</b>  {this.state.json.lucky_number} <br />
                <b>Lucky Time:</b>    {this.state.json.lucky_time} <br />
            </p>
            <p>
                <b>Description:</b><br />
                {this.state.json.description}
            </p>
            <input type="submit" value="Back" onClick={this.props.submit}/>
          </div>
        );
    }
}

export default Aztro;