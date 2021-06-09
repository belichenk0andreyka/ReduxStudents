export const SET_POSTS = 'SET_POSTS';
export const TOGGLE_IS_CHECKED = 'TOGGLE_IS_CHECKED';

export const getPostsFromApi = payload => ({ type: SET_POSTS, payload });

export const toggleIsChecked = payload => ({ type: TOGGLE_IS_CHECKED, payload })