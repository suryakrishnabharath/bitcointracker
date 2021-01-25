import React, { useState } from "react";
import { Button, Typography } from "@material-ui/core/";
import Price from "./price";

const Currency = ({ data }) => {
  const [USD, setUSD] = useState(false);
  const [GBP, setGBP] = useState(false);
  const [EUR, setEUR] = useState(false);

  return (
    <div className="row">
      <div className="title">
        <Typography variant="h5">
          Price of a <strong>BotCoin</strong> in
        </Typography>
      </div>
      <div
        className="price-container"
        style={{
          display: "flex",

          justifyContent: "center",
        }}
      >
        <div style={{ padding: 10 }}>
          <Button
            onClick={() => {
              setUSD(!USD);
              setEUR(false);
              setGBP(false);
            }}
          >
            USD
          </Button>
        </div>
        <div style={{ padding: 10 }}>
          <Button
            onClick={() => {
              setUSD(false);
              setEUR(!EUR);
              setGBP(false);
            }}
          >
            EUR
          </Button>
        </div>
        <div style={{ padding: 10 }}>
          <Button
            onClick={() => {
              setUSD(false);
              setEUR(false);
              setGBP(!GBP);
            }}
          >
            GBP
          </Button>
        </div>
      </div>
      <div style={{ textAlign: "center" }}>
        <Typography variant="h5">equals</Typography>
        {USD ? (
          <Price amount={"$" + data.USD.rate} />
        ) : GBP ? (
          <Price amount={"£" + data.GBP.rate} />
        ) : EUR ? (
          <Price amount={"€" + data.EUR.rate} />
        ) : null}
      </div>
    </div>
  );
};

export default Currency;
