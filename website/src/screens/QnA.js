import React from "react";
import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';

function QnA() {
  return (
    <div className="App">
      <h2> Q+A </h2>
      <p>Frequently Asked Questions</p>

      <ButtonGroup size="large" color="#c4c4c4" aria-label="large outlined primary button group">
        <Button>One</Button>
        <Button>Two</Button>
        <Button>Three</Button>
      </ButtonGroup>

      <body>
        <form>
          <button name = "button" value = "Ok" type = "button">Click Me</button>
        </form>
      </body>


    </div>
  );
}
export default QnA;
