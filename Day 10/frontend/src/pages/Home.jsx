// import LoginForm from "../components/LoginForm";
// import OrderForm from "../components/OrderForm";
import { Container } from "react-bootstrap";
import HomeCards from "../components/HomeCards";

const cardsHomeInfo = [
  {
    title: "Learn to Code 24/7 Live Teaching",
    img: "https://onecodecamp.com/wp-content/uploads/2023/04/247-website-vector-img-17.png",
    desc: "Kick Start your Tech Career Today with our Online Bootcamps, enjoy learning with Live Online Classes and 24/7 Teaching Assistance!",
  },
  {
    title: "Become a Blockchain Developer in 3 months",
    img: "https://onecodecamp.com/wp-content/uploads/2023/04/blockchain-dev-in-3-months-01.png",
    desc: "Transform your career with our Blockchain Development course. Gain the skills to excel in the field - enrol now!",
  },
  {
    title: "Full-Stack Engineering Blockchain Development",
    img: "https://onecodecamp.com/wp-content/uploads/2023/04/247-website-vector-img-18.png",
    desc: "Learn the most in-demand courses from industry experts and become a software developer in 2023!",
  },
];

const Home = () => {
  return (
    <Container>
      <h1 className="text-center">Welcome to OneCodeCamp!</h1>
      {cardsHomeInfo.map((card, index) => (
        <HomeCards
          key={`card-${index}`}
          title={card.title}
          img={card.img}
          desc={card.desc}
        />
      ))}
      ;
    </Container>
  );
};

export default Home;
