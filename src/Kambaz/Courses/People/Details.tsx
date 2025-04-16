import { useEffect, useState } from "react";
import { FaCheck, FaUserCircle } from "react-icons/fa";
import { IoCloseSharp } from "react-icons/io5";
import { useParams, useNavigate } from "react-router";
import * as client from "../../Account/client";
import { FormControl, FormSelect } from "react-bootstrap";
import { FaPencil } from "react-icons/fa6";
export default function PeopleDetails() {
  const { uid} = useParams();
  const [user, setUser] = useState<any>({});
  const navigate = useNavigate();
  const fetchUser = async () => {
    if (!uid) return;
    const user = await client.findUserById(uid);
    setUser(user);
  };
  const deleteUser = async (uid: string) => {
    await client.deleteUser(uid);
    navigate(-1);
  };
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [role, setRole] = useState("")
  const [editing, setEditing] = useState(false);
  const saveUser = async () => {
    const [firstName, lastName ] = name.split(" ");
    const updatedUser = { ...user, firstName, lastName, email, role };
    await client.updateUser(updatedUser);
    setUser(updatedUser);
    setEditing(false);
    navigate(-1);
  };

  useEffect(() => {
    if (uid) fetchUser();
  }, [uid]);
  if (!uid) return null;

  return (
    <div className="wd-people-details position-fixed top-0 end-0 bottom-0 bg-white p-4 shadow w-25">
      <button onClick={() => navigate(-1)} className="btn position-fixed end-0 top-0 wd-close-details">
        <IoCloseSharp className="fs-1" /> </button>
      <div className="text-center mt-2"> <FaUserCircle className="text-secondary me-2 fs-1" /> </div><hr />
      <div > 
       {!editing && (
          <FaPencil onClick={() => setEditing(true)}
              className="text-danger float-end fs-5 mt-2 wd-edit" /> )}
        {editing && (
          <FaCheck onClick={() => saveUser()}
              className="text-danger float-end fs-5 mt-2 me-2 wd-save" /> )}
        {!editing && (
            <div className="wd-fields">
                <div className="text-danger fs-4 wd-name"
                onClick={() => setEditing(true)}>
                {user.firstName} {user.lastName} </div>
                
                <div className="wd-email"
                onClick={() => setEditing(true)}>
                <b>Email:</b>{user.email} </div>
                
                <div className="wd-role"
                onClick={() => setEditing(true)}>
                <b>Roles:</b>{user.role}</div>
            </div>
        )}
        {user && editing && (
            <div>
                <FormControl className="w-50 wd-edit-name"
                    defaultValue={`${user.firstName} ${user.lastName}`}
                    onChange={(e) => setName(e.target.value)}
                    onKeyDown={(e) => {
                    if (e.key === "Enter") { saveUser(); }}}/>
                <FormControl className="w-50 wd-edit-email"
                    defaultValue={`${user.email}`}
                    onChange={(e) => setEmail(e.target.value)}
                    onKeyDown={(e) => {
                        if (e.key === "Enter") { saveUser(); }}}/>
                <FormSelect className="w-50 wd-edit-role" 
                    defaultValue={`${user.role}`}
                    onChange={(e) =>
                        setRole(e.target.value)}>
                    <option selected>{user.role}</option>
                    <option value="FACULTY">FACULTY</option>
                    <option value="STUDENT">STUDENT</option>
                    <option value="TA">TA</option>
                    <option value="ADMIN">ADMIN</option>
                </FormSelect>
            </div>
            )}
      </div>
      <b>Login ID:</b>        <span className="wd-login-id">      {user.loginId}      </span> <br />
      <b>Section:</b>         <span className="wd-section">       {user.section}      </span> <br />
      <b>Total Activity:</b>  <span className="wd-total-activity">{user.totalActivity}</span> 
      <hr />
      <button onClick={() => deleteUser(uid)} className="btn btn-danger float-end wd-delete" > Delete </button>
      <button onClick={() => navigate(-1)}
              className="btn btn-secondary float-start float-end me-2 wd-cancel" > Cancel </button>
    </div> 
);}