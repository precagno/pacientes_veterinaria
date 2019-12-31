import React, { Component } from "react";
import uuid from "uuid";
import PropTypes from 'prop-types';

const stateInicial = {
  cita: {
    mascota: "",
    propietario: "",
    fecha: "",
    hora: "",
    sintomas: ""
  },
  error: false
};

class NuevaCita extends Component {
  state = { ...stateInicial };

  // Cuando el usuario escribe en el formulario
  handleChange = e => {
    this.setState({
      cita: {
        ...this.state.cita,
        [e.target.name]: e.target.value
      }
    });
  };

  // Cuando el usuario envia el formulario
  handleSubmit = e => {
    e.preventDefault();

    // Extraer los valores del state
    const { mascota, propietario, fecha, hora, sintomas } = this.state.cita;

    // Validar que estén llenos
    if (
      mascota === "" ||
      propietario === "" ||
      fecha === "" ||
      hora === "" ||
      sintomas === ""
    ) {
      this.setState({
        error: true
      });

      console.log("Hubo un error en la validación de los campos.");

      // Cortamos la ejecución
      return;
    }

    // Creamos una copia de la cita
    const nuevaCita = { ...this.state.cita };
    nuevaCita.id = uuid();

    // Agregar nueva cita al state del app
    this.props.crearNuevaCita(nuevaCita);

    // Reiniciamos el formulario
    this.setState({ ...stateInicial });
  };

  render() {
    // Extraemos valor del state
    const { error } = this.state;

    return (
      <div className="card mt-5 py-5">
        <div className="card-body">
          <h2 className="text-center text-primary">
            Llená el formulario para crear una nueva cita
          </h2>

          {error ? (
            <div className="alert alert-danger mt-4 mb-4 text-center">
              Todos los campos son obligatorios
            </div>
          ) : null}

          <form onSubmit={this.handleSubmit}>
            <div className="form-group">
              <label htmlFor="mascota">Nombre mascota</label>
              <input
                type="text"
                className="form-control"
                name="mascota"
                placeholder="Nombre de la mascota"
                onChange={this.handleChange}
                value={this.state.cita.mascota}
              />
            </div>
            <div className="form-group">
              <label htmlFor="propietario">
                Nombre del dueño de la mascota
              </label>
              <input
                type="text"
                className="form-control"
                name="propietario"
                placeholder="Nombre del dueño de la mascota"
                onChange={this.handleChange}
                value={this.state.cita.propietario}
              />
            </div>
            <div className="form-group">
              <label htmlFor="fecha">Fecha de la consulta</label>
              <input
                type="date"
                className="form-control"
                name="fecha"
                onChange={this.handleChange}
                value={this.state.cita.fecha}
              />

              <label htmlFor="fecha">Hora de la consulta</label>
              <input
                type="time"
                className="form-control"
                name="hora"
                onChange={this.handleChange}
                value={this.state.cita.hora}
              />
            </div>

            <div className="form-group">
              <label htmlFor="sintomas">Sintomas</label>
              <textarea
                className="form-control"
                name="sintomas"
                placeholder="Sintomas de la mascota"
                onChange={this.handleChange}
                value={this.state.cita.sintomas}
              ></textarea>
            </div>
            <input
              type="submit"
              className="btn btn-block btn-success"
              value="Agregar cita"
            />
          </form>
        </div>
      </div>
    );
  }
}

NuevaCita.propTypes={
  crearNuevaCita:PropTypes.func.isRequired
}

export default NuevaCita;
