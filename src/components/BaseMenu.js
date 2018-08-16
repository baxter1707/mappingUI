import React, {Component} from 'react';
import ButtonAppBar from './menu'



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
