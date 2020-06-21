import React, { useState, useEffect } from "react";
import {
  Card,
  CardContent,
  Typography,
  GridList,
  GridListTile,
} from "@material-ui/core";
import InfoCard from "./InfoCard";
const axios = require("axios").default;

const OpportunityList = (props) => {
  let [resources, setResources] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const getResources = await axios(
        `https://mlh-bridge-the-gap.wl.r.appspot.com/api/v1/resources/category/${props.category}`
      );
      setResources(getResources.data.data.reverse());
    }
    fetchData();
  }, []);

  const flexContainer = {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-around",
    overflow: "hidden",
  };
  const gridList = {
    flexWrap: "wrap",
    transform: "translateZ(0)",
    justifyContent: "space-around",
  };

  return (
    <div style={flexContainer}>
      <GridList style={gridList}>
        {resources.map(function (resource, i) {
          return <InfoCard resource={resource} />;
        })}
      </GridList>
    </div>
  );
};

export default OpportunityList;
