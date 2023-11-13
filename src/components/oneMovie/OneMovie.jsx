import React from 'react'
// import PropTypes from 'prop-types'
import { Link } from 'react-router-dom';

const OneMovie = ({title, name,id}) => {
  return (
    <div>
      <Link to={`/movies/${id}`}>
        {' '}
        {title || name}
      </Link>
    </div>
  );
}

// OneMovie.propTypes = {

// }

export default OneMovie
