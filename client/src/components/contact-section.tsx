import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useMutation } from "@tanstack/react-query";
import { apiRequest } from "@/lib/queryClient";
import { useToast } from "@/hooks/use-toast";
import { Mail, Linkedin, Github, Phone } from "lucide-react";

interface ContactFormData {
  name: string;
  email: string;
  message: string;
}

export function ContactSection() {
  const [formData, setFormData] = useState<ContactFormData>({
    name: "",
    email: "",
    message: ""
  });
  
  const { toast } = useToast();

  const contactMutation = useMutation({
    mutationFn: (data: ContactFormData) => apiRequest("POST", "/api/contact", data),
    onSuccess: () => {
      toast({
        title: "Message Sent! 🚀",
        description: "Thanks for reaching out! I'll get back to you soon.",
      });
      setFormData({ name: "", email: "", message: "" });
    },
    onError: () => {
      toast({
        title: "Error",
        description: "Failed to send message. Please try again.",
        variant: "destructive",
      });
    },
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.name && formData.email && formData.message) {
      contactMutation.mutate(formData);
    }
  };

  const handleInputChange = (field: keyof ContactFormData, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "prakashzz.0712@gmail.com",
      color: "electric"
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      value: "@vasavi",
      color: "cyber"
    },
    {
      icon: Github,
      label: "GitHub",
      value: "github.com/vasavi-001",
      color: "neon"
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+91-919-3217-000",
      color: "sunshine"
    }
  ];

  return (
    <section id="contact" className="py-20 relative">
      <div className="memphis-shape top-20 right-20 w-16 h-16 bg-neon/30 rotate-12 opacity-60"></div>
      
      <div className="max-w-4xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-space font-bold mb-6">
            <span className="emoji-bounce">💬</span> Let's Build Something Amazing
          </h2>
          <p className="text-xl text-gray-300">
            Looking for smart collaborators, ambitious builders, or just someone to jam product ideas with — let's talk!
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div className="space-y-8">
            {contactInfo.map((info, index) => (
              <div key={index} className="flex items-center gap-4">
                <div className={`w-12 h-12 bg-${info.color}/20 rounded-xl flex items-center justify-center`}>
                  <info.icon className={`text-${info.color}`} />
                </div>
                <div>
                  <h3 className="font-semibold">{info.label}</h3>
                  <p className="text-gray-400">{info.value}</p>
                </div>
              </div>
            ))}
          </div>
          
          {/* Contact Form */}
          <div className="bg-white/5 p-8 rounded-2xl border border-white/10">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <Label htmlFor="name" className="block text-sm font-medium mb-2">
                  Name
                </Label>
                <Input
                  id="name"
                  type="text"
                  value={formData.name}
                  onChange={(e) => handleInputChange("name", e.target.value)}
                  className="w-full bg-white/10 border border-white/20 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-electric"
                  required
                />
              </div>
              
              <div>
                <Label htmlFor="email" className="block text-sm font-medium mb-2">
                  Email
                </Label>
                <Input
                  id="email"
                  type="email"
                  value={formData.email}
                  onChange={(e) => handleInputChange("email", e.target.value)}
                  className="w-full bg-white/10 border border-white/20 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-electric"
                  required
                />
              </div>
              
              <div>
                <Label htmlFor="message" className="block text-sm font-medium mb-2">
                  Message
                </Label>
                <Textarea
                  id="message"
                  rows={4}
                  value={formData.message}
                  onChange={(e) => handleInputChange("message", e.target.value)}
                  className="w-full bg-white/10 border border-white/20 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-electric"
                  required
                />
              </div>
              
              <Button
                type="submit"
                disabled={contactMutation.isPending}
                className="w-full bg-gradient-to-r from-electric to-neon px-8 py-4 rounded-xl font-semibold hover-lift flex items-center justify-center gap-2"
              >
                <span className="emoji-bounce">🚀</span> 
                {contactMutation.isPending ? "Sending..." : "Send Message"}
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
