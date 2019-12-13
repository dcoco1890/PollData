import { useState, useEffect } from "react";
import Layout from "../comps/Layout";
import Section from "../comps/Section";
import Question from "../comps/Question";
import Inform from "../comps/Inform";
import API from "../utils/API";

const choices = ["Red", "Green", "Blue", "Yellow", "Clear"];
const question = "What is your favorite color?";

const Index = () => {
  const [data, setData] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      const resp = await API.getPollData();

      setData(resp.data);
    };
    fetchData();
  }, []);
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
        <Inform choices={choices} stats={choices} />
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
};

export default Index;
