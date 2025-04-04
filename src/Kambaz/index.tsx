import { Routes, Route, Navigate } from "react-router";
import Account from "./Account";
import Dashboard from "./Dashboard";
import KambazNavigation from "./Navigation";
import Courses from "./Courses";
import "./styles.css";
import ProtectedRoute from "./Account/ProtectedRoute";
import Session from "./Account/Session";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import * as userClient from "./Account/client";
import * as courseClient from "./Courses/client";
import { addEnrollment, deleteEnrollment } from "./Courses/reducer";
import { enrollments } from "./Database";

export default function Kambaz() {
    const [courses, setCourses] = useState<any[]>([]);
    const [allCourses, setAllCourses] = useState<any[]>([]);
    const { currentUser } = useSelector((state: any) => state.accountReducer);
    const dispatch = useDispatch();
    

    const updateCourse = async () => {
        await courseClient.updateCourse(course);
        setCourses(courses.map((c) => {
            if (c._id === course._id) { return course; }
            else { return c; }
    }));};

    const deleteCourse = async (courseId: string) => {
        //const status = await courseClient.deleteCourse(courseId);
        setCourses(courses.filter((course) => course._id !== courseId));
    };

    const addNewCourse = async () => {
        const newCourse = await userClient.createCourse(course);
        setCourses([...courses, newCourse]);
    };
    
    const fetchCourses = async () => {
      try {
        const courses = await userClient.findMyCourses();
        setCourses(courses);
      } catch (error) {
        console.error(error);
      }
    };

    const fetchAllCourses = async () => {
        try {
          const publishedCourses = await courseClient.fetchAllCourses();
          setAllCourses(publishedCourses);
        } catch (error) {
          console.error("Error fetching all courses:", error);
        }
    };
    console.log("originally", enrollments.length);
    useEffect(() => {
      fetchCourses();
      fetchAllCourses();
    }, [currentUser]);
  
    const [course, setCourse] = useState<any>({
        _id: "1234", name: "New Course", number: "New Number",
        startDate: "2023-09-10", endDate: "2023-12-15", description: "New Description",
    });

    const handleEnroll = async (courseToEnroll: any) => {
        if (!courses.some((course) => course._id === courseToEnroll._id)) {
          setCourses([...courses, courseToEnroll]);
        }
        try {
          await userClient.enrollUserInCourse(courseToEnroll._id);
          if (!courses.some((course) => course._id === courseToEnroll._id)) {
            dispatch(addEnrollment(courseToEnroll));
          }
        } catch (error) {
          console.error("Enrollment failed:", error);
        }
        console.log("in the index", enrollments.length)
      };
    
      const handleUnenroll = async (courseToUnenroll: any) => {
        setCourses(courses.filter((course) => course._id !== courseToUnenroll._id));
        try {
          await userClient.unenrollUserFromCourse(courseToUnenroll._id);
          dispatch(deleteEnrollment(courseToUnenroll));
        } catch (error) {
          console.error("Unenrollment failed:", error);
        }
        console.log("in the index", enrollments.length)
      };

    return (
        <Session>
        <div id="wd-kambaz">
            <KambazNavigation />
            <div className="wd-main-content-offset p-3">
            <Routes>
                <Route path="/" element={<Navigate to="Account" />} />
                <Route path="Account/*" element={<Account />} />
                <Route path="Dashboard" element={<ProtectedRoute>
                    <Dashboard 
                        courses={courses}
                        course={course}
                        allCourses={allCourses}
                        setCourse={setCourse}
                        addNewCourse={addNewCourse}
                        deleteCourse={deleteCourse}
                        updateCourse={updateCourse}
                        addNewEnrollment={handleEnroll}
                        removeOldEnrollment={handleUnenroll}
                        />
                    </ProtectedRoute>}/>
                <Route path="Courses/:cid//*" element={<ProtectedRoute>
                    <Courses 
                        courses={courses} 
                        />
                    </ProtectedRoute>} />
                <Route path="Calendar" element={<h1>Calendar</h1>} />
                <Route path="Inbox" element={<h1>Inbox</h1>} />
            </Routes>
            </div>
        </div>
        </Session>
    )
}

