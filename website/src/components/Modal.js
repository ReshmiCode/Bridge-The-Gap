import React, { useState, useEffect } from "react";
import { Button, Modal } from 'react-bootstrap';
let GLOBAL = require("../global");
const axios = require("axios").default;

function ModalButton() {
    const [show, setShow] = useState(false);
    
    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const handleTitleChange = (event) => {
        setTitle(event.target.title);
    }

    const handleContentChange = (event) => {
        setContent(event.target.content);
    }

    const handleSubmit = (event) => {
        const newPost = {
            user: GLOBAL.googleID,
            title: "title",
            category: "test",
            content: "content",
        };

        axios
        .post(
          "https://mlh-bridge-the-gap.wl.r.appspot.com/api/v1/posts",
          newPost
        )
        .then(function (response) {
          console.log(response);
        })
        .catch(function (error) {
          console.log(error);
        });

        event.preventDefault();
    }
  
    return (
      <>
        <Button variant="primary" onClick={handleShow}>
          Add Post
        </Button>
  
        <Modal show={show} onHide={handleClose}>
          <Modal.Header>
            <Modal.Title>Add Post</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <form onSubmit={handleSubmit}>
                <label>
                    Title:
                    <input type="text" name="title" value={title} onChange={handleTitleChange}/>
                </label>
                <label>
                    Description:
                    <input type="text" name="content" value={content} onChange={handleContentChange}/>
                </label>
                <input type="submit" value="Submit" />
            </form>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
            <Button variant="primary" onClick={handleClose}>
              Save Changes
            </Button>
          </Modal.Footer>
        </Modal>
      </>
    );
  }

  export default ModalButton;