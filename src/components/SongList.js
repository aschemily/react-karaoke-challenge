import React from 'react';
import Song from './Song'

const SongList = (props) => {
  //console.log('song list props',props)
  return (


    <table className="song-list">
      <tbody>
        <tr>
          <th>Title</th>
          <th>Singer</th>
          <th>Plays</th>
          <th>▶</th>
        </tr>

        {props.songs.map(song=>{
          return (<Song key={song.id} song={song} handleClick={props.handleClick}/>)
        })}

      </tbody>
    </table>
  )
}

export default SongList;
