import { Component } from 'react'
import './App.css'

export default class App extends Component {
  state = {
    name: 'app'
  };

  render () {
    return (
      <div className='App'>
        <h1>Welcome to {this.state.name}</h1>
      </div>
    )
  }
}
