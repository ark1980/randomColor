import React from 'react';

const Box = ({color}) => {

  const style = {
    width: '150px',
    height: '150px',
    border: 'solid 1px',
    display: "inline-block",
    backgroundColor: color,
    margin: '0 2px',
  }
  return (
    <div style={style}>
    </div>
  )
}

export default Box;