import axios from "axios";
import { useEffect, useState } from "react";
export default function Quotes() {
  const [quoteState, setQuoteState] = useState<any>([]);
  useEffect(() => {
    updateQuote();
  }, []);

  async function updateQuote() {
    axios.get("https://dummyjson.com/quotes/random").then((res) => {
      setQuoteState(res.data);
    });
  }
  return (
    <div>
      <h1>{quoteState.quote ? quoteState.quote : "Loading"}</h1>
      <span>{quoteState.quote ? quoteState.author : "Loading"}</span>
      <button onClick={updateQuote}>click</button>
    </div>
  )
}
