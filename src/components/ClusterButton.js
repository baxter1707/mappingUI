import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

const styles = theme => ({
  button: {
    margin: theme.spacing.unit,
  },
  input: {
    display: 'none',
  },
});

function ClusterButton(props) {
  const { classes } = props;
  return (
    <div>

      <Button variant="contained" color="secondary" className={classes.button}>
        Cluster Data
      </Button>
    </div>
  );
}

ClusterButton.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ClusterButton);
