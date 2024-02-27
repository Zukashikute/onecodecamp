/* eslint-disable react/no-unescaped-entities */
import {
  Container,
  Button,
  Alert,
  Breadcrumb,
  Card,
  Form,
  Row,
  Col,
} from "react-bootstrap";

const ReactBootstrap = () => {
  return (
    <Container
      sx={{ display: "flex", justifyContent: "center", placeItems: "center" }}
    >
      <Form className="mb-3">
        <Row>
          <Col md>
            <Form.Group controlId="formEmail">
              <Form.Label>Email Address</Form.Label>
              <Form.Control type="email" placeholder="sample@mail.com" />
              <Form.Text className="text-muted">
                We'll never share your email address.
              </Form.Text>
            </Form.Group>
          </Col>
          <Col md>
            <Form.Group controlId="formPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" placeholder="Password" />
            </Form.Group>
          </Col>
        </Row>

        <Button type="submit" className="mt-3">
          Login
        </Button>
      </Form>
      <Card className="mb-3 mw-100 m-auto">
        <Card.Img src="https://picsum.photos/seed/picsum/500/300" alt="" />
        <Card.Body>
          <Card.Title>Card Example</Card.Title>
          <Card.Text>This is an example of react bootstrap cards.</Card.Text>
          <Button variant="primary">Read more</Button>
        </Card.Body>
      </Card>
      <Breadcrumb>
        <Breadcrumb.Item>Test1</Breadcrumb.Item>
        <Breadcrumb.Item>Test2</Breadcrumb.Item>
        <Breadcrumb.Item>Test3</Breadcrumb.Item>
      </Breadcrumb>
      <Alert variant="primary">This is a button!</Alert>
      <Button>Test Button</Button>
    </Container>
  );
};

export default ReactBootstrap;
