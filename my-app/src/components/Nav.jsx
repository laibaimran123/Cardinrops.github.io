import React from 'react'

const Nav = (props) => {
  return (
    <>
    <ul>
      <li>{props.home}</li>
      <li>{props.about}</li>
      <li>{props.ser}</li>
      <li>{props.cate}</li>
      <li>{props.con}</li>
      </ul>
    </>
  )
}

export default Nav
