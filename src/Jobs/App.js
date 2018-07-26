import React, {Component} from "react"
import {Button, ButtonGroup, Panel, ControlLabel, ButtonToolbar} from "react-bootstrap"
import Job from "./Job";
import NoJob from "./NoJob";

export default class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      jobCount: 0
    }
  }

  handleJobCount(jobCount) {
    this.setState({jobCount})
  }

  render() {
    const {jobCount} = this.state

    return (
      <div>
        <Panel className="Panel">
          <Panel.Body>
            <ControlLabel>How many jobs do you have?</ControlLabel>
            <ButtonToolbar>
              <ButtonGroup>
                <Button onClick={this.handleJobCount.bind(this, 0)} className={jobCount === 0 ? "selected" : null}>0</Button>
                <Button onClick={this.handleJobCount.bind(this, 1)} className={jobCount === 1 ? "selected" : null}>1</Button>
                <Button onClick={this.handleJobCount.bind(this, 2)} className={jobCount === 2 ? "selected" : null}>2</Button>
                <Button onClick={this.handleJobCount.bind(this, 3)} className={jobCount === 3 ? "selected" : null}>3</Button>
              </ButtonGroup>
            </ButtonToolbar>
          </Panel.Body>
        </Panel>
        {this.state.jobCount === 0 ?
          <NoJob />
          :
          Array.from(Array(this.state.jobCount)).map((_, i) => <Job key={i} number={i+1} />)
        }
      </div>
    )
  }
}
