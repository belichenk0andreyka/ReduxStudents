import { connect } from 'react-redux'

import Posts from './Posts';
import { getPostsFromApi, toggleIsChecked } from "../../store/actions/postsActions";
import { getPostsFromStore } from "../../store/selectors/postsSelectors";

const mapStateToProps = state => ({
    posts: getPostsFromStore(state),
});

const mapDispatchToProps = dispatch => ({
    getPostsFromApi: payload => dispatch(getPostsFromApi(payload)),
    toggleIsChecked: payload => dispatch(toggleIsChecked(payload)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Posts);

