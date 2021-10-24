import fetch from 'cross-fetch';
import React, { Component } from 'react';
import './App.css';
import axios from 'axios';

class App extends Component {
  componentDidMount() {
    // fetch('https://jsonplaceholder.typicode.com/posts')
    //   .then(response => response.json())
    //   .then(data => console.log(data));

    axios.get('https://jsonplaceholder.typicode.com/posts')
      .then(response => response.data)
      .then(data => console.log(data))
  }
  render() {
    return (
      <div>
        <h1>API Calling</h1>
      </div>
    );
  }
}

export default App;