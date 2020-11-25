import { useEffect } from "react";

import { connect } from "react-redux";

import "./Todo.scss";
import TodoItem from "./TodoItem/TodoItem";
import TodoForm from "./TodoForm/TodoForm";
import { fetchTodos, updateStatus, deleteTodo } from "../../actions";

const Todo = (props) => {
    const { todos, fetchTodos, updateStatus, deleteTodo } = props;

    useEffect(() => {
        fetchTodos();
    }, [fetchTodos]);

    const renderList = () =>
        todos.map((todo) => (
            <TodoItem
                key={todo._id}
                todo={todo}
                onStateChange={updateStatus}
                onDelete={deleteTodo}
            />
        ));

    return (
        <section className="section-todo">
            <div className="todo-inputs">
                <TodoForm />
            </div>
            <ul className="todo-list">{renderList()}</ul>
        </section>
    );
};

const mapStateToProps = (state) => ({ todos: state.todos });

export default connect(mapStateToProps, { fetchTodos, updateStatus, deleteTodo })(Todo);
