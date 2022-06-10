import axios from "axios";
import { useEffect } from "react";
import "./App.css";

function App() {
  const key = "3cea5195bf695995ba3d7611263cf82d";
  useEffect(() => {
    async function getUser() {
      try {
        const response = await axios.get(
          `https://api.openweathermap.org/data/2.5/weather?q=London&appid=${key}`
        );
        console.log(response);
      } catch (error) {
        console.error(error);
      }
    }
    getApi();
  }, []);
  return <> Hello</>;
}

export default App;
