import React, { useState , useEffect} from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import { Create } from "@material-ui/icons";
import "react-vertical-timeline-component/style.min.css";
const axios = require("axios").default;

const TimelineCard = (props) => {
  let [info, setInfo] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const result = await axios(
        `https://mlh-bridge-the-gap.wl.r.appspot.com/api/v1/posts/${props.post}`
      );
      console.log("Post data", result.data.data);
      setInfo(result.data.data);
    }
    fetchData();
  }, []);

  return (
      <VerticalTimelineElement
        contentStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
        contentArrowStyle={{ borderRight: "7px solid  rgb(33, 150, 243)" }}
        iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
        icon={<Create />}
      >
        <h4 className="vertical-timeline-element-subtitle">{info.title}</h4>
        <h5>Category: {info.category}</h5>
        <p> {info.content} </p>
      </VerticalTimelineElement>
  );
};

export default TimelineCard;
