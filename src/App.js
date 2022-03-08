import React from "react";

import Flow from "./Flow";
import PersistentDrawerLeft from "./Drawer";

import "./styles.css";

export default function App() {
  return (
    <div className="App">
      <PersistentDrawerLeft />
      <Flow />
    </div>
  );
}