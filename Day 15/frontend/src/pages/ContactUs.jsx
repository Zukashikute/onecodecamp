import { useState } from "react";
import Axios from "axios";

const ContactUs = () => {
  const [contact, setContact] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [status, setStatus] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const result = await Axios.post("http://localhost:4000/api/posts/", {
        name: contact.title,
        email: contact.author,
        message: contact.description,
      });
      setStatus("Post created successfully");
      setContact({
        title: "",
        author: "",
        description: "",
      });
      console.log(result);
    } catch (error) {
      setStatus("Error creating post");
      console.log("Error creating post: ", error.message);
    }
  };

  return (
    <div>
      <h1>Contact us</h1>
      {status && <p>{status}</p>}

      <form onSubmit={handleSubmit}>
        <div>
          <label>Name</label>
          <input
            type="text"
            value={contact.title}
            onChange={(e) => setContact({ ...contact, title: e.target.value })}
          />
        </div>

        <div>
          <label>Email</label>
          <input
            type="email"
            value={contact.author}
            onChange={(e) => setContact({ ...contact, author: e.target.value })}
          />
        </div>

        <div>
          <label>Message</label>
          <input
            type="textarea"
            value={contact.description}
            onChange={(e) =>
              setContact({ ...contact, description: e.target.value })
            }
          />
        </div>

        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default ContactUs;
