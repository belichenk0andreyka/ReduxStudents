import React from "react";

const App = ({ posts, getPostsFromApi, toggleIsChecked }) => {
    React.useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then(response => response.json())
            .then(json => getPostsFromApi(json))
    }, []);
    const handleChangeCheckbox = id => toggleIsChecked(id);
    return (
        <div>
            {posts.map(post => {
                console.log('post', post);
                return (
                    <div>
                        <h2>{post.title}</h2>
                        <div>{post.body}</div>
                        <input type="checkbox" value={post.isChecked} onChange={() => handleChangeCheckbox(post.id)}/>
                    </div>
                )
            })}
        </div>
    );
};

export default App;