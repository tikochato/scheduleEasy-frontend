import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as actions from './redux/actions';
import Menu from '../home/Menu';
import PersonasListView from './PersonasListView';

export class PersonasList extends Component {
  static propTypes = {
    personas: PropTypes.object.isRequired,
    actions: PropTypes.object.isRequired,
  };

  componentDidMount(){
    this.props.actions.fetchPersonas();
  }

  render() {
    return (
      <div className="personas-personas-list">
        <Menu body={<PersonasListView personas={this.props.personas.personas}/>} />
      </div>
    );
  }
}

/* istanbul ignore next */
function mapStateToProps(state) {
  return {
    personas: state.personas,
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
)(PersonasList);
