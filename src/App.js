import React, {useState} from 'react';
import Navbar from './Components/Navbar';
import Post from './Components/Post';
import './App.css';

const App = () => {
  // const searchFun = (e) => {
  //   console.log(e);
  // };
  const [post, setPost] = useState('');
  const [url, setUrl] = useState('');
  

  console.log(url);
  
  return (
    <div className="App">
     <Navbar />
     
    <>
      <form className='form'>
          <input 
              className='url'
              type='text'
              placeholder='enter a url here'
              onChange = {(e) => setUrl(e.target.value)
              }
          />
          <button type='button' className='submit' onClick={() => setPost(url)}>Submit</button>
      </form>
    </>
    <Post post={post} />
    </div>   
  );
}; 
// 

export default App;
