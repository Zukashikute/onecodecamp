import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Card, Button, Form, Modal, FloatingLabel } from "react-bootstrap";

const ContactForm = () => {
  const navigate = useNavigate();
  const [message, setMessage] = useState({
    name: "",
    emailAdd: "",
    subject: "",
    message: "",
  });

  const [isSending, setIsSending] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    setIsSending(true);
  };

  const handleClose = () => {
    setIsSending(false);
  };

  console.log(message);

  return (
    <Card className="p-3 h-100">
      <Card.Title>Message</Card.Title>
      <Form className="mb-3" onSubmit={handleSubmit}>
        <FloatingLabel controlId="formEmail" label="Name" className="mb-2">
          <Form.Control
            type="text"
            placeholder="John Doe"
            value={message.name}
            onChange={(e) => setMessage({ ...message, name: e.target.value })}
            required
          />
        </FloatingLabel>

        <FloatingLabel
          controlId="formAddress"
          label="Email Address"
          className="mb-2"
        >
          <Form.Control
            type="email"
            placeholder="sample@mail.com"
            value={message.emailAdd}
            onChange={(e) =>
              setMessage({ ...message, emailAdd: e.target.value })
            }
            required
          />
        </FloatingLabel>

        <FloatingLabel controlId="formSubject" label="Subject" className="mb-2">
          <Form.Control
            type="text"
            placeholder="Subject"
            value={message.subject}
            onChange={(e) =>
              setMessage({ ...message, subject: e.target.value })
            }
            required
          />
        </FloatingLabel>

        <FloatingLabel controlId="formMessage" label="Message" className="mb-2">
          <Form.Control
            as="textarea"
            placeholder="Leave a comment here"
            style={{ height: "100px" }}
          />
        </FloatingLabel>

        <Button type="submit" className="mt-3">
          Submit
        </Button>
      </Form>

      <Modal show={isSending} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Thanks you for contacting us!</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>
            Your message has been sent! While waiting to get back to you, feel
            free to check us out!
          </p>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Ok
          </Button>
          <Button variant="secondary" onClick={() => navigate("/about")}>
            Check us out
            <ion-icon name="arrow-forward-circle-outline"></ion-icon>
          </Button>
        </Modal.Footer>
      </Modal>
    </Card>
  );
};

export default ContactForm;
