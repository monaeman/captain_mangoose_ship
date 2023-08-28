import React from "react";
const myStyle = {
  color: "blue",
  backgroundColor: "pink",
};

function Index({ logs }) {
  return (
    <div style={myStyle}>
      <nav>
        <a href="/logs/new">Create New log</a>
      </nav>
      <h1>See All the Logs</h1>
      {logs.map((logs, i) => {
        return (
          <li key={i}>
            {" "}
            <a href={`logs/${logs.id}`}>{logs.title} </a>
          </li>
        );
      })}
    </div>
  );
}

module.exports = Index;