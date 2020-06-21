import React, {useState, useEffect} from "react";
import {
  Card,
  CardContent,
  Typography,
  GridList,
  GridListTile,
} from "@material-ui/core";
const axios = require("axios").default;
let GLOBAL = require("../global");

const CardList = (props) => {
  let [info, setInfo] = useState(["GCP"]);
  const status = props.type;

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

  useEffect(() => {
    async function fetchData() {
      const result = await axios(
        `https://mlh-bridge-the-gap.wl.r.appspot.com/api/v1/users/${GLOBAL.googleID}`
      );
      if (status === "push"){
        setInfo(result.data.data[0].pushList);
      }
      if (status === "pull"){
        setInfo(result.data.data[0].pullList);
      }
    }
    fetchData();
  }, []);

  return (
    <div style={flexContainer}>
      <GridList style={gridList}>
        {info.map((item) => (
          <GridListTile>
            <Card style={{width: "fit-content"}}>
              <CardContent>
                <p>{item}</p>
              </CardContent>
            </Card>
          </GridListTile>
        ))}
      </GridList>
    </div>
  );
};

export default CardList;
