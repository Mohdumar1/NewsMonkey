import React, { Component } from 'react'
import loading from './loading.gif'

export class Spinner extends Component {
  render() {
    return (
      <div className='text-center'>
        <img src={loading} style={{width: '80px', height:'80px'}} alt="loading" />
      </div>
    )
  }
}

export default Spinner