// src/components/DentistCard.jsx
import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { GlobalContext } from '../context/GlobalContext';
import './Card.css';

const DentistCard = ({ dentist }) => {
  const { state, dispatch } = useContext(GlobalContext);

  const addToFav = () => {
    dispatch({ type: 'ADD_FAV', payload: dentist });
  };

  return (
    <div className={`card ${state.theme}`}>
      <h3>{dentist.name}</h3>
      <p>{dentist.username}</p>
      <Link to={`/dentist/${dentist.id}`}>Ver detalle del paciente</Link>
      <button onClick={addToFav}>DESTACAR</button>
    </div>
  );
};

export default DentistCard;
