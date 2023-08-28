import React from 'react'

function Show({ logs }) {
  return (
    <div>

        <h1> Lets Sail </h1>
        <h2>{logs.name}</h2>
        <a href= "/logs"> Back</a>
    </div>
  )
}

export default Show;