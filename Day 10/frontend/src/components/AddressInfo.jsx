import { Card } from "react-bootstrap";

const AddressInfo = () => {

  

  return (
    <Card>
      <Card.Body>
        <Card.Title>Address</Card.Title>
        <div>
          <div>
            <p className="mb-1">info@onecodecamp.com</p>
          </div>
          <hr className="my-2" />
          <div>
            <p className="mb-1">+61414214845</p>
          </div>
          <hr className="my-2" />
          <div>
            <p className="mb-1">www.onecodecamp.com</p>
          </div>
        </div>
        <div className="mt-3 mx-auto" style={{ width: "max-content" }}>
          <iframe
            style={{ height: "300px" }}
            loading="lazy"
            src="https://maps.google.com/maps?q=Sydney&amp;t=m&amp;z=10&amp;output=embed&amp;iwloc=near"
            title="Sydney"
            aria-label="Sydney"
          ></iframe>
        </div>
      </Card.Body>
    </Card>
  );
};

export default AddressInfo;
