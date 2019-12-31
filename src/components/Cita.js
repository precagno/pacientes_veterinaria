import React from 'react';
import PropTypes from 'prop-types';

const Cita=({cita,eliminarCita})=>{
    return (
        <div className="media mt-3">
            <div className="media-body">
                <div className="card-text"><span>Nombre de la mascota: </span><b>{cita.mascota}</b></div>
                <div className="card-text"><span>Propietario: </span>{cita.propietario}</div>
                <div className="card-text"><span>Fecha de la consulta: </span>{cita.fecha}</div>
                <div className="card-text"><span>Hora de la consulta: </span>{cita.hora}</div>
                <div className="card-text"><span>Sintomas: </span>{cita.sintomas}</div>
                <button 
                    className="btn btn-danger btn-block" 
                    onClick={()=>eliminarCita(cita.id)}>
                    Eliminar cita
                </button>
            </div>
        </div>
    );
}

Cita.propTypes={
    cita : PropTypes.object.isRequired,
    eliminarCita : PropTypes.func.isRequired
};

export default Cita;