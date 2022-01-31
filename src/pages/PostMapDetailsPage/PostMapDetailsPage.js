const PostMapDetailsPage = ({post: {id, title, body, userId}}) => {
    return (
        <div>
            <div>
                <div>ID: {id}</div>
                <div>UserID: {userId}</div>
                <div>Title: {title}</div>
                <div>Body: {body}</div>
            </div>
            <hr/>
        </div>
    );
};

export default PostMapDetailsPage
