import { Button, Col, Form, InputGroup, Row } from "react-bootstrap";
import { IoCalendarOutline } from "react-icons/io5";
import { useNavigate, useParams } from "react-router";
//import * as db from "../../Database";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation } from "react-router-dom"; 
import { addAssignment, updateAssignment } from "./reducer";
import { RootState } from "../../store";

export default function AssignmentEditor() {
    const { aid, cid } = useParams();
    const location = useLocation();
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const assignments = useSelector((state: RootState) => state.assignmentReducer.assignments);
    const [assignmentTitle, setAssignmentTitle] = useState("");
    const [assignmentDescription, setAssignmentDescription] = useState("");
    const [assignmentPoints, setAssignmentPoints] = useState("");
    const [assignmentDue, setAssignmentDue] = useState("");
    const [assignmentAvailable, setAssignmentAvailable] = useState("");
    const [assignmentAvailableUntil, setAssignmentAvailableUntil] = useState("");
    const isNewAssignment = location.pathname.endsWith("/new");
    

    useEffect(() => {
      if (!isNewAssignment) {
        const existingAssignment = assignments.find(a => a._id === aid);
        
        if (existingAssignment) {
          setAssignmentTitle(existingAssignment.title || "");
          setAssignmentDescription(existingAssignment.description || "");
          setAssignmentPoints(existingAssignment.points.toString() || "");
          setAssignmentDue(existingAssignment.due || "");
          setAssignmentAvailable(existingAssignment.available || "");
          setAssignmentAvailableUntil("");
        }
      } else {
        setAssignmentTitle("");
        setAssignmentDescription("");
        setAssignmentPoints("");
        setAssignmentDue("");
        setAssignmentAvailable("");
        setAssignmentAvailableUntil("");
      }
    }, [isNewAssignment, aid, assignments]);
    

    return (
      <div id="wd-assignments-editor">
          <Form.Group className="mb-3" controlId="wd-assignment-name">
            <Form.Label>Assignment Name</Form.Label>
            <Form.Control placeholder="New Assignment" type="email" value={assignmentTitle}
              onChange={(e) => { setAssignmentTitle(e.target.value); }}></Form.Control>
          </Form.Group>
          <Form.Group className="mb-3" controlId="wd-textarea">
            <Form.Control placeholder="New Assignment Description"
              as="textarea" contentEditable="true" rows={3} value={assignmentDescription}
              onChange={(e) => { setAssignmentDescription(e.target.value); }}>
            </Form.Control>
          </Form.Group>
          <Form>
            <Form.Group as={Row} className="mb-3">
                <Form.Label column sm={2} className="text-end">Points</Form.Label>
                <Col sm={10}>
                <Form.Control type="text" value={assignmentPoints} 
                onChange={(e) => { setAssignmentPoints(e.target.value); }} />
                </Col>
            </Form.Group>
            <fieldset>
                <Form.Group as={Row} className="mb-3">
                <Form.Label column sm={2} className="text-end">Assign</Form.Label>
                <Col sm={10} className="border rounded-2">
                    <Form.Label className="bold-text mt-3" >Due</Form.Label>
                    <InputGroup>
                      <Form.Control type="text" value={assignmentDue} 
                        onChange={(e) => { setAssignmentDue(e.target.value); }}></Form.Control>
                      <InputGroup.Text><IoCalendarOutline /></InputGroup.Text>
                    </InputGroup>
                    <Row className="mb-3 mt-3">
                        <Form.Group as={Col}>
                          <Form.Label className="bold-text" >Available from</Form.Label>
                          <InputGroup >
                            <Form.Control type="text" value={assignmentAvailable} 
                              onChange={(e) => { setAssignmentAvailable(e.target.value); }}></Form.Control>
                            <InputGroup.Text><IoCalendarOutline /></InputGroup.Text>
                          </InputGroup>
                        </Form.Group>
                        <Form.Group as={Col}>
                          <Form.Label className="bold-text" >Until</Form.Label>
                          <InputGroup>
                            <Form.Control type="text" value={assignmentAvailableUntil} 
                              onChange={(e) => { setAssignmentAvailableUntil(e.target.value); }}></Form.Control>
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
              onClick={() => {
                if (isNewAssignment) {
                  dispatch(addAssignment({
                    title: assignmentTitle,
                    description: assignmentDescription,
                    points: assignmentPoints,
                    due: assignmentDue,
                    available: assignmentAvailable,
                    availableUntil: assignmentAvailableUntil,
                    course: cid
                  }));
                } else {
                  dispatch(updateAssignment({
                    _id: aid,
                    title: assignmentTitle,
                    description: assignmentDescription,
                    points: assignmentPoints,
                    due: assignmentDue,
                    available: assignmentAvailable,
                    availableUntil: assignmentAvailableUntil,
                  }));
                }
                navigate(`/Kambaz/Courses/${cid}/Assignments`); 
              }}>Save</Button>
          </div>

          
      </div>
  );}
