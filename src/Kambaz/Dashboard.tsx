import { Button, Card, Col, Row } from "react-bootstrap";
import { Link } from "react-router-dom";

export default function Dashboard() {
    return (
        <div id="wd-dashboard">
            <h1 id="wd-dashboard-title">Dashboard</h1> <hr />
            <h2 id="wd-dashboard-published">Published Courses (7)</h2> <hr />
            <div id="wd-dashboard-courses">
                <Row xs={1} md={5} className="g-4">
                    <Col className="wd-dashboard-course" style={{ width: "300px" }}>
                        <Card>
                            <Link to="/Kambaz/Courses/1234/Home" 
                                className="wd-dashboard-course-link text-decoration-none text-dark" >
                            <Card.Img variant="top" src="/images/reactjs.jpg" width="100%" height={160} />
                            <Card.Body>
                                <Card.Title className="wd-dashboard-course-title">CS1234 React JS</Card.Title>
                                <br />
                                <Card.Text className="wd-dashboard-course-description">Full Stack software developer</Card.Text>
                                <Button>Go</Button>
                            </Card.Body>
                            </Link>
                        </Card>
                    </Col>
                    <Col className="wd-dashboard-course" style={{ width: "300px" }}>
                        <Card>
                            <Link to="/Kambaz/Courses/1234/Home" 
                                className="wd-dashboard-course-link text-decoration-none text-dark" >
                            <Card.Img variant="top" src="/images/code.png" width="100%" height={160} />
                            <Card.Body>
                                <Card.Title className="wd-dashboard-course-title">CS5678 OOD</Card.Title>
                                <br />
                                <Card.Text className="wd-dashboard-course-description">Software design principles</Card.Text>
                                <Button>Go</Button>
                            </Card.Body>
                            </Link>
                        </Card>
                    </Col>
                    <Col className="wd-dashboard-course" style={{ width: "300px" }}>
                        <Card>
                            <Link to="/Kambaz/Courses/1234/Home" 
                                className="wd-dashboard-course-link text-decoration-none text-dark" >
                            <Card.Img variant="top" src="/images/hci.png" width="100%" height={160} />
                            <Card.Body>
                                <Card.Title className="wd-dashboard-course-title">IS1234 HCI</Card.Title>
                                <Card.Text className="wd-dashboard-course-description">Human computer interaction research</Card.Text>
                                <Button>Go</Button>
                            </Card.Body>
                            </Link>
                        </Card>
                    </Col>
                    <Col className="wd-dashboard-course" style={{ width: "300px" }}>
                        <Card>
                            <Link to="/Kambaz/Courses/1234/Home" 
                                className="wd-dashboard-course-link text-decoration-none text-dark" >
                            <Card.Img variant="top" src="/images/uxr.png" width="100%" height={160} />
                            <Card.Body>
                                <Card.Title className="wd-dashboard-course-title">IS5678 UX Research</Card.Title>
                                <br />
                                <Card.Text className="wd-dashboard-course-description">Basics of UX practices</Card.Text>
                                <Button>Go</Button>
                            </Card.Body>
                            </Link>
                        </Card>
                    </Col>
                    <Col className="wd-dashboard-course" style={{ width: "300px" }}>
                        <Card>
                            <Link to="/Kambaz/Courses/1234/Home" 
                                className="wd-dashboard-course-link text-decoration-none text-dark" >
                            <Card.Img variant="top" src="/images/figma.png" width="100%" height={160} />
                            <Card.Body>
                                <Card.Title className="wd-dashboard-course-title">ARTG1234 Interaction Design</Card.Title>
                                <Card.Text className="wd-dashboard-course-description">UI/UX and design system</Card.Text>
                                <Button>Go</Button>
                            </Card.Body>
                            </Link>
                        </Card>
                    </Col>
                    <Col className="wd-dashboard-course" style={{ width: "300px" }}>
                        <Card>
                            <Link to="/Kambaz/Courses/1234/Home" 
                                className="wd-dashboard-course-link text-decoration-none text-dark" >
                            <Card.Img variant="top" src="/images/typography.png" width="100%" height={160} />
                            <Card.Body>
                                <Card.Title className="wd-dashboard-course-title">ARTG5678 Typography 2</Card.Title>
                                <br />
                                <Card.Text className="wd-dashboard-course-description">Grid system typography</Card.Text>
                                <Button>Go</Button>
                            </Card.Body>
                            </Link>
                        </Card>
                    </Col>
                    <Col className="wd-dashboard-course" style={{ width: "300px" }}>
                        <Card>
                            <Link to="/Kambaz/Courses/1234/Home" 
                                className="wd-dashboard-course-link text-decoration-none text-dark" >
                            <Card.Img variant="top" src="/images/psych.png" width="100%" height={160} />
                            <Card.Body>
                                <Card.Title className="wd-dashboard-course-title">PSY1234 Foundations of Psych</Card.Title>
                                <Card.Text className="wd-dashboard-course-description">Fundamentals of psych</Card.Text>
                                <Button>Go</Button>
                            </Card.Body>
                            </Link>
                        </Card>
                    </Col>
                </Row>
            </div>
        </div>
    )
}