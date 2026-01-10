import "./TechnicalExpertise.css";

export default function TechnicalExpertise() {

    const skills = [
    {
      icon: "💻",
      title: "Frontend Development",
      description: "React, TypeScript, Next.js, Tailwind CSS",
      gradient: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)"
    },
    {
      icon: "🗄️",
      title: "Backend & Database",
      description: "Node.js, PostgreSQL, MongoDB, REST APIs",
      gradient: "linear-gradient(135deg, #06beb6 0%, #48b1bf 100%)"
    },
    {
      icon: "🎨",
      title: "UI/UX Design",
      description: "Figma, Adobe XD, Responsive Design, Design Systems",
      gradient: "linear-gradient(135deg, #f093fb 0%, #f5576c 100%)"
    },
    {
      icon: "🔧",
      title: "DevOps & Tools",
      description: "Git, Docker, CI/CD, AWS, Vercel",
      gradient: "linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)"
    },
    {
      icon: "⚡",
      title: "Performance",
      description: "Optimization, SEO, Web Vitals, Accessibility",
      gradient: "linear-gradient(135deg, #fa709a 0%, #fee140 100%)"
    },
    {
      icon: "🏗️",
      title: "Architecture",
      description: "Microservices, Design Patterns, Scalable Systems",
      gradient: "linear-gradient(135deg, #a8edea 0%, #fed6e3 100%)"
    }
  ];

  return (
    <section className="technical-expertise">

        <div className="technical-expertise-heading">
            <h2 className="technical-expertise-title">Technical Expertise</h2>
            <p className="title-description">A comprehensive skill set spanning design, development, and deployment</p>
        </div>
        <div className="technical-expertise-skills">

        </div>

        <div className="skills-grid">
        {skills.map((skill, index) => (
          <div key={index} className="skill-card">
            <div className="skill-icon" style={{ background: skill.gradient }}>
              {skill.icon}
            </div>
            <h3 className="skill-title">{skill.title}</h3>
            <p className="skill-description">{skill.description}</p>
          </div>
        ))}
      </div>

    </section>  );
}