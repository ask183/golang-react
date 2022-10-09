import React, { Component, Fragment} from 'react'
import { Link } from 'react-router-dom';

export class Movies extends Component {

  state = {movies: []};

  componentDidMount() {
    this.setState({
      movies: [
        {id: 1, title: "Dark Knight Rises", runtime: 142},
        {id: 2, title: "SpiderMan Home Coming", runtime: 150},
        {id: 3, title: "Batman", runtime: 125},
      ],
    })
  }

  render() {
    return (
      <Fragment>
        <h2>Choose a movie</h2>

        <ul>
          {this.state.movies.map( (m) => (
            <li key={m.id}>
              <Link to={`/movies/${m.id}`}>{m.title}</Link>
            </li>
          ))}
        </ul>
      </Fragment>
    )
  }
}

export default Movies