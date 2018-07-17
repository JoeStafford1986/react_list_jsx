import React, { Component } from 'react';
import Film from './Film.js'

class FilmList extends Component {

  render() {

    const filmComponents = this.props.data.map((film, index) => {
      return <Film title={film.title} key={index}>{film.title}</Film>
    });

    return (
      <div className="film-list">
        {filmComponents}
      </div>
    )
  }
}

export default FilmList;
