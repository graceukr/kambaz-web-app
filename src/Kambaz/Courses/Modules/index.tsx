export default function Modules() {
    return (
      <div>
        <button>Collapse All</button>&nbsp;
        <button>View Progress</button>&nbsp;
        <label  htmlFor="wd-publish-modules"></label>
            <select id="wd-publish-modules">
                <option selected value="PUBLISH ALL">Publish All</option>
            </select>&nbsp;
        <button>+ Module</button>
        <ul id="wd-modules">
          <li className="wd-module">
            <div className="wd-title">Week 1</div>
            <ul className="wd-lessons">
              <li className="wd-lesson">
                <span className="wd-title">LEARNING OBJECTIVES</span>
                <ul className="wd-content">
                  <li className="wd-content-item">Introduction to the course</li>
                  <li className="wd-content-item">Learn what is Web Development</li>
                </ul>
                </li>
                <li>
                <span className="wd-title">READING</span>
                <ul className="wd-content">
                  <li className="wd-content-item">Full Stack Developer - Chapter 1 - Introduction</li>
                  <li className="wd-content-item">Full Stack Developer - Chapter 2 - Creating User</li>
                </ul>
                </li>
                <li>
                <span className="wd-title">SLIDES</span>
                <ul className="wd-content">
                  <li className="wd-content-item">Introduction to Web Development</li>
                  <li className="wd-content-item">Creating an HTTP server with Node.js</li>
                  <li className="wd-content-item">Creating a React Application</li>
                </ul>
                </li>
            </ul>
          </li>
          <li className="wd-module">
            <div className="wd-title">Week 1, Lecture 2</div>
            <ul className= "wd-lessons">
                <li className="wd-lesson">
                    <span className="wd-title">LEARNING OBJECTIVES</span>
                    <ul className="wd-content">
                        <li className="wd-content-item">Learning how to create user interfaces with HTML</li>
                        <li className="wd-content-item">Deploy the assignment to Netlify</li>
                    </ul>
                </li>
                <li className="wd-lesson">
                    <span className="wd-title">LEARNING OBJECTIVES</span>
                    <ul className="wd-content">
                        <li className="wd-content-item">Introduction to HTML and the DOM</li>
                        <li className="wd-content-item">Formatting Web content with Headings</li>
                        <li className="wd-content-item">Formatting content with Lists and Tables</li>
                    </ul>
                </li>
            </ul>
          </li>
        </ul>
      </div>
  );}
  