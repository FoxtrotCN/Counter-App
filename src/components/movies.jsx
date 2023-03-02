import React, {Component} from "react";
import {getMovies} from "../services/fakeMovieService";
import {getGenres} from "../services/fakeGenreService";
import Like from "../common/like";
import Pagination from "../common/pagination";
import {paginate} from "../utils/paginate";
import ListGroups from "../common/listGroups";

export class Movie extends Component {
    state = {
        movies: [],
        genres: [],
        currentPage: 1,
        pageSize: 4,
    };

    componentDidMount() {
        this.setState({movies: getMovies(), genres: getGenres()})
    }

    handleDelete = (movie) => {
        const movies = this.state.movies.filter(m => m._id !== movie._id);
        this.setState({movies});
    };

    handleLike = (movie) => {
        const movies = [...this.state.movies];
        const index = movies.indexOf(movie);
        movies[index] = {...movies[index]};
        movies[index].liked = !movies[index].liked;
        this.setState({movies});
    };

    handlePageChange = page => {
        this.setState({currentPage: page});
    }

    handleGenreSelect = genre => {
        console.log(genre);
    }

    render() {
        const {length: count} = this.state.movies;
        const {pageSize, currentPage, movies: allMovies} = this.state;
        if (count === 0) return <p>There is no movies in the database.</p>;

        const movies = paginate(allMovies, currentPage, pageSize)

        return (
            <div className="row">
                <div className="col-2">
                    <ListGroups
                        items={this.state.genres}
                        onItemSelec={this.handleGenreSelect}/>
                </div>
                <div className="col">
                    <p>Showing {count} movies.</p>
                    <table className="table">
                        <thead>
                        <tr>
                            <th>Title</th>
                            <th>Genre</th>
                            <th>Stock</th>
                            <th>Rental Rate</th>
                            <th/>
                            <th/>
                        </tr>
                        </thead>

                        <tbody>
                        {movies.map(movie => (
                            <tr key={movie._id}>
                                <td>{movie.title}</td>
                                <td>{movie.genre.name}</td>
                                <td>{movie.numberInStock}</td>
                                <td>{movie.dailyRentalRate}</td>
                                <td>
                                    <Like liked={movie.liked} onClick={() => this.handleLike(movie)}/>
                                </td>
                                <td>
                                    <button onClick={() => this.handleDelete(movie)}
                                            className="btn btn-danger btn-sm">Delete
                                    </button>
                                </td>
                            </tr>
                        ))}
                        </tbody>
                    </table>
                    <Pagination
                        itemsCount={count}
                        pageSize={pageSize}
                        currentPage={currentPage}
                        onPageChange={this.handlePageChange}/></div>

            </div>
        );
    }
}

export default Movie;

