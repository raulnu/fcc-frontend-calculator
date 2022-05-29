export default function Numero(props) {
  const { numero, setDisplay, display } = props;
  const addNumber = () => {
    if (display === "0") {
      setDisplay(numero.number);
    } else {
      setDisplay(display + numero.number);
    }
  };
  return (
    <li className={`${numero.number === "0" ? "col-8" : "col-4"} col-4 p-0`}>
      <button
        id={numero.id}
        type="button"
        className="numero btn btn-primary border border-dark p-4"
        onClick={addNumber}
      >
        {numero.number}
      </button>
    </li>
  );
}
