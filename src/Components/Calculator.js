import Display from "./Display";
import Borrador from "./Borrador";
import Numeros from "./Numeros";
import Operadores from "./Operadores";
import { useState } from "react";

export default function Calculator() {
  const [display, setDisplay] = useState("0");
  const [firstChain, setFirstChain] = useState("");
  const [operation, setOperation] = useState("");
  return (
    <div className="calculator col-sm-6 col-lg-4 border border-warning bg-dark">
      <Display display={display} />
      <div className="botonera row">
        <div className="principal col-9">
          <Borrador setDisplay={setDisplay} setOperation={setOperation} />
          <Numeros display={display} setDisplay={setDisplay} />
        </div>
        <div className="lateral col-3">
          <Operadores
            operation={operation}
            setOperation={setOperation}
            display={display}
            setDisplay={setDisplay}
            firstChain={firstChain}
            setFirstChain={setFirstChain}
          />
        </div>
      </div>
    </div>
  );
}
