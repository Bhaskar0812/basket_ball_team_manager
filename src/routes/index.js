import React, { Component } from 'react'
import { Switch,  BrowserRouter as Router,Redirect} from 'react-router-dom';
import { Helmet } from 'react-helmet'
import PublicRoute from '../PublicRoute';

import Players from '../pages/players/Players';
import NotFound from '../components/system/NotFound';

class TrelloBoard extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    var title = 'Scott Sport Dealer';
    return (
      <div>
        <Router>
          <Helmet>
            <title>{"Systango basketball team"}</title>
          </Helmet>
          <Switch>
            <PublicRoute path='/' component={Players} exact sensitive/>
            <PublicRoute path='/NotFound' component={NotFound} exact sensitive/>
            <Redirect to={'/NotFound'}/>
          </Switch>
        </Router>
      </div>
    )
  }
}

export default TrelloBoard;
