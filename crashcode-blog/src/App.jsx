import React from 'react';
import './App.css'
import Profile from './compo/ProfileCard'
import PostCard from './compo/ContentCard'
import Likes from './compo/Likes'

const obj = ["Rendering.....1",
     "Rendering....2",
     "Rendering...3"
  ];

const App = () => {
  return (
    <div className='container'>
      <div className='profile-card'>
      <Profile firstName="Abhirup" lastName ="Roy"/>
      </div>
      <div className='post-card'>
        <h1>Posts</h1>

        <PostCard message={obj.map((keys, index)=>(
          <li key={index}>{keys}</li>
        ))} />
        <Likes />
        
      </div>
    </div>
  )
}

export default App;