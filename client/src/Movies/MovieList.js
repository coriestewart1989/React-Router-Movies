import React from 'react';
import Movie from  './Movie'
import { useHistory } from 'react-router-dom'

export default function MovieList(props) {
  // const {movieList} = props
  
  return (
    <div className="movie-list">
      {props.movies.map(movie => (
        <MovieDetails key={movie.id} movie={movie} />
      ))}
    </div>
  );
}

function MovieDetails(props) {
  const { title, director, metascore, id } = props.movie;
  const history=useHistory()
  return (
    <div onClick={() => {history.push(`/movie/${id}`)}}   className="movie-card">
      <h2>{title}</h2>
      <div className="movie-director">
        Director: <em>{director}</em>
      </div>
      <div className="movie-metascore">
        Metascore: <strong>{metascore}</strong>
      </div>
    </div>
  );
}
