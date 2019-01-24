import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import TableView from '../common/TableView';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Tooltip from '@material-ui/core/Tooltip';

const styles = theme => ({
  button: {
    margin: theme.spacing.unit,
    marginTop: '20px',
  },
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
    width: 300,
  },
});

export class ReporteView extends Component {
  static propTypes = {
    meetings: PropTypes.array.isRequired,
    columns: PropTypes.array.isRequired,
    generarReporte: PropTypes.func.isRequired,
    reporteGenerado: PropTypes.bool.isRequired,
  };

  constructor(props) {
    super(props);
    this.state = {
      count: 3,
    };
  }

  handleChange = name => event => {
    this.setState({
      [name]: event.target.value,
    });
  };

  generarReporte = () => {
    this.props.generarReporte(this.state.count);
  }

  render() {
    const { classes } = this.props;
    return (
      <div className="reporte-reporte-view">
        <AppBar position="static" color="default">
          <Toolbar>
            <Typography variant="h6" color="inherit">
              {'Horarios con ' +
                (this.state.count ? this.state.count : 0) +
                ' o más personas disponibles'}
            </Typography>
          </Toolbar>
        </AppBar>
        <br />
        <Paper>
          <Grid container spacing={16}>
            <Grid item xs={6}>
              <Tooltip title="Cantidad mínima de usuarios disponibles por horario">
                <TextField
                  id="standard-number"
                  label="Usuarios disponibles"
                  value={this.state.count}
                  onChange={this.handleChange('count')}
                  type="number"
                  InputLabelProps={{
                    shrink: true,
                  }}
                  margin="normal"
                />
              </Tooltip>
            </Grid>
            <Grid item xs={6}>
              <Button variant="contained" color="primary" className={classes.button} onClick={this.generarReporte}>
                Generar
              </Button>
            </Grid>
          </Grid>
        </Paper>
        <br />

        {this.props.reporteGenerado && <TableView data={this.props.meetings} columns={this.props.columns} />}
      </div>
    );
  }
}

export default withStyles(styles)(ReporteView);
