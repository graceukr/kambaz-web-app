import AddingAndRemovingToFromArrays from "./AddingAndRemovingToFromArrays";
import ArrayIndexAndLength from "./ArrayIndexAndLength";
import ArrowFunctions from "./ArrowFunctions";
import BooleanVariables from "./BooleanVariables";
import Classes from "./Classes";
import ConditionalOutputIfElse from "./ConditionalOutputIfElse";
import ConditionalOutputInline from "./ConditionalOutputInline";
import Destructing from "./Destructing";
import DestructingImports from "./DestructingImports";
import FilterFunction from "./FilterFunction";
import FindIndex from "./FindIndex";
import FindFunction from "./FindIndex";
import ForLoops from "./ForLoops";
import FunctionDestructing from "./FunctionDestructing";
import House from "./House";
import IfElse from "./IfElse";
import ImpliedReturn from "./ImpliedReturn";
import JsonStringify from "./JsonStringify";
import LegacyFunctions from "./LegacyFunctions";
import SimpleArrays from "./SimpleArrays";
import Spreading from "./Spreading";
import TemplateLiterals from "./TemplateLiterals";
import TernaryOperator from "./TernaryOperator";
import TodoList from "./todos/TodoList";
import VariablesAndConstants from "./VariablesAndConstants";
import Add from "./Add";
import Styles from "./Styles";
import Highlight from "./Highlight"
import AddPathParameters from "./AddPathParameters";
import PathParameters from "./PathParameters";
import { useSelector } from "react-redux";
import { ListGroup } from "react-bootstrap";

export default function Lab3() {
    const { todos } = useSelector((state: any) => state.todosReducer);
    console.log('Hello World!');
    return (
        <div id="wd-lab3">
            <h2>Lab 3</h2>
            <ListGroup className="p-2">
                {todos.map((todo: any) => (
                <ListGroup.Item key={todo.id}>
                    {todo.title}
                </ListGroup.Item>
                ))}
            </ListGroup>
            <hr />
            <VariablesAndConstants />
            <BooleanVariables />
            <IfElse />
            <TernaryOperator />
            <ConditionalOutputIfElse />
            <ConditionalOutputInline />
            <LegacyFunctions />
            <ArrowFunctions />
            <ImpliedReturn />
            <TemplateLiterals />
            <SimpleArrays />
            <ArrayIndexAndLength />
            <AddingAndRemovingToFromArrays />
            <ForLoops />
            <FindFunction />
            <FindIndex />
            <FilterFunction />
            <JsonStringify />
            <House />
            <TodoList />
            <Spreading />
            <Destructing />
            <FunctionDestructing />
            <DestructingImports />
            <Classes />
            <Styles />
            <Add a={3} b={4} />
            <Highlight>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipitratione eaque illo minus cum, saepe totam
                vel nihil repellat nemo explicabo excepturi consectetur. Modi omnis minus sequi maiores, provident voluptates.
            </Highlight>
            <AddPathParameters />
            <PathParameters />
        </div>
    )
}