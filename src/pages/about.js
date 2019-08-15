import React from "react";
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';

// Components
import Layout from "../components/layout";
import SEO from "../components/seo";
import Quotation from "../components/quotation/Quotation";

const WORK_TYPE = {
  VOLUNTEER: 'volunteer',
  PROFESTIONAL: 'professional',
  STUDENT: 'student'
}

const HISTORY = [
  { 
    role: "Club Leader",
    institution: "Code Club Aotearoa",
    date: "2018 - Pressent",
    description: "Teaching primary aged kids to code. It's a heap of fun and I am blown away by what these kids can do. In 20 years they'll be running me out of a job :)",
    type: WORK_TYPE.VOLUNTEER
  },
  { 
    role: "Software Developer",
    institution: "Orion Health",
    date: "2017 - Pressent",
    description: "Creating profession health software for acute use cases. We apply agile techniques and user driven design to create products that solve real world problems.",
    type: WORK_TYPE.PROFESTIONAL
  },
  { 
    role: "Buniness Intellegence Developer",
    institution: "TracMap",
    date: "2016 - 2017",
    description: "I designed and created dashboards for farmers and machine operators to view. The dashboard displayed telemetric data of farm operations in an easy to understand graphs and KPIs.",
    type: WORK_TYPE.PROFESTIONAL
  },
  { 
    role: "Computer Science",
    institution: "University of Otago",
    date: "2016 - 2017",
    description: "I accidentally discoverd CS during my geology degree and enjoyed it so much I decided to go back to university and study it. It's safe to say that this passion has continued into my professional life.",
    type: WORK_TYPE.STUDENT
  },
  { 
    role: "Geology",
    institution: "University of Otago",
    date: "2012 - 2015",
    description: "Geology Rocks! I love environmental science and getting into the outdoors. My favourite part of this degree was the number of field mapping exercises we got to do.",
    type: WORK_TYPE.STUDENT
  },
];

const calculateStyle = (workType) => {
  switch(workType) {
    case WORK_TYPE.VOLUNTEER:
      return {
        icon: "",
        color: "#339933"
      };
    case WORK_TYPE.PROFESTIONAL:
      return {
        icon: "",
        color: "#fe5000"
      };
    default:
      return {
        icon: "",
        color: "#00aefe"
      };
  };
};

const About = ({ location }) => (
  <Layout pathname={location.pathname}>
    <SEO title="About" />
    <Quotation
      quote="All that is gold does not glitter, not all those who <span>wander</span> are lost."
      author="J.R.R. Tolkien"
      authorTitle="author"
    />
    <div>
      <VerticalTimeline className="vert-timeline">
        { HISTORY.map((event, index) => {
          const { color } = calculateStyle(event.type);
          return (
            <VerticalTimelineElement
              key={index}
              className="vert-timeline-element"
              position={index % 2 ? "right" : "left"}
              date={event.date}
              iconStyle={{ background: color }}
            >
              <h2>{event.role}</h2>
              <p>{event.institution}</p>
              <p>{event.description}</p>
            </VerticalTimelineElement>
          )
        }) }
      </VerticalTimeline>
    </div>
  </Layout>
);

export default About;