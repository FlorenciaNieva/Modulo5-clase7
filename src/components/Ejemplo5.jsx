import { useState } from "react";

// function Ejemplo5({ count, setCount }) {
// 	const sumar = () => {
// 		setCount (count + 1)
// 	} 
// 	const restar = () => {
// 		setCount (count - 1)
// 	}
// 	return (
// 		<>
// 			<div> Valor : {count}</div>
// 				<div>
// 					<button onClick={sumar}>Sumar</button>
// 					<button onClick={restar}>Restar</button>
// 				</div>
// 			</>
// 	)
// }

function Ejemplo5({ count, sumar, restar }) {
return (
    <>
	    <div> Valor : {count}</div>
			<div>
				<button onClick={sumar}>Sumar</button>
				<button onClick={restar}>Restar</button>
			</div>
		</>
)
}

export default Ejemplo5