import { useState } from "react";

function Ejemplo2() {
	// let count = 0;
	const [count, setCount] = useState(0);

	const Sumar = () => {
		setCount( count + 1 );
	}

	const Restar = () => {
		setCount( count - 1 );
	}

return (
    <>
	    <div> Valor : {count}</div>
			<div>
				<button onClick={Sumar}>Sumar</button>
				<button onClick={Restar}>Restar</button>
			</div>
		</>
)
}

export default Ejemplo2