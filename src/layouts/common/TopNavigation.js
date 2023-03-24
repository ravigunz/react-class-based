import React, { Component } from 'react'

export default class TopNavigation extends Component {
  render() {
    return (
        <div style={{ backgroundColor: 'black', height: '70px', display: 'flex', alignItems: 'center' }}>
        <p style={{ margin: 0, color: 'gray', fontSize: '30px' }}>ToDo List</p>
      </div>
    )
  }
}
