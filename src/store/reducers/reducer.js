import { SET_POSTS } from "../actions/actions";

const defaultState = {
    posts: [{title: 'title1'}, {title: 'title3'}, {title: 'title3'}],
}

const reducer = (state = defaultState, action) => {
    // console.log('action', action);
    switch (action.type) {
        case SET_POSTS:
            return {
                ...state,
                posts: action.payload,
            }
        default:
            return state;
    }
};

export default reducer;