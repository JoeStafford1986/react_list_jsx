import React, { Component } from 'react';

class Film extends Component {

  render() {
    return (
      <div className="film">
        <h3>{this.props.title}</h3>
        {/* <p>{this.props.children}</p> */}
      </div>
    )
  }
}

export default Film;
