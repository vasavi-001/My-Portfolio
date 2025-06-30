export function SkillsSection() {
  return (
    <section className="py-20 bg-gradient-to-r from-electric/10 to-neon/10 relative overflow-hidden">
      {/* Futuristic gradient lines */}
      <div className="gradient-line top-32 left-0 w-full animate-line-glow" style={{animationDelay: '1.5s'}}></div>
      <div className="gradient-line bottom-20 left-0 w-full animate-line-glow" style={{animationDelay: '3.5s'}}></div>
      
      <div className="memphis-shape top-20 left-10 w-16 h-16 bg-cyber/50 rounded-full opacity-60 neon-glow"></div>
      
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-space font-bold mb-6">
            <span className="emoji-bounce">📊</span> Product Skills
          </h2>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="bg-white/10 p-6 rounded-xl border border-white/20 hover-lift">
            <h3 className="font-semibold mb-3 text-electric">User Research</h3>
            <div className="space-y-2 text-sm text-gray-300">
              <div>User Interviews</div>
              <div>Behavioral Analysis</div>
              <div>Market Validation</div>
            </div>
          </div>
          
          <div className="bg-white/10 p-6 rounded-xl border border-white/20 hover-lift">
            <h3 className="font-semibold mb-3 text-neon">UX/UI Design</h3>
            <div className="space-y-2 text-sm text-gray-300">
              <div>Wireframing</div>
              <div>Prototyping</div>
              <div>Design Systems</div>
            </div>
          </div>
          
          <div className="bg-white/10 p-6 rounded-xl border border-white/20 hover-lift">
            <h3 className="font-semibold mb-3 text-cyber">Product Management</h3>
            <div className="space-y-2 text-sm text-gray-300">
              <div>Roadmapping</div>
              <div>Agile/Scrum</div>
              <div>Prioritization</div>
            </div>
          </div>
          
          <div className="bg-white/10 p-6 rounded-xl border border-white/20 hover-lift">
            <h3 className="font-semibold mb-3 text-sunshine">Technical</h3>
            <div className="space-y-2 text-sm text-gray-300">
              <div>JavaScript, Python</div>
              <div>NodeJS, MongoDB</div>
              <div>Analytics & AI</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
