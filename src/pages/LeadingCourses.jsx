import React from 'react';

const courses = [
  {
    title: 'Cloud Computing (AWS, Azure, Google Cloud)',
    description: 'Courses focusing on cloud architecture, deployment, and management.'
  },
  {
    title: 'Data Science and Analytics',
    description: 'Training in data processing, analysis, and visualization with tools like Python, R, and SQL.'
  },
  {
    title: 'Cybersecurity',
    description: 'Certifications in network security, ethical hacking, and risk assessment.'
  },
  {
    title: 'DevOps and Automation',
    description: 'Courses in CI/CD, containerization, and orchestration tools like Docker and Kubernetes.'
  },
  {
    title: 'Software Development',
    description: 'Full-stack development courses in JavaScript frameworks, Python, and Java.'
  },
  {
    title: 'AI & Machine Learning',
    description: 'Focus on machine learning models, deep learning, and natural language processing.'
  },
  {
    title: 'Networking and Systems Administration',
    description: 'Skills in network configuration, troubleshooting, and server management.'
  }
];

function LeadingCourses() {
  return (
    
      <div className="container">
        <h1
          className="wcu-section-heading text-center mt-5 mb-4"
          style={{ fontWeight: 'bold' }}
        >
          Leading Courses
        </h1>
        <div className="row">
          {courses.map((course, index) => (
            <div key={index} className="col-md-4 mb-4">
              <div className="card shadow-sm h-100" style={{
                         
                          transition:
                            "transform 0.3s ease, box-shadow 0.3s ease",
                          cursor: "pointer",
                        }}
                        onMouseEnter={(e) => {
                          e.currentTarget.style.transform = "scale(1.05)";
                          e.currentTarget.style.boxShadow =
                            "0 0 20px rgba(0, 0, 0, 0.2)";
                        }}
                        onMouseLeave={(e) => {
                          e.currentTarget.style.transform = "scale(1)";
                          e.currentTarget.style.boxShadow =
                            "0 0 10px rgba(0, 0, 0, 0.1)";
                        }}>
                <div className="card-body">
                  <h5 className="card-title" style={{ fontWeight: 'bold' }}>{course.title}</h5>
                  <p className="card-text">{course.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
  );
}

export default LeadingCourses;
