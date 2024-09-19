import Header from "./Header";
import style from "../Styles/App.module.css";
import Convertator from "./Converter";

function App() {
  return (
    <div className={style.main}>
      <Header />
      <div>
        <h1 className={style.converter}>Converter</h1>
      </div>
      <div className={style.container}>
        <h1 style={{ marginTop: "5vw" }}>
          Convert with Confidence
        </h1>
        <h1 style={{ marginTop: "5vw" }}>
          Spend with Ease!
        </h1>
      </div>
      <Convertator />
    </div>
  );
}

export default App;
