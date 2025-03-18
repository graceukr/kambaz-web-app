import { ListGroup } from "react-bootstrap";
import "./style.css"
import TodoForm from "./TodoForm";
import TodoItem from "./TodoItem";
import { useSelector } from "react-redux";

export default function TodoList() {
    const { todos } = useSelector((state: any) => state.todosReducer);
  return (
    <div>
      <h2>Todo List</h2>
      <ListGroup className="todo-container">
        <TodoForm />
        {todos.map((todo: any) => (
            <TodoItem todo={todo} />
        ))}
      </ListGroup>
      <hr/></div>);}