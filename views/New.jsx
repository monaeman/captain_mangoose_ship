import React from "react";

function New() {
  return (
    <div>
      <form action="/logs" method="POST">
        Title: <input type="text" id="title" name="title" required />
        <br />
        Entry:
        <textarea id="entry" name="entry" rows="4" required />
        <br />
        Is Ship Broken? :
        <input type="checkbox" id="shipIsBroken" name="shipIsBroken" />
        <br />
        <input type="submit" name="" value="Submit" />
        <a href= "/logs/"> Back</a>
      </form>
    </div>
  );
}

module.exports = New;
