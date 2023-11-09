import React from 'react'
// import PropTypes from 'prop-types'
import OneMovie from 'components/oneMovie/OneMovie';

const MovieList = ({movies}) => {
  return (
    <div>
      <ul>
        {movies.map(({ id, title, name }) => (
          <OneMovie key={id} title={title} name={name } />
        ))}
      </ul>
    </div>
  );
}

// MovieList.propTypes = {

// }

export default MovieList
