
import { Button, Form } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setCurrentUser } from "./reducer";

export default function Profile() {
       const [profile, setProfile] = useState<any>({});
       const dispatch = useDispatch();
       const navigate = useNavigate();
       const { currentUser } = useSelector((state: any) => state.accountReducer);
       const fetchProfile = () => {
              if (!currentUser) return navigate("/Kambaz/Account/Signin");
              setProfile(currentUser);
       };
       const signout = () => {
              dispatch(setCurrentUser(null));
              navigate("/Kambaz/Account/Signin");
       };
       useEffect(() => { fetchProfile(); }, []);
       return (
       <div id="wd-signin-screen">
              <h1>Profile</h1>
              {profile && (
                     <div>
                            <Form.Control id="wd-username"
                                   placeholder="username"
                                   defaultValue={profile.username}
                                   className="mb-2"
                                   onChange={(e) => setProfile({ ...profile, username:  e.target.value })}/>
                            <Form.Control id="wd-password"
                                   placeholder="password"
                                   defaultValue={profile.password} 
                                   type="password"
                                   className="mb-2"
                                   onChange={(e) => setProfile({ ...profile, password:  e.target.value })}/>
                            <Form.Control id="wd-firstname"
                                   placeholder="First Name"
                                   defaultValue={profile.firstName}
                                   className="mb-2"
                                   onChange={(e) => setProfile({ ...profile, firstName: e.target.value })}/>
                            <Form.Control id="wd-lastname"
                                   placeholder="Last Name"
                                   defaultValue={profile.lastName}
                                   className="mb-2"
                                   onChange={(e) => setProfile({ ...profile, lastName: e.target.value })}/>
                            <Form.Control id="wd-dob"
                                   type="date"
                                   defaultValue={profile.dob}
                                   className="mb-2"
                                   onChange={(e) => setProfile({ ...profile, dob: e.target.value })}/>
                            <Form.Control id="wd-email"
                                   type="email"
                                   defaultValue={profile.email}
                                   className="mb-2"
                                   onChange={(e) => setProfile({ ...profile, email: e.target.value })}/> 
                            <select onChange={(e) => setProfile({ ...profile, role:  e.target.value })}
                                   className="form-control mb-2" id="wd-role">
                            <option value="USER">User</option>            <option value="ADMIN">Admin</option>
                            <option value="FACULTY">Faculty</option>      <option value="STUDENT">Student</option>
                            </select>
                            <Button onClick={signout} className="w-100 mb-2" id="wd-signout-btn">
                                   Sign out
                            </Button>
                     </div>)}
       </div> );}
