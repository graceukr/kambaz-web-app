import { useSelector } from "react-redux";
import { Navigate, useParams } from "react-router-dom";

const EnrollmentProtectedRoute = ({ children }: { children: JSX.Element }) => {
    const { currentUser } = useSelector((state: any) => state.accountReducer);
    const { enrollments } = useSelector((state: any) => state.enrollments);
    const { cid } = useParams();
    
    const isEnrolled = enrollments.some(
        (enrollment: any) => 
            enrollment.user === currentUser._id && 
            enrollment.course === cid
    );
    
    if (!isEnrolled) {
        return <Navigate to="/Kambaz/Dashboard" />;
    }
    
    return children;
};

export default EnrollmentProtectedRoute;

