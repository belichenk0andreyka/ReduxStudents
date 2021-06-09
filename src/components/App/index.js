import { connect } from 'react-redux'

import App from './App';
import { getPostsFromApi, toggleIsChecked } from "../../store/actions/actions";
import { getPostsFromStore } from "../../store/selectors/selectors";

const mapStateToProps = state => ({
    posts: getPostsFromStore(state),
});

const mapDispatchToProps = dispatch => ({
    getPostsFromApi: payload => dispatch(getPostsFromApi(payload)),
    toggleIsChecked: payload => dispatch(toggleIsChecked(payload)),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);

