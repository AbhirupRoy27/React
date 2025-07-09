import React from 'react';
import './ProfileCard.css'

const ProfileCard = (props) => {
  return (
    <div className='header-mobile'>
    <div className='ProfileCard'>
      <div className='profile-pic'>
        <div className='profile-inner'></div>
      </div>
      <h1>Hello,<p>{props.firstName} {props.lastName}</p> </h1>
      <p>Let me know if the push works now — or if you'd like to do a final test by cloning or pushing another repo.
         You're truly 99% set up for professional development on GitHub now 💻🚀</p>
  </div>
  <div className='Links'>
    Links: 
    <ul>
      <li><a href='#'>Github</a></li>
      <li><a href='#'>Portfolio</a></li>
      <li><a href='#'>Linkedin</a></li>
    </ul>
      </div>
    </div>
  )
}

export default ProfileCard;