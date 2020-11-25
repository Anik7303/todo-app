import { useState } from "react";
import { connect } from "react-redux";

import "./TodoForm.scss";
import { createTodo } from "../../../actions";

const TodoForm = (props) => {
    const [input, setInput] = useState("");
    const { createTodo } = props;

    const onSubmit = (event) => {
        event.preventDefault();
        createTodo({ content: input });
        setInput("");
    };

    return (
        <form className="todo-form" onSubmit={onSubmit} autoComplete="off">
            <div className="todo-form__group">
                <input
                    className="todo-form__input"
                    name="new-todo"
                    id="new-todo"
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    placeholder="Enter todo"
                />
                <button className="btn todo-form__btn">Add</button>
            </div>
        </form>
    );
};

export default connect(null, { createTodo })(TodoForm);
