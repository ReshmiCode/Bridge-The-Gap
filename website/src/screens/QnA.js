import React, { useState, useEffect } from "react";
import {
  Card,
  CardContent,
  Typography,
  GridList,
  GridListTile,
  Button,
} from "@material-ui/core";
import SearchBar from "search-bar-react";
import backdrop from "../assets/gorls.png";
import NavBar from "../components/NavBar";
const axios = require("axios").default;

const direction = {
  flexDirection: "row",
};
const size = {
  margin: 40,
  backgroundColor: "#ffa899",
};
const gridList = {};

function QnA() {
  const [cat, setCat] = useState("General");
  let [questions, setQuestions] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const getResources = await axios(
        `https://mlh-bridge-the-gap.wl.r.appspot.com/api/v1/questions`
      );
      setQuestions(getResources.data.data);
    }
    fetchData();
  }, []);

  const renderQuestions = () => {
    let reduced = questions.filter((val) => val.tags.includes(cat));
    return reduced.map((ques) => {
      return (
        <GridListTile style={{ width: "30%", height: null }}>
          <Card>
            <CardContent>
              <h5>{ques.question}</h5>
              <Typography>{ques.answer}</Typography>
            </CardContent>
          </Card>
        </GridListTile>
      );
    });
  };

  return (
    <div className="App">
      <NavBar />
      <h2>Frequently Asked Questions</h2>
      <SearchBar size="large" width="100%" autoFocus placeholder="Search..." />

      <div style={direction}>
        <Button
          variant="contained"
          onClick={() => setCat("General")}
          style={size}
        >
          General
        </Button>
        <Button
          variant="contained"
          onClick={() => setCat("Opportunity")}
          style={size}
        >
          Opportunity
        </Button>
        <Button
          variant="contained"
          onClick={() => setCat("Community")}
          style={size}
        >
          Community
        </Button>
      </div>
      <GridList
        style={{
          width: "100%",
          alignItems: "center",
          justifyContent: "space-around",
        }}
      >
        {questions && renderQuestions()}
      </GridList>
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
export default QnA;
