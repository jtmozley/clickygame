import React from "react";
import "./style.css";

export default function Footer() {
  return (
    <div className="footer">
      <i className="fab fa-react" />
      <i className="fab fa-bootstrap" />
      <a
        href="https://github.com/jtmozley/clickygame"
        target="_blank"
        rel="noopener noreferrer"
      >
        <i className="fab fa-github" />Repo
      </a>
    </div>
  );
}
