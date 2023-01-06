import './App.css';
import Comment from './components/Comment';
import React from 'react';


const commentData = {
  author: {
    name: 'Kitty',
    avatarUrl: 'https://placekitten.com/g/64/64',

  },
  text: 'Learn React is Awesome',
  date: new Date(),
}



function App() {
  return (
    <div className="App">
    <Comment 
     author={commentData.author} 
    text={commentData.text}
    date={commentData.date}
     />
    </div>
  );
}

export default App;
