import { Table } from "react-bootstrap";
import { FaUserCircle } from "react-icons/fa";
import * as db from "../../Database";
import { useParams } from "react-router";

export default function PeopleTable() {
  const { cid } = useParams();
  const { users, enrollments }= db;
 return (

  <div id="wd-people-table">
    <Table striped>
        <thead>
        <tr><th>Name</th><th>Login ID</th><th>Section</th><th>Role</th><th>Last Activity</th><th>Total Activity</th></tr>
        </thead>
        <tbody>
        {users
            .filter((usr) => 
              enrollments.some((enrollment) => enrollment.user === usr._id && enrollment.course === cid) )
            .map((user: any) => (
              <tr>
                <td className="wd-full-name text-nowrap">
                        <FaUserCircle className="me-2 fs-1 text-secondary" />
                        <span className="wd-first-name">{user.first}</span>{" "}
                        <span className="wd-last-name">{user.last}</span></td>
                <td className="wd-login-id">{user.loginID}</td>
                <td className="wd-section">{user.section}</td>
                <td className="wd-role">{user.role}</td>
                <td className="wd-last-activity">{user.lastActivity}</td>
                <td className="wd-total-activity">{user.totalActivity}</td>
              </tr>
            ))}
            </tbody>
    </Table>
  </div>
);}