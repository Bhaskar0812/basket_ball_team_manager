import React from 'react';
import {Container} from 'react-bootstrap';
import { Link } from 'react-router-dom'

class NotFound extends React.Component {
  render() {
    return (
      <div className="container">
        <div className="col-sm-8 mx-auto mt-5">
          <div className="d-flex align-items-start">
            <div className="pr-3">
              <h2 className="blue"><i className="fal fa-question-circle"></i></h2>
            </div>
            <div>
              <h5 className="bold blue">{'Looking for something?'}</h5>
              <p>{"Sorry, You have entered invalid link or we have moved permanently"}.</p>
            </div>
          </div>
        </div>
        <h5 className="bold text-center mt-5"><i className="fas fa-caret-right"></i> {'Go to home'} <Link to="/">{'Home'}</Link></h5>
      </div>
    );
  }
}

export default NotFound;



