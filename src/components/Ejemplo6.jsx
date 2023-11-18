import React from 'react'
import { useState } from 'react';

function Ejemplo6() {
	const [nombre, setNombre] = useState("");

	const cambiarNombre = (e) => {
		setNombre(e.target.value)
	}
	
  return (
    <div>
			<input type="text" placeholder='Escriba su nombre aquí' value ={nombre} onChange={cambiarNombre} />
		</div>
  )
}

export default Ejemplo6