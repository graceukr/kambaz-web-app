import { BsGripVertical } from "react-icons/bs";
import AssignmentsControls from "./AssignmentsControls";
import { IoMdArrowDropdown } from "react-icons/io";
import AssignmentControlButtons from "./AssignmentControlButtons";
import { TfiWrite } from "react-icons/tfi";
import GroupControlButtons from "./GroupControlButtons";
import "./style.css";
import { Link, useParams } from "react-router";
import * as db from "../../Database";

export default function Assignments() {
  const { cid } = useParams();
  const assignments = db.assignments;
    return (
      <div id="wd-assignments">
        <AssignmentsControls /> <br/> <br/>
        <ul id="wd-assignments" className="list-group rounded-0">
          <li className="wd-assignments list-group-item p-0 mb-5 fs-5 border-gray">
              <div className="wd-assignment-title p-3 ps-2 bg-secondary"> 
                <BsGripVertical className="me-2 fs-3 mb-2" />
                <IoMdArrowDropdown className="me-2 mb-2"/>
                <span className="header-text">ASSIGNMENTS</span> 
                <AssignmentControlButtons />
              </div>
          {assignments
            .filter((assignment) => assignment.course === cid)
            .map((assignment) => (
              <ul className="wd-lessons list-group rounded-0">
                <li className="wd-lesson list-group-item p-3 ps-1">
                    <div 
                        style={{
                          display: "flex",
                          flexDirection: "row",
                          alignItems: "center",
                        }}>
                          <BsGripVertical className="me-2 fs-3" />
                          <TfiWrite className="text-success me-4" size={32}/>
                          <div>
                            <Link to={`/Kambaz/Courses/${cid}/Assignments/${assignment._id}`}
                            className="wd-assignment-link text-decoration-none text-black" >
                            <span className="header-text">{assignment.title}</span>
                            </Link> 
                            <br />
                            <text className="text-danger">Multiple Modules</text> | <b>Not available until</b> {assignment.available} | <br />
                            <b>Due</b> {assignment.due} | {assignment.points} pts
                          </div>
                          <div style={{ flexGrow: "1", flexDirection: "row"}}> 
                          <GroupControlButtons /> </div>
                    </div>
                </li>
              </ul>
            ))}
            </li>
        </ul>
      </div>
  );}
  