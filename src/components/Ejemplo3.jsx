import React, { useState } from 'react'

function Ejemplo3() {
  const [nombres, setNombres] = useState(["Guille"]);
  function AgregarNombre() {
    setNombres([...nombres, "Sofi"]);
  }
  return (
    <>
      <div>
        {nombres.map((nombre) => <h1>{nombre}</h1>)}
      </div>
      <div>
        <button onClick={AgregarNombre}>Agregar Nombre Sofi</button>
      </div>
    </>
  )
}

export default Ejemplo3