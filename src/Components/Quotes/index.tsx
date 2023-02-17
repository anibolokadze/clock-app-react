import axios from "axios";
import { useEffect, useState } from "react";
import style from "./Quotes.module.scss";
import refreshIcon from "../../assets/desktop/icon-refresh.svg";
export default function Quotes() {
  const [quote, setQuote] = useState<any>([]);
  useEffect(() => {
    updateQuote();
  }, []);

  async function updateQuote() {
    axios.get("https://dummyjson.com/quotes/random").then((res) => {
      setQuote(res.data);
    });
  }
  return (
    <div className={style.wrapper}>
      <div className={style.content}>
        <h1>{quote.quote ? quote.quote : "Loading"}</h1>
        <button onClick={updateQuote}>
          <img src={refreshIcon} />
        </button>
      </div>
      <span>{quote.quote ? quote.author : "Loading"}</span>
    </div>
  );
}
