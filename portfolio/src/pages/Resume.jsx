import React from "react";

const Resume = () => {

  return (
    <section>
      <h2>Resume</h2>
      
      <p>Download my resume:</p>
      <a 
        href="/path/to/your/resume.pdf"  // Replace with the correct path to your resume
        download
        className="resume-link"
      >
        Download Resume
      </a>

      <h3>Skills</h3>
      <ul>
        <li>HTML</li>
        <li>CSS</li>
        <li>JavaScript</li>
        <li>React</li>
        <li>Node.js</li>
        <li>Git/GitHub</li>
        <li>React</li>
      </ul>
      
      <h3>Experience</h3>
      <ul>
        <li>Customer Service</li>
        <li>Frontend Developer at Company ABC (2019 - 2021)</li>
        {/* Add more experience details here */}
      </ul>
      
      <h3>Education</h3>
      <ul>
        <li>Bachelor's in Computer Science - University XYZ (2015 - 2019)</li>
        {/* Add more education details here */}
      </ul>
    </section>
  );
};

export default Resume;