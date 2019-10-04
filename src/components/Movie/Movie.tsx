import * as React from 'react';
import { IMovie } from '../../models/movie';
import Card from 'react-bootstrap/Card';


export default class Movie extends React.Component<IMovie> {
    public render() {
        const { Poster, Title, Type, Year } = this.props
        return (
            
            <Card style={{ width: '11rem' , margin:'10px' }}>
                <Card.Img  src={Poster} />
                <Card.Title style={{marginTop:'7px'}}>{Title}</Card.Title>
                <div>{Year}</div>
                <div>{Type}</div>                
                </Card>
            
        );
    }
}

