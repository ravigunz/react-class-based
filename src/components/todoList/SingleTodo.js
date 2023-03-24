import React, { Component } from 'react'

export default class SingleTodo extends Component {
  render() {
    return (
        <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          border: '1px solid grey',
          padding: '10px',
          borderRadius: '10px',
        }}
      >
        <input type={'chechbox'} />
        <p>First Task</p>
        <button>Delete</button>
      </div>
    )
  }
}
