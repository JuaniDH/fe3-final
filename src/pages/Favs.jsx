import React, { useContext } from 'react';
import { GlobalContext } from '../context/GlobalContext';
import DentistCard from '../components/Card';

const Favs = () => {
  const { state } = useContext(GlobalContext);

  return (
    <div className="grid">
      {state.favDentists.map((dentist) => (
        <DentistCard key={dentist.id} dentist={dentist} />
      ))}
    </div>
  );
};

export default Favs;
