import { useState } from "react"
import './App.css';
import Ejemplo1 from "./components/Ejemplo1"
import Ejemplo2 from "./components/Ejemplo2"
import Ejemplo3 from "./components/Ejemplo3"
import Ejemplo4 from "./components/Ejemplo4"
import Ejemplo5 from "./components/Ejemplo5"
import Ejemplo6 from "./components/Ejemplo6";

function App() {
  // const [count, setCount] = useState(0);
  const [count, setCount] = useState(0);

  // Ejemplo5.jsx
  // const Sumar = () => {
	// 	setCount( count + 1 );
	// }
	// const Restar = () => {
	// 	setCount( count - 1 );
	// }

  return (
    <>
      {/* <Ejemplo5 count={count} setCount={setCount}/> */}
      {/* <Ejemplo5 count={count} sumar={Sumar} restar={Restar} /> */}
      <Ejemplo6 />
    </>
  )
}

export default App
