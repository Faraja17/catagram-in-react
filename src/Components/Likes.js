

const Likes = () => {
    let count = 0;

        const incCount = () => {
            count++;
            console.log(count);
        }

    return(
        <div className='likes'>
            <img src='https://cdn.pixabay.com/photo/2017/07/25/01/22/cat-2536662_960_720.jpg' alt='kitten playing'/>
            <div className="likesCount">
                <h3>{count} likes</h3>
                <button className='like' type='submit' onClick={incCount}>Like</button>
            </div>
        </div>
    )
}

export default Likes;