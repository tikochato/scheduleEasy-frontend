import React, { Component } from 'react';
import PropTypes from 'prop-types';
import TableView from '../common/TableView';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

export default class ReunionesView extends Component {
  static propTypes = {
    reuniones: PropTypes.array.isRequired,
    columns: PropTypes.array.isRequired,
  };

  render() {
    return (
      <div className="reuniones-reuniones-view">
        <AppBar position="static" color="default">
          <Toolbar>
            <Typography variant="h6" color="inherit">
              Listado de Reuniones
            </Typography>
          </Toolbar>
        </AppBar>
        <br />
        <TableView data={this.props.reuniones} columns={this.props.columns} />
      </div>
    );
  }
}
