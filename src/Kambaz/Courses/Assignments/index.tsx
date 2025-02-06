import { ListGroup } from "react-bootstrap";
import { BsGripVertical } from "react-icons/bs";
import AssignmentsControls from "./AssignmentsControls";
import { IoMdArrowDropdown } from "react-icons/io";
import AssignmentControlButtons from "./AssignmentControlButtons";
import { TfiWrite } from "react-icons/tfi";
import GroupControlButtons from "./GroupControlButtons";
import "./style.css";

export default function Assignments() {
    return (
      <div id="wd-assignments">
        <AssignmentsControls /> <br/> <br/>
        <ListGroup className="rounded-0">
          <ListGroup.Item className="wd-module p-0 mb-5 fs-5 border-gray">
            <div className="wd-title p-3 ps-2 bg-secondary"> 
              <BsGripVertical className="me-2 fs-3 mb-2" />
                <IoMdArrowDropdown className="me-2 mb-2"/>
                <span className="header-text">ASSIGNMENTS</span> <AssignmentControlButtons />
              </div>
            <ListGroup className="wd-lessons rounded-0">
              <ListGroup.Item className="wd-lesson p-3 ps-1">
              <div
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    alignItems: "center",
                  }}>
                  <BsGripVertical className="me-2 fs-3" />
                  <TfiWrite className="text-success me-4" size={32}/>
                  <div>
                    <a href="#/Kambaz/Courses/1234/Assignments/123"
                    className="wd-assignment-link text-decoration-none text-black" >
                    <span className="header-text">A1</span>
                    </a> <br />
                    <text className="text-danger">Multiple Modules</text> | <b>Not available until</b> May 6th at 12:00 am | <br />
                    <b>Due</b> May 13 at 11:59 pm | 100 pts
                  </div>
                  <div style={{ flexGrow: "1", flexDirection: "row"}}> 
                    <GroupControlButtons /> </div>
                </div>
              </ListGroup.Item>
              <ListGroup.Item className="wd-lesson p-3 ps-1 flex-nowrap"> 
                <div
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    alignItems: "center",
                  }}>
                  <BsGripVertical className="me-2 fs-3" />
                  <TfiWrite className="text-success me-4" size={32}/>
                  <div>
                    <a href="#/Kambaz/Courses/1234/Assignments/123"
                    className="wd-assignment-link text-decoration-none text-black" >
                    <span className="header-text">A2</span>
                    </a> <br />
                    <span className="text-danger">Multiple Modules</span> | <b>Not available until</b> May 13th at 12:00 am | <br />
                    <b>Due</b> May 20 at 11:59 pm | 100 pts
                  </div>
                  <div style={{ flexGrow: "1", flexDirection: "row"}}> 
                    <GroupControlButtons /> </div>
                </div>
              </ListGroup.Item>
              <ListGroup.Item className="wd-lesson p-3 ps-1">
                <div
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    alignItems: "center",
                  }}>
                  <BsGripVertical className="me-2 fs-3" />
                  <TfiWrite className="text-success me-4" size={32}/>
                  <div>
                    <a href="#/Kambaz/Courses/1234/Assignments/123"
                    className="wd-assignment-link text-decoration-none text-black" >
                    <span className="header-text">A3</span>
                    </a> <br />
                    <span className="text-danger">Multiple Modules</span> | <b>Not available until</b> May 13th at 12:00 am | <br />
                    <b>Due</b> May 20 at 11:59 pm | 100 pts
                  </div>
                  <div style={{ flexGrow: "1", flexDirection: "row"}}> 
                    <GroupControlButtons /> </div>
                </div>
              </ListGroup.Item>
            </ListGroup>
          </ListGroup.Item>
        </ListGroup>
      </div>
  );}
  