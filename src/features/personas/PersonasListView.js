import React, { Component } from 'react';
import PropTypes from 'prop-types';
import TableView from '../common/TableView';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

const columns = ['Id', 'Nombre'];

export default class PersonasListView extends Component {
  static propTypes = {
    personas: PropTypes.array.isRequired,
  };

  render() {
    return (
      <div className="personas-personas-list-view">
        <AppBar position="static" color="default">
          <Toolbar>
            <Typography variant="h6" color="inherit">
              Listado de Personas
            </Typography>
          </Toolbar>
        </AppBar>
        <br/>
        <TableView data={this.props.personas} columns={columns} />
      </div>
    );
  }
}
