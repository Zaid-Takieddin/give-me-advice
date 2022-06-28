import React, { Component } from "react";
import "./App.css";
import axios from "axios";

export class App extends Component {
  state = { advice: "" };

  componentDidMount() {
    this.fetchAdvice();
  }

  fetchAdvice = () => {
    axios
      .get("https://api.adviceslip.com/advice")
      .then((response) => {
        const { advice } = response.data.slip;
        this.setState({ advice });
      })
      .catch((error) => console.log(error.message));
  };

  render() {
    const { advice } = this.state;

    return (
      <div className="app">
        <div className="card">
          <h2 className="heading">{advice}</h2>
          <button onClick={this.fetchAdvice} className="button">
            <span>GIVE ME ADVICE</span>
          </button>
        </div>
      </div>
    );
  }
}

export default App;
