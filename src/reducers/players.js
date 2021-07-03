

function playerAction(players) {
  return {
        	type: "SET_PLAYERS",
        	payload:players,
    		}
};


export const setPlayer = (data) => (dispatch) =>{
	dispatch(playerAction(data))
}

const initialState = {players: []}
const players = (state = initialState, action) => {
	switch (action.type) {
  	case 'SET_PLAYERS':
      return { players: action.payload}; 
  }
  return state
}

export default players;