import * as React from 'react';
import { IMovie } from '../../models/movie';
import Movie from '../Movie/Movie';

export interface IMovieListProps {
    movies: IMovie[];
}

export default class MovieList extends React.Component<IMovieListProps> {
    public render() {
        const { movies } = this.props;
        return (
            <div className="row">
                {movies.map((movie, index) => {
                    return <Movie key={index} {...movie} />
                })}
            </div>
        );
    }
}
