import Layout from "../comps/Layout";
import Section from "../comps/Section";
const Index = () => (
  <Layout>
    <Section col={"7"} uno={true}>
      <span
        className="d-block w-100 h5 text-uppercase text-primary font-weight-bold mb-4"
        style={{ marginTop: -50 }}
      >
        Poll for the Day
      </span>
    </Section>
    <Section col={"5"}>
      <h1>HUI</h1>
    </Section>
  </Layout>
);

export default Index;
