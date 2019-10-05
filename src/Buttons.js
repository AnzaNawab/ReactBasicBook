import React from 'react'

export default function Buttons({handleDelete}) {
    return (
    <button type="button" style={{background: "grey",color:"white",fontSize: "2rem"}}
    onClick={handleDelete}>
          Delete Me
      </button>
    )
}
