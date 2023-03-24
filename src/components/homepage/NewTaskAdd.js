import React, { Component } from 'react'

export default class NewTaskAdd extends Component {
  render() {
    return (
        <div style={{ display: 'flex' }}>
      <input type={'text'} style={{ fontSize: '25px', marginRight: '20px' }} /> <button> Add</button>
    </div>
    )
  }
}
