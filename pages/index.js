import React, { Component } from "react";
import Layout from "../comps/Layout";
import Section from "../comps/Section";
import Question from "../comps/Question";
import Inform from "../comps/Inform";

import fetch from "isomorphic-unfetch";

import Pusher from "pusher-js";

class Index extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      answers: {}
    };
  }

  static async getInitialProps(ctx) {
    const res = await fetch("https://polldata.dcoco91.now.sh/api/answers");
    const json = await res.json();
    return { json };
  }

  componentDidMount() {
    this.pusher = new Pusher("8cece438a57bacfb0865", {
      cluster: "mt1",
      encrypted: true
    });
    this.channel = this.pusher.subscribe("poll-board");
    this.channel.bind("new-answer", ({ choice, count }) => {
      let { answers } = this.state;
      answers = { ...answers, [choice]: count };
      console.log(answers);
      this.setState({ answers });
    });
    this.setState({
      answers: this.props.json
    });
  }
  //   componentDidMount() {
  //   this.pusher = new Pusher("8cece438a57bacfb0865", {
  //     cluster: "mt1",
  //     encrypted: true
  //   });
  //   this.channel = this.pusher.subscribe("poll-board");
  // this.channel.bind("new-answer", ({ choice, count }) => {
  //   let { answers } = this.state;
  //   answers = { ...answers, [choice]: count };
  //   this.setState({ answers });
  // });
  // this.pusher.connection.bind("connected", () => {
  //   API.getPollData().then(response => {
  //     console.log(response.data);
  //     const answers = response.data.answers;
  //     this.setState({ answers });
  //   });
  // });
  //   }

  componentWillUnmount() {
    this.pusher.disconnect();
  }

  render() {
    const choices = ["Red", "Green", "Blue", "Yellow", "Clear"];
    const question = "What is your favorite color?";
    return (
      <Layout>
        <Section col={"7"} uno={true}>
          <span
            className="d-block w-100 h5 text-uppercase text-primary font-weight-bold mb-4"
            style={{ marginTop: -50 }}
          >
            Poll for the Day
          </span>
          <Question question={question} answers={choices} />
        </Section>
        <Section col={"5"}>
          <Inform choices={choices} stats={this.state.answers} />
        </Section>
        <style global jsx>{`
          .custom-control-label {
            background: transparent;
            color: #aaa;
            font-size: 2rem;
            font-weight: 300;
            cursor: pointer;
            line-height: 2rem;
          }

          .custom-control-label:before,
          .custom-control-label:after {
            top: 0;
            left: -10px;
            height: 2.25rem;
            width: 2.25rem;
            cursor: pointer;
            box-shadow: none !important;
          }

          .custom-control-label.checked {
            color: #5091a8 !important;
          }

          button.btn {
            letter-spacing: 0.15rem;
            font-size: 1rem;
            font-weight: 600;
            width: 100%;
          }
        `}</style>
      </Layout>
    );
  }
}

export default Index;
