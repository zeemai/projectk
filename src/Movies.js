import React from 'react';
import { Link } from 'react-router-dom';

export default function Movies(props) {
    return (
      <Link to={'/' + props.id} className='item'>
        <img src={props.poster} alt={`${props.name} poster`} />
        <div className='overlay'>
          {props.name}
        </div>
      </Link>
    )
  }