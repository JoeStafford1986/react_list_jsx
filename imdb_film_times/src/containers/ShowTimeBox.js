import React, { Component } from 'react';
import FilmList from '../components/FilmList.js';

class ShowTimeBox extends Component {

  constructor(props) {
    super(props)
    this.state = {
      data: [{
        title: "Suasage Party",
      },
      {
        title: "Cafe Society",
      },
      {
        title: "Morgan",
      }]
    }
  }

  render() {
    return (
      <div>
        <h2>UK Film Show Times</h2>
        <FilmList data={this.state.data}/>
      </div>
    )
  }

}

export default ShowTimeBox;
