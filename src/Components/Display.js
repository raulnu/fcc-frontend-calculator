export default function Display(props) {
  const { display } = props;
  return (
    <div
      id="display"
      className="row bg-dark text-light p-4 rounded border border-light"
    >
      <span className="cifra">{display}</span>
    </div>
  );
}
