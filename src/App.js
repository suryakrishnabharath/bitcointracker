import React, { useEffect, useState } from "react";
import "./App.css";
import "@material-ui/core/";
import { Typography, CircularProgress } from "@material-ui/core/";
import Currency from "./components/currency";
import { ThemeProvider, createMuiTheme } from "@material-ui/core/styles";

const theme = createMuiTheme({
  typography: {
    fontFamily: ["Potta", "One"].join(","),
  },
  overrides: {
    // Style sheet name ⚛️
    MuiButton: {
      // Name of the rule
      text: {
        // Some CSS
        fontSize: "25px",
        background: "linear-gradient(45deg, #FE7B8B 30%, #FF8E53 90%)",
        borderRadius: 3,
        border: 0,
        color: "white",
        height: 55,
        padding: "0 30px",
        boxShadow: "0 3px 5px 2px rgba(255, 105, 135, .3)",
      },
    },
  },
});

function App() {
  const [data, setData] = useState("");
  const [progress, setProgress] = useState(true);
  useEffect(() => {
    const getBitcoinPrice = () => {
      fetch("https://api.coindesk.com/v1/bpi/currentprice.json")
        .then((res) => res.json())
        .then((values) => {
          setData(values.bpi);
          setProgress(false);
        })
        .catch((e) => {
          console.log(e);
        });
    };
    getBitcoinPrice();

    return <div>Hello!</div>;
  }, []);
  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <div className="nav" style={{ padding: 20, backgroundColor: "gold" }}>
          <Typography variant="h4">BitCoin Price Tracker</Typography>
        </div>
        <div style={{ padding: 20 }}>
          {progress ? (
            <div>
              <CircularProgress />
            </div>
          ) : (
            <Currency data={data} />
          )}
        </div>
      </div>
    </ThemeProvider>
  );
}

export default App;
