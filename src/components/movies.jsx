import React, {Component} from "react";
import MoviesTable from "./moviesTable";
import {getMovies} from "../services/fakeMovieService";
import {getGenres} from "../services/fakeGenreService";
import Pagination from "../common/pagination";
import ListGroups from "../common/listGroups";
import {paginate} from "../utils/paginate";
import _ from 'lodash';


export class Movie extends Component {
    state = {
        movies: [],
        genres: [],
        currentPage: 1,
        pageSize: 4,
        sortColum: {path: 'title', order: 'asc'}
    };

    componentDidMount() {
        const genres = [{_id: '', name: 'All Genres'}, ...getGenres()]
        this.setState({movies: getMovies(), genres})
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
        this.setState({selectedGenre: genre, currentPage: 1});
    }

    handleSort = path => {
        const sortColum = {...this.state.sortColum};
        if (sortColum.path === path)
            sortColum.order = (sortColum.order === 'asc') ? 'desc' : 'asc';
        else {
            sortColum.path = path;
            sortColum.order = 'asc'
        }
        this.setState({sortColum});
    }

    render() {

        const {length: count} = this.state.movies;

        const {pageSize,
            currentPage,
            sortColum,
            selectedGenre,
            movies: allMovies} = this.state;

        if (count === 0) return <p>There is no movies in the database.</p>;

        const filtered = selectedGenre && selectedGenre._id ?
              allMovies.filter(m => m.genre._id === selectedGenre._id) : allMovies;

        const sorted = _.orderBy(filtered, [sortColum.path], [sortColum.order]);

        const movies = paginate(sorted, currentPage, pageSize)

        return (

            <div className="row">

                <div className="col-3">

                    <ListGroups
                        items={this.state.genres}
                        selectedItem={this.state.selectedGenre}
                        onItemSelect={this.handleGenreSelect}/>
                </div>

                <div className="col">

                    <p>Showing {filtered.length} movies.</p>
                    <MoviesTable
                        movies={movies}
                        onLike={this.handleLike}
                        onDelete={this.handleDelete}
                        onSort={this.handleSort}/>

                    <Pagination
                        itemsCount={filtered.length}
                        pageSize={pageSize}
                        currentPage={currentPage}
                        onPageChange={this.handlePageChange}/></div>

            </div>
        );
    }
}

export default Movie;

