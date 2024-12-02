import { useState } from "react";
import "./App.css";

import { CardWithForm } from './components/example/ExampleCard'

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <h1>Vite + React</h1>

      <CardWithForm />
    </>
  );
}

export default App;
