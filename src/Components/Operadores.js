import Operador from "./Operador";
export default function Operadores() {
  const operadores = [
    { key: 1, value: "+" },
    { key: 2, value: "-" },
    { key: 3, value: "x" },
    { key: 4, value: "/" },
  ];
  return (
    <ul className="row">
      {operadores.map((operador) => {
        return <Operador key={operador.key} operador={operador} />;
      })}
      <li className="col-12 p-0">
        <button
          type="button"
          className="numero btn btn-success p-4 border border-dark"
        >
          =
        </button>
      </li>
    </ul>
  );
}
