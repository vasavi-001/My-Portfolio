import { Button } from "@/components/ui/button";
import { useMutation } from "@tanstack/react-query";
import { apiRequest } from "@/lib/queryClient";
import { useToast } from "@/hooks/use-toast";

import WhatsApp_Image_2025_06_30_at_23_49_03 from "@assets/WhatsApp Image 2025-06-30 at 23.49.03.jpeg";

export function HeroSection() {
  const { toast } = useToast();

  const handleDownloadResume = () => {
    const link = document.createElement('a');
    link.href = '/assets/Vasavi_Resume.pdf';
    link.download = 'Vasavi_Prakash_Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    
    toast({
      title: "Resume Download",
      description: "Resume download initiated! 📄",
    });
  };

  const scrollToContact = () => {
    const element = document.querySelector("#contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20">
      {/* Futuristic Gradient Lines */}
      <div className="gradient-line top-32 left-0 w-full animate-line-glow"></div>
      <div className="gradient-line bottom-32 left-0 w-full animate-line-glow" style={{animationDelay: '1s'}}></div>
      <div className="gradient-line-vertical left-20 top-0 h-full animate-line-glow" style={{animationDelay: '2s'}}></div>
      <div className="gradient-line-vertical right-20 top-0 h-full animate-line-glow" style={{animationDelay: '0.5s'}}></div>
      
      {/* Memphis Background Shapes */}
      <div className="memphis-shape top-20 left-10 w-20 h-20 bg-neon rounded-full animate-float opacity-60 neon-glow"></div>
      <div className="memphis-shape top-40 right-20 w-16 h-16 bg-sunshine rotate-45 animate-pulse-slow opacity-60"></div>
      <div className="memphis-shape bottom-40 left-20 w-12 h-12 bg-cyber rounded-full animate-bounce-gentle opacity-60"></div>
      <div className="memphis-shape top-60 left-1/2 w-8 h-32 bg-electric rounded-full animate-float opacity-60"></div>
      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center">
        <div className="text-center lg:text-left">
          <div className="mb-6">
            <span className="text-6xl emoji-bounce">👋</span>
            <h1 className="text-5xl lg:text-7xl font-space font-bold mb-4">
              Hi, I'm <span className="gradient-text">Vasavi</span>
            </h1>
            <p className="text-xl lg:text-2xl text-gray-300 mb-6">
              I turn chaotic ideas into real products <span className="emoji-bounce text-2xl">🚀</span>
            </p>
          </div>
          
          <div className="flex flex-wrap gap-4 justify-center lg:justify-start mb-8">
            <span className="bg-electric/20 text-electric px-4 py-2 rounded-full border border-electric/30">
              <span className="emoji-bounce">💡</span> AI Product Manager
            </span>
            <span className="bg-neon/20 text-neon px-4 py-2 rounded-full border border-neon/30">
              <span className="emoji-bounce">⚡</span> Entrepreneur
            </span>
            <span className="bg-cyber/20 text-cyber px-4 py-2 rounded-full border border-cyber/30">
              <span className="emoji-bounce">🎯</span> UX Strategist
            </span>
          </div>
          
          <div className="flex gap-4 justify-center lg:justify-start">
            <Button
              onClick={handleDownloadResume}
              className="bg-gradient-to-r from-electric to-neon px-8 py-4 rounded-xl font-semibold hover-lift flex items-center gap-2 h-12"
            >
              <span className="emoji-bounce">📄</span> 
              Download Resume
            </Button>
            <Button
              variant="outline"
              onClick={scrollToContact}
              className="border border-white/30 px-8 py-4 rounded-xl font-semibold hover:bg-white/10 transition-colors flex items-center gap-2 h-12"
            >
              <span className="emoji-bounce">💬</span> Let's Chat
            </Button>
          </div>
        </div>
        
        <div className="flex justify-center">
          <div className="avatar-gradient-border">
            <img 
              src="/assets/vasavi-photo.jpeg" 
              alt="Vasavi Prakash - Product Manager and Entrepreneur" 
              className="w-80 h-80 object-cover rounded-full"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
