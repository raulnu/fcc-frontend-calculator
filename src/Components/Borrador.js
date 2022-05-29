export default function Borrador(props) {
  const { setDisplay, setOperation } = props;

  const clear = () => {
    setDisplay("0");
    setOperation("");
  };
  return (
    <div className="row">
      <button
        onClick={clear}
        id="clear"
        className="numero btn btn-warning p-4 border border-dark"
      >
        AC
      </button>
    </div>
  );
}
