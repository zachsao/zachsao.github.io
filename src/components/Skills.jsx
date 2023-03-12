import React, { Component } from "react";
import { Accordion } from "react-bootstrap";
import skills from "../data/skills.json";

class Skills extends Component {
  render() {
    return (
      <>
        <Accordion>
          {skills.map((skill, index) => (
            <SkillSection skill={skill} index={index} />
          ))}
        </Accordion>
      </>
    );
  }
}

class SkillSection extends Component {
  render() {
    const subskills = this.props.skill.subskills.map((subskill) => (
      <li>{subskill}</li>
    ));
    return (
      <>
        <Accordion.Item eventKey={this.props.index}>
          <Accordion.Header>{this.props.skill.title}</Accordion.Header>
          <Accordion.Body>
            <ul>{subskills}</ul>
          </Accordion.Body>
        </Accordion.Item>
      </>
    );
  }
}

export default Skills;
