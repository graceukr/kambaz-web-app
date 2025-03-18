import { useParams } from "react-router";
import FacultyProtectedRoute from "../FacultyProtectedRoute";
import Modules from "../Modules";
import CourseStatus from "./Status";
export default function Home() {
  const params = useParams();
  console.log("Home component params:", params);
  return (
    <div className="d-flex" id="wd-home">
      <div className="flex-fill">
        <Modules />
      </div>
      <div className="d-none d-xl-block ms-3">
        <FacultyProtectedRoute><CourseStatus /></FacultyProtectedRoute>
      </div>
    </div>
);}
