export function AboutSection() {
  return (
    <section id="about" className="py-20 relative overflow-hidden">
      {/* Futuristic gradient lines */}
      <div className="gradient-line top-10 left-0 w-full animate-line-glow" style={{animationDelay: '2s'}}></div>
      <div className="gradient-line-vertical right-32 top-0 h-full animate-line-glow" style={{animationDelay: '1.5s'}}></div>
      
      <div className="memphis-shape top-10 right-10 w-24 h-24 bg-sunshine/30 rotate-12 opacity-60 neon-glow"></div>
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-space font-bold mb-6">
            <span className="emoji-bounce">🔮</span> About Me
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">I work best in fast-moving environments where I can lead user research, write product specs, manage tech teams, and bring 0 to 1. My edge? I don't just ship features — I ship clarity.</p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-white/5 p-8 rounded-2xl border border-white/10 hover-lift">
            <div className="text-4xl mb-4 emoji-bounce">🧠</div>
            <h3 className="text-xl font-space font-semibold mb-4">Product Strategy</h3>
            <p className="text-gray-300">Turning user pain points into product opportunities with data-driven insights and emotional intelligence.</p>
          </div>
          
          <div className="bg-white/5 p-8 rounded-2xl border border-white/10 hover-lift">
            <div className="text-4xl mb-4 emoji-bounce">🤖</div>
            <h3 className="text-xl font-space font-semibold mb-4">AI Integration</h3>
            <p className="text-gray-300">Building intelligent products that understand user behavior and adapt to individual needs.</p>
          </div>
          
          <div className="bg-white/5 p-8 rounded-2xl border border-white/10 hover-lift">
            <div className="text-4xl mb-4 emoji-bounce">🚀</div>
            <h3 className="text-xl font-space font-semibold mb-4">0 to 1 Products</h3>
            <p className="text-gray-300">From ideation to launch, I've co-founded and built products that solve real problems for underserved markets.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
