import React from 'react';
import Lyrics from './Lyrics';
import VoteBar from './VoteBar';

const KaraokeDisplay = (props) => {
  console.log('KaraokeDisplay',props)
  return (
    <div className="karaoke-display">
      <h2>{props.KaraokeDisplayArr.title}</h2>
      <Lyrics lyrics={props.KaraokeDisplayArr.lyrics}/>

    </div>
  )
}

export default KaraokeDisplay;
