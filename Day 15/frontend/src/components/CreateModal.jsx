/* eslint-disable react/prop-types */
import { useState, useEffect } from "react";
import {
  Modal,
  Button,
  Form,
  FloatingLabel,
  Spinner,
  ToastContainer,
  Toast,
  Image,
} from "react-bootstrap";
import Axios from "axios";

const taskLevels = [
  {
    key: "levelHigh",
    label: "High",
    value: "High",
  },
  {
    key: "levelMedium",
    label: "Medium",
    value: "Medium",
  },
  {
    key: "levelLow",
    label: "Low",
    value: "Low",
  },
];

const CreateModal = ({ ...props }) => {
  // Fetch Users from the database
  const [users, setUsers] = useState([]);
  const [loadUsers, setLoadUsers] = useState(true);

  useEffect(() => {
    (async () => {
      const result = await Axios.get("http://localhost:4000/api/users/");
      setUsers(result.data);
      setLoadUsers(false);
    })();
  }, []);

  const [task, setTask] = useState({
    title: "",
    description: "",
    priority: "",
    reporter: "",
  });

  // Form and input fields functions
  const handlePriority = (e) => {
    setTask((prevState) => ({
      ...prevState,
      priority: e.target.value,
    }));
  };

  const handleReporter = (e) => {
    setTask((prevState) => ({
      ...prevState,
      reporter: e.target.value,
    }));
  };

  // Toast function and states
  const [showDisplayMsg, setShowDisplayMsg] = useState(false);
  const [displayMessage, setDisplayMessage] = useState("");
  //   const [loadSubmit, setLoadSubmit] = useState(true);

  const handleCloseMsg = () => {
    setShowDisplayMsg(false);
  };

  // Submit Form
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const result = await Axios.post("http://localhost:4000/api/tickets/", {
        title: task.title,
        description: task.description,
        priority: task.priority,
        reporter: task.reporter,
      });
      setShowDisplayMsg(true);
      setDisplayMessage("Task created successfully");
      setTask({
        title: "",
        description: "",
        priority: "",
        reporter: "",
      });
      console.log(result);
    } catch (error) {
      setShowDisplayMsg(true);
      setDisplayMessage("Error: Error creating ticket");
      console.log("Error a creating ticket: ", error.message);
    }
  };

  return (
    <>
      <Modal show={props.show} onHide={props.onHide}>
        <Form onSubmit={handleSubmit}>
          <Modal.Header closeButton>
            <Modal.Title id="createTask">What will be your task?</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <FloatingLabel controlId="taskTitle" label="Title" className="mb-3">
              <Form.Control
                type="text"
                placeholder="Start a React.js project"
                value={task.title}
                onChange={(e) => setTask({ ...task, title: e.target.value })}
                required
              />
            </FloatingLabel>
            <FloatingLabel
              controlId="taskDescription"
              label="Task Description"
              className="mb-3"
              value={task.description}
              onChange={(e) =>
                setTask({ ...task, description: e.target.value })
              }
            >
              <Form.Control
                as="textarea"
                placeholder="Use vite to start a React.js project for fast and lightweight memory management"
                style={{ height: "100px" }}
              />
            </FloatingLabel>

            <div className="my-3">
              <h5>Priority Level:</h5>
              {taskLevels.map((taskLevel, index) => (
                <Form.Check
                  inline
                  type="radio"
                  id={`level-${index}`}
                  key={taskLevel.key}
                  label={taskLevel.label}
                  value={taskLevel.value}
                  onChange={handlePriority}
                  checked={task.priority === taskLevel.value}
                />
              ))}
            </div>

            {loadUsers ? (
              <Spinner animation="border" variant="info" />
            ) : (
              <div>
                <Form.Label htmlFor="reporterOptions">
                  <h5 className="m-0">Assign to:</h5>
                </Form.Label>
                <Form.Select
                  id="reporterOptions"
                  value={task.reporter}
                  onChange={handleReporter}
                  aria-label="Select user"
                >
                  <option>Select user</option>
                  {users.map((user) => (
                    <option key={`user-${user.name}`} value={user.name}>
                      {user.name}
                    </option>
                  ))}
                </Form.Select>
              </div>
            )}
          </Modal.Body>
          <Modal.Footer>
            <Button onClick={props.onHide} variant="outline-secondary">
              Close
            </Button>
            <Button variant="outline-info" type="submit" onClick={props.onHide}>
              Save
            </Button>
          </Modal.Footer>
        </Form>
      </Modal>
      <ToastContainer
        className="p-3"
        position="middle-center"
        style={{ zIndex: 1 }}
      >
        <Toast show={showDisplayMsg} onClose={handleCloseMsg}>
          <Toast.Header closeButton={handleCloseMsg}>
            <Image
              src="holder.js/20x20?text=%20"
              className="me-2"
              alt=""
              rounded
            />
            <strong className="me-auto">Message</strong>
          </Toast.Header>
          <Toast.Body>{displayMessage}</Toast.Body>
        </Toast>
      </ToastContainer>
    </>
  );
};

export default CreateModal;
