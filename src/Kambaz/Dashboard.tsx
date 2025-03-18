import { Button, Card, Col, FormControl, Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import FacultyProtectedRoute from "./Courses/FacultyProtectedRoute";
import { addCourse, addEnrollment, deleteCourse, deleteEnrollment, updateCourse } from "./Courses/reducer";
import { v4 as uuidv4 } from "uuid";
import { useState } from "react";
import { RootState } from "./store";


export default function Dashboard() {
    const dispatch = useDispatch();
    const { currentUser } = useSelector((state: any) => state.accountReducer);
    const { courses, enrollments } = useSelector((state: RootState) => state.courseReducer);
    const [showEnrollments, setShowEnrollments] = useState(false);
    const [course, setCourse] = useState<any>({
        _id: "1234", name: "New Course", number: "New Number",
        startDate: "2023-09-10", endDate: "2023-12-15", description: "New Description",
      });
    const addNewCourse = () => {
    const existingCourseNumbers = courses
        .map(c => c._id)
        .filter(id => id.startsWith('RS'))
        .map(id => parseInt(id.replace('RS', '')));
    const nextCourseNum = existingCourseNumbers.length > 0 ? 
        Math.max(...existingCourseNumbers) + 1 : 
        109;
    const newCourseId = `RS${nextCourseNum}`;
    const newCourse = {
        _id: newCourseId,
        name: course.name,
        number: `RS${4570 + (nextCourseNum - 103)}`,
        startDate: "2023-09-10",
        endDate: "2023-12-15",
        department: "D123",
        credits: 4,
        description: course.description,
        image: "/images/rocket.png"
    };
    dispatch(addCourse(newCourse));
    
    const existingEnrollmentIds = enrollments
        .map(e => parseInt(e._id))
        .filter(id => !isNaN(id));
    const nextEnrollmentId = existingEnrollmentIds.length > 0 ? 
        Math.max(...existingEnrollmentIds) + 1 : 
        10;
    const newEnrollment = {
        _id: nextEnrollmentId.toString(),
        user: currentUser._id,
        course: newCourseId
    };
    dispatch(addEnrollment(newEnrollment));
    
    setCourse({
        _id: uuidv4(),
        name: "New Course", 
        number: "New Number",
        startDate: "2023-09-10", 
        endDate: "2023-12-15", 
        description: "New Description",
    });
    };

    const handleDeleteCourse = (courseId: any) => {
        dispatch(deleteCourse(courseId));
    };

    const handleUpdateCourse = () => {
        dispatch(updateCourse(course));
        setCourse({
            _id: uuidv4(), name: "New Course", number: "New Number",
            startDate: "2023-09-10", endDate: "2023-12-15", description: "New Description",
        })
    }; 

    const handleEnroll = (courseId: string) => {
        const newEnrollment = {
            _id: uuidv4(), 
            user: currentUser._id,
            course: courseId
        };
        dispatch(addEnrollment(newEnrollment));
    };

    const handleUnenroll = (courseId: string) => {
        const enrollmentToDelete = enrollments.find(e => e.course === courseId && e.user === currentUser._id);
        if (enrollmentToDelete) {
            dispatch(deleteEnrollment(enrollmentToDelete._id)); // Delete the specific enrollment
        }
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
                    onClick={handleUpdateCourse} id="wd-update-course-click">
                    Update</Button>
            </h5><br />
            <FormControl value={course.name} className="mb-2" 
                onChange={(e) => setCourse({ ...course, name: e.target.value }) }/>
            <FormControl as="textarea" value={course.description} rows={3}
                onChange={(e) => setCourse({ ...course, description: e.target.value }) }/> <hr />
            </FacultyProtectedRoute>
            <div className="d-flex justify-content-between mb-2 align-items-center">
            <h2 id="wd-dashboard-published">
                Published Courses ({courses.
                    filter((course) =>
                    enrollments.some(
                        (enrollment) =>
                        enrollment.course === course._id &&
                        enrollment.user === currentUser._id
                    )
                    ).length})</h2>
            <Button onClick={() => setShowEnrollments(!showEnrollments)}>
                {showEnrollments ? "Show Enrolled Courses" : "Show All Courses"}
            </Button>
            </div>
            <div id="wd-dashboard-courses">
                <Row xs={1} md={5} className="g-4">
                    {courses
                        .map((course) => {
                            const isEnrolled = enrollments.some(
                            (enrollment) =>
                                enrollment.course === course._id &&
                                enrollment.user === currentUser._id
                            );
                            
                            if (!showEnrollments && !isEnrolled) {
                                return null;  
                            }
                        
                            return (
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
                                                handleDeleteCourse(course._id);
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
                                            <Button className={isEnrolled ? "btn-danger mt-2 justify-content-end" : "btn-success mt-2 justify-content-end" }
                                                onClick={() => isEnrolled ? handleUnenroll(course._id) : handleEnroll(course._id)}>
                                                {isEnrolled ? "Unenroll" : "Enroll"}
                                            </Button>
                                        </Card.Body>
                                    </Card>
                                </Col>
                        )})}
                </Row>
            </div>
        </div>
    )
}