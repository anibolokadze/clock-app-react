import axios from "axios";
import { useEffect, useState } from "react";
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
    <div>
      <h1>{quote.quote ? quote.quote : "Loading"}</h1>
      <span>{quote.quote ? quote.author : "Loading"}</span>
      <button onClick={updateQuote}>click</button>
    </div>
  );
}
