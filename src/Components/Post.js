import Likes from './Likes';

const Post = (props) => {
    return (
        <div className='likes'>
            <Likes post={props.post} />
        </div>
    );
};

export default Post;