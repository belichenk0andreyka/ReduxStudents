import React from "react";
import Posts from "../Posts";
import Todos from "../Todos";

const App = ({ posts, getPostsFromApi, toggleIsChecked }) => {
    const [isPosts, setIsPosts] = React.useState(true);
    return (
        <div>
            <button onClick={() => setIsPosts(prev => !prev)}>Perekluchit</button>
            {isPosts ? <Posts/> : <Todos />}
        </div>
    );
};

export default App;