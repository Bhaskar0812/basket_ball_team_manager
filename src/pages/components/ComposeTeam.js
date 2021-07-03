import React, { Component } from 'react'
import {Col,Image,Row,Form,Button} from 'react-bootstrap';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import DropdownMultiselect from "react-multiselect-dropdown-bootstrap";
import { toast } from 'react-toastify';
import Tostify  from '../../components/system/Tostify';
import {setPlayer}  from '../../reducers/players';
class ComposeTeam extends React.Component {
	constructor(props){
		super(props)
		this.state={'team':{fname:'',lname:'',height:'',position:[]},errors:{}}
	}

	handlerValidation(){
		let fields = this.state.team;
		let errors = {};
    let formIsValid = true;
		if(!fields.fname)
		{
       formIsValid = false;
       errors["fname"] = "* Name field required";
    }
    if(!fields.lname)
    {
       formIsValid = false;
       errors["lname"] = "* Last Name field required";
    }

    if(typeof fields.positions === "undefined" || 
    			(typeof fields.positions !== "undefined" && Object.keys(fields.positions).length <= 0))
    {
       formIsValid = false;
       errors["positions"] = "* Select atlease one postion";
    }

    if(!fields.height)
    {
       formIsValid = false;
       errors["height"] = "* Height field required";
    }
    else if(typeof fields.height !== "undefined" && fields.height != "" && fields.height < 0)
    {
    	formIsValid = false;
      errors["height"] = "* Enter valid height";
    }
    else if(fields.height < 150)
    {
    	formIsValid = false;
      errors["height"] = "* Height should not be less than 150 cm";
    }
    else if(typeof fields.height !== "undefined" && fields.height != "" && isNaN(fields.height))
    {
    	formIsValid = false;
      errors["height"] = "* Height must be number";
    }

    if(fields.fname != ""){
    	var regName = /^[a-zA-Z]+[a-zA-Z]+$/;
    	if(!regName.test(fields.fname)){
    		formIsValid = false;
    		errors["fname"] = "* Invalid first name";
    	}else{
    		if(typeof this.props.players != 'undefined' && this.props.players.length > 0){
		    	this.props.players.map((player,index)=>{
		    		if(player.fname == fields.fname && player.lname == fields.lname){
		    			formIsValid = false;
		      		errors["playerAlreadyExists"] = "* Player already exist";
		    		}
		    	})
		    }
	    }
    }

    this.setState({errors:errors})
    return formIsValid;
	}

	handleChange(field,value){
		let fields = {};
    fields = {...this.state.team,[field]:value};  
    this.setState({team:fields}); 
	}

	async addPlayerToTeam(player){
		if(this.handlerValidation()){
			toast.success('Player added into team', {
						position: "top-right",
						autoClose: 2000,
						closeOnClick: true
					});
			let players = await this.props.players.concat(this.state.team);
			await this.props.setPlayerData(players);
		}
	}

  render() {	
    return (
    	<Row >
    		<Tostify/>
    		<Col lg={12} className="text-left mb-4">
		      <div className="card" >	
					  <div className="card-body">
					    <h5 className="card-title">{'Add Player'}</h5>
					    <div className="item_action_link">
					    	<Form id="composeTeamForm">
								  <Form.Group as={Row} className="input-field">
								  	<Col lg={6} >
								    	<Form.Control className={(this.state.errors["fname"])?'error':''} type="text" placeholder="Enter First Name" onChange={(e)=>this.handleChange('fname',e.target.value)}/>
								    </Col>	
								    <Col lg={6} >	
								    	<span style={{color: "red"}}>{this.state.errors["fname"]}</span>
								    </Col>	
								  </Form.Group>
								  <Form.Group as={Row} className="input-field" >
								  	<Col lg={6} >
								    	<Form.Control className={(this.state.errors["lname"])?'error':''} type="text" placeholder="Enter Last Name" onChange={(e)=>this.handleChange('lname',e.target.value)}/>
								    </Col>	
								    <Col lg={6} >	
								    	<span style={{color: "red"}}>{this.state.errors["lname"]}</span>
								    </Col>	
								  </Form.Group>
								  <Form.Group as={Row}  className="input-field">
								  	<Col lg={6} >
								    	<Form.Control className={(this.state.errors["height"])?'error':''} type="number" placeholder="Enter Height in cm" min="0"  onChange={(e)=>this.handleChange('height',e.target.value)}/>
								    </Col>	
								    <Col lg={6} >	
								    	<span style={{color: "red"}}>{this.state.errors["height"]}</span>
								    </Col>		
								  </Form.Group>
								  <Row className="input-field mb-5" >
								  	<Col lg={6} >	
									     <DropdownMultiselect
									     	buttonClass={(this.state.errors["positions"])?'btn-error':"btn-main"}
									     	selectDeselectLabel={""}
									     	className={(this.state.errors["height"])?'error':''}
									     	handleOnChange={(positions)=>this.handleChange('positions',positions)}
									     	placeholder="Select postion"
								        options={["point guard (PG)", "shooting guard (SG)", "small forward (SF)", "power forward (PF)", "center (C)"]}
								        name="position"
								      />
								    </Col>
								    <Col lg={6} >	
								    	<span style={{color: "red"}}>{this.state.errors["positions"]}</span>
								    </Col>	  
								  </Row>
								  <span style={{color: "red"}}>{this.state.errors["playerAlreadyExists"]}</span>
								</Form>
								<Form.Group as={Row} >
							  	<Col lg={6}>
									  <Button className="btn-right" variant="primary" onClick={()=>this.addPlayerToTeam(this.state.team)}>
									    Save
									  </Button>
									</Col>  
								</Form.Group>  
	            </div>
					  </div>
					</div>
				</Col>
			</Row>	
    )
  }
}

const mapStateToProps = (state) => {
  return {
    players: state.players.players
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    setPlayerData: (player) => dispatch(setPlayer(player))
  }
}
export default connect(mapStateToProps,mapDispatchToProps)(ComposeTeam);

