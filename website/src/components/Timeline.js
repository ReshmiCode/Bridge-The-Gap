import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import { Create } from "@material-ui/icons";
import "react-vertical-timeline-component/style.min.css";

const Timeline = () => {
  return (
    <VerticalTimeline>
      <VerticalTimelineElement
        contentStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
        contentArrowStyle={{ borderRight: "7px solid  rgb(33, 150, 243)" }}
        date="2011 - present"
        iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
        icon={<Create />}
      >
        <h4 className="vertical-timeline-element-subtitle">Project</h4>
        <p>
          Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
          commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus
          et magnis dis parturient montes, nascetur ridiculus mus. Donec quam
          felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla
          consequat massa quis enim. Donec pede justo, fringilla vel, aliquet
          nec, vulputate eget, arcu.
        </p>
      </VerticalTimelineElement>
      <VerticalTimelineElement
        date="2010 - 2011"
        iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
        icon={<Create />}
      >
        <h4 className="vertical-timeline-element-subtitle">Lead Team</h4>
        <p>
          Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
          commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus
          et magnis dis parturient montes, nascetur ridiculus mus. Donec quam
          felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla
          consequat massa quis enim. Donec pede justo, fringilla vel, aliquet
          nec, vulputate eget, arcu.
        </p>
      </VerticalTimelineElement>
    </VerticalTimeline>
  );
};

export default Timeline;
