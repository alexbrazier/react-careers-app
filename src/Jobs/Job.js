import React from "react";
import PropTypes from "prop-types";
import {FormGroup, ControlLabel, FormControl, Panel} from "react-bootstrap";
import "./Job.css";

const Job = ({ number }) => (
  <Panel className="Panel">
    <Panel.Body>
      <FormGroup>
        <h2>Job {number}</h2>
        <ControlLabel>What is your occupation?</ControlLabel>
        <FormControl
          componentClass="select"
          placeholder="select"
          defaultValue="select"
        >
          <option disabled value="select">select</option>
          <option value="design">Designer</option>
          <option value="software">Software Engineer</option>
        </FormControl>
        <ControlLabel>Company name</ControlLabel>
        <FormControl
          type="text"
          placeholder="Enter company name"
        />
        <ControlLabel>Income</ControlLabel>
        <FormControl
          type="text"
          placeholder="Enter amount"
        />
      </FormGroup>
    </Panel.Body>
  </Panel>
);

Job.propTypes = {
  number: PropTypes.number.isRequired
};

export default Job;
