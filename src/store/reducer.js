import * as actionTypes from './actions'

const initialState = {
  coordinates: [],
  buttonContent:'Add Data'
}

const reducer = (state = initialState, action) => {
  switch(action.type){
    case actionTypes.LOAD_BIKE_DATA:
    return{
      ...state,
      coordinates: action.coordinates,
      buttonContent: action.buttonContent
    }

    case actionTypes.REMOVE_BIKE_DATA:
    return{
      ...state,
      coordinates:action.coordinates,
      buttonContent:action.buttonContent
    }
  }
    return state

}





export default reducer
