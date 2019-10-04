import * as React from 'react';
import { IMovie } from '../../models/movie';
import axios from 'axios';
import Button from 'react-bootstrap/Button';
// import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

export interface ISearchProps {
    onFinishSearch(movies: IMovie[]): void;
    onStartSearch(): void;
}

export default class Search extends React.Component<ISearchProps> {

    public render() {

        return (
        
                <div>
                    <form onSubmit={this.onSubmit}>
                        <input name="text" />
                        <Button variant="danger" type="submit">Search Movies</Button>
                    </form>
                    <hr />
                  
                </div>
            
        );
    }

    onSubmit = async (e: React.FormEvent) => {
        const { onStartSearch, onFinishSearch } = this.props;
        e.preventDefault();
        onStartSearch();
        const form = e.target;
        const text = (form as any).text.value;

        const response = await axios.get(`http://www.omdbapi.com/?apikey=dae33490&s=${text}`);

        const movies = response.data.Search;

        onFinishSearch(movies)

    }
}

