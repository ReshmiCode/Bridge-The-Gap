import React from "react";
import {
  Card,
  CardContent,
  Typography,
  GridList,
  GridListTile,
} from "@material-ui/core";

const CardList = (props) => {
  const flexContainer = {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-around",
    overflow: "hidden",
    width: "100%",
  };
  const gridList = {
    flexWrap: "nowrap",
    transform: "translateZ(0)",
    width: "100%",
  };

  return (
    <div style={flexContainer}>
      <GridList style={gridList}>
        {props.cards.map((item) => (
          <GridListTile style={{ width: "25%" }}>
            <Card>
              <CardContent>
                <Typography>{item}</Typography>
              </CardContent>
            </Card>
          </GridListTile>
        ))}
      </GridList>
    </div>
  );
};

export default CardList;
