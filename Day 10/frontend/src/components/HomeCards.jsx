/* eslint-disable react/prop-types */
import { Container } from "react-bootstrap";

const HomeCards = (props) => {
  const { title, img, desc } = props;
  
  return (
    <Container>
      <div className="row">
        <div className="col-6">
          <div style={{ maxWidth: "600px" }}>
            <img src={img} alt="" className="w-100" />
          </div>
        </div>

        <div className="col-6 d-flex align-items-center">
          <div>
            <h1>{title}</h1>
            <p>{desc}</p>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default HomeCards;
