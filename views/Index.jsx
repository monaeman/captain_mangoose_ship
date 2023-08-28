import React from "react";
const Default = require("./layout/Default");

const myStyle = {
  color: "blue",
  backgroundColor: "pink",
};

function Index({ logs }) {
  return (
    <Default style={myStyle} title={"Logs Index Page"}>
      <div style={myStyle}>
        <nav>
          <a href="/logs/new">Create New log</a>
        </nav>
        <ul>
          <h1>See All the Logs</h1>
          {logs.map((logs, i) => {
            return (
              <li key={i}>
                {" "}
                <a href={`/logs/${logs.id}`}>{logs.title} </a>
                <br />
                <form method='POST' action={`/logs/${logs._id}?_method=DELETE`}  value="DELETE" >
                <input type='submit' value="DELETE" />
              </form>
                <a href={`/logs/${logs._id}/edit`}>Edit Log </a>
              </li>
            );
          })}
        </ul>
      </div>
    </Default>
  );
}

module.exports = Index;
