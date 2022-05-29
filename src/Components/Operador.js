export default function Operador(props) {
  const {
    operador,
    firstChain,
    setFirstChain,
    display,
    setDisplay,
    operation,
    setOperation,
  } = props;

  const operate = () => {
    setFirstChain(display);
    setDisplay("0");
    if (operation === "") {
      setOperation(operador.value);
    } else {
      setFirstChain(display);
      if (operation === "+") {
        setFirstChain(Number(firstChain) + Number(display));
      } else if (operation === "-") {
        setFirstChain(Number(firstChain) - Number(display));
      } else if (operation === "x") {
        setFirstChain(Number(firstChain) * Number(display));
      } else if (operation === "/") {
        setFirstChain(Number(firstChain) / Number(display));
      }
      setOperation(operador.value);
    }
  };
  return (
    <li className="col-12 p-0">
      <button
        id={operador.id}
        type="button"
        className="numero btn btn-secondary p-4 border border-dark"
        onClick={operate}
      >
        {operador.value}
      </button>
    </li>
  );
}
