import React from "react";
import ReactDom from "react-dom/client";

const App = () => {
  return <><h1>Hey There</h1></>
}

const root = ReactDom.createRoot(document.getElementById('root'));
root.render(<App />);