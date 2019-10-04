import * as React from 'react';
import { Link } from 'react-router-dom'

export interface IHomePageProps {

}

export default class HomePage extends React.Component<IHomePageProps> {
  public render() {
    return (
      <div>
            <h2>Welcome to My Movie App</h2>
            <div>
                <Link to="/search">Search A Movie</Link>
            </div>
      </div>
    );
  }
}
