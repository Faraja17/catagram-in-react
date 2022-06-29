import Likes from './Likes';

const Post = (props) => {
    return (
        <div className='likes'>
            <Likes post={props.post} /> {/*This is the child of the child. the props got passed all the way down from the grandparent (App.js) */}
        </div>
    );
};

export default Post;