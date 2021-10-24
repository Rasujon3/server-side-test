import React, { Component } from 'react';
import './App.css';
import axios from 'axios';

class App extends Component {
  state = {
    dishes: null,
    errMess: null
  }
  componentDidMount() {
    // console.log("ComponentDidMount: ", this.state);
    // axios.get('http://localhost:5000/dishes')
    //   .then(response => response.data)
    //   .then(data => {
    //     this.setState({
    //       dishes: data
    //     })
    //   })
    //   .catch(error => {
    //     this.setState({
    //       errMess: error.message
    //     })
    //   });

    // axios.post('http://localhost:5000/dishes', { name: "Pizza", price: "799" })
    //   .then(response => console.log(response))

    // axios.put('http://localhost:5000/dishes/1', { name: "Pizza", price: "250" })
    //   .then(response => console.log(response))

    axios.delete('http://localhost:5000/dishes/0')
      .then(response => console.log(response))
      .catch(error => {
        this.setState({
          errMess: error.message
        })
      });

  }
  componentDidUpdate() {
    console.log("Update: ", this.state);
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