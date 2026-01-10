import "./Research.css";

export default function Research() {
    const papers = [
    {
      title: "Are We SOLID Yet? An Empirical Study on Prompting LLMs to Detect Design Principle Violations",
      authors: "Fatih Pehlivan, Arçin Ülkü Ergüzen, Sahand Moslemi Yengejeh, Mayasah Lami, Anil Koyuncu",
      abstract: "Traditional static analysis methods struggle to detect semantic design flaws, such as violations of the SOLID principles, which require a strong understanding of object-oriented design patterns and principles. Existing solutions typically focus on individual SOLID principles or specific programming languages, leaving a gap in the ability to detect violations across all five principles in multi-language codebases. This paper presents a new approach: a methodology that leverages tailored prompt engineering to assess LLMs on their ability to detect SOLID violations across multiple languages. We present a benchmark of four leading LLMs-CodeLlama, DeepSeekCoder, QwenCoder, and GPT-4o Mini-on their ability to detect violations of all five SOLID principles. For this evaluation, we construct a new benchmark dataset of 240 manually validated code examples. Using this dataset, we test four distinct prompt strategies inspired by established zero-shot, few-shot, and chain-of-thought techniques to systematically measure their impact on detection accuracy. Our emerging results reveal a stark hierarchy among models, with GPT-4o Mini decisively outperforming others, yet even struggles with challenging principles like DIP. Crucially, we show that prompt strategy has a dramatic impact, but no single strategy is universally best; for instance, a deliberative ENSEMBLE prompt excels at OCP detection while a hint-based EXAMPLE prompt is superior for DIP violations. Across all experiments, detection accuracy is heavily influenced by language characteristics and degrades sharply with increasing code complexity. These initial findings demonstrate that effective, AI-driven design analysis requires not a single best model, but a tailored approach that matches the right model and prompt to the specific design context, highlighting the potential of LLMs to support maintainability through AI-assisted code analysis.",
      link:"https://arxiv.org/pdf/2509.03093"
    },
    {
      title: "Explicit Vulnerability Generation with LLMs: An Investigation Beyond Adversarial Attacks",
      authors: "Emir Bosnak, Sahand Moslemi, Mayasah Lami, Anil Koyuncu",
      abstract: "Large Language Models (LLMs) are increasingly used as code assistants, yet their behavior when explicitly asked to generate insecure code remains poorly understood. While prior research has focused on unintended vulnerabilities, this study examines a more direct threat: open-source LLMs generating vulnerable code when prompted. We propose a dual experimental design: (1) Dynamic Prompting, which systematically varies vulnerability type, user persona, and prompt phrasing across structured templates; and (2) Reverse Prompting, which derives natural-language prompts from real vulnerable code samples. We evaluate three open-source 7B-parameter models (Qwen2, Mistral, Gemma) using static analysis to assess both the presence and correctness of generated vulnerabilities. Our results show that all models frequently generate the requested vulnerabilities, though with significant performance differences. Gemma achieves the highest correctness for memory vulnerabilities under Dynamic Prompting (e.g., 98.6% for buffer overflows), while Qwen2 demonstrates the most balanced performance across all tasks. We find that professional personas (e.g., \"DevOps Engineer\") consistently elicit higher success rates than student personas, and that the effectiveness of direct versus indirect phrasing is inverted depending on the prompting strategy. Vulnerability reproduction accuracy follows a non-linear pattern with code complexity, peaking in a moderate range. Our findings expose how LLMs' reliance on pattern recall over semantic reasoning creates significant blind spots in their safety alignments, particularly for requests framed as plausible professional tasks.",
      link:"https://arxiv.org/abs/2507.10054"
    },
    {
      title: "LLMShot: Reducing snapshot testing maintenance via LLMs",
      authors: "Ergün Batuhan Kaynak, Mayasah Lami, Sahand Moslemi, Anil Koyuncu",
      abstract: "Snapshot testing has emerged as a critical technique for UI validation in modern software development, yet it suffers from substantial maintenance overhead due to frequent UI changes causing test failures that require manual inspection to distinguish between genuine regressions and intentional design changes. This manual triage process becomes increasingly burdensome as applications evolve, creating a need for automated analysis solutions. This paper introduces LLMShot, a novel framework that leverages Vision-Language Models (VLMs) to automatically analyze snapshot test failures through semantic classification of UI changes. To evaluate LLMShot's effectiveness, we developed a comprehensive dataset using a feature-rich iOS application with configurable feature flags, creating realistic scenarios that produce authentic snapshot differences representative of real development workflows. Our evaluation using Gemma3 models demonstrates strong classification performance, with the 12B variant achieving over 84% recall in identifying failure root causes while the 4B model offers practical deployment advantages with acceptable performance for continuous integration environments. However, our exploration of selective ignore mechanisms revealed significant limitations in current prompting-based approaches for controllable visual reasoning. LLMShot represents the first automated approach to semantic snapshot test analysis, offering developers structured insights that can substantially reduce manual triage effort and advance toward more intelligent UI testing paradigms.",
      link:"https://arxiv.org/pdf/2507.10062"
    },
    ];
    const truncate = (text, maxLength = 100) => {
        if (text.length <= maxLength) return text;
        return text.slice(0, maxLength) + "…";
    };
  return (
    <section className="research">
      <div className="research-heading">
        <h2 className="research-title">Research & Publications</h2>
        <p className="title-description">Research Interest: Software engineering (fault localization, automated program repair, design principles, and more)</p>
      </div>

      <div className="research-grid">
        {papers.map((paper, index) => (
          <div key={index} className="research-card">
            <h3 className="paper-title">{paper.title}</h3>
            <p className="paper-authors">{paper.authors}</p>
            <p className="paper-abstract">{truncate(paper.abstract)}</p>
            <a href={paper.link} target="_blank" rel="noopener noreferrer" className="btn btn-primary">Read More</a>
          </div>
        ))}
        </div>
    </section>
  );
}