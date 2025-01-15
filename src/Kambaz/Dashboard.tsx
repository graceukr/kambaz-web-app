import { Link } from "react-router-dom";

export default function Dashboard() {
    return (
        <div id="wd-dashboard">
            <h1 id="wd-dashboard-title">Dashboard</h1> <hr />
            <h2 id="wd-dashboard-published">Published Courses (12)</h2> <hr />
            <div id="wd-dashboard-courses">
                <div className="wd-dashboard-course">
                    <Link to="/Kambaz/Courses/1234/Home" 
                            className="wd-dashboard-course-link" >
                        <img src="/images/reactjs.jpg" width={200} />
                        <div>
                            <h5> CS1234 React JS </h5>
                            <p className="wd-dashboard-course-title">
                                Full Stack software developer  </p>
                            <button> Go </button>
                        </div>
                    </Link>
                </div>
                <div className="wd-dashboard-course"> 
                    <Link to="/Kambaz/Courses/1234/Home" 
                            className="wd-dashboard-course-link" >
                        <img src="/images/reactjs.jpg" width={200} />
                        <div>
                            <h5> CS5678 OOD </h5>
                            <p className="wd-dashboard-course-title">
                                Software design principles  </p>
                            <button> Go </button>
                        </div>
                    </Link> 
                </div>
                <div className="wd-dashboard-course"> 
                    <Link to="/Kambaz/Courses/1234/Home" 
                            className="wd-dashboard-course-link" >
                        <img src="/images/reactjs.jpg" width={200} />
                        <div>
                            <h5> IS1234 HCI </h5>
                            <p className="wd-dashboard-course-title">
                                Human computer interaction research  </p>
                            <button> Go </button>
                        </div>
                    </Link>  
                </div>
                <div className="wd-dashboard-course"> 
                    <Link to="/Kambaz/Courses/1234/Home" 
                            className="wd-dashboard-course-link" >
                        <img src="/images/reactjs.jpg" width={200} />
                        <div>
                            <h5> IS5678 Intro to Web Dev </h5>
                            <p className="wd-dashboard-course-title">
                                HTML and CSS basics  </p>
                            <button> Go </button>
                        </div>
                    </Link> 
                </div>
                <div className="wd-dashboard-course"> 
                    <Link to="/Kambaz/Courses/1234/Home" 
                            className="wd-dashboard-course-link" >
                        <img src="/images/reactjs.jpg" width={200} />
                        <div>
                            <h5> ARTG1234 Interaction Design </h5>
                            <p className="wd-dashboard-course-title">
                                UI/UX and design system  </p>
                            <button> Go </button>
                        </div>
                    </Link> 
                </div>
                <div className="wd-dashboard-course"> 
                    <Link to="/Kambaz/Courses/1234/Home" 
                            className="wd-dashboard-course-link" >
                        <img src="/images/reactjs.jpg" width={200} />
                        <div>
                            <h5> ARTG5678 Typography 2 </h5>
                            <p className="wd-dashboard-course-title">
                                Grid system typography  </p>
                            <button> Go </button>
                        </div>
                    </Link> 
                </div>
                <div className="wd-dashboard-course"> 
                    <Link to="/Kambaz/Courses/1234/Home" 
                            className="wd-dashboard-course-link" >
                        <img src="/images/reactjs.jpg" width={200} />
                        <div>
                            <h5> PSY1234 Foundations of Psych </h5>
                            <p className="wd-dashboard-course-title">
                                Fundamentals of the study of psych  </p>
                            <button> Go </button>
                        </div>
                    </Link> 
                </div>
            </div>
        </div>

    )
}