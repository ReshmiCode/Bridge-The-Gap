import React, { useState, useEffect } from "react";
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
import { Link } from "react-router-dom";
import InfoIcon from "@material-ui/icons/Info";
import backdrop from "../assets/gorls.png";
import NavBar from "../components/NavBar";
const axios = require("axios").default;

function Feed() {
  let [info, setInfo] = useState([]);
  const [userName, setUserName] = useState(null);

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

  async function getUserName(userID) {
    const result = await axios(
      `https://mlh-bridge-the-gap.wl.r.appspot.com/api/v1/users/${userID}`
    );
    console.log("User", result.data.data[0].userName)
    setUserName(result.data.data[0].userName);
    return result.data.data[0].userName;
  }

  return (
    <div className="App">
      <NavBar />
      <h2> See What Other Women Have Achieved! </h2>
      <div style={flexContainer}>
        <GridList style={{ width: "100%" }}>
          {info.map((post) => (
            <GridListTile style={{ width: "20%" }}>
              <Card style={{ height: 200 }}>
                <p>{post.title}</p>
                {post.content ? (
                  <CardContent>
                    <Typography>{post.content}</Typography>
                  </CardContent>
                ) : (
                  <CardMedia image={post.image} style={{ height: 200 }} />
                )}
              </Card>
              <Link to={`user/${post.user}`}>
                <GridListTileBar
                  //title={post.user}
                  title="User"
                  actionIcon={
                    <IconButton>
                      <InfoIcon />
                    </IconButton>
                  }
                />
              </Link>
            </GridListTile>
          ))}
        </GridList>
      </div>
      <img
        src={backdrop}
        alt="Women in  Tech"
        resizeMode={"cover"}
        style={{ width: "100%", paddingTop: 20 }}
        source={{ backdrop }}
      />
    </div>
  );
}

export default Feed;
