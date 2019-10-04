import * as React from 'react';
import { IMovie } from '../../models/movie';
import Search from '../Serach/Search';
import MovieList from '../MovieList/MovieList';
import Loader from '../Loader/Loader';

export interface IMoviePageProps {

}

interface IMoviePageState {
  movieList: IMovie[];
  isLoading: boolean;

}

export default class MoviePage extends React.Component<IMoviePageProps, IMoviePageState> {
  state: IMoviePageState = {
    movieList: [],
    isLoading: false,
  };
  // equivalent to:
  // constructor(props: IMoviePageProps) {
  //   super(props);
  //   this.state = {
  //     movieList: []
  //   };
  // }

  public render() {
    const { movieList, isLoading } = this.state
    return (
      <div>
        <Search
          onStartSearch={() => {
            this.setState({
              isLoading: true,
            })

          }}
          onFinishSearch={(movies) => {

            this.setState({
              movieList: movies,
              isLoading: false,
            })
          }} />
        {isLoading ? <Loader /> : <MovieList movies={movieList} />}
      </div>
    );
  }
}