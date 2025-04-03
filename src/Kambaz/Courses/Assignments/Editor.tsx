import { Button, Col, Form, InputGroup, Row } from "react-bootstrap";
import { IoCalendarOutline } from "react-icons/io5";
import { useLocation, useNavigate, useParams } from "react-router";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addAssignment, updateAssignment } from "./reducer";
import * as assignmentsClient from "./client";
import * as coursesClient from "../client";

export default function AssignmentEditor() {
    const { aid, cid } = useParams();
    const location = useLocation();
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { assignments } = useSelector((state: any) => state.assignmentReducer);
    const currentAssignment = assignments.find((assignment: any) => assignment._id === aid);
    const isNewAssignment = location.pathname.endsWith("/new");
    
    const [assignment, setAssignment] = useState<any>(
      currentAssignment || {
        _id: isNewAssignment ? null : aid,
        title: "New Title",
        course: cid,
        points: 0,
        due: "2025-04-25",
        available: "2025-01-01",
        availableUntil: "2025-04-25",
        description: "New Description",
      }
    )

    //const [assignmentName, setAssignmentName] = useState("");
    

    const createAssignmentForCourse = async () => {
      if (!cid) return;
      //const newAssignment = { name: assignmentName, course: cid };
      const newAssignment = await coursesClient.createAssignmentForCourse(cid, assignment);
      dispatch(addAssignment(newAssignment));
    };
    
    const saveAssignment = async (assignment: any) => {
      console.log("1", assignment);
          await assignmentsClient.updateAssignment(assignment);
          dispatch(updateAssignment(assignment));
          console.log("2", assignment);
    };

    
    /*
    const saveAssignment = async (assignment: any) => {
      console.log("not updated 1");
      await assignmentsClient.updateAssignment(assignment);
      console.log("not updated 2");
      dispatch(updateAssignment(assignment));
      console.log("assignment updated");
    };
    */
    

    const handleSave = async () => {
      try {
        if (isNewAssignment) {
          createAssignmentForCourse();
        } else {
          saveAssignment({ ...assignment});
        }
        navigate(`/Kambaz/Courses/${cid}/Assignments`);
      } catch (error) {
        console.error("Error saving assignment:", error);
      }
    };

    return (
      <div id="wd-assignments-editor">
        <div className="mb-3 p-2 bg-light">
          <small>Assignment ID: {assignment._id || "New Assignment"}</small>
        </div>
          <Form.Group className="mb-3" controlId="wd-assignment-name">
            <Form.Label>Assignment Name</Form.Label>
            <Form.Control placeholder="New Assignment" type="email" value={assignment.title || ""}
              onChange={(e) => { 
                setAssignment({...assignment, title: e.target.value})}}></Form.Control>
          </Form.Group>
          <Form.Group className="mb-3" controlId="wd-textarea">
            <Form.Control placeholder="New Assignment Description"
              as="textarea" rows={3} value={assignment.description || ""}
              onChange={(e) => { setAssignment({...assignment, description: e.target.value}) /*setAssignmentDescription(e.target.value);*/ }}>
            </Form.Control>
          </Form.Group>
          <Form>
            <Form.Group as={Row} className="mb-3">
                <Form.Label column sm={2} className="text-end">Points</Form.Label>
                <Col sm={10}>
                <Form.Control type="text" value={assignment.points || ""} 
                onChange={(e) => { setAssignment({...assignment, points: e.target.value}) /*setAssignmentPoints(e.target.value);*/ }} />
                </Col>
            </Form.Group>
            <fieldset>
                <Form.Group as={Row} className="mb-3">
                <Form.Label column sm={2} className="text-end">Assign</Form.Label>
                <Col sm={10} className="border rounded-2">
                    <Form.Label className="bold-text mt-3" >Due</Form.Label>
                    <InputGroup>
                      <Form.Control type="text" value={assignment.due || ""} 
                        onChange={(e) => { setAssignment({...assignment, due: e.target.value}) /*setAssignmentDue(e.target.value);*/ }}></Form.Control>
                      <InputGroup.Text><IoCalendarOutline /></InputGroup.Text>
                    </InputGroup>
                    <Row className="mb-3 mt-3">
                        <Form.Group as={Col}>
                          <Form.Label className="bold-text" >Available from</Form.Label>
                          <InputGroup >
                            <Form.Control type="text" value={assignment.available || ""} 
                              onChange={(e) => { setAssignment({...assignment, available: e.target.value}) /*setAssignmentAvailable(e.target.value);*/ }}></Form.Control>
                            <InputGroup.Text><IoCalendarOutline /></InputGroup.Text>
                          </InputGroup>
                        </Form.Group>
                        <Form.Group as={Col}>
                          <Form.Label className="bold-text" >Until</Form.Label>
                          <InputGroup>
                            <Form.Control type="text" value={assignment ? assignment.availableUntil : ""} 
                              onChange={(e) => { setAssignment({...assignment, availableUntil: e.target.value}) /*setAssignmentAvailableUntil(e.target.value);*/ }}></Form.Control>
                            <InputGroup.Text><IoCalendarOutline /></InputGroup.Text>
                          </InputGroup>
                        </Form.Group>
                    </Row>
                </Col>
                </Form.Group>
            </fieldset>
          </Form>
          <hr />
          <div className="float-end">
            <Button variant="secondary" size="sm" className="me-1" onClick={() => navigate(`/Kambaz/Courses/${cid}/Assignments`)} >Cancel</Button>
            <Button variant="danger" size="sm" 
              onClick={handleSave}>Save</Button>
          </div>
      </div>
  );}
