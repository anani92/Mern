import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
const Tab = (props) => {
  const handleClick = (idx) => {
    props.setContent(`Tab ${idx} content is showing here`)
  }
  return (
    <div>
      <h3 className="btn btn-outline-dark" onClick={e=>handleClick(props.idx)}>
        Tab {props.idx}
      </h3>
    </div>
  )
}

export default Tab
