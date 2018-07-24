import React from 'react';
const API_KEY = `${process.env.REACT_APP_API_KEY}`;
let url = 'http://api.openweathermap.org/data/2.5/weather?q=London&units=metric&APPID=' + API_KEY;

class Weather extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      items: []
    };
  }

  componentDidMount() {
    fetch(url)
      .then(res => res.json())
      .then(
        (result) => {
          this.setState({
            isLoaded: true,
            result: result
          });
          console.log(result)
        },
        (error) => {
          this.setState({
            isLoaded: true,
            error
          });
        }
      )
  }

  render() {
    const { error, isLoaded, result } = this.state;
    if (error) {
      return <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
      return <div>Loading...</div>;
    } else {
      return (
        <div>
          <div>The temperature in London is:</div>
          <div>{result.main.temp}</div>
        </div>
      );
    }
  }
}

export default Weather;