import React from "react";
import "./styles.css";
import Clock from "./Clock";
export default function App() {
  return (
    <div className="container">
      <div>
        <div className="title">Default</div>
        <Clock datediff={9} />
      </div>
      <div>
        <div className="title">BST</div>
        <Clock datediff={9} timeZone="BST" />
      </div>
      <div>
        <div className="title">EDT</div>
        <Clock datediff={9} timeZone="EDT" />
      </div>
      <div>
        <div className="title">UTC</div>
        <Clock datediff={9} timeZone="UTC" />
      </div>
    </div>
  );
}
