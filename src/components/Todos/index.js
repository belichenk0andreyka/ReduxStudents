import { connect } from 'react-redux'
import Todos from "./Todos";
import {getTodos} from "../../store/selectors/todosSelectors";

const mapStateToProps = state => ({
    todos: getTodos(state),
});

export default connect(mapStateToProps)(Todos);