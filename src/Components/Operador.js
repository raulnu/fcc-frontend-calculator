export default function Operador(props) {
  const { operador } = props;
  return (
    <li className="col-12 p-0">
      <button
        type="button"
        className="numero btn btn-secondary p-4 border border-dark"
      >
        {operador.value}
      </button>
    </li>
  );
}
