import React from "react";
import Button from "@material-ui/core/Button";
import SearchBar from "search-bar-react";

const direction = {
  flexdirection: "row",
};
const size = {
  margin: 40,
  backgroundColor: "#ffa899",
};

function QnA() {
  return (
    <div className="App">
      <h2>Frequently Asked Questions</h2>
      <SearchBar
        onChange={(text) => console.log(text)}
        onFocus={() => console.log("focused")}
        size="large"
        width="100%"
        autoFocus
        placeholder="Search..."
        onClear={() => console.log("closed")}
      />

      <div style={direction}>
        <Button variant="contained" style={size}>
          General
        </Button>
        <Button variant="contained" style={size}>
          Opportunity
        </Button>
        <Button variant="contained" style={size}>
          Community
        </Button>
      </div>
    </div>
  );
}
export default QnA;
