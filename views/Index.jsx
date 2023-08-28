import React from "react";
const Default = require("./layout/Default");

const myStyle = {
  color: "blue",
  backgroundColor: "pink",
};

function Index({ logs }) {
  return (

    <Default style={myStyle} title={"Logs Index Page"}>
        <div style={myStyle} > 
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
              {logs.entry} <br />
              {logs.shipIsBroken ? " its ready to sail" : " we're doomed"}
          <br/>
          
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
