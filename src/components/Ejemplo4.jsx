import React, { useState } from 'react'

function Ejemplo4() {
  const [persona, setPersona] = useState({nombre: "Guille"});
  function AgregarApellido() {
    setPersona({ ...persona, apellido: "Montaña" });
  }
  return (
    <>
      <div>
        <p>{persona.nombre}</p>
				<p>{persona.apellido ? persona.apellido : ""}</p>
      </div>
      <div>
        <button onClick={AgregarApellido}>Agregar Apellido</button>
      </div>
    </>
  )
}

export default Ejemplo4;