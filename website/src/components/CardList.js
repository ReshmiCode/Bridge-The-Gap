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
  };
  const gridList = {
    flexWrap: "nowrap",
    transform: "translateZ(0)",
  };

  return (
    <div style={flexContainer}>
      <GridList style={gridList}>
        {props.cards.map((item) => (
          <GridListTile>
            <Card style={{ width: "fit-content" }}>
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
