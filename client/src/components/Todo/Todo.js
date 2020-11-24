import { useEffect } from "react";

import { connect } from "react-redux";

import "./Todo.scss";
import { fetchTodos, updateStatus } from "../../actions";

const Todo = (props) => {
    const { todos, fetchTodos, updateStatus } = props;

    useEffect(() => {
        fetchTodos();
    }, [fetchTodos]);

    const renderList = () =>
        todos.map(({ _id, content, isDone }) => (
            <li
                key={_id}
                className={isDone ? "todo-item completed" : "todo-item"}
                onClick={() => updateStatus(_id, isDone)}
            >
                {content}
            </li>
        ));

    return <ul className="todo-list">{renderList()}</ul>;
};

const mapStateToProps = (state) => ({ todos: state.todos });

export default connect(mapStateToProps, { fetchTodos, updateStatus })(Todo);
