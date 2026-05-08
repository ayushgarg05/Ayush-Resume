import express from "express";
import path from "path";
import { fileURLToPath } from "url";
import { createServer as createViteServer } from "vite";
import { Resend } from "resend";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

async function startServer() {
  const app = express();
  const PORT = process.env.PORT || 3000;

  const resend = process.env.RESEND_API_KEY ? new Resend(process.env.RESEND_API_KEY) : null;

  app.use(express.json());

  // Contact API
  app.post("/api/contact", async (req, res) => {
    const { name, email, message } = req.body;
    console.log("Contact form submission:", { name, email, message });
    
    if (resend) {
      try {
        const { data, error } = await resend.emails.send({
          from: 'onboarding@resend.dev',
          to: 'ayushgarg05@gmail.com',
          subject: `New Message from ${name}`,
          text: `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`,
        });

        if (error) {
          console.error("Resend Full Error Object:", JSON.stringify(error, null, 2));
          return res.status(500).json({ 
            success: false, 
            error: error.message || "Validation error from email provider" 
          });
        }
        
        return res.json({ success: true, message: "Transmission received and relayed." });
      } catch (error: any) {
        console.error("Submission error:", error);
        return res.status(500).json({ success: false, error: error.message || "Internal server error" });
      }
    } else {
      // Fallback for demo when no API key is provided
      console.warn("RESEND_API_KEY missing - skipping real email relay.");
      await new Promise(resolve => setTimeout(resolve, 800));
      return res.json({ 
        success: true, 
        message: "Simulation: RES_KEY_MISSING. Data logged to server console.",
        warning: "Add RESEND_API_KEY to receive real emails."
      });
    }
  });

  // Vite middleware for development
  if (process.env.NODE_ENV !== "production") {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), "dist");
    app.use(express.static(distPath));
    app.get("*", (req, res) => {
      res.sendFile(path.join(distPath, "index.html"));
    });
  }

  app.listen(Number(PORT), "0.0.0.0", () => {
    console.log(`🚀 System Online at http://0.0.0.0:${PORT}`);
  });
}

startServer();
