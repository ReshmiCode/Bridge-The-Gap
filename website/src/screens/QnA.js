import React from "react";
import Button from '@material-ui/core/Button';

const direction = {
  flexdirection: "row"
};
const size = {
  margin: 40
};

function QnA() {
  return (
    <div className="App">
      <h2> Q+A </h2>
      <p>Frequently Asked Questions</p>

      <p>Search</p>      
      
      <div style={direction}>
      <Button variant="contained" color="#C4C4C4" disableElevation style={size}>
        General
      </Button>
      <Button variant="contained" color="#C4C4C4" disableElevation style={size}>
        Opportunity
      </Button>
      <Button variant="contained" color="#C4C4C4" disableElevation style={size}>
        Community
      </Button>
      </div>    

      <p>Can't find your question? No Problem!</p>  
      <h5>Type your question here!</h5>

    </div>
  );
}
export default QnA;
