import { useState, useEffect } from "react";
import { Container, Button, Spinner } from "react-bootstrap";
import CreateModal from "../components/CreateModal";
import Axios from "axios";
import CardTickets from "../components/CardTickets";

const Home = () => {
  // Fetch Users from the database
  const [ticketList, setTicketList] = useState([]);
  const [loadTickets, setLoadTickets] = useState(true);

  useEffect(() => {
    (async () => {
      try {
        const result = await Axios.get("http://localhost:4000/api/tickets/");
        setTicketList(result.data);
        setLoadTickets(false);
        console.log(result);
      } catch (error) {
        console.log("Error creating post: ", error.message);
      }
    })();
  }, []);

  console.log(ticketList);

  // Create a task state
  const [showCreate, setShowCreate] = useState(false);
  return (
    <div className="my-4">
      <h2 className="text-center">
        Welcome to our Mini Project Management App
      </h2>
      <Container className="my-4 d-flex justify-content-center">
        <Button
          variant="outline-dark"
          size="sm"
          onClick={() => setShowCreate(true)}
        >
          Create your task
        </Button>
        <CreateModal show={showCreate} onHide={() => setShowCreate(false)} />
      </Container>

      <div className="my-4">
        <hr />
        <div className="px-5">
          <h3>Tickets</h3>
        </div>

        <hr />
        <Container className="my-4 d-flex justify-content-center">
          {loadTickets ? (
            <Spinner />
          ) : ticketList.length > 0 ? (
            <div className="d-flex gap-4 flex-wrap">
              {ticketList.map((ticket, index) => (
                <CardTickets
                  id={ticket._id}
                  key={`ticket-${index}`}
                  title={ticket.title}
                  desc={ticket.description}
                  priority={ticket.priority}
                  reporter={ticket.reporter}
                />
              ))}
            </div>
          ) : (
            <div>
              <p>No data</p>
            </div>
          )}
        </Container>
      </div>
    </div>
  );
};

export default Home;
