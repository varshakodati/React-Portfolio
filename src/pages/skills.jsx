import "../styles/skills.css";

const Skills = () => {
  return (
    <section className="skills-section">
      <h2 className="skills-title">My Skills</h2>

      <div className="skills-container">

        {/* Frontend */}
        <div className="skill-box">
          <h3>Frontend</h3>
          <ul>
            <li><span>React</span></li>
            <li><span>HTML</span></li>
            <li><span>CSS</span></li>
            <li><span>JavaScript</span></li>
          </ul>
        </div>

        {/* Backend */}
        <div className="skill-box">
          <h3>Backend</h3>
          <ul>
            <li><span>Java</span></li>
            <li><span>Node JS</span></li>
          </ul>
        </div>

        {/* Database */}
        <div className="skill-box">
          <h3>Database</h3>
          <ul>
            <li><span>MySQL</span></li>
            <li><span>Mongo DB</span></li>
          </ul>
        </div>

        {/* Tools */}
        <div className="skill-box">
          <h3>Tools</h3>
          <ul>
            <li><span>Visual Studio Code</span></li>
            <li><span>Git</span></li>
            <li><span>GitHub</span></li>
            <li><span>MySQL Workbench</span></li>
            <li><span>Google Cloud Platform</span></li>
          </ul>
        </div>

      </div>
    </section>
  );
};

export default Skills;
