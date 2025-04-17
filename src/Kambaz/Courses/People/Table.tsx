import { Table } from "react-bootstrap";
import { FaUserCircle } from "react-icons/fa";
import PeopleDetails from "./Details";
import { Link } from "react-router";
import { useSelector } from "react-redux";

export default function PeopleTable({ users = [] }: { users?: any[] }) {
  const { currentUser } = useSelector((state: any) => state.accountReducer);
  const isAdmin = currentUser.role === "ADMIN";
 return (

  <div id="wd-people-table">
    <PeopleDetails />
    <Table striped>
        <thead>
        <tr><th>Name</th><th>Login ID</th><th>Section</th><th>Role</th><th>Last Activity</th><th>Total Activity</th></tr>
        </thead>
        <tbody>
        {users
            .map((user: any) => (
              <tr>
                <td className="wd-full-name text-nowrap">
                  {isAdmin ? (
                    <Link to={`/Kambaz/Account/Users/${user._id}`} className="text-decoration-none">
                        <FaUserCircle className="me-2 fs-1 text-secondary" />
                        <span className="wd-first-name text-danger">{user.firstName}</span>{" "}
                        <span className="wd-last-name text-danger">{user.lastName}</span>
                    </Link>
                  ) : (
                    <div>
                        <FaUserCircle className="me-2 fs-1 text-secondary" />
                        <span className="wd-first-name text-danger">{user.firstName}</span>{" "}
                        <span className="wd-last-name text-danger">{user.lastName}</span>
                    </div>
                  )}</td>
                <td className="wd-login-id">{user.loginId}</td>
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