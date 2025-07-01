import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger, DialogDescription } from "@/components/ui/dialog";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Button } from "@/components/ui/button";
import { ExternalLink } from "lucide-react";
// We'll use the attached image directly in the path

export function CaseStudiesSection() {
  const caseStudies = [
    {
      id: 1,
      emoji: "📅",
      title: "Redesigning Google Calendar for Emotion-Based Planning", 
      image: "/assets/moodflow-calendar.png",
      description: "Productivity tools assume humans operate like robots. I designed emotional context layers over traditional time blocks.",
      tags: ["UX Research", "AI Integration", "Behavioral Design"],
      tagColors: ["electric", "neon", "cyber"],
      fullContent: {
        problem: "Traditional calendars treat all time blocks equally, ignoring human emotional cycles and energy patterns that directly impact productivity.",
        solution: "MoodFlow Calendar integrates emotional context into scheduling through AI-powered mood prediction and energy-optimized time blocking.",
        approach: [
          "Behavioral Research: Analyzed 200+ users' productivity patterns across different emotional states",
          "AI Integration: Built mood prediction models using circadian rhythms and historical data",
          "Interface Design: Created intuitive emotional overlays on traditional calendar views",
          "A/B Testing: Measured 40% improvement in task completion rates"
        ],
        learnings: "Emotional intelligence in productivity tools creates more sustainable work habits than rigid scheduling.",
        docLink: "https://vasavi-prakash.notion.site/MoodFlow-Calendar-Case-Study-abc123"
      }
    },
    {
      id: 2,
      emoji: "🎵",
      title: "Fixing Spotify's Algorithm for Gen Z Listeners",
      image: "/assets/spotify-logo.jpg",
      description: "Rethinking music recommendations by clustering vibe shifts rather than genre/artist similarity for rapid mood changes.",
      tags: ["Algorithm Design", "Gen Z Research", "A/B Testing"],
      tagColors: ["electric", "neon", "cyber"],
      fullContent: {
        problem: "Spotify's algorithm recommends music based on genre/artist similarity, but Gen Z switches moods rapidly and needs vibe-based recommendations.",
        solution: "Rebuilt recommendation engine to cluster music by emotional energy patterns rather than traditional metadata.",
        approach: [
          "User Research: Interviewed 150+ Gen Z users about music discovery habits",
          "Data Analysis: Analyzed listening patterns during different emotional states",
          "Algorithm Design: Built ML models to identify 'vibe clusters' in audio features",
          "A/B Testing: Tested emotional vs traditional recommendations with 10K users"
        ],
        learnings: "Emotional context beats demographic or genre-based targeting for music discovery.",
        docLink: "https://vasavi-prakash.notion.site/Spotify-Algorithm-Redesign-def456"
      }
    },

    {
      id: 4,
      emoji: "✈️",
      title: "Rebuilding Airbnb for Solo Women Travelers",
      image: "/assets/safestay-travel.png",
      description: "Safety-first travel platform with female-friendly hosts, local support networks, and emotional intent matching.",
      tags: ["Safety Design", "Persona Research", "Travel Tech"],
      tagColors: ["electric", "neon", "cyber"],
      fullContent: {
        problem: "Traditional travel platforms prioritize convenience over safety, leaving solo women travelers vulnerable and anxious about accommodations.",
        solution: "SafeStay reimagines travel booking with female-centric safety features, verified host networks, and emotional support systems.",
        approach: [
          "Safety Research: Conducted safety audits with 300+ solo women travelers",
          "Host Verification: Built comprehensive background check and safety rating system",
          "Community Building: Created local female support networks in 50+ cities",
          "Mental Health Integration: Added anxiety management and emergency support features"
        ],
        learnings: "Safety isn't just features - it's about building trust through community and transparency.",
        docLink: "https://vasavi-prakash.notion.site/SafeStay-Travel-Platform-ghi789"
      }
    },

    {
      id: 6,
      emoji: "🚗",
      title: "InDrive UX Redesign - Pink Ride Safety Innovation",
      image: "/assets/indrive-logo.jpg",
      description: "Comprehensive UX redesign focusing on pickup flexibility, driver rebooking, and innovative safety features for female passengers.",
      tags: ["Safety Innovation", "UX Redesign", "Mobility Tech"],
      tagColors: ["electric", "neon", "cyber"],
      fullContent: {
        problem: "InDrive's interface prioritized price negotiation over safety, creating anxiety for female riders and limiting adoption in safety-conscious markets.",
        solution: "Redesigned the entire user experience with 'Pink Ride' safety features, flexible pickup options, and driver relationship management.",
        approach: [
          "User Research: Interviewed 400+ female riders across 8 countries about safety concerns",
          "Interface Redesign: Rebuilt core flows prioritizing safety without compromising efficiency",
          "Driver Training: Implemented safety certification program for verified drivers",
          "Feature Innovation: Added real-time family sharing, panic buttons, and route verification"
        ],
        learnings: "Safety features shouldn't be add-ons - they should be core to the experience design.",
        docLink: "https://vasavi-prakash.notion.site/InDrive-UX-Redesign-jkl012"
      }
    }
  ];

  return (
    <section id="projects" className="py-20 bg-gradient-to-r from-cyber/10 to-electric/10 relative overflow-hidden">
      {/* Futuristic gradient lines */}
      <div className="gradient-line top-20 left-0 w-full animate-line-glow" style={{animationDelay: '3s'}}></div>
      <div className="gradient-line-vertical left-16 top-0 h-full animate-line-glow" style={{animationDelay: '1s'}}></div>
      <div className="gradient-line-vertical right-40 top-0 h-full animate-line-glow" style={{animationDelay: '2.5s'}}></div>
      
      <div className="memphis-shape top-10 left-10 w-32 h-8 bg-sunshine/40 rounded-full opacity-60 neon-glow"></div>
      
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-space font-bold mb-6">
            <span className="emoji-bounce">💡</span> Featured Case Studies
          </h2>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-8">
          {caseStudies.map((study) => (
            <Dialog key={study.id}>
              <DialogTrigger asChild>
                <div className="bg-white/5 p-8 rounded-2xl border border-white/10 hover-lift cursor-pointer transition-all duration-300 hover:bg-white/10">
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
                  
                  <p className="text-electric text-sm font-medium">Click to read full case study →</p>
                </div>
              </DialogTrigger>
              
              <DialogContent className="max-w-4xl max-h-[80vh] bg-gray-900 border border-white/20">
                <DialogHeader>
                  <DialogTitle className="text-2xl font-space font-bold flex items-center gap-3">
                    <span className="text-3xl">{study.emoji}</span>
                    {study.title}
                  </DialogTitle>
                  <DialogDescription className="text-gray-400">
                    Detailed case study with methodology, results, and key insights
                  </DialogDescription>
                </DialogHeader>
                
                <ScrollArea className="h-[60vh] pr-4">
                  <div className="space-y-6">
                    <img 
                      src={study.image} 
                      alt={study.title}
                      className="w-full h-64 object-cover rounded-xl"
                    />
                    
                    <div>
                      <h4 className="text-lg font-semibold text-electric mb-2">Problem</h4>
                      <p className="text-gray-300">{study.fullContent?.problem}</p>
                    </div>
                    
                    <div>
                      <h4 className="text-lg font-semibold text-neon mb-2">Solution</h4>
                      <p className="text-gray-300">{study.fullContent?.solution}</p>
                    </div>
                    
                    <div>
                      <h4 className="text-lg font-semibold text-cyber mb-2">Approach</h4>
                      <ul className="space-y-2">
                        {study.fullContent?.approach.map((item, index) => (
                          <li key={index} className="text-gray-300 flex items-start gap-2">
                            <span className="text-electric mt-1">•</span>
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <div>
                      <h4 className="text-lg font-semibold text-electric mb-2">Key Learnings</h4>
                      <p className="text-gray-300 italic">{study.fullContent?.learnings}</p>
                    </div>
                    
                    <div className="flex flex-wrap gap-2 pt-4">
                      {study.tags.map((tag, index) => (
                        <span 
                          key={index}
                          className={`bg-${study.tagColors[index]}/20 text-${study.tagColors[index]} px-3 py-1 rounded-full text-sm`}
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                    
                    <div className="pt-6 border-t border-white/10">
                      <Button 
                        onClick={() => window.open(study.fullContent?.docLink, '_blank')}
                        className="w-full bg-gradient-to-r from-electric to-neon hover:from-electric/80 hover:to-neon/80 text-gray-900 font-semibold"
                      >
                        <ExternalLink className="w-4 h-4 mr-2" />
                        View Full Documentation
                      </Button>
                    </div>
                  </div>
                </ScrollArea>
              </DialogContent>
            </Dialog>
          ))}
        </div>
      </div>
    </section>
  );
}
