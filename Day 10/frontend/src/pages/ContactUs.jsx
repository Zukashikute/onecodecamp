import ContactForm from "../components/ContactForm";
import { Container } from "react-bootstrap";
import AddressInfo from "../components/AddressInfo";

const ContactUs = () => {
  return (
    <Container>
      <h2>Contact Us</h2>
      <div className="row">
        <div className="col-6">
          <ContactForm />
        </div>

        <div className="col-6">
          <AddressInfo />
        </div>
      </div>
    </Container>
  );
};

export default ContactUs;
