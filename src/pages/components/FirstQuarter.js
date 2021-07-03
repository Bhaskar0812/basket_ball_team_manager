import React, { Component } from 'react'
import {Col,Image,Row,Form,Button} from 'react-bootstrap';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import PlayerInput from './PlayerInput';
import ErrorSpan from './ErrorSpan';
class FirstQuarter extends Component {
	constructor(props){
		super(props)
		this.state = {
									quarterTeam:[],
									quarterPosition:[],
									playerError:[],
									positionError:[],
									playerRequiredError:false,
									positionRequiredError:false,
								}
	}

	setPlayerToQuarter(player,index){
		let quarterTeam = this.state.quarterTeam;
		quarterTeam[index] = player
		this.setState({quarterTeam})
	}

	selectPlayerPosition(postion,index){
		let quarterPosition = this.state.quarterPosition;
		quarterPosition[index] = postion
		this.setState({quarterPosition})
	}

	checkMatchedElementPlayer(){
		var errors = []
		var playerEmpty = false;
		for(let i =0;i < 5; i++){
			for(let j =0;j < 5; j++){
				if(typeof this.state.quarterTeam[i] != 'undefined'){
					if((i !== j) && this.state.quarterTeam[i] == this.state.quarterTeam[j]){
						errors[i] = 'error';
						errors[j] = 'error';
					}
				}else{
					playerEmpty = true;
				}
			}
		}
		this.setState({playerError:errors,playerRequiredError:playerEmpty})
	}

	checkMatchedElementPosition(){
		var errors = []
		var positionEmpty = false;
		for(let i =0;i < 5; i++){
			for(let j =0;j < 5; j++){
				if(typeof this.state.quarterPosition[i] != 'undefined'){
					if((i !== j) && this.state.quarterPosition[i] == this.state.quarterPosition[j]){
						errors[i] = 'error';
						errors[j] = 'error';
					}
				}else{
					positionEmpty = true;
				}
			}
		}
		this.setState({positionError:errors,positionRequiredError:positionEmpty})
	}

	addPlayerToTeam(){
		this.setState({playerError:[],positionError:[]})
		this.checkMatchedElementPlayer();
		this.checkMatchedElementPosition();
	}

  render() {	
  	const {positionRequiredError,playerRequiredError,playerError,positionError} = this.state;
    return (
    	<Row >
    		<Col lg={6} className="text-left mb-4">
		      <div className="card" >	
					  <div className="card-body">
					    <h5 className="card-title">{'First Quarter'}</h5>
					    <div className="item_action_link">
					    	<Form id="composeTeamForm">
					    		<Row >
								 		<PlayerInput 
								 								errors={{playerError:playerError,positionError:positionError}} 
					 											setPlayerToQuarter={(player,index)=>this.setPlayerToQuarter(player,index)} 
					 											selectPlayerPosition={(position,index)=>this.selectPlayerPosition(position,index)}/>
								 		<Col lg={6} className="red">									
								 			{(playerRequiredError)&&<ErrorSpan error={'Please fill all 5 players'}/>}
								 			{(positionRequiredError)&&<ErrorSpan error={'Please fill all 5 positions'}/>}
								 			{(playerError.length > 0)&&<ErrorSpan error={'Player can be selected only once'}/>}
								 			{(positionError.length > 0)&&<ErrorSpan error={'Position can be selected only once'}/>}
								 		</Col>
								  	<Col lg={6}>
										  <Button className="btn-right" variant="primary" onClick={()=>this.addPlayerToTeam()}>
										    Save
										  </Button>
										</Col>										
								 	</Row>

								</Form>
								  
	            </div>
					  </div>
					</div>
				</Col>
			</Row>	
    )
  }
}

export default FirstQuarter;

