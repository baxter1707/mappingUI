import React, {Component} from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import AddButton from './AddButton'
import ClusterButton from './ClusterButton'



export class BaseMenu extends Component {
  render(){
    return(
      <div>
        <ButtonAppBar />
        {this.props.children}
      </div>
    )
  }
}



  const test =  {
    flexGrow: 1,
  };

  const flex = {
    flexGrow: 1,
  };




export class ButtonAppBar extends Component {
  render(){
  return (
    <div style={test}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="title" color="inherit" style={flex}>
            Menu
          </Typography>
          <AddButton />
          <ClusterButton />
        </Toolbar>
      </AppBar>
    </div>
  );
}
}



export default ButtonAppBar;
