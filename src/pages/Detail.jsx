import React, { useContext, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { GlobalContext } from '../context/GlobalContext';

const Detail = () => {
  const { id } = useParams();
  const { state, dispatch } = useContext(GlobalContext);

  useEffect(() => {
    const dentist = state.dentists.find((d) => d.id === parseInt(id));
    if (!dentist) {
      fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
        .then((response) => response.json())
        .then((data) => dispatch({ type: 'SET_DENTIST_DETAIL', payload: data }));
    } else {
      dispatch({ type: 'SET_DENTIST_DETAIL', payload: dentist });
    }
  }, [id, state.dentists, dispatch]);

  const dentist = state.dentistDetail;

  return (
    <div>
      {dentist ? (
        <>
          <h1>{dentist.name}</h1>
          <p>Email: {dentist.email}</p>
          <p>Telefono: {dentist.phone}</p>
          <p>Sitio web: {dentist.website}</p>
        </>
      ) : (
        <p>Cargando...</p>
      )}
    </div>
  );
};

export default Detail;
