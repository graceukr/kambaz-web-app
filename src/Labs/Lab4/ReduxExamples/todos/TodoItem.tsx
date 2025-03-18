import { Button, ListGroup } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { deleteTodo, setTodo } from "./todosReducer";
import "./style.css";

export default function TodoItem({ todo }: {
    todo: { id: string; title: string };
  }) {
    const dispatch = useDispatch();
    return (
      <ListGroup.Item key={todo.id} className="d-flex justify-content-between">
        {todo.title}   
        <div>
            <Button onClick={() => dispatch(setTodo(todo))}
                    id="wd-set-todo-click"
                    className="todo-edit-button me-2"> Edit </Button>
            <Button onClick={() => dispatch(deleteTodo(todo.id))}
                id="wd-delete-todo-click"
                className="todo-delete-button"> Delete </Button>
        </div>
    </ListGroup.Item>);}