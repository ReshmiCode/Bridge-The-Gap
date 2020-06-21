import React, { useState } from "react";
import { Modal } from "react-bootstrap";
import { Button } from "@material-ui/core";
let GLOBAL = require("../global");
const axios = require("axios").default;

function ModalButton() {
  const [show, setShow] = useState(false);

  const [postTitle, setTitle] = useState("");
  const [postContent, setContent] = useState("");

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleTitleChange = (event) => {
    setTitle(event.target.value);
  };

  const handleContentChange = (event) => {
    setContent(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const newPost = {
      user: GLOBAL.googleID,
      title: postTitle,
      category: "test",
      content: postContent,
    };

    console.log(newPost);

    axios
      .post("https://mlh-bridge-the-gap.wl.r.appspot.com/api/v1/posts", newPost)
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  return (
    <>
      <Button onClick={handleShow}>Add Post</Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header>
          <Modal.Title>Add Post</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form onSubmit={handleSubmit}>
            <label>
              Title:
              <input
                type="text"
                name="title"
                value={postTitle}
                onChange={handleTitleChange}
              />
            </label>
            <label>
              Description:
              <input
                type="text"
                name="content"
                value={postContent}
                onChange={handleContentChange}
              />
            </label>
            <input type="submit" value="Submit" />
          </form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default ModalButton;
