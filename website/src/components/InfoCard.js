import React from "react";
import { Card, CardContent, Typography, GridListTile } from "@material-ui/core";

const InfoCard = (props) => {
  const resource = props.resource;
  console.log(resource);

  return (
    <GridListTile style={{ height: null, width: "25%" }}>
      <Card>
        <CardContent>
          <Typography variant="h5"> {resource.title} </Typography>
          {resource.image ? (
            <img src={resource.image} />
          ) : (
            <img src="https://image.shutterstock.com/image-photo/two-small-rabbits-isolated-on-260nw-795213922.jpg" />
          )}
          <Typography> {resource.content} </Typography>
          {resource.link && (
            <button>
              <a href={resource.link} target="_blank">
                Know More
              </a>
            </button>
          )}
        </CardContent>
      </Card>
    </GridListTile>
  );
};

export default InfoCard;
