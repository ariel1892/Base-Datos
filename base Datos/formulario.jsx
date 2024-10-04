import React, { useState } from 'react';

const MinoristaForm = () => {
  const [formData, setFormData] = useState({
    nombre: '',
    apellido: '',
    dni: '',
    rubro: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Aquí enviarías los datos a tu backend
    try {
      const response = await fetch('http://tuservidor.com/api/minoristas', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        // Manejar respuesta exitosa
        console.log('Minorista agregado');
        setFormData({ nombre: '', apellido: '', dni: '', rubro: '' }); // Limpiar el formulario
      } else {
        // Manejar errores
        console.error('Error al agregar minorista');
      }
    } catch (error) {
      console.error('Error en la solicitud:', error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>
          Nombre:
          <input
            type="text"
            name="nombre"
            value={formData.nombre}
            onChange={handleChange}
            required
          />
        </label>
      </div>
      <div>
        <label>
          Apellido:
          <input
            type="text"
            name="apellido"
            value={formData.apellido}
            onChange={handleChange}
            required
          />
        </label>
      </div>
      <div>
        <label>
          DNI:
          <input
            type="text"
            name="dni"
            value={formData.dni}
            onChange={handleChange}
            required
          />
        </label>
      </div>
      <div>
        <label>
          Rubro:
          <input
            type="text"
            name="rubro"
            value={formData.rubro}
            onChange={handleChange}
          />
        </label>
      </div>
      <button type="submit">Agregar Minorista</button>
    </form>
  );
};

export default MinoristaForm;
