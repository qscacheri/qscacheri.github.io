import React from 'react'
import "../css/Resume.css"
function Resume() {
    return ( <div className="Resume">
            <h2>Resume</h2>
            <a href="./images/Quin_Scacheri_Resume.pdf">Download</a>
            <div id="resume-header">
                  <p>Quin Scacheri</p>
                  <p>240 West 15th Street, Apt. 10, New York, NY 10011</p>
                  <p>(302) 526-9389</p>
                  <a class="email" href="mailto:quin.scacheri@nyu.edu?" target="_top">quin.scacheri@nyu.edu</a>
                  <p><a id="my-website" href="https://quinscacheri.com">quinscacheri.com</a></p>
            </div>

            <h4 class="section-header">Education</h4>
            <div class="resume-item">
                  <p><span class="bold">New York University</span>, New York, NY</p>
                  <p>Bachelor of Music Anticipated 2020</p>
                  <p>Minors: Computer Science, Web Design</p>
                  <p>GPA: 3.61</p>
            </div>

            <h4 class="section-header">Relevant Courses</h4>

            <div class="resume-item">
                  <p>Data Structures</p>
                  <p>Computer Systems Organization</p>
                  <p>Agile Software Development and DevOps (Spring 2020)</p>
                  <p>C Programming in Music Technology</p>
                  <p>Interactive Computing</p>
                  <p>Product Design</p>
                  <p>Web Design</p>
                  <p>Web Development</p>
                  <p>Digital Signal Theory</p>
                  <p>Digital Signal Theory II</p>
                  <p>Computer Music Synthesis</p>
            </div>

            <h4 class="section-header">Experience</h4>
            <div class="resume-item">
                  <p><span class="bold">Eventide</span>, Little Ferry, NJ</p>
                  <p>C++ Audio Software Development Intern</p>
                  <p> May 2019-August 2019</p>
                  <p>Developed user interface design for audio software plug-ins</p>
            </div>

            <div class="resume-item">
                  <p><span class="bold">New York University MusEDLab</span>, New York, NY</p>
                  <p>C++ Software Developer</p>
                  <p>January 2018-present</p>
                  <p>Designing audio plug-in versions of the MusEDLab’s music education web-apps Groove Pizza and
                        aQWERTYon for teacher and student users</p>
            </div>

            <div class="resume-item">
                  <p><span class="bold">Orion Startup</span>, New York, NY</p>
                  <p>C++ Software Developer</p>
                  <p>October 2019-present</p>
                  <p>Developing front-end solutions and prototypes for the Orion Audio beatboxing plug-in based on
                        producers’ feedback and needs</p>
            </div>

            <div class="resume-item">
                  <p><span class="bold">New York University</span>, New York, NY</p>
                  <p>Recording Studio Technician</p>
                  <p>September 2017-present</p>
                  <p>Problem solve and find solutions for student and faculty users of the recording studios</p>
                  <p>Maintain recording studios</p>
            </div>

            <div class="resume-item">
                  <p><span class="bold">New York University Summer Institute of Music Production
                              Technology</span>, New York, NY</p>
                  <p>Recording Studio Instructor</p>
                  <p> July 2018</p>
                  <p>Taught high school students the concepts of music recording and production through hands-on
                        studio use</p>
            </div>

            <h4 class="section-header">Skills</h4>
            <div class="resume-item">
                  <p><span class="bold">Computer Languages</span></p>
                  <p>C++</p>
                  <p>C</p>
                  <p>JavaScript</p>
                  <p>React</p>
                  <p>Python</p>
                  <p>Java</p>
                  <p>HTML</p>
                  <p>CSS</p>
                  <p>PHP</p>
                  <p>Max/MSP</p>
                  <p>JUCE framework</p>
                  <p>Matlab</p>
            </div>


            <div class="resume-item">
                  <p><span class="bold">Software</span></p>
                  <p>Git</p>
                  <p>Photoshop</p>
                  <p>Illustrator</p>
                  <p>Word</p>
                  <p>Excel</p>
                  <p>PowerPoint</p>
            </div>


            <div class="resume-item">
                  <p><span class="bold">Digital Audio Workstations</span></p>
                  <p>Pro Tools</p>
                  <p>Logic</p>
                  <p>Ableton</p>
                  <p>Reaper</p>
                  <p>Studio One</p>
                  <p>Cubase</p>
            </div>

            <div class="resume-item">
                  <p><span class="bold">Instruments</span></p>
                  <p>Guitar</p>
                  <p>Electric bass</p>
                  <p>Erhu</p>
                  <p>Keyboard</p>
            </div>
    </div>
    )
}

export default Resume
