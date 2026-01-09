import "./Hero.css";
export default function Hero() {
  return (
    <section className="hero">
      <div className="hero-content">
        <p className="hero-label">FULL STACK DEVELOPER & DESIGNER</p>
        <h1>Mayasah Lami</h1>
        <p className="hero-subtitle">
          Crafting beautiful, functional digital experiences.
        </p>
        <p className="hero-description">
          Passionate about clean code, elegant design, and solving complex problems.
        </p>

        <div className="hero-actions">
          <button class="btn-primary">View My Work</button>
          <button class="btn-secondary">Get In Touch</button>
        </div>

        <div className="hero-socials">
          {/* icons later */}
        </div>
      </div>
    </section>
  );
}
