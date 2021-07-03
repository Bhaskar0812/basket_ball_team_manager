import React from 'react';
import AddQuarterPlayer from './AddQuarterPlayer';
class PlayerInput extends React.Component {
	  render(){
	  	const {errors,setPlayerToQuarter,selectPlayerPosition} = this.props;
	  	return (
	  		<React.Fragment>
	  			<AddQuarterPlayer playerNumber={0}
			 											errors={{playerError:errors.playerError,positionError:errors.positionError}} 
			 											setPlayerToQuarter={(player,index)=>setPlayerToQuarter(player,index)} 
			 											selectPlayerPosition={(position,index)=>selectPlayerPosition(position,index)}/>
			 		<AddQuarterPlayer playerNumber={1}
			 											errors={{playerError:errors.playerError,positionError:errors.positionError}}
			 											setPlayerToQuarter={(player,index)=>setPlayerToQuarter(player,index)}
			 											selectPlayerPosition={(position,index)=>selectPlayerPosition(position,index)}/>
			 		<AddQuarterPlayer playerNumber={2}
			 											errors={{playerError:errors.playerError,positionError:errors.positionError}}
			 											setPlayerToQuarter={(player,index)=>setPlayerToQuarter(player,index)}
			 											selectPlayerPosition={(position,index)=>selectPlayerPosition(position,index)}/>
			 		<AddQuarterPlayer playerNumber={3}
			 											errors={{playerError:errors.playerError,positionError:errors.positionError}}
			 											setPlayerToQuarter={(player,index)=>setPlayerToQuarter(player,index)}
			 											selectPlayerPosition={(position,index)=>selectPlayerPosition(position,index)}/>
			 		<AddQuarterPlayer playerNumber={4}
			 											errors={{playerError:errors.playerError,positionError:errors.positionError}} 
			 											setPlayerToQuarter={(player,index)=>setPlayerToQuarter(player,index)}
			 											selectPlayerPosition={(position,index)=>selectPlayerPosition(position,index)}/>
		</React.Fragment>	
	  	);
	  }
}

export default PlayerInput;