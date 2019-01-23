import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import MenuView from './MenuView';
import * as actions from './redux/actions';
import Typography from '@material-ui/core/Typography';

export class Menu extends Component {
  static propTypes = {
    home: PropTypes.object.isRequired,
    actions: PropTypes.object.isRequired,
  };

  render() {
    let body = this.props.body ? this.props.body :
        <div style={{textAlign: 'center'}}>
            <img src={''} alt="" />
            <br />
            <br />
            <Typography noWrap>{'Bienvenido'}</Typography>
          </div>
          ;
    return (
      <div className="home-menu">
        <MenuView body={body}/>
      </div>
    );
  }
}

/* istanbul ignore next */
function mapStateToProps(state) {
  return {
    home: state.home,
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
)(Menu);
