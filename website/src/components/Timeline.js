import React, { useState , useEffect} from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import { Create } from "@material-ui/icons";
import "react-vertical-timeline-component/style.min.css";
import TimelineCard from "./TimeLineCard";
const axios = require("axios").default;
let GLOBAL = require("../global");

const Timeline = (props) => {
  let [info, setInfo] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const result = await axios(
        `https://mlh-bridge-the-gap.wl.r.appspot.com/api/v1/users/${props.user}`
      );
      setInfo(result.data.data[0].posts.reverse());
    }
    fetchData();
  }, []);

  return (
    <VerticalTimeline>
      {info.map((post) => (
          <TimelineCard post={post}/>
        ))}
    </VerticalTimeline>
  );
};

export default Timeline;
