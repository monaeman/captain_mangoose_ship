import React from 'react'
const Default =require('./layout/Default')


function Edit  ({logs}) {
  return (
    <Default title= 'Edit Page'>
 <form method="POST" action={`/logs/${logs._id}?_method=PUT`}>
        Title: <input type='text' name='title' defaultValue={logs.title} />
        <br />
        Entry: <input type='textarea' name='entry' defaultValue={logs.entry} />
        <br />
        Is Ship Broken:
        {logs.isShipBroken ? (
          <input type='checkbox' name='shipIsBroken' defaultChecked />
        ) : (
          <input
            type='checkbox'
            name='shipIsBroken'
            defaultValue={logs.shipIsBroken}
          />
        )}
        <br />
        
        <br />
        <input type='submit' value='Submit Changes' />
      </form>
    </Default>
  )
}

module.exports = Edit