import React, { Component } from "react";
import Header from "./components/Header";
import NuevaCita from "./components/NuevaCita";
import "./bootstrap.min.css";
import ListaCitas from "./components/ListaCitas";

class App extends Component {
  state = {
    citas: []
  };

  componentDidMount(){
    // Verificar que haya datos en el storage
    const citasLS=JSON.parse(localStorage.getItem("citas"));
    if(citasLS){
      // sí hay citas en el storage,cargarlas en el state
      this.setState({citas:citasLS});
    }
  }

  componentDidUpdate(){
    // Insertar la cita agregada en el local storage
    localStorage.setItem("citas",JSON.stringify(this.state.citas));
  }
  
  crearNuevaCita = datos => {
    // Copiar el state actual
    const citas = [...this.state.citas, datos];
    // Agregar la nueva cita
    this.setState({ citas });
  };

  eliminarCita=(id)=>{
    // Copio el state
    const citasActuales=[...this.state.citas];
    // Filtro usando el id
    const citas=citasActuales.filter(cita=>cita.id!==id);
    // Actualizo el state
    this.setState({citas});
  };

  render() {
    return (
      <div className="container">
        <Header titulo="Administrador Pacientes Veterinaria" />
        <div className="row">
          <div className="col-md-10 mx-auto">
            <NuevaCita crearNuevaCita={this.crearNuevaCita} />
            <ListaCitas 
              citas={this.state.citas} 
              eliminarCita={this.eliminarCita}
              />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
