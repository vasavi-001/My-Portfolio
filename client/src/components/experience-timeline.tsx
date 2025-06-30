export function ExperienceTimeline() {
  const experiences = [
    {
      id: 1,
      emoji: "🧭",
      title: "Modern Chanakya - Co-founder & Product Owner",
      period: "April 2025 - Present",
      description: "Hyperlocal, AI-personalized itinerary planner for solo/Gen Z travelers",
      highlights: [
        "Built mood-based discovery → calendar-blocked planning → hidden gem recommendations",
        "Leading product vision, content intelligence, and UX testing",
        "Combining cultural philosophy with AI-driven travel discovery"
      ],
      color: "electric"
    },
    {
      id: 2,
      emoji: "🏗️",
      title: "Mirzora - Co-founder",
      period: "Jan 2024 - Present",
      description: "Built India's first niche e-com MVP for daily wage laborers to access tools affordably",
      highlights: [
        "Conducted field-level user research with construction workers",
        "Launched MVP and tested with small-scale suppliers and local delivery agents",
        "Defined product vision and roadmap for underserved market"
      ],
      color: "neon"
    },
    {
      id: 3,
      emoji: "🎧",
      title: "PinnacleWorks - Product Developer",
      period: "Nov 2024 - Jan 2025",
      description: "Developed real-time audio module for chatbot (SuperBot)",
      highlights: [
        "Reduced latency by 30%, improved real-time processing accuracy by 90%",
        "Collaborated with cross-functional teams to optimize audio pipeline",
        "Built custom FreeSWITCH module for enhanced user experience"
      ],
      color: "cyber"
    },
    {
      id: 4,
      emoji: "🌐",
      title: "RedDoorz - SDE Intern",
      period: "Feb 2024 - Sept 2024",
      description: "Built custom CMS (Webjinny) with multi-language support",
      highlights: [
        "Improved ops efficiency by 40%, added dynamic form builder",
        "Conducted user research for localization (English, Indonesian)",
        "Increased adoption by 15% with multi-site architecture"
      ],
      color: "sunshine"
    }
  ];

  return (
    <section id="experience" className="py-20 relative">
      <div className="memphis-shape top-40 right-20 w-20 h-20 bg-neon/30 rotate-45 opacity-60"></div>
      
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-space font-bold mb-6">
            <span className="emoji-bounce">📈</span> Experience Timeline
          </h2>
        </div>
        
        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-electric to-neon"></div>
          
          <div className="space-y-12">
            {experiences.map((exp) => (
              <div key={exp.id} className="relative pl-20">
                <div className={`absolute left-6 w-4 h-4 bg-${exp.color} rounded-full border-4 border-slate-900`}></div>
                <div className="bg-white/5 p-8 rounded-2xl border border-white/10 hover-lift">
                  <div className="flex items-center gap-4 mb-4">
                    <span className="text-2xl emoji-bounce">{exp.emoji}</span>
                    <div>
                      <h3 className={`text-xl font-space font-semibold text-${exp.color}`}>{exp.title}</h3>
                      <p className="text-gray-400">{exp.period}</p>
                    </div>
                  </div>
                  <p className="text-gray-300 mb-4">{exp.description}</p>
                  <ul className="space-y-2 text-sm text-gray-400">
                    {exp.highlights.map((highlight, index) => (
                      <li key={index}>• {highlight}</li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
