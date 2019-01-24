import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import MUIDataTable from 'mui-datatables';

const styles = theme => ({
  root: {
    width: '100%',
    marginTop: theme.spacing.unit * 3,
    overflowX: 'auto',
  },
});

const options = {
  filterType: 'checkbox',
  viewColumns: false,
  filter: false,
  textLabels: {
    body: {
      noMatch: "No se encontraron registros",
      toolTip: "Ordenar",
    },
    pagination: {
      next: "Página Siguiente",
      previous: "Página Anterior",
      rowsPerPage: "Filas por Página:",
      displayRows: "de",
    },
    toolbar: {
      search: "Buscar",
      downloadCsv: "Descargar CSV",
      print: "Imprimir",
      viewColumns: "Ver Columnas",
      filterTable: "Filtrar Tabla",
    },
    filter: {
      all: "Todos",
      title: "FILTRO",
      reset: "RESET",
    },
    viewColumns: {
      title: "Mostar Columnas",
      titleAria: "Mostrar/Ocultar Columnas",
    },
    selectedRows: {
      text: "fila(s) seleccionadas",
      delete: "Borrar",
      deleteAria: "Borrar Filas Seleccionadas",
    },
  }
};

export class TableView extends Component {
  static propTypes = {
    classes: PropTypes.object.isRequired,
    columns: PropTypes.array.isRequired,
    data: PropTypes.array.isRequired,
  };

  render() {
    return (
      <div className="common-table-view">
        <MUIDataTable
          data={this.props.data}
          columns={this.props.columns}
          options={options}
        />
      </div>
    );
  }
}

export default withStyles(styles)(TableView);
