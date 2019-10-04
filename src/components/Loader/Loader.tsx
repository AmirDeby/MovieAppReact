import * as React from 'react';
import Spinner from 'react-bootstrap/Spinner'

export interface ILoaderProps {

}

export default class Loader extends React.Component<ILoaderProps> {
  public render() {
    return (
        <Spinner animation="border" variant="primary" role="status">
                <span className="sr-only">Loading...</span>
            </Spinner>
      
    );
  }
}

