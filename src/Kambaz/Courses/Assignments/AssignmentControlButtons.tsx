import { IoEllipsisVertical } from "react-icons/io5";
import { BsPlus } from "react-icons/bs";
import FacultyProtectedRoute from "../FacultyProtectedRoute";
export default function AssignmentControlButtons() {
  return (
    <div className="float-end">
      <span 
        style={{
          border: "1px solid gray",
          borderRadius: "15px",
          borderWidth: "1.5px",
          padding: "7px"
        }}
        className="me-2">40% of total</span>
      <FacultyProtectedRoute><BsPlus size={32} /></FacultyProtectedRoute>
      <IoEllipsisVertical className="fs-4" />
    </div> );}