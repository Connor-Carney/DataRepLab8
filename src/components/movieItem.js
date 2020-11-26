import React from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import axios from 'axios';

export class MovieItem extends React.Component {
    constructor() {
        super();
        this.DeleteMovie = this.DeleteMovie.bind(this);
    }

    DeleteMovie(e) {
        e.preventDefault();
        console.log("Delete pressed " + this.props.movie._id);

        axios.delete("http://localhost:4000/api/movies/"+this.props.movie._id)
        .then(() => {
            this.props.ReloadData();
        })
        .catch((err) => {
            console.log(err);
        });
    }
    render() {
        return (
            <div>
                {/* Unorganised view of the Movie's Title, Image and Year}
                { <h4>{this.props.movie.Title}</h4>
                <p>{this.props.movie.Year}</p>
                <img src={this.props.movie.Poster} width="200" height="200"></img> }

                {Organised view of the Movie's Title, Image and Year*/}
                <Card>
                    <Card.Header>{this.props.movie.title}</Card.Header>
                    <Card.Body>
                        <blockquote className="blockquote mb-0">
                        <img src={this.props.movie.poster} width="200" height="200"></img>
                            <footer className="blockquote-footer">
                            {this.props.movie.year}
                            </footer>
                        </blockquote>
                        <Button variant="danger" onClick={this.DeleteMovie}>Delete</Button>
                    </Card.Body>
                </Card>

            </div>
        );
    }
}
