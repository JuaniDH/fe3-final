import React, { useContext, useEffect } from 'react';
import { GlobalContext } from '../context/GlobalContext';
import DentistCard from '../components/Card';

const Home = () => {
  const { state, dispatch } = useContext(GlobalContext);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((response) => response.json())
      .then((data) => dispatch({ type: 'SET_DENTISTS', payload: data }));
  }, [dispatch]);

  return (
    <div className="grid">
      {state.dentists.map((dentist) => (
        <DentistCard key={dentist.id} dentist={dentist} />
      ))}
    </div>
  );
};

export default Home;
