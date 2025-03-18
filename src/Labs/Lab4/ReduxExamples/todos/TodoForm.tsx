import { Button, FormControl, ListGroup } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { addTodo, setTodo, updateTodo } from "./todosReducer";
import "./style.css";

export default function TodoForm() {
    const { todo } = useSelector((state: any) => state.todosReducer);
    const dispatch = useDispatch();
    return (
        <ListGroup.Item className="d-flex justify-content-between">
          <FormControl 
                className="w-50"
                value={todo.title}
                onChange={(e) => dispatch(setTodo(({ ...todo, title: e.target.value })))}/>
          <div>
            <Button onClick={() => dispatch(addTodo(todo))}
                    id="wd-add-todo-click"
                    className="todo-add-button me-2"> Add </Button>
            <Button onClick={() => dispatch(updateTodo(todo))}
                    id="wd-update-todo-click"
                    className="todo-update-button"> Update </Button>
          </div>
        </ListGroup.Item> 
  );}
  