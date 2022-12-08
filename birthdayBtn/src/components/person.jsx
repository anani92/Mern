import React, { Component } from 'react'

export default class person extends Component {
  constructor(props) {
    super(props)
    this.state = { age: this.props.age }
  }
  increaseAge() {
    this.setState({ age: this.state.age + 1 })
  }

  render() {
    return (
      <div Style={'border: 1px solid black; padding:1rem;'}>
        <h2>
          {this.props.fName}, {this.props.lName}
        </h2>
        <h3>age: {this.state.age}</h3>
        <h3>hair color: {this.props.hair}</h3>
        <button onClick={() => this.increaseAge()}>GrowUp</button>
      </div>
    )
  }
}
