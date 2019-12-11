const uno =
  "align-items-center align-content-center px-5 border-right border-gray";
const dos =
  "position-relative h-100 align-items-start align-content-between bg-white px-0";

export default props => (
  <section
    className={`col-md-${props.col} d-flex flex-wrap ${props.uno ? uno : dos}`}
  >
    {props.children}
  </section>
);
