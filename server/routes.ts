import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { insertContactMessageSchema } from "@shared/schema";
import path from "path";
import fs from "fs";

export async function registerRoutes(app: Express): Promise<Server> {
  // Contact form submission
  app.post("/api/contact", async (req, res) => {
    try {
      const validatedData = insertContactMessageSchema.parse(req.body);
      const message = await storage.createContactMessage(validatedData);
      res.json({ success: true, message: "Message sent successfully!" });
    } catch (error) {
      console.error("Contact form error:", error);
      res.status(400).json({ 
        success: false, 
        message: "Failed to send message. Please try again." 
      });
    }
  });

  // Resume download endpoint
  app.get("/api/resume", (req, res) => {
    try {
      // In a real application, you would serve the actual resume file
      // For now, we'll return a placeholder response
      res.json({ 
        success: true, 
        message: "Resume download initiated",
        downloadUrl: "/resume/Vasavi_Prakash_Resume.pdf"
      });
    } catch (error) {
      console.error("Resume download error:", error);
      res.status(500).json({ 
        success: false, 
        message: "Failed to download resume" 
      });
    }
  });

  const httpServer = createServer(app);
  return httpServer;
}
