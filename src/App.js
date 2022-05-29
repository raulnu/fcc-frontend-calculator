import Calculator from "./Components/Calculator";
function App() {
  return (
    <div className="container">
      <header className="cabecera row text-center mt-4 mb-4">
        <h1 className="col-12">React Calculator</h1>
      </header>
      <main className="main-content row justify-content-center text-center">
        <Calculator />
      </main>
      <footer className="footer row text-center mt-4">
        <p>Developed by Raúl Navarro Uribe</p>
        <p>
          You can check out the code on{" "}
          <a href="https://github.com/r-navarrouribe/fcc-frontend-calculator">
            github
          </a>
        </p>
      </footer>
    </div>
  );
}

export default App;
