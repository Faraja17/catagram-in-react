import React, {useState} from 'react';
import Navbar from './Components/Navbar';
import Post from './Components/Post';
import './App.css';

const App = () => {
// The post useState is an array in order to store each post. The url useState stores the URL.
  const [post, setPost] = useState([]);
  const [url, setUrl] = useState('');

  const makePost = () => {
    setPost([...post, url]); /*The ... is the spread operator. It means that all previous posts of the array will be included along with the new post. */
    setUrl(''); /*This resets the URL bar after each submission*/
  };

  console.log(post);
  
  return (
    <div className="App">
     <Navbar /> {/*This is the navbar component*/}
    <>
    {/* Here is the URL bar that inputs the user's URL. */}
      <div className='form'>
          <input 
              className='url'
              type='text'
              placeholder='enter cat pic URL here'
              value = {url} /*This helps to reset the URL bar after each submission. */
              onChange = {(e) => setUrl(e.target.value)
              }
          />
          <button type='button' className='submit' onClick={() => makePost(url)}>Submit</button>
      </div>
      {/* ternary operator: if url bar is empty, display an empty div. Else, post the item (picture and the like counter). */}
      {post === '' ? (
        <div> </div>
      ) : (
        <div>
          {/* The map() function iterates over the array to manipulate individual data items. In React, as in this case, it is used to render the items to the DOM. */}
          {post.map((item) => (
            <Post post={item} /> /*This is the child component that received the props. */
          ))};
        </div>   
      )}; 
    </>
    </div>
  );
};
export default App;
