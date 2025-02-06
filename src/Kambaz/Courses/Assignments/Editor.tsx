import { Badge, Button, Col, Form, FormControl, FormGroup, FormLabel, FormText, InputGroup, Row } from "react-bootstrap";
import { HiOutlineX } from "react-icons/hi";
import { IoCalendarOutline } from "react-icons/io5";

export default function AssignmentEditor() {
    return (
      <div id="wd-assignments-editor">
        <Form.Group className="mb-3" controlId="wd-assignment-name">
            <Form.Label>Assignment Name</Form.Label>
            <Form.Control type="email" value="A1" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="wd-textarea">
          <Form.Control as="textarea" contentEditable="true" rows={3} 
          value={"The assignment is available online\n\nSubmit a link to the landing page of your Web application running on Netlify.\n\nThe landing page should include the following:\n• Your full name and section\n• Links to each of the lab assignmnets\n• Link to the Kanbas application\n• Links to all relevant source code repositories\n\nThe Kanbas application should include a link to navigate back to the landing page."}>
          </Form.Control>
        </Form.Group>
        <Form>
          <Form.Group as={Row} className="mb-3">
              <Form.Label column sm={2} className="text-end">Points</Form.Label>
              <Col sm={10}>
              <Form.Control type="text" value="100" />
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
                    <Form.Control type="text" value="May 13, 2024, 11:59 PM"></Form.Control>
                    <InputGroup.Text><IoCalendarOutline /></InputGroup.Text>
                  </InputGroup>
                  <Row className="mb-3 mt-3">
                      <Form.Group as={Col}>
                        <Form.Label className="bold-text" >Available from</Form.Label>
                        <InputGroup >
                          <Form.Control type="text" value="May 6, 2024, 12:00 AM"></Form.Control>
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
  );}
  