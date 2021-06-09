const defaultState = {
    todos: [
        {
            name: 'написать проект',
            isCompleted: false,
        },
        {
            name: 'сходить в магазин',
            isCompleted: false,
        }
    ],
}

const todosReducer = (state = defaultState, action) => {
    switch (action.type) {
        case 'SET_TODOS':
            return {
                ...state,
                posts: action.payload.map(post => ({ ...post, isChecked: false })), // action.payload - массив постов
            }
        default:
            return state;
    }
};

export default todosReducer;