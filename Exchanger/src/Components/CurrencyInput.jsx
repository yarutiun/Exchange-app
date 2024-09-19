import { useEffect } from "react";
// eslint-disable-next-line no-unused-vars
import style from "../Styles/CurrencyInput.module.css";

/* eslint-disable react/prop-types */
const CurrencyInput = ({
  amount,
  currency,
  onAmountChange,
  onCurrencyChange,
  fromCurrency,
  toCurrency,
  setResult,
  token,
}) => {

  useEffect(() => {
    const fetchData = async () => {
      if (!amount) return;
      try {
        const response = await fetch(
          `https://v6.exchangerate-api.com/v6/${token}/pair/${fromCurrency}/${toCurrency}/${amount}`
        );
        const data = await response.json();
        setResult(data.conversion_result);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, [amount, fromCurrency, toCurrency, setResult, token]);

  return (
    <div>
      <select value={currency} onChange={onCurrencyChange} style={{ marginRight: '5px' }}>
        <option value="EUR">EUR</option>
        <option value="USD">USD</option>
        <option value="UAH">UAH</option>
      </select>
      <input
        type="number"
        placeholder="Input desired amount to convert"
        value={amount}
        onChange={onAmountChange}
      />
    </div>
  );
};

export default CurrencyInput;
