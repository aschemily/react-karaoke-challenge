import React from 'react';

const VoteBar = ({ upTitle, voteUp, downTitle, voteDown }) => {
  return (
    <div className="vote-bar">
      <button
        className="pure-button up-button"
        onClick={voteUp}
      > Like
        {upTitle}
      </button>
      <button
        className="pure-button down-button"
        onClick={voteDown}
      > Dislike 
        {downTitle}
      </button>
    </div>
  )
}

export default VoteBar;
