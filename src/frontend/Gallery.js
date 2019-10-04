import React from 'react';
import Movies from './Movies';
import getGallery from './gallery-get';

export default function Gallery() {
    return (
        <div>
            <div className="container">
                {
                    getGallery().map(movie => (
                        <Movies
                            key={movie.id} 
                            id={movie.id} 
                            name={movie.name} 
                            poster={movie.poster} />
                    ))
                }
            </div>
        </div>
    )
}

