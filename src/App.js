import React, { Component } from 'react';
import './App.css';
import axios from 'axios';

class App extends Component {
  componentDidMount() {
    // axios.get('http://localhost:5000/dishes')
    //   .then(response => response.data)
    //   .then(data => console.log(data))
    //   .catch(error => console.log(error.message));

    axios.post('http://localhost:5000/dishes', { name: "Pizza", price: "799" })
      .then(response => console.log(response))

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