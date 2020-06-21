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
const axios = require("axios").default;

const direction = {
  flexdirection: "row",
};
const size = {
  margin: 40,
  backgroundColor: "#ffa899",
};

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
              <Typography>{ques.question}</Typography>
              <Typography>{ques.answer}</Typography>
            </CardContent>
          </Card>
        </GridListTile>
      );
    });
  };

  return (
    <div className="App">
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
      <GridList style={{ width: "100%" }}>
        {questions && renderQuestions()}
      </GridList>
    </div>
  );
}
export default QnA;
