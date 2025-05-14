import { Navigate, Route, Routes } from "react-router-dom";

import HomePage from "../page/Home";
import AboutPage from "../page/About";
import { ProtectedRoute } from "./ProtectedRoute";

const NotFound = () => <Navigate to="/404" />;

const routes = [
  { path: "/", component: HomePage },
  { path: "/about", component: AboutPage },
];

export default function RouterRoutes() {
  return (
    <Routes>
      <Route path="*" element={<NotFound />} />

      {routes.map(({ path, component: Component }) => (
        <Route
          key={path}
          path={path}
          element={
            <ProtectedRoute>
              <Component />
            </ProtectedRoute>
          }
        />
      ))}
    </Routes>
  );
}
