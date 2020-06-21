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
                    {
                        resource.image ? 
                        <img src={resource.image} />:
                        <img src="https://image.shutterstock.com/image-photo/two-small-rabbits-isolated-on-260nw-795213922.jpg" />
                    }
                    <Typography> {resource.content} </Typography>
                    {
                        resource.link && 
                        <button>
                            <a  href={resource.link} target="_blank">Know More</a>
                        </button>
                    }
                </CardContent>
            </Card>
        </GridListTile>
    );
};

export default InfoCard;
