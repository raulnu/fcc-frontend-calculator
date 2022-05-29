export default function Numero(props) {
  const { numero } = props;
  return (
    <li className="col-4 p-0">
      <button
        type="button"
        className="numero btn btn-primary border border-dark p-4"
      >
        {numero}
      </button>
    </li>
  );
}
