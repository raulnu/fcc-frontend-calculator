import Operador from "./Operador";
export default function Operadores(props) {
  const {
    firstChain,
    setFirstChain,
    display,
    setDisplay,
    operation,
    setOperation,
  } = props;
  const operadores = [
    { key: 1, value: "+", id: "add" },
    { key: 2, value: "-", id: "substract" },
    { key: 3, value: "x", id: "multiply" },
    { key: 4, value: "/", id: "divide" },
  ];

  const equals = () => {
    if (operation === "+") {
      setDisplay(Number(firstChain) + Number(display));
    } else if (operation === "-") {
      setDisplay(Number(firstChain) - Number(display));
    } else if (operation === "x") {
      setDisplay(Number(firstChain) * Number(display));
    } else if (operation === "/") {
      setDisplay(Number(firstChain) / Number(display));
    }
    setOperation("");
  };
  return (
    <ul className="row">
      {operadores.map((operador) => {
        return (
          <Operador
            setOperation={setOperation}
            operation={operation}
            display={display}
            setDisplay={setDisplay}
            key={operador.key}
            operador={operador}
            firstChain={firstChain}
            setFirstChain={setFirstChain}
          />
        );
      })}
      <li className="col-12 p-0">
        <button
          id="equals"
          type="button"
          className="numero btn btn-success p-4 border border-dark"
          onClick={equals}
        >
          =
        </button>
      </li>
    </ul>
  );
}
