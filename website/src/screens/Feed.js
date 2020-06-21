import React from "react";
import {
  Card,
  CardContent,
  CardMedia,
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
    width: "100%",
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
        <GridList style={{ width: "100%" }}>
          {tileData.map((tile) => (
            <GridListTile style={{ width: "20%" }}>
              <Card style={{ height: 200 }}>
                {tile.content ? (
                  <CardContent>
                    <Typography>{tile.content}</Typography>
                  </CardContent>
                ) : (
                  <CardMedia image={tile.image} style={{ height: 200 }} />
                )}
              </Card>
              <GridListTileBar
                title={tile.title}
                subtitle={<span>by: {tile.author}</span>}
                actionIcon={
                  <IconButton>
                    <InfoIcon />
                  </IconButton>
                }
              />
            </GridListTile>
          ))}
        </GridList>
      </div>
    </div>
  );
}

export default Feed;
