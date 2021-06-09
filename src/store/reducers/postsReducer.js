import {SET_POSTS, TOGGLE_IS_CHECKED} from "../actions/postsActions";

const defaultState = {
    posts: [],
    isAuth: true,
}

const postsReducer = (state = defaultState, action) => {
    switch (action.type) {
        case SET_POSTS:
            return {
                ...state,
                posts: action.payload.map(post => ({ ...post, isChecked: false })), // action.payload - массив постов
            }
        case 'TOGGLE_ID_AUTH':
            return {
                ...state,
                isAuth: !state.isAuth,
            }
        case TOGGLE_IS_CHECKED:
            return {
                ...state,
                posts: state.posts.map(post => post.id === action.payload ? ({ ...post, isChecked: !post.isChecked}) : post),
            }
        default:
            return state;
    }
};

export default postsReducer;