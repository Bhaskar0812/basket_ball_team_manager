import React, { Component } from 'react'
import {Col,Image,Row,Tabs,Tab} from 'react-bootstrap';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import ComposeTeam from '../components/ComposeTeam';
import FirstQuarter from '../components/FirstQuarter';
class Players extends Component {
	constructor(props){
		super(props)
		this.state = {key:'composeTeam'}
	}
  render() {	
  	const{col,viewUpcoming,players} = this.props;
    return (
    	<Row >
	    	<Tabs
		      id="controlled-tab-example"
		      className={'main-tab'}
		      activeKey={this.state.key}
		      onSelect={(k) => this.setState({'key':k})}
		    >
		      <Tab eventKey="composeTeam" title="Compose Team">
		      	<ComposeTeam/>
		      </Tab>
		      <Tab eventKey="firstQarter" title="First Quarter">
		      	<FirstQuarter/>
		      </Tab>
		    </Tabs>
			</Row>	
    )
  }
}

export default Players;

