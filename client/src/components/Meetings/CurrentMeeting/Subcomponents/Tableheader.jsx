import React from 'react'


  const Tableheader = props => {
      return (
        <th>
          <img src={props.photo || "http://via.placeholder.com/20x20"} className="rounded-circle" alt={props.name} width="30" height="30" key={props.name + '-reviewed'} />
          <span>&nbsp;{props.name}</span>
        </th>
      )
    } 

export default Tableheader;