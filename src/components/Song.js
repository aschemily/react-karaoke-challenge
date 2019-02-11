import React from 'react';

const Song = (props) => {
  //console.log('song props',props)
  //()=>props.handleClick(props.song)
  return (
    <tr className="song">
      <td>{props.song.title}</td>
      <td>{props.song.singer}</td>
      <td>{props.song.plays}</td>
      <td><button onClick={()=>props.handleClick(props.song)} >Play</button></td>
    </tr>
  )
}

export default Song;
