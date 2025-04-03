import { useState } from "react";
import { Form, FormControl } from "react-bootstrap";
const REMOTE_SERVER = import.meta.env.VITE_REMOTE_SERVER;
export default function WorkingWithObjects() {
  const [assignment, setAssignment] = useState({
       id: 1, title: "NodeJS Assignment",
       description: "Create a NodeJS server with ExpressJS",
       due: "2021-10-10", completed: false, score: 0,
    });
  const ASSIGNMENT_API_URL = `${REMOTE_SERVER}/lab5/assignment`
  const [module, setModule] = useState({
       id: 1, title:"NodeJS Module",
       description: "Introduction to NodeJS",
       course: "CS101", 
    });
  const MODULE_API_URL = `${REMOTE_SERVER}/lab5/module`
  return (
    <div id="wd-working-with-objects"><h3>Working With Objects</h3>
      <h4>Modifying Properties</h4>
      <h5>Assignment</h5>
      <a id="wd-update-assignment-title"
         className="btn btn-primary float-end"
         href={`${ASSIGNMENT_API_URL}/title/${assignment.title}`}>
        Update Title
      </a>
      <FormControl className="w-75 mb-2" id="wd-assignment-title"
        defaultValue={assignment.title} onChange={(e) =>
          setAssignment({ ...assignment, title: e.target.value })}/>
      <a id="wd-update-assignment-score"
         className="btn btn-primary float-end"
         href={`${ASSIGNMENT_API_URL}/score/${assignment.score}`}>
        Update Score
      </a>
      <FormControl type="number" className="w-75 mb-2" id="wd-assignment-score "
        defaultValue={assignment.score} onChange={(e) =>
          setAssignment({ ...assignment, score: Number(e.target.value) })}/>
      <div className="d-flex justify-content-between align-items-center mb-3">
        <Form.Group>
            <Form.Check type="checkbox" className="w-75 mb-2" id="wd-assignment-completed"
                label="Completed" checked={assignment.completed}
                onChange={(e) => setAssignment({ ...assignment, completed: e.target.checked })} />
        </Form.Group>
        <a id="wd-update-assignment-completed"
         className="btn btn-primary float-end mb-3"
         href={`${ASSIGNMENT_API_URL}/completed/${assignment.completed}`}>
        Update Completed
        </a>
      </div>

      <h5>Module</h5>
      <a id="wd-update-module-name"
         className="btn btn-primary float-end"
         href={`${MODULE_API_URL}/name/${module.title}`}>
        Update Name
      </a>
      <FormControl className="w-75 mb-2" id="wd-module-name"
        defaultValue={module.title} onChange={(e) =>
          setModule({ ...module, title: e.target.value })}/>
      <a id="wd-update-module-description"
         className="btn btn-primary float-end"
         href={`${MODULE_API_URL}/description/${module.description}`}>
        Update Description
      </a>
      <FormControl className="w-75" id="wd-module-name"
        defaultValue={module.description} onChange={(e) =>
          setModule({ ...module, description: e.target.value })}/>
      
      <hr />

      <h4>Retrieving Objects</h4>
      <a id="wd-retrieve-assignments" className="btn btn-primary me-2"
         href={`${REMOTE_SERVER}/lab5/assignment`}>
        Get Assignment
      </a>
      <a id="wd-retrieve-modules" className="btn btn-primary"
         href={`${REMOTE_SERVER}/lab5/module`}>
        Get Module
      </a><hr/>

      <h4>Retrieving Properties</h4>
      <a id="wd-retrieve-assignment-title" className="btn btn-primary me-2"
         href={`${REMOTE_SERVER}/lab5/assignment/title`}>
        Get Assignment Title
      </a>
      <a id="wd-retrieve-module-name" className="btn btn-primary"
         href={`${REMOTE_SERVER}/lab5/module/name`}>
        Get Module Name
      </a><hr/>
    </div>
);}
