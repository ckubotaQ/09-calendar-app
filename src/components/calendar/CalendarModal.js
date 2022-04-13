import React from 'react';
import { useState } from 'react';
import Modal from 'react-modal';
import DateTimePicker from 'react-datetime-picker';
import moment from 'moment';

export const CalendarModal = () => {
    const [updatedModal, setupdatedModal] = useState(true)
    const starDate = moment().minutes(0).seconds(0).add(1, 'hours');
    const handleStartDate = (e) => {
            console.log(e)
    
    }
    const customStyles = {
        content: {
          top: '50%',
          left: '50%',
          right: 'auto',
          bottom: 'auto',
          marginRight: '-50%',
          transform: 'translate(-50%, -50%)',
          width: '50%',
          overflow: 'auto',
        },
      };
      Modal.setAppElement('#root');

      const closeModal = () => {
        console.log('closeModal');
        setupdatedModal(false);
        }
    const changesDataStart = (e) => {

    }
    return (
    
        <Modal
        isOpen={updatedModal}
      //   onAfterOpen={afterOpenModal}
        onRequestClose={closeModal}
        style={customStyles}
        className="modal"
        overlayClassName="modal-fondo"
      >
  <h1> Nuevo evento </h1>
<hr />
<form className="container">

    <div className="form-group">
        <label>Fecha y hora inicio</label>
        <DateTimePicker onChange={handleStartDate} value={starDate.toDate()} 
        className="form-control" 
        placeholder="Fecha inicio" />
    </div>

    <div className="form-group">
        <label>Fecha y hora fin</label>
        <input className="form-control" placeholder="Fecha inicio" />
    </div>

    <hr />
    <div className="form-group">
        <label>Titulo y notas</label>
        <input 
            type="text" 
            className="form-control"
            placeholder="Título del evento"
            name="title"
            autoComplete="off"
        />
        <small id="emailHelp" className="form-text text-muted">Una descripción corta</small>
    </div>

    <div className="form-group">
        <textarea 
            type="text" 
            className="form-control"
            placeholder="Notas"
            rows="5"
            name="notes"
        ></textarea>
        <small id="emailHelp" className="form-text text-muted">Información adicional</small>
    </div>

    <button
        type="submit"
        className="btn btn-outline-primary btn-block"
    >
        <i className="far fa-save"></i>
        <span> Guardar</span>
    </button>

</form>
    
      </Modal>
  )
}
