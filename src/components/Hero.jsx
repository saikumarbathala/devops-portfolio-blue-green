import "./Hero.css";

function Hero() {
  return (
    <section className="hero">
      <div className="hero-content">
        <p className="greeting">👋 Hello, I'm</p>

        <h1>Saikumar Bathala</h1>

        <h2>DevOps Engineer | Cloud & Automation Enthusiast</h2>

        <p className="description">
          Passionate about AWS, Docker, Kubernetes, Terraform, Jenkins,
          Linux, CI/CD, and Cloud Infrastructure. I enjoy building scalable,
          automated, and reliable deployment pipelines.
        </p>

        <div className="hero-buttons">
          <button className="primary-btn">View Projects</button>
          <button className="secondary-btn">Download Resume</button>
        </div>
      </div>
    </section>
  );
}

export default Hero;