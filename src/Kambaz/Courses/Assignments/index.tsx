import { BsGripVertical } from "react-icons/bs";
import AssignmentsControls from "./AssignmentsControls";
import { IoMdArrowDropdown } from "react-icons/io";
import { TfiWrite } from "react-icons/tfi";
import GroupControlButtons from "./GroupControlButtons";
import "./style.css";
import { Link, useNavigate, useParams } from "react-router";
import AssignmentControlButtons from "./AssignmentControlButtons";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../store";
import { deleteAssignment } from "./reducer";

export default function Assignments() {
  const { cid } = useParams();
  const assignments = useSelector((state: RootState) => state.assignmentReducer.assignments);
  const navigate = useNavigate();
  const dispatch = useDispatch();
    return (
      <div id="wd-assignments">
        <AssignmentsControls /><br/> <br/>
        <ul id="wd-assignments" className="list-group rounded-0">
          <li className="wd-assignments list-group-item p-0 mb-5 fs-5 border-gray">
              <div className="wd-assignment-title p-3 ps-2 bg-secondary"> 
                <BsGripVertical className="me-2 fs-3 mb-2" />
                <IoMdArrowDropdown className="me-2 mb-2"/>
                <span className="header-text">ASSIGNMENTS</span> 
                <AssignmentControlButtons />
              </div>
          {assignments
            .filter((assignment: any) => assignment.course === cid)
            .map((assignment: any) => (
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
                          <div className="fs-6">
                            <Link onClick={() => navigate(`/Kambaz/Courses/${cid}/Assignments/${assignment.id}`)} to={`/Kambaz/Courses/${cid}/Assignments/${assignment._id}`}
                            className="wd-assignment-link text-decoration-none text-black" >
                            <span className="header-text">{assignment.title}</span>
                            </Link> 
                            <br />
                            <span className="text-danger">Multiple Modules</span> | <b>Not available until</b> {assignment.available} | <br />
                            <b>Due</b> {assignment.due} | {assignment.points} pts
                          </div>
                        
                          <div style={{ flexGrow: "1", flexDirection: "row"}}> 
                          <GroupControlButtons assignmentId={assignment._id} deleteAssignment={(assignmentId) => {
                                                  dispatch(deleteAssignment(assignmentId));
                                                }} /> </div>
                    </div>
                </li>
              </ul>
            ))}
            </li>
        </ul>
      </div>
  );}
