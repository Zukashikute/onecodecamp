import Home from "../pages/Home";
import AboutUs from "../pages/AboutUs";
import ContactUs from "../pages/ContactUs";

const routes = [
   {
      key: "home",
      path: "/",
      element: Home
   },
   {
      key: "about-us",
      path: "/about",
      element: AboutUs
   },
   {
      key: "contact-us",
      path: "/contact",
      element: ContactUs
   }
]

export default routes