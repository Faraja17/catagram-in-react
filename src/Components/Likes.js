import React, { useState } from "react";

const Likes = (props) => {
  const [count, setCount] = useState(0);

  // console.log(`likes: ${count}`);
  let counterWord = "likes";

  return (
    <>
      <div className="likes">
        <img src={props.post} alt="kitten pics" />
        <div className="likesCount">
          <div className="counterWord">
            {count === 1 ? (counterWord = "like") : (counterWord = "likes")};
          </div>
          <h3 style={{ visibility: count === 0 ? "hidden" : "visible" }}>
            {count} {counterWord}
          </h3>
          <button
            className="like"
            type="button"
            onClick={() => setCount(count + 1)}
          >
            Like
          </button>
          {/* <button onClick ={() => setCount(0)}>reset</button>
                    <button className='like' type='submit' onClick= {() => setCount(count - 1)}>Disike</button> */}
        </div>
      </div>
    </>
  );
};

export default Likes;
