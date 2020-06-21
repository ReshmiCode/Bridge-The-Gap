import React, { useState , useEffect } from "react";
import {
  Card,
  CardContent,
  Typography,
  GridList,
  GridListTile,
} from "@material-ui/core";

const InfoCard = (props) => {

    const resource = props.resource;
    
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
        <GridListTile style={{ height: null }}>
            <Card>
                <CardContent>
                    <Typography> {resource.content} </Typography>
                </CardContent>
            </Card>
        </GridListTile>
    );
};

export default InfoCard;
