import { useState } from "react";
import style from "../Styles/Convertator.module.css";
import CurrencyInput from "./CurrencyInput";
const token = import.meta.env.VITE_API_KEY;

const Convertator = () => {
  const [firstAmount, setFirstAmount] = useState("");
  const [firstCurrency, setFirstCurrency] = useState("EUR");
  const [secondAmount, setSecondAmount] = useState("");
  const [secondCurrency, setSecondCurrency] = useState("USD");
  const [result1, setResult1] = useState();
  const [result2, setResult2] = useState();

  return (
    <main className={style.main}>
      <div>
        <CurrencyInput
          amount={firstAmount}
          currency={firstCurrency}
          onAmountChange={(e) => setFirstAmount(e.target.value)}
          onCurrencyChange={(e) => setFirstCurrency(e.target.value)}
          fromCurrency={firstCurrency}
          toCurrency={secondCurrency}
          setResult={setResult1}
          token={token}
        />
        {result1 && (
          <p>{`${firstAmount} ${firstCurrency} = ${result1} ${secondCurrency}`}</p>
        )}
      </div>
      <div>
        <CurrencyInput
          amount={secondAmount}
          currency={secondCurrency}
          onAmountChange={(e) => setSecondAmount(e.target.value)}
          onCurrencyChange={(e) => setSecondCurrency(e.target.value)}
          fromCurrency={secondCurrency}
          toCurrency={firstCurrency}
          setResult={setResult2}
          token={token}
        />
        {result2 && (
          <p>{`${secondAmount} ${secondCurrency} = ${result2} ${firstCurrency}`}</p>
        )}
      </div>
    </main>
  );
};

export default Convertator;
