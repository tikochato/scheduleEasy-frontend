import React, { Component } from 'react';
import PropTypes from 'prop-types';
import TableView from './TableView';

export default class PersonasListView extends Component {
  static propTypes = {
    personas: PropTypes.array.isRequired,
  };

  render() {
    return (
      <div className="personas-personas-list-view">
        <TableView personas={this.props.personas} />
      </div>
    );
  }
}
