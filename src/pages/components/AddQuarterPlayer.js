import React, { Component } from 'react'
import {Col,Image,Row,Form} from 'react-bootstrap';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';

class AddQuarterPlayer extends Component {
	constructor(props){
		super(props)
		this.state = {playerPostions:[],selectedPlayerPosition:[]}
	}

	componentDidMount(){
		this.setPlayerToState();
	}

	componentDidUpdate(prevProps,prevState){
		if(prevProps.players != this.props.players){
			this.setPlayerToState();
		}
	}

	setPlayerToState(){
		var playerPosition = this.state.playerPostions;
		this.props.players.map((player,index)=>{
			playerPosition[index] = player.positions;
		})
	}

	selectPlayer(index){
		let selectedPlayerPosition = [];
		selectedPlayerPosition[this.props.playerNumber] = this.state.playerPostions[index];
		this.setState({selectedPlayerPosition})
		this.props.setPlayerToQuarter(this.props.players[index].fname,this.props.playerNumber)
	}

	selectPlayerPosition(value){
		this.props.selectPlayerPosition(value,this.props.playerNumber)
	}


  render() {
  	const {players,errors} = this.props;	
    return (
    	<React.Fragment>
    		<Col lg={6} className="text-left mb-4">
		      <Form.Group >
				    <Form.Control as="select" className={(errors.playerError[this.props.playerNumber] == 'error')?'error':''} 
				    							onChange={(e)=>this.selectPlayer(e.target.value)}>
				    	<option value="">Select Player</option>
				      {
				      	players.map((player,index)=>(
				      		<option key={index} value={index}>{player.fname}</option>
				      	))
				      }
				    </Form.Control>
					</Form.Group>
				</Col>
				<Col lg={6} className="text-left mb-4">
		      <Form.Group >
				    <Form.Control as="select" className={(errors.positionError[this.props.playerNumber] == 'error')?'error':''} 
				    													onChange={(e)=>this.selectPlayerPosition(e.target.value)}>
				    <option value="">Select Postion</option>
				      {
				      	(typeof this.state.selectedPlayerPosition[this.props.playerNumber] != 'undefined')&&
				      		this.state.selectedPlayerPosition[this.props.playerNumber].map((postion,index)=>(
				      			<option key={index} value={postion}>{postion}</option>
				      		))
				      }
				    </Form.Control>
					</Form.Group>
				</Col>
			</React.Fragment>	
    )
  }
}

const mapStateToProps = (state) =>{
	return {
		players:state.players.players
	}
}

export default connect(mapStateToProps,null)(AddQuarterPlayer);

