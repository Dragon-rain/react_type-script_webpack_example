import React from "react";
import ReactDOM from "react-dom";
import './index.less'

const App = () => (
  <h1>My React and TypeScript App! {process.env.SOME_SECRED_TEXT}</h1>
);

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);