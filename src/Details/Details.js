import React from 'react';
import { Link, Redirect } from 'react-router-dom';
import getGallery from '../gallery-get';
import './Details.css';

export default class Details extends React.Component {

    constructor(){
        super();
        this.state = {
            gallery: {}
        };
    }

    componentDidMount(){
        let galleryId = this.props.match.params.galleryId;
        let gallery = getGallery()
            .find((gallery) => gallery.id === galleryId);

        this.setState({ gallery });
    }

    render() {
        if (this.state.gallery === undefined) {
            return <Redirect to='/not-found' />
        } else {
            return (
                <div className='Details'>
                    <h1>{this.state.gallery.name}</h1>
                    <h4>{this.state.gallery.details}</h4>
                    <img src={this.state.gallery.poster}
                         alt={this.state.gallery.name} />
                    <Link to='/'>Back to home page</Link>
                </div>
            );
        }
    }
}

