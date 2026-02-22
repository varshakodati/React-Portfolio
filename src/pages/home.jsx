import profileImg from "../assets/profile.jpg";


const Home = () => {
  return (
    <section className="home-section">
      {/* LEFT CONTENT */}
      <div className="home-left">
        <h1>
          Hi, I’m <span>Deepika</span>
        </h1>
<br></br>
        <h3>Software Engineer</h3>
<br></br>
        <p className="home-summary">
           Experienced in Java and React. I build clean,
          responsive, and user-focused web applications using React.
        </p>
<br></br>
        {/* UNIQUE RESUME BUTTON */}
        <a
          href="/resume/Deepika_Resume.pdf"
          download
          className="resume-btn"
        >
          <span>Download Resume</span>
          <div className="resume-border"></div>
        </a>
      </div>

      {/* RIGHT IMAGE */}
      <div className="home-right">
        <img src={profileImg} alt="Deepika profile" />
      </div>

      
    </section>

    
  );
};

export default Home;
