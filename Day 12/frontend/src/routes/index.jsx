import { BrowserRouter, Route, Routes } from "react-router-dom";
// import routes from "./routes";
import routes from "./routes";


function AppRoutes() {
  return (
    <>
      <BrowserRouter basename="/">
        <Routes>
          {routes.map(({ key, path, element: Element }) => (
            <Route key={key} path={path} element={<Element />} />
          ))}
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default AppRoutes;
