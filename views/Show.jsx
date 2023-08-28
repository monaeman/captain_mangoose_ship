import React from 'react'

function Show({ logs }) {
  return (
    <div>

        <h1> Lets Sail </h1>
        <h2>{logs.title}</h2>
        <a href= "/"> Back</a>
    </div>
  )
}

module.exports = Show;