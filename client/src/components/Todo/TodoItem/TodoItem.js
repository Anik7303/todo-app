import CreateIcon from "../../Utility/CreateIcon/CreateIcon";

// Material UI Icons
import { DeleteOutline as DeleteIcon } from "@material-ui/icons";

const TodoItem = (props) => {
    const { todo, onDelete, onStateChange } = props;
    const { _id, content, isDone } = todo;
    return (
        <li className={"todo-item"}>
            <div
                className={isDone ? "todo-content completed" : "todo-content"}
                onClick={() => onStateChange(_id, isDone)}
            >
                {content}
            </div>
            <div className="todo-actions">
                <button
                    className="btn"
                    style={{ color: "red" }}
                    onClick={() => onDelete(_id)}
                    title="Delete"
                >
                    <CreateIcon icon={DeleteIcon} />
                </button>
            </div>
        </li>
    );
};

export default TodoItem;
