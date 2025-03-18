import { ListGroup } from "react-bootstrap";
import { useSelector } from "react-redux";
import { Link, useLocation } from "react-router-dom";

export default function AccountNavigation() {
    const { currentUser } = useSelector((state: any) => state.accountReducer);
    const links = currentUser ? ["Profile"] : ["Signin", "Signup"];
    const { pathname } = useLocation();
    return (
        <ListGroup id="wd-account-navigation" className="wd list-group fs-5 rounded-0 sticky-top">
            {links.map((link) => (
                <ListGroup.Item key={`/Kambaz/Account/${link}`} as={Link} to={`/Kambaz/Account/${link}`} 
                    className={`list-group-item border border-0
                        ${pathname.includes(link) ? "active" : "text-danger"}`}>
                    {link}
                </ListGroup.Item>
            ))}
        </ListGroup>
    );
}

