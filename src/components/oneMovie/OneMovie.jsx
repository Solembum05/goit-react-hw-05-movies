import React from 'react'
// import PropTypes from 'prop-types'
import { Link, useLocation } from 'react-router-dom';


const OneMovie = ({title, name,id}) => {

  const location = useLocation()

  return (
    <div>
      <Link state={{ from: location }} to={`/movies/${id}`}>
        {' '}
        {title || name}
      </Link>
    </div>
  );
}

// OneMovie.propTypes = {

// }

export default OneMovie
