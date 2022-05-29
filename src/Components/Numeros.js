import Numero from "./Numero";

export default function Numeros() {
  const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  return (
    <div className="row">
      <div className="col-12">
        <ul className="row">
          {numeros.map((numero) => {
            return <Numero key={numero} numero={numero} />;
          })}
          <li className="col-8 p-0">
            <button
              type="button"
              className="numero btn btn-primary border border-dark p-4"
            >
              0
            </button>
          </li>
          <li className="col-4 p-0">
            <button
              type="button"
              className="numero btn btn-primary border border-dark p-4"
            >
              .
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
}
