import React, {Component} from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import AddButton from './AddButton'
import ClusterButton from './ClusterButton'
import { connect } from 'react-redux'
import {loadBikeData} from '../store/actions'



  const test =  {
    flexGrow: 1,
  };

  const flex = {
    flexGrow: 1,
  };

class ButtonAppBar extends Component {

    render(){
    return (
      <div style={test}>
        <AppBar position="static">
          <Toolbar>
            <Typography variant="title" color="inherit" style={flex}>
              Menu
            </Typography>

            <AddButton onAddButtonClick = {() => this.props.onAddData(this.props.buttonContent)}/>
            <ClusterButton />
          </Toolbar>
        </AppBar>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    buttonContent:state.buttonContent
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onAddData : (buttonContent) => dispatch(loadBikeData(buttonContent))
  }
}


export default connect(mapStateToProps,mapDispatchToProps)(ButtonAppBar);
