import { BrowserRouter, Route, Routes } from "react-router-dom";
// import routes from "./routes";
import NavigationBar from "../components/NavigationBar";
import Home from "../pages/Home";
import AboutUs from "../pages/AboutUs";
import ContactUs from "../pages/ContactUs";

function AppRoutes() {
  return (
    <>
      <BrowserRouter basename="/">
        <NavigationBar />
        <Routes>
          {/* {routes.map(({ key, path, element: Element }) => (
            <Route key={key} path={path} element={<Element />} />
          ))} */}

          <Route path="/" element={<Home />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/contact" element={<ContactUs />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default AppRoutes;
