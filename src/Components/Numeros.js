import Numero from "./Numero";

export default function Numeros(props) {
  const { setDisplay, display } = props;
  const numeros = [
    { id: "seven", number: "7" },
    { id: "eight", number: "8" },
    { id: "nine", number: "9" },
    { id: "four", number: "4" },
    { id: "five", number: "5" },
    { id: "six", number: "6" },
    { id: "one", number: "1" },
    { id: "two", number: "2" },
    { id: "three", number: "3" },
    { id: "zero", number: "0" },
  ];
  const decimal = () => {
    if (display.includes(".")) {
      setDisplay(display);
    } else {
      setDisplay(display + ".");
    }
  };
  return (
    <div className="row">
      <div className="col-12">
        <ul className="row">
          {numeros.map((numero) => {
            return (
              <Numero
                key={numero.number}
                numero={numero}
                display={display}
                setDisplay={setDisplay}
              />
            );
          })}

          <li className="col-4 p-0">
            <button
              id="decimal"
              type="button"
              className="numero btn btn-primary border border-dark p-4"
              onClick={decimal}
            >
              .
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
}
