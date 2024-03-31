import React from "react";
// import NoPageFound from "./NoPageFound";
const HOME = React.lazy(() => import("./Home"));
const SOLUTION = React.lazy(() => import("./Solution.jsx"));


const WEB_PAGES = {
  HOME,
  SOLUTION,

};
export default WEB_PAGES;
