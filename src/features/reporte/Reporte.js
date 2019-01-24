import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as actions from './redux/actions';
import Menu from '../home/Menu';
import ReporteView from './ReporteView';

export class Reporte extends Component {
  static propTypes = {
    reporte: PropTypes.object.isRequired,
    actions: PropTypes.object.isRequired,
  };

  componentDidMount() {
    this.props.actions.limpiarData();
  }

  generarReporte = count => {
    this.props.actions.fetchReporte(count);
  };

  render() {
    return (
      <div className="reporte-reporte">
        <Menu
          body={
            <ReporteView
              meetings={this.props.reporte.data}
              columns={this.props.reporte.columns}
              generarReporte={this.generarReporte}
              reporteGenerado={this.props.reporte.reporteGenerado}
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
    reporte: state.reporte,
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
)(Reporte);
