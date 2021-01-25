import React from "react";
import { Typography, Card } from "@material-ui/core/";

const Price = ({ amount }) => {
  return (
    <div
      style={{
        margin: 20,

        display: "flex",
        justifyContent: "center",
      }}
    >
      <Card>
        <Typography variant="h4" color="initial">
          {amount}
        </Typography>
      </Card>
    </div>
  );
};

export default Price;
