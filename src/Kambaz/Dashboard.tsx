import { Button, Card, Col, FormControl, Row } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import FacultyProtectedRoute from "./Courses/FacultyProtectedRoute";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { enrollments } from "./Database";

export default function Dashboard({   
    courses,
    course,
    setCourse,
    addNewCourse,
    deleteCourse,
    updateCourse,
    enrolling,
    setEnrolling,
    updateEnrollment,
}: {
    courses: any[]; 
    course: any;
    setCourse: (course: any) => void;
    addNewCourse: () => void;
    deleteCourse: (course: any) => void;
    updateCourse: () => void;
    enrolling: boolean;
    setEnrolling: (enrolling: boolean) => void;
    updateEnrollment: (courseId: string, enrolled: boolean) => void
}) {
    const navigate = useNavigate();

    useEffect(() => {
        console.log("Courses updated:", courses.length, courses);
    }, [courses]);

    const handleUpdateCourse = () => {
        updateCourse();
        setCourse({
          _id: "new",
          name: "New course",
          number: "123",
          description: "New description",
          image: "green.jpeg",
        });
      };
    
      const handleAddNewCourse = () => {
        addNewCourse();
      };
    
      const handleGoToCourse = (courseId: string) => {
        if (isEnrolled(courseId)) {
          navigate(`/Kambaz/Courses/${courseId}/Home`);
        } else {
          navigate("/Kambaz/Dashboard");
        }
      };
    
      const isEnrolled = (courseId: string) => {
        return courses.some((course) => course._id === courseId);
      };

      const { currentUser } = useSelector((state: any) => state.accountReducer);
      console.log("enrollments", enrollments);
    
      
    return (
        <div id="wd-dashboard">
            <h1 id="wd-dashboard-title">
                Dashboard
                <button onClick={() => setEnrolling(!enrolling)} className="float-end btn btn-primary" >
                    {enrolling ? "My Courses" : "All Courses"}
                </button></h1> <hr />
            <FacultyProtectedRoute>
            <h5>New Course
                <Button className="btn btn-primary float-end"
                        id="wd-add-new-course-click"
                        onClick={() => handleAddNewCourse()} > Add </Button>
                <Button className="btn btn-warning float-end me-2"
                    onClick={() => handleUpdateCourse()} id="wd-update-course-click">
                    Update</Button>
            </h5><br />
            <FormControl value={course.name} className="mb-2" 
                onChange={(e) => setCourse({ ...course, name: e.target.value }) }/>
            <FormControl as="textarea" value={course.description} rows={3}
                onChange={(e) => setCourse({ ...course, description: e.target.value }) }/> <hr />
            </FacultyProtectedRoute>
            <div className="d-flex justify-content-between mb-2 align-items-center">
            <h2 id="wd-dashboard-published">
                Published Courses ({courses.length})</h2>
            </div>
            <div id="wd-dashboard-courses">
                <Row xs={1} md={5} className="g-4">
                    {courses 
                        .map((course: {
                            _id: string;
                            image: any;
                            name: string;
                            enrolled: boolean;
                            description: string | undefined;
                        }) => 
                            course && (
                                <Col key={course._id} className="wd-dashboard-course" style={{ width: "300px" }}>
                                    <Card className="wd-dashboard-course-link text-decoration-none text-dark">
                                        <Card.Img variant="top" src={course.image} width="100%" height={160} /> 
                                        <Card.Body>
                                            <Card.Title className="wd-dashboard-course-title text-nowrap overflow-hidden">
                                                {course.name} </Card.Title>
                                            <Card.Text className="wd-dashboard-course-description overflow-hidden" style={{ height: "100px" }}>
                                                {course.description} </Card.Text>
                                                <Button
                                                    onClick={() => handleGoToCourse(course._id)}
                                                    variant="primary">
                                                    Go
                                                </Button>
                                            <FacultyProtectedRoute>
                                            <Button onClick={() => {
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
                                                className="btn btn-warning float-end me-2" >
                                                Edit
                                            </Button>
                                            </FacultyProtectedRoute>
                                            
                                            {enrolling && (
                                                <button onClick={(event) => { 
                                                    event.preventDefault();
                                                    updateEnrollment(course._id, !course.enrolled);
                                                }}
                                                    className={`btn mt-2 ${ course.enrolled ? "btn-danger" : "btn-success" } float-end`} >
                                                    {course.enrolled ? "Unenroll" : "Enroll"}
                                                </button>
                                            )}
                                        </Card.Body>
                                    </Card>
                                </Col>
                        ))}
                </Row>
            </div>
        </div>
    )   
}
