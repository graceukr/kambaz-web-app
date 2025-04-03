import { Button, Card, Col, FormControl, Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import FacultyProtectedRoute from "./Courses/FacultyProtectedRoute";
import { useState } from "react";
import { RootState } from "./store";
import * as courseClient from "./Courses/client";
import { addEnrollment, deleteEnrollment } from "./Courses/reducer";
import { v4 as uuidv4 } from "uuid";

export default function Dashboard({   
    courses,
    course,
    allCourses,
    setCourse,
    addNewCourse,
    deleteCourse,
    updateCourse,
}: {
    courses: any[]; 
    course: any;
    allCourses: any[];
    setCourse: (course: any) => void;
    addNewCourse: () => void;
    deleteCourse: (course: any) => void;
    updateCourse: () => void;
}) {
    
    const { currentUser } = useSelector((state: any) => state.accountReducer);
    const { enrollments } = useSelector((state: RootState) => state.courseReducer);
    const [showEnrollments, setShowEnrollments] = useState(false);
    const displayCourses = showEnrollments ? allCourses : courses; 
    const dispatch = useDispatch();
    console.log(enrollments);

    const isEnrolled = (courseId: string) => {
        return enrollments.some(enrollment => 
            enrollment.course === courseId && 
            enrollment.user === currentUser._id);
    }

    const handleEnroll = async (course: any) => {
        const newEnrollment = {_id: uuidv4(), user: currentUser._id, course: course._id};
        dispatch(addEnrollment(newEnrollment));
        await courseClient.enrollUserInCourse(newEnrollment);
    };

    const handleUnenroll = async (courseId: string) => {
        const enrollmentToDelete = enrollments.find(e => e.course === courseId && e.user === currentUser._id);
        await courseClient.unenrollUserFromCourse(enrollmentToDelete);
        dispatch(deleteEnrollment(courseId));
    };

    return (
        <div id="wd-dashboard">
            <h1 id="wd-dashboard-title">Dashboard</h1> <hr />
            <FacultyProtectedRoute>
            <h5>New Course
                <Button className="btn btn-primary float-end"
                        id="wd-add-new-course-click"
                        onClick={addNewCourse} > Add </Button>
                <Button className="btn btn-warning float-end me-2"
                    onClick={() => updateCourse()} id="wd-update-course-click">
                    Update</Button>
            </h5><br />
            <FormControl value={course.name} className="mb-2" 
                onChange={(e) => setCourse({ ...course, name: e.target.value }) }/>
            <FormControl as="textarea" value={course.description} rows={3}
                onChange={(e) => setCourse({ ...course, description: e.target.value }) }/> <hr />
            </FacultyProtectedRoute>
            <div className="d-flex justify-content-between mb-2 align-items-center">
            <h2 id="wd-dashboard-published">
                Published Courses ({displayCourses.length})</h2>
            <Button onClick={() => {
                setShowEnrollments(!showEnrollments)}}>
                {showEnrollments ? "Show Enrolled Courses" : "Show All Courses"}
            </Button>
            </div>
            <div id="wd-dashboard-courses">
                <Row xs={1} md={5} className="g-4">
                    {displayCourses
                        .map((course) => (
                                <Col key={course._id} className="wd-dashboard-course" style={{ width: "300px" }}>
                                    <Card className="wd-dashboard-course-link text-decoration-none text-dark">
                                        <Card.Img variant="top" src={course.image} width="100%" height={160} /> 
                                        <Card.Body>
                                            <Card.Title className="wd-dashboard-course-title text-nowrap overflow-hidden">
                                                {course.name} </Card.Title>
                                            <Card.Text className="wd-dashboard-course-description overflow-hidden" style={{ height: "100px" }}>
                                                {course.description} </Card.Text>
                                            <Link to={`/Kambaz/Courses/${course._id}/Home`}><Button variant="primary">Go</Button></Link>
                                            <FacultyProtectedRoute>
                                            <Button onClick={(event) => {
                                                event.preventDefault();
                                                deleteCourse(course._id);
                                                }} className="btn btn-danger float-end"
                                                id="wd-delete-course-click">
                                                Delete
                                            </Button>
                                            <Button id="wd-edit-course-click"
                                                onClick={(event) => {
                                                    event.preventDefault();
                                                    setCourse(course);
                                                }}
                                                className="btn btn-warning me-2 float-end" >
                                                Edit
                                            </Button>
                                            </FacultyProtectedRoute>
                                            <Button className={isEnrolled(course._id) ? "btn-danger mt-2 justify-content-end" : "btn-success mt-2 justify-content-end" }
                                                onClick={() => {
                                                    isEnrolled(course._id) ? handleUnenroll(course._id) : handleEnroll(course._id)}}>
                                                {isEnrolled(course._id) ? "Unenroll" : "Enroll"}
                                            </Button>
                                        </Card.Body>
                                    </Card>
                                </Col>
                        ))}
                </Row>
            </div>
        </div>
    )   
}