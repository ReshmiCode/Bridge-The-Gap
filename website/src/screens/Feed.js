import React from "react";
import {
  Card,
  CardContent,
  Typography,
  GridList,
  GridListTile,
  GridListTileBar,
  IconButton,
} from "@material-ui/core";
import InfoIcon from "@material-ui/icons/Info";

function Feed() {
  const flexContainer = {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-around",
    overflow: "hidden",
  };
  const tileData = [
    {
      image: "https://www.marlerblog.com/files/2013/03/orange.jpg",
      author: "Medha Notepad Jonnada",
      title: "my fav!!",
      content: "zoo wee mama",
    },
    {
      image: "https://www.marlerblog.com/files/2013/03/orange.jpg",
      author: "Medha Notepad Jonnada",
      title: "my fav!!",
    },
    {
      image: "https://www.marlerblog.com/files/2013/03/orange.jpg",
      author: "Medha Notepad Jonnada",
      title: "my fav!!",
      content: "zoo wee mama",
    },
    {
      image: "https://www.marlerblog.com/files/2013/03/orange.jpg",
      author: "Medha Notepad Jonnada",
      title: "my fav!!",
    },
    {
      image: "https://www.marlerblog.com/files/2013/03/orange.jpg",
      author: "Medha Notepad Jonnada",
      title: "my fav!!",
    },
    {
      image: "https://www.marlerblog.com/files/2013/03/orange.jpg",
      author: "Medha Notepad Jonnada",
      title: "my fav!!",
      content: "zoo wee mama",
    },
    {
      image: "https://www.marlerblog.com/files/2013/03/orange.jpg",
      author: "Medha Notepad Jonnada",
      title: "my fav!!",
    },
  ];

  return (
    <div className="App">
      <h2> See What Other Women Have Achieved! </h2>
      <div style={flexContainer}>
        <GridList>
          {tileData.map((tile) => (
            <GridListTile style={{ height: null, width: "25%" }}>
              <Card>
                <CardContent>
                  <Typography>{tile.title}</Typography>
                </CardContent>
              </Card>
            </GridListTile>
          ))}
        </GridList>
      </div>
    </div>
  );
}

export default Feed;
