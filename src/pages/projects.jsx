import React from "react";
import "../styles/Projects.css";

const projects = [
  {
    title: "Restaurant Website",
    points: [
      "Designed and developed a responsive restaurant website using HTML, CSS, and JavaScript.",
      "Implemented dynamic menu display and interactive features using JavaScript DOM manipulation.",
      "Built a table reservation form with input validation and user interaction handling.",
      "Applied responsive design using CSS Flexbox and media queries."
    ],
    skills: "HTML, CSS, JavaScript"
  },
  {
    title: "Portfolio Website",
    points: [
      "Developed a modern personal portfolio website using React.",
      "Implemented dynamic rendering of projects and skills using props and state.",
      "Designed responsive layouts and smooth navigation.",
      "Structured application with clean component-based architecture."
    ],
    skills: "React, CSS, Responsive Design"
  },
  {
    title: "AEM Project",
    points: [
      "Worked on enterprise AEM application handling production issues.",
      "Managed deployments and bug fixes.",
      "Collaborated with cross-functional teams.",
      "Maintained database and backend integrations."
    ],
    skills: "Java, AEM"
  }
];

const Projects = () => {
  return (
    <section className="projects-section">
      <h2 className="projects-title">My Projects</h2>

      <div className="projects-container">
        {projects.map((project, index) => (
          <div key={index} className="project-card">
            <h3>{project.title}</h3>

            {/* Bullet Points */}
            <ul className="project-description">
              {project.points.map((point, i) => (
                <li key={i}>{point}</li>
              ))}
            </ul>

            <p className="project-skills">
              <strong>Skills Used:</strong> {project.skills}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
