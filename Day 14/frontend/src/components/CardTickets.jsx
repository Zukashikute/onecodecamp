/* eslint-disable react/prop-types */
import { Button, Card } from "react-bootstrap";
import Axios from "axios";

const CardTickets = ({ ...props }) => {
  const handleDelete = async () => {
    try {
      const result = await Axios.delete(
        "http://localhost:4000/api/tickets/:id"
      );
      setShowDisplayMsg(true);
      setDisplayMessage("Task deleted successfully");
      console.log(result);
    } catch (error) {
      setShowDisplayMsg(true);
      setDisplayMessage("Error: Error creating ticket");
      console.log("Error a creating ticket: ", error.message);
    }
  };

  return (
    <Card className="w-100" style={{ maxWidth: "230px", minWidth: "230px" }}>
      <Card.Img
        variant="top"
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/Placeholder_view_vector.svg/2560px-Placeholder_view_vector.svg.png"
        className="w-100"
        style={{ maxWidth: "230px" }}
      />
      <Card.Body>
        <Card.Title>{props.title}</Card.Title>
        <Card.Text>{props.desc}</Card.Text>
        <Card.Text className="m-1">Difficulty: {props.priority}</Card.Text>
        <Card.Text className="m-1">Reporter: {props.reporter}</Card.Text>
      </Card.Body>
      <Card.Footer className="d-flex justify-content-between">
        <Button variant="warning">Edit</Button>
        <Button variant="danger">Delete</Button>
      </Card.Footer>
    </Card>
  );
};

export default CardTickets;
