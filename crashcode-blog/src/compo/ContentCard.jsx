import React from 'react';
import './ContentCard.css'

function ContentCard(props) {
  return (
      <div className='post-container'>
        <h1>{props.message}</h1>
      </div>
  );
}

export default ContentCard;