import { FaPlus } from "react-icons/fa6";
import { Button, FormControl, InputGroup } from "react-bootstrap";
import { BiSearch } from "react-icons/bi";
export default function AssignmentsControls() {
    return (
        <div className="d-flex flex-nowrap justify-content-between">
            <InputGroup size="lg" className="me-2 w-50 flex-nowrap">
                <InputGroup.Text><BiSearch/></InputGroup.Text>
                <FormControl placeholder="Search..." />
            </InputGroup>
            <div className="d-flex">
                <Button variant="danger" size="lg" className="me-2 text-nowrap float-end">
                    <FaPlus className="me-2 mb-1"/>
                    Assignment</Button>
                <Button variant="secondary" size="lg" className="text-nowrap float-end">
                    <FaPlus className="me-2 mb-1"/>
                    Group</Button>
            </div>
        </div>
);}