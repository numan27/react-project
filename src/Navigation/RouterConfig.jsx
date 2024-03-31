/** @format */

import { Routes, Route } from "react-router-dom";
// import ProtectedRoute from "./Routes/ProtectedRoute.jsx";
import PublicRoute from "./Routes/PublicRoute";
import WEB_PAGES from "../pages";
import PATH from "../utils/path";

function RouterConfig() {
  return (
    <Routes>
      {/* AUTH ROUTES START */}
      <Route
        path={PATH.HOME}
        element={<PublicRoute element={<WEB_PAGES.HOME />} />}
      />
      <Route
        path={PATH.SOLUTION}
        element={<PublicRoute element={<WEB_PAGES.SOLUTION />} />}
      />
    </Routes>
  );
}

export default RouterConfig;
