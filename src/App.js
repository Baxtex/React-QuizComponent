import React, { Component } from 'react'
import Quiz from './Quiz.js'
import './App.css'

class App extends Component {
  render() {
    return (
      <Quiz message={'Detta props kommer från parent class men visas i child class. '}/>
    )
  }
}

export default App