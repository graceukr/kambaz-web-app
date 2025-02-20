import { ListGroup } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useParams, useLocation } from "react-router";

export default function CourseNavigation() {
  const { cid } = useParams();
  const { pathname } = useLocation();
  const links = ["Home", "Modules", "Piazza", "Zoom", "Assignments", "Quizzes", "Grades", "People"];
  return (
    <ListGroup id="wd-course-navigation" style={{width: 160 }}
        className="wd list-group fs-5 rounded-0 me-4">
      {links.map((link) => (
        <ListGroup.Item key={`/Kambaz/Courses/${cid}/${link}`} as={Link} to={`/Kambaz/Courses/${cid}/${link}`} 
              className={`list-group-item border border-0
                ${pathname.includes(link) ? "active" : "text-danger"}`}>
              {link}
          </ListGroup.Item>
      ))}
    </ListGroup>
  );
}