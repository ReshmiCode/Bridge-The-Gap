import React, { useState , useEffect} from "react";
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
const axios = require("axios").default;

function Feed() {
  let [info, setInfo] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const result = await axios(
        `https://mlh-bridge-the-gap.wl.r.appspot.com/api/v1/posts`
      );
      console.log("All posts", result.data.data);
      setInfo(result.data.data);
    }
    fetchData();
  }, []);

  const flexContainer = {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-around",
    overflow: "hidden",
    width: "100%",
  };

  return (
    <div className="App">
      <h2> See What Other Women Have Achieved! </h2>
      <div style={flexContainer}>
        <GridList style={{ width: "100%" }}>
          {info.map((post) => (
            <GridListTile style={{ width: "20%" }}>
              <Card style={{ height: 200 }}>
                {post.content ? (
                  <CardContent>
                    <Typography>{post.content}</Typography>
                  </CardContent>
                ) : (
                  <CardMedia image={post.image} style={{ height: 200 }} />
                )}
              </Card>
              <GridListTileBar
                title={post.title}
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
