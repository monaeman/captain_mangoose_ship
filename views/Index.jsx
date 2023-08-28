import React from "react";
const myStyle = {
  color: "blue",
  backgroundColor: "pink",
};

function Index({ log }) {
  return (
    <div style={myStyle}>
      <nav>
        <a href="/logs/new">Create New log</a>
      </nav>
      <h1>See All the Logs</h1>
      {log.map((log, i) => {
        return (
          <li key={i}>
            {" "}
            <a href={`logs/${log.id}`}>{log.name} </a>
          </li>
        );
      })}
    </div>
  );
}

module.exports = Index;