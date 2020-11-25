import { useEffect } from "react";

import { connect } from "react-redux";

import "./Todo.scss";
import { fetchTodos, updateStatus } from "../../actions";
import TodoForm from "./TodoForm/TodoForm";

const Todo = (props) => {
    const { todos, fetchTodos, updateStatus } = props;

    useEffect(() => {
        fetchTodos();
    }, [fetchTodos]);

    const renderList = () =>
        todos.map(({ _id, content, isDone }) => (
            <li key={_id} className={"todo-item"} onClick={() => updateStatus(_id, isDone)}>
                <div className={isDone ? "todo-content completed" : "todo-content"}>{content}</div>
            </li>
        ));

    return (
        <section className="section-todo">
            <ul className="todo-list">{renderList()}</ul>
            <div className="todo-inputs">
                <TodoForm />
            </div>
        </section>
    );
};

const mapStateToProps = (state) => ({ todos: state.todos });

export default connect(mapStateToProps, { fetchTodos, updateStatus })(Todo);
