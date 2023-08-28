import React from 'react'

function Show({ logs }) {
    console.log(logs)
  return (
    <div>

        <h1> Lets Sail </h1>
        <h2>{logs.title}</h2>
        <h2>{logs.entry}</h2>
        {
            logs.shipIsBroken ? "its ready to sail " : "we're doomed"
        }
        <a href= "/logs"> Back</a>
    </div>
  )
}

module.exports = Show;