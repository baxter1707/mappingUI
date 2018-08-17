import React from 'react';
import Button from '@material-ui/core/Button';
import { connect } from 'react-redux'


  const button = {
    margin: '10px',
  }

const AddButton =  (props) => {
  return (
    <div>
      <Button variant="contained" color="secondary" style={button} onClick={props.onAddButtonClick}>
        {props.buttonContent}
      </Button>
    </div>
  );
}


const mapStateToProps = state => {
  return {
    buttonContent : state.buttonContent
  }
}


export default connect(mapStateToProps, null)(AddButton);
