import React, { useState , useEffect } from "react";
import {
  Card,
  CardContent,
  Typography,
  GridList,
  GridListTile,
  CardMedia
} from "@material-ui/core";

const InfoCard = (props) => {

    const resource = props.resource;
    console.log(resource);
    
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
        <GridListTile>
            <Card>
                <CardContent>
                <Typography variant="h5"> {resource.title} </Typography>
                <CardMedia
                    src={resource.image}
                    title="Resource Image"
                />
                <Typography> {resource.content} </Typography>
                </CardContent>
            </Card>
        </GridListTile>
    );
};

export default InfoCard;
