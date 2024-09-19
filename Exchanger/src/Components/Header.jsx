import style from "../Styles/Header.module.css";
import { useState, useEffect } from "react";
const token = import.meta.env.VITE_API_KEY;
import arrow from "../imgs/arrow.png";

const Header = () => {
  const [currency, setCurrency] = useState({
    uah_to_eur: 0.0,
    uah_to_usd: 0.0,
  });

  useEffect(() => {
    const fetchData = async () => {
      try{
      const response_eur = await fetch(
        `https://v6.exchangerate-api.com/v6/${token}/pair/EUR/UAH`
      );
      const data_eur = await response_eur.json();
      const response_usd = await fetch(
        `https://v6.exchangerate-api.com/v6/${token}/pair/USD/UAH`
      );
      const data_usd = await response_usd.json();
      setCurrency({
        uah_to_eur: data_eur.conversion_rate,
        uah_to_usd: data_usd.conversion_rate,
      });
    } catch (error) {
      console.log(error);
    }
    };
    fetchData();
  }, []);

  return (
    <header className={style.container}>
      <div>1 EUR <img src={arrow} alt="arrow"/> {currency.uah_to_eur} UAH</div>
      <div>1 USD <img src={arrow} alt="arrow"/> {currency.uah_to_usd} UAH</div>
    </header>
  );
};

export default Header;
