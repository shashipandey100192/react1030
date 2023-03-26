import React from 'react'

function Form2() {
  const b = localStorage.getItem("mykey");
  return (
    <div>form2 {b}</div>
  )
}

export default Form2