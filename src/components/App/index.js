import { connect } from 'react-redux'

import App from './App';
import {getPostsFromApi} from "../../store/actions/actions";
import { getPostsFromStore } from "../../store/selectors/selectors";

const mapStateToProps = state => ({
    posts: getPostsFromStore(state),
});

const mapDispatchToProps = dispatch => ({
    getPostsFromApi: payload => dispatch(getPostsFromApi(payload)),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);

