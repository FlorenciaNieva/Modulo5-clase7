function Ejemplo1() {
	let count = 0;

	const Sumar = () => {
		count = count + 1;
	}

	const Restar = () => {
		count = count - 1;
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

export default Ejemplo1