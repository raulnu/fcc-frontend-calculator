import Display from "./Display";
import Borrador from "./Borrador";
import Numeros from "./Numeros";
import Operadores from "./Operadores";

export default function Calculator() {
  return (
    <div className="calculator col-8 border border-warning">
      <Display />
      <div className="botonera row">
        <div className="principal col-9">
          <Borrador />
          <Numeros />
        </div>
        <div className="lateral col-3">
          <Operadores />
        </div>
      </div>
    </div>
  );
}
