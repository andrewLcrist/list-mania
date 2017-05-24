import React, { Component } from 'react';
import '../styles/App.css';
import firebase from '../firebase'

class App extends Component {
  constructor() {
    super()
    this.state = {
      userInput: ''
    }
  }

  submitText(text) {
    firebase.database().push(text)
  }

  render() {
    let input
    return (
      <div className="App">
        <div className="App-header">
          <h2>List Mania</h2>
          <h5>Welcome! We know you don't want your lists being read by machines.
          So safely use List Mania to manage all your lists. Groceries? To dos? Wish list? We can handle it.</h5>
        </div>
        <form
          className="input"
          onChange={() => this.setState({ userInput: input.value })}
        >
          <input
            ref={ node => { input = node }}
            value={this.state.userInput}
            placeholder="Test text">
          </input>
          <button
          onClick={ (e) => {
              e.preventDefault();
              // console.log(input.value);
              this.submitText(input.value)
              // this.clearQuery();
            }}
          >Submit
          </button>
        </form>
      </div>
    );
  }
}

export default App;
