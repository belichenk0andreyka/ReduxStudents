import React from "react";

const Todos = ({ todos }) => {
    return (
        <div>
            {todos && todos.map(todo => {
                return (
                    <div>
                        <h2>{todo.name}</h2>
                        <input type="checkbox" value={todo.isCompleted}/>
                    </div>
                )
            })}
        </div>
    );
};

export default Todos;