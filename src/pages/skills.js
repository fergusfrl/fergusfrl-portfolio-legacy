import React from "react"

import { HorizontalBar } from 'react-chartjs-2';

import Layout from "../components/layout"
import SEO from "../components/seo"
import Quotation from "../components/quotation/Quotation";

import Sync from '@material-ui/icons/Sync';
import Face from '@material-ui/icons/Face';
import Widgets from '@material-ui/icons/Widgets';
import Web from '@material-ui/icons/Web';

const icons = [
  { icon: <Sync style={{ fontSize: '100px', margin: '0 auto' }} />, name: "Applied Agile Practices" },
  { icon: <Face style={{ fontSize: '100px', margin: '0 auto' }} />, name: "User Driver Design" },
  { icon: <Widgets style={{ fontSize: '100px', margin: '0 auto' }} />, name: "Technical Architecture" },
  { icon: <Web style={{ fontSize: '100px', margin: '0 auto' }} />, name: "Intuitive Interfaces" }
];

const data = {
  labels: ['Javascript', 'Java', 'Python', 'Node.js', 'React', 'SQL', 'NoSQL'],
  datasets: [
    {
      backgroundColor: '#fe5000',
      data: [90, 70, 60, 80, 90, 60, 70, 80]
    }
  ]
};

const options = { 
  legend: {
    display: false
  },
  tooltips: {
    enabled: false
  },
  scales: {
    xAxes: [{
      ticks: {
        min: 0,
        max: 100,
        startAtZero: true
      }
    }],
    yAxes: [{
      barThickness: 20,
      ticks: {
        lineHeight: 25
      }
    }]
  }
};

const Skills = ({ location }) => (
  <Layout pathname={location.pathname}>
    <SEO title="Skills" />
    <Quotation
      quote="Ignorance is the curse of God; <span>knowledge</span> is the wing wherewith we fly to heaven."
      author="William Shakespeare"
      authorTitle="playwright"
    />
    <div className="row">
      {
        icons.map((icon, index) => (
          <div key={index} className="col" style={{
            textAlign: 'center',
            marginBottom: '6em'
          }}>
            <div className="row" style={{
              color: '#68777d',
            }}>
              { icon.icon }
            </div>
            <div className="row">
              <p style={{ margin: '0 auto', color: '#68777d', fontFamily: 'Work Sans,sans-serif', paddingTop: '1em' }}>{ icon.name }</p>
            </div>
          </div>)
        )
      }
    </div>
    <HorizontalBar
      data={data}
      options={options}
    />
    <br/><br/>
  </Layout>
);

export default Skills;