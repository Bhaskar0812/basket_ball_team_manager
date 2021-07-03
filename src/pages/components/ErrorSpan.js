import React from 'react';
class ErrorSpan extends React.Component {
	  render(){
	  	return (
	  		<React.Fragment>
	  			<span className="red">{'* '+this.props.error}</span>
	  			<br/>
	  		</React.Fragment>	
	  	);
	  }
}

export default ErrorSpan;