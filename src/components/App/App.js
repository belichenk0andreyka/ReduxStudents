import React from "react";

const App = ({ posts, getPostsFromApi }) => {
    React.useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then(response => response.json())
            .then(json => getPostsFromApi(json))
    }, []);

    return (
        <div>
            {posts.map(post => <div>
                <h2>{post.title}</h2>
                <div>{post.body}</div>
            </div>)}
        </div>
    );
}

export default App;