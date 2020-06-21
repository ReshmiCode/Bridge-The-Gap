import React from "react";
import { Card, CardContent, Typography, GridListTile } from "@material-ui/core";

const InfoCard = (props) => {
  const resource = props.resource;
  console.log(resource);

  const flexContainer = {
    display: "noflex",
    flexWrap: "nowrap",
    justifyContent: "space-around",
    overflow: "hidden",
  };

  const gridList = {
    flexWrap: "nowrap",
    transform: "translateZ(0)",
    height: null,
    width: "100%",
  };

  const card = {
    borderRadius: 20,
    margin: 10,
    boxShadow: 3,
  };

  return (
    <div style={flexContainer}>
      <GridListTile style={gridList}>
        <Card style={card}>
          <CardContent>
            <Typography variant="h5"> {resource.title} </Typography>
            {resource.image ? (
              <img src={resource.image} />
            ) : (
              <img src="https://image.shutterstock.com/image-photo/two-small-rabbits-isolated-on-260nw-795213922.jpg" />
            )}
            <Typography> {resource.content} </Typography>
            {resource.link && (
              <button
                style={{
                  padding: 10,
                  borderRadius: 15,
                  backgroundColor: "#ffa090",
                  border: "none",
                }}
              >
                <a
                  href={resource.link}
                  target="_blank"
                  style={{ textDecoration: "none", color: "black" }}
                >
                  Learn More
                </a>
              </button>
            )}
          </CardContent>
        </Card>
      </GridListTile>
    </div>
  );
};

export default InfoCard;
