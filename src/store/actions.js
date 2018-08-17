
export const LOAD_BIKE_DATA = 'LOAD_BIKE_DATA'
export const REMOVE_BIKE_DATA = 'REMOVE_BIKE_DATA'


export const loadBikeData = (buttonContent) => {
  return dispatch => {

      if(buttonContent == "Add Data"){
      let url = 'https://bikewise.org/api/v2/locations?proximity=houston&proximity_square=100&limit=25'
      fetch(url)
      .then(response => response.json())
      .then(json => dispatch(loadData(json['features'])))
      }

      if(buttonContent == 'Remove Data'){
        let url = 'https://bikewise.org/api/v2/locations?proximity=houston&proximity_square=100&limit=25'
        fetch(url)
        .then(response => response.json())
        .then(json => dispatch(removeData(json['features'])))
      }
  }
}

export const loadData = (coordinates) => {
  return {
    type: LOAD_BIKE_DATA,
    coordinates : coordinates,
    buttonContent: 'Remove Data'
  }
}

export const removeData = (coordinates) =>{
  return{
    type: REMOVE_BIKE_DATA,
    coordinates: [],
    buttonContent : "Add Data"
  }
}
