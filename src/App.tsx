import { useEffect, useState } from "react";
import axios from "axios";
import Quotes from "./Components/Quotes";
import CurrentTime from "./Components/CurrentTime";
function App() {
  
  return (
    <>
      <Quotes />
      <CurrentTime />
    </>
  );
}

export default App;
