import React from "react";
import {FormGroup, ControlLabel, FormControl, Panel} from "react-bootstrap";
import "./Job.css";

const NoJob = () => (
  <Panel className="Panel">
    <Panel.Body>
      <FormGroup>
        <ControlLabel>What is your current status?</ControlLabel>
        <FormControl
          componentClass="select"
          placeholder="select"
          defaultValue="select"
        >
          <option disabled value="select">select</option>
          <option value="unemployed">Unemployed</option>
          <option value="other">Other</option>
        </FormControl>
      </FormGroup>
    </Panel.Body>
  </Panel>
);

export default NoJob;
