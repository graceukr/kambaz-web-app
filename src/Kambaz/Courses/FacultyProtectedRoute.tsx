import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
export default function FacultyProtectedRoute({ children }: { 
    children: any }) {
    const { currentUser } = useSelector((state: any) => state.accountReducer);
    
    if (!currentUser) {
        return <Navigate to="/Kambaz/Account/Signin" />;
    }

    if (currentUser.role === "FACULTY") {
        return children;
    } else {
        return null;
    }
}