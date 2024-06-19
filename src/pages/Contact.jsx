import React, { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (formData.name.length <= 5) {
      setError('El nombre debe tener más de 5 caracteres');
    } else if (!isValidEmail(formData.email)) {
      setError('El email debe tener un formato válido');
    } else {
      console.log('Formulario enviado:', formData);


      setSuccess(`Gracias ${formData.name}, te contactaremos cuanto antes por mail`);
      setError('');

      setFormData({ name: '', email: '', message: '' });
    }
  };

  const isValidEmail = (email) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input 
          name="name" 
          value={formData.name} 
          onChange={handleChange} 
          placeholder="Nombre completo" 
          required 
        />
        <br />
        <input 
          type="email" 
          name="email" 
          value={formData.email} 
          onChange={handleChange} 
          placeholder="Email" 
          required 
        />
        <br />
        <textarea 
          name="message" 
          value={formData.message} 
          onChange={handleChange} 
          placeholder="Mensaje" 
          required 
        />
        <br />
        <button type="submit">Enviar</button>
      </form>
      {error && <p style={{ color: 'red', fontWeight: 'bold' }}>{error}</p>}
      {success && <p style={{ color: 'green', fontWeight: 'bold' }}>{success}</p>}
    </div>
  );
};

export default Contact;
