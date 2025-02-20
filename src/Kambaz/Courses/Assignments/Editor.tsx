import { Button, Col, Form, InputGroup, Row } from "react-bootstrap";
import { HiOutlineX } from "react-icons/hi";
import { IoCalendarOutline } from "react-icons/io5";
import { useParams } from "react-router";
import * as db from "../../Database";

export default function AssignmentEditor() {
  const { aid } = useParams();
  const assignments = db.assignments;

    return (
      <div id="wd-assignments-editor">
        {assignments
            .filter((assignment) => assignment._id === aid)
            .map((assignment) => (
              <div>
                <Form.Group className="mb-3" controlId="wd-assignment-name">
                <Form.Label>Assignment Name</Form.Label>
                <Form.Control type="email" value={assignment.title}>{}</Form.Control>
              </Form.Group>
              <Form.Group className="mb-3" controlId="wd-textarea">
                <Form.Control as="textarea" contentEditable="true" rows={3} 
                  value={assignment.description}>
                </Form.Control>
              </Form.Group>
              <Form>
                <Form.Group as={Row} className="mb-3">
                    <Form.Label column sm={2} className="text-end">Points</Form.Label>
                    <Col sm={10}>
                    <Form.Control type="text" value={assignment.points} />
                    </Col>
                </Form.Group>
                <Form.Group as={Row} className="mb-3">
                    <Form.Label column sm={2} className="text-end">Assignment Group</Form.Label>
                    <Col sm={10}>
                    <Form.Select>
                          <option selected>ASSIGNMENTS</option>
                    </Form.Select>
                    </Col>
                </Form.Group>
                <Form.Group as={Row} className="mb-3">
                    <Form.Label column sm={2} className="text-end">Display Grade as</Form.Label>
                    <Col sm={10}>
                    <Form.Select>
                          <option selected>Percentage</option>
                    </Form.Select>
                    </Col>
                </Form.Group>
                <fieldset>
                    <Form.Group as={Row} className="mb-3">
                    <Form.Label column sm={2} className="text-end">Submission Type</Form.Label>
                    <Col sm={10} className="border">
                        <Form.Select className="mt-3 mb-3">
                          <option selected>Online</option>
                        </Form.Select>
                        <b>Online Entry Options</b>
                        <Form.Check className="mt-2 mb-2" label="Media Recordings"
                        name="formHorizontalRadios"/>
                        <Form.Check className="mb-2" label="Website URL"
                        checked name="formHorizontalRadios"/>
                        <Form.Check className="mb-2" label="Media Recordings"
                        name="formHorizontalRadios"/>
                        <Form.Check className="mb-2" label="Student Annotation"
                        name="formHorizontalRadios"/>
                        <Form.Check className="mb-2" label="File Uploads"
                        name="formHorizontalRadios"/>
                    </Col>
                    </Form.Group>
                </fieldset>
                <fieldset>
                    <Form.Group as={Row} className="mb-3">
                    <Form.Label column sm={2} className="text-end">Assign</Form.Label>
                    <Col sm={10} className="border">
                        <Form.Label className="bold-text mt-3" >Assign to</Form.Label>
                        <div className="position-relative d-flex align-items-center border rounded p-2">
                          <div className="badge rounded-pill bg-light text-dark d-flex align-items-center me-2">
                            Everyone
                            <span className="ms-1 text-muted ">{" "}<HiOutlineX />{" "}</span>
                          </div>
                        </div>
                        <Form.Label className="bold-text mt-3" >Due</Form.Label>
                        <InputGroup>
                          <Form.Control type="text" value={assignment.due}></Form.Control>
                          <InputGroup.Text><IoCalendarOutline /></InputGroup.Text>
                        </InputGroup>
                        <Row className="mb-3 mt-3">
                            <Form.Group as={Col}>
                              <Form.Label className="bold-text" >Available from</Form.Label>
                              <InputGroup >
                                <Form.Control type="text" value={assignment.available}></Form.Control>
                                <InputGroup.Text><IoCalendarOutline /></InputGroup.Text>
                              </InputGroup>
                            </Form.Group>
                            <Form.Group as={Col}>
                              <Form.Label className="bold-text" >Until</Form.Label>
                              <InputGroup>
                                <Form.Control type="text"></Form.Control>
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
                <Button variant="secondary" size="sm" className="me-1">Cancel</Button>
                <Button variant="danger" size="sm">Save</Button>
              </div>
              </div>

            ))}
    
      </div>
  );}
  