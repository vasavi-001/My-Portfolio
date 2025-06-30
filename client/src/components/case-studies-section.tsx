export function CaseStudiesSection() {
  const caseStudies = [
    {
      id: 1,
      emoji: "📅",
      title: "Redesigning Google Calendar for Emotion-Based Planning", 
      image: "/assets/moodflow-calendar.png",
      description: "Productivity tools assume humans operate like robots. I designed emotional context layers over traditional time blocks.",
      tags: ["UX Research", "AI Integration", "Behavioral Design"],
      tagColors: ["electric", "neon", "cyber"]
    },
    {
      id: 2,
      emoji: "🎵",
      title: "Fixing Spotify's Algorithm for Gen Z Listeners",
      image: "/assets/spotify-logo.jpg",
      description: "Rethinking music recommendations by clustering vibe shifts rather than genre/artist similarity for rapid mood changes.",
      tags: ["Algorithm Design", "Gen Z Research", "A/B Testing"],
      tagColors: ["electric", "neon", "cyber"]
    },
    {
      id: 3,
      emoji: "🎓",
      title: "Micro-Internship Platform for Tier-2/Tier-3 Students",
      image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=300",
      description: "A marketplace connecting students from non-tier-1 colleges with 2-3 week sprint projects from indie startups.",
      tags: ["Social Impact", "Marketplace Design", "EdTech"],
      tagColors: ["electric", "neon", "cyber"]
    },
    {
      id: 4,
      emoji: "✈️",
      title: "Rebuilding Airbnb for Solo Women Travelers",
      image: "/assets/safestay-travel.png",
      description: "Safety-first travel platform with female-friendly hosts, local support networks, and emotional intent matching.",
      tags: ["Safety Design", "Persona Research", "Travel Tech"],
      tagColors: ["electric", "neon", "cyber"]
    },
    {
      id: 5,
      emoji: "📝",
      title: "Turning Notion into a Daily Journal Therapist",
      image: "https://images.unsplash.com/photo-1586281380349-632531db7ed4?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=300",
      description: "AI-powered journaling system that identifies thought patterns and provides personalized emotional insights.",
      tags: ["Mental Health", "AI Psychology", "Privacy Design"],
      tagColors: ["electric", "neon", "cyber"]
    },
    {
      id: 6,
      emoji: "🚗",
      title: "InDrive UX Redesign - Pink Ride Safety Innovation",
      image: "/assets/indrive-logo.jpg",
      description: "Comprehensive UX redesign focusing on pickup flexibility, driver rebooking, and innovative safety features for female passengers.",
      tags: ["Safety Innovation", "UX Redesign", "Mobility Tech"],
      tagColors: ["electric", "neon", "cyber"]
    }
  ];

  return (
    <section id="projects" className="py-20 bg-gradient-to-r from-cyber/10 to-electric/10 relative">
      <div className="memphis-shape top-10 left-10 w-32 h-8 bg-sunshine/40 rounded-full opacity-60"></div>
      
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-space font-bold mb-6">
            <span className="emoji-bounce">💡</span> Featured Case Studies
          </h2>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-8">
          {caseStudies.map((study) => (
            <div key={study.id} className="bg-white/5 p-8 rounded-2xl border border-white/10 hover-lift">
              <div className="flex items-center gap-4 mb-6">
                <span className="text-3xl emoji-bounce">{study.emoji}</span>
                <h3 className="text-xl font-space font-semibold">{study.title}</h3>
              </div>
              
              <img 
                src={study.image} 
                alt={study.title}
                className="w-full h-48 object-cover rounded-xl mb-6"
              />
              
              <p className="text-gray-300 mb-4">{study.description}</p>
              
              <div className="flex flex-wrap gap-2 mb-4">
                {study.tags.map((tag, index) => (
                  <span 
                    key={index}
                    className={`bg-${study.tagColors[index]}/20 text-${study.tagColors[index]} px-3 py-1 rounded-full text-sm`}
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
