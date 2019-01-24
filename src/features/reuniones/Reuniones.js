import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as actions from './redux/actions';
import Menu from '../home/Menu';
import ReunionesView from './ReunionesView';

export class Reuniones extends Component {
  static propTypes = {
    reuniones: PropTypes.object.isRequired,
    actions: PropTypes.object.isRequired,
  };

  componentDidMount() {
    this.props.actions.fetchReuniones();
  }

  render() {
    return (
      <div className="reuniones-reuniones">
        <Menu
          body={
            <ReunionesView
              reuniones={this.props.reuniones.data}
              columns={this.props.reuniones.columns}
            />
          }
        />
      </div>
    );
  }
}

/* istanbul ignore next */
function mapStateToProps(state) {
  return {
    reuniones: state.reuniones,
  };
}

/* istanbul ignore next */
function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators({ ...actions }, dispatch),
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Reuniones);
