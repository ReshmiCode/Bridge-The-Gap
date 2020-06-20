import React from "react";
import {
  Card,
  CardContent,
  Typography,
  GridList,
  GridListTile,
} from "@material-ui/core";

const CardList = () => {
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
  const numbs = [1, 2, 3, 4, 5];

  return (
    <div style={flexContainer}>
      <GridList style={gridList}>
        {numbs.map((o) => (
          <GridListTile style={{ height: null, width: "25%" }}>
            <Card>
              <CardContent>
                <Typography>
                  {o}: Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
                  Aenean commodo ligula eget dolor. Aenean massa. Cum sociis
                  natoque penatibus et magnis dis parturient montes, nascetur
                  ridiculus mus. Donec quam felis, ultricies nec, pellentesque
                  eu, pretium quis, sem. Nulla consequat massa quis enim. Donec
                  pede justo, fringilla vel, aliquet nec, vulputate eget, arcu.
                </Typography>
              </CardContent>
            </Card>
          </GridListTile>
        ))}
      </GridList>
    </div>
  );
};

export default CardList;
