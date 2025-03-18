import { FaPlus } from "react-icons/fa6";
import { Button, FormControl, InputGroup } from "react-bootstrap";
import { BiSearch } from "react-icons/bi";
import FacultyProtectedRoute from "../FacultyProtectedRoute";
import { IoEllipsisVertical } from "react-icons/io5";
import { useNavigate, useParams } from "react-router";

export default function AssignmentsControls() {
    const navigate = useNavigate();
    const { cid } = useParams();
    const handleAddAssignment = () => {navigate(`/Kambaz/Courses/${cid}/Assignments/new`);};
    return (
        <div className="d-flex flex-nowrap justify-content-between">
            <InputGroup size="lg" className="me-2 w-50 flex-nowrap">
                <InputGroup.Text><BiSearch/></InputGroup.Text>
                <FormControl placeholder="Search..." />
            </InputGroup>
            <div className="d-flex align-items-center">
                <FacultyProtectedRoute>
                    <Button variant="danger" size="lg" className="me-2 text-nowrap float-end"
                        onClick={handleAddAssignment}>
                        <FaPlus className="me-2 mb-1"/>
                        Assignment</Button>
                    <Button variant="secondary" size="lg" className="me-2 text-nowrap float-end">
                        <FaPlus className="me-2 mb-1"/>
                        Group</Button>
                    <IoEllipsisVertical className="fs-4" />
                </FacultyProtectedRoute>
            </div>
        </div>
);}