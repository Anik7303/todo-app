import { useState } from "react";

import "./TodoForm.scss";
import { Add as AddIcon } from "@material-ui/icons";

const TodoForm = (props) => {
    const [input, setInput] = useState("");

    const onSubmit = (event) => {
        event.preventDefault();
        console.log({ input });

        setInput("");
    };

    return (
        <form className="todo-form" onSubmit={onSubmit}>
            <div className="todo-form__group">
                <label htmlFor="new-todo" className="todo-form__label">
                    <AddIcon id="icon" />
                </label>
                <input
                    className="todo-form__input"
                    name="new-todo"
                    id="new-todo"
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                />
                <button className="btn todo-form__btn">Add</button>
            </div>
        </form>
    );
};

export default TodoForm;
