import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { 
  Terminal as TerminalIcon, 
  User, 
  Briefcase, 
  Code2, 
  Mail, 
  Github, 
  Linkedin, 
  ExternalLink,
  ChevronRight,
  Database,
  Cpu,
  Globe,
  Layers,
  Send,
  Loader2
} from "lucide-react";
import { cn } from "@/src/lib/utils";
import { RESUME_DATA } from "@/src/constants";

// --- Types ---
type Tab = "home" | "about" | "experience" | "contact";

export default function App() {
  const [activeTab, setActiveTab] = useState<Tab>("home");
  const [booting, setBooting] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setBooting(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  if (booting) {
    return <BootSequence />;
  }

  return (
    <div className="h-screen bg-surface-darker text-gray-300 font-mono flex flex-col overflow-hidden border-4 border-surface-dim">
      {/* Header / Window Controls */}
      <header className="bg-surface-header flex items-center px-4 py-2 border-b border-border-subtle justify-between shrink-0">
        <div className="flex space-x-2">
          <div className="w-3 h-3 rounded-full bg-red/80" />
          <div className="w-3 h-3 rounded-full bg-peach/80" />
          <div className="w-3 h-3 rounded-full bg-green/80" />
        </div>
        <div className="text-[10px] md:text-xs text-gray-500 uppercase tracking-widest font-bold">
          ayush_dev — portfolio.exe
        </div>
        <div className="w-16 hidden md:block" /> 
      </header>

      <div className="flex-1 flex overflow-hidden">
        {/* Sidebar / Explorer */}
        <aside className="w-64 bg-surface-dim border-r border-border-subtle flex flex-col shrink-0 hidden md:flex">
          <div className="p-4 text-mauve text-xs font-bold uppercase tracking-tighter">
            Explorer
          </div>
          <div className="flex-1 py-1 space-y-0.5">
            <SidebarItem icon={<ChevronRight size={14} className="rotate-90 text-green" />} label="SRC" active />
            <div className="ml-4 space-y-0.5">
              <SidebarItem 
                onClick={() => setActiveTab("home")} 
                active={activeTab === "home"} 
                label="Home.json" 
                icon={<span className="text-blue">{"{}"}</span>} 
              />
              <SidebarItem 
                onClick={() => setActiveTab("about")} 
                active={activeTab === "about"} 
                label="Identity.ts" 
                icon={<span className="text-peach">{"[]"}</span>} 
              />
              <SidebarItem 
                onClick={() => setActiveTab("experience")} 
                active={activeTab === "experience"} 
                label="History.log" 
                icon={<span className="text-yellow">{"#"}</span>} 
              />
              <SidebarItem 
                onClick={() => setActiveTab("contact")} 
                active={activeTab === "contact"} 
                label="Contact.sh" 
                icon={<span className="text-red">{"!"}</span>} 
              />
            </div>
          </div>
          <div className="p-4 mt-auto">
            <div className="bg-surface p-3 rounded border border-border-subtle text-[10px] space-y-1">
              <div className="text-green font-bold">$ npm status --active</div>
              <div className="text-gray-500">Uptime: 100%</div>
              <div className="text-gray-500">Mode: PRODUCTION</div>
            </div>
          </div>
        </aside>

        {/* Main Editor Area */}
        <main className="flex-1 flex flex-col bg-surface min-w-0">
          {/* Nav Tabs */}
          <nav className="flex bg-surface-header border-b border-border-subtle overflow-x-auto shrink-0 no-scrollbar">
            <TabButton active={activeTab === "home"} onClick={() => setActiveTab("home")} label="Home.json" />
            <TabButton active={activeTab === "about"} onClick={() => setActiveTab("about")} label="Identity.ts" />
            <TabButton active={activeTab === "experience"} onClick={() => setActiveTab("experience")} label="History.log" />
            <TabButton active={activeTab === "contact"} onClick={() => setActiveTab("contact")} label="Contact.sh" />
          </nav>

          {/* Content Area */}
          <div className="flex-1 p-6 md:p-12 overflow-y-auto relative no-scrollbar">
            <div className="absolute top-0 right-0 p-12 opacity-[0.02] text-[150px] md:text-[200px] font-black select-none pointer-events-none">
              CODE
            </div>
            <AnimatePresence>
              {activeTab === "home" && <Hero key="home" />}
              {activeTab === "about" && <About key="about" />}
              {activeTab === "experience" && <Experience key="experience" />}
              {activeTab === "contact" && <Contact key="contact" />}
            </AnimatePresence>
          </div>
        </main>
      </div>

      {/* Footer / Status Bar */}
      <footer className="bg-surface-dim border-t border-border-subtle px-4 py-1 flex items-center justify-between text-[11px] shrink-0 font-mono">
        <div className="flex items-center space-x-4">
          <div className="flex items-center space-x-1 text-blue font-bold">
            <span className="text-xs"></span>
            <span>main*</span>
          </div>
          <div className="text-gray-500 flex items-center space-x-1 hidden sm:flex">
            <span className="text-red">✖</span> <span>0</span> 
            <span className="text-peach ml-2">⚠</span> <span>0</span>
          </div>
        </div>
        <div className="flex items-center space-x-4 text-gray-500">
          <span className="hidden sm:inline">UTF-8</span>
          <span className="hidden sm:inline">Spaces: 2</span>
          <span className="text-blue">TypeScript</span>
          <div className="bg-green text-surface-darker px-2 font-bold select-none cursor-default uppercase">
            ESTABLISHED
          </div>
        </div>
      </footer>
    </div>
  );
}

// --- Specific UI Helpers ---

function SidebarItem({ icon, label, active, onClick }: { icon?: React.ReactNode; label: string; active?: boolean; onClick?: () => void }) {
  return (
    <div 
      onClick={onClick}
      className={cn(
        "flex items-center px-4 py-1.5 cursor-pointer transition-colors text-[13px] font-mono",
        active ? "bg-surface text-green" : "text-gray-500 hover:bg-surface/50 hover:text-gray-300"
      )}
    >
      <span className="mr-2 flex items-center justify-center w-4 h-4">{icon}</span>
      <span className="truncate">{label}</span>
    </div>
  );
}

function TabButton({ active, onClick, label }: { active: boolean; onClick: () => void; label: string }) {
  return (
    <div 
      onClick={onClick}
      className={cn(
        "px-4 md:px-6 py-2.5 border-r border-border-subtle flex items-center space-x-3 cursor-pointer transition-all relative shrink-0",
        active ? "bg-surface text-mauve" : "text-gray-500 hover:bg-surface/30"
      )}
    >
      <span className="text-[10px] md:text-xs opacity-50 font-mono">{"{}"}</span>
      <span className="text-xs md:text-sm font-medium">{label}</span>
      <span className="text-[10px] opacity-20 hover:opacity-100 hidden md:inline ml-2">×</span>
      {active && <div className="absolute top-0 left-0 right-0 h-[2px] bg-mauve shadow-[0_0_10px_rgba(203,166,247,0.4)]" />}
    </div>
  );
}

function Typewriter({ text, delay }: { text: string; delay: number }) {
  const [currentText, setCurrentText] = useState("");
  useEffect(() => {
    const timer = setTimeout(() => {
      let i = 0;
      const interval = setInterval(() => {
        setCurrentText(text.slice(0, i));
        i++;
        if (i > text.length) clearInterval(interval);
      }, 30);
    }, delay);
    return () => clearTimeout(timer);
  }, [text, delay]);
  return <p className="min-h-[1.5em]">{currentText}</p>;
}

function BootSequence() {
  return (
    <div className="h-screen bg-surface-darker flex flex-col items-center justify-center font-mono p-4">
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="max-w-md w-full"
      >
        <div className="text-green space-y-1 text-sm bg-surface-dim p-8 rounded-lg border border-border-subtle shadow-2xl">
          <Typewriter text="> LOADING AYUSH_OS v6.2..." delay={0} />
          <Typewriter text="> INITIALIZING KERNEL..." delay={400} />
          <Typewriter text="> MOUNTING FILE_SYSTEMS..." delay={800} />
          <Typewriter text="> READY. EXECUTE MAIN()." delay={1200} />
        </div>
      </motion.div>
    </div>
  );
}

function Hero() {
  return (
    <motion.section 
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: 20 }}
      className="space-y-12"
    >
      <div className="space-y-8">
        <div className="text-green font-bold font-mono text-lg flex items-center gap-2">
          <span className="opacity-50">#</span>
          <span>AyushGarg.initialize()</span>
          <span className="inline-block w-2 h-5 bg-green animate-pulse"></span>
        </div>
        <h1 className="text-6xl md:text-9xl font-black text-white tracking-tighter leading-none uppercase select-none">
          AYUSH <span className="text-mauve italic">GARG</span>
        </h1>
      </div>
      
      <p className="text-xl md:text-2xl text-gray-400 max-w-3xl leading-relaxed font-medium">
        Specializing in <span className="text-blue">Hyperscale Backend Architecture</span>, <span className="text-peach">Distributed Systems</span>, and <span className="text-green">AI Integration</span>. Currently optimizing healthcare workflows at Innovaccer.
      </p>

      <div className="bg-surface-dim p-4 md:p-10 rounded-3xl border border-border-subtle max-w-3xl shadow-2xl relative group overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-mauve/5 via-transparent to-blue/5 pointer-events-none" />
        <div className="absolute top-4 right-6 text-[10px] text-gray-700 font-mono tracking-widest">AYUSH_GARG_METADATA.JSON</div>
        <pre className="text-xs md:text-base leading-relaxed overflow-x-auto no-scrollbar font-mono relative z-10">
          <span className="text-mauve">const</span> <span className="text-blue">lead_engineer</span> = <span className="text-yellow">{"{"}</span>
          <br/>  <span className="text-blue">"experience"</span>: <span className="text-peach">"6+_Continuous_Years"</span>,
          <br/>  <span className="text-blue">"core_stack"</span>: <span className="text-peach">["Python", "Java", "LLMs", "Kafka"]</span>,
          <br/>  <span className="text-blue">"achievements"</span>: <span className="text-peach">"Engineered_High-Throughput_Data_Pipelines"</span>,
          <br/>  <span className="text-blue">"philosophy"</span>: <span className="text-peach">"Scalability_is_not_optional"</span>
          <br/><span className="text-yellow">{"}"}</span>
        </pre>
      </div>

      <div className="flex flex-wrap items-center gap-8 pt-6">
         <div className="flex gap-4">
           <SocialLink href={RESUME_DATA.linkedin} icon={<Linkedin size={22} />} />
           <SocialLink href="https://github.com" icon={<Github size={22} />} />
         </div>
         <a 
           href="/resume.pdf" 
           download="Ayush_Garg_Resume.pdf"
           className="flex-1 md:flex-none px-12 py-5 bg-mauve text-surface-darker font-black text-xs uppercase tracking-[0.3em] rounded hover:bg-white transition-all transform hover:-translate-y-1 active:translate-y-0 shadow-[0_20px_40px_-10px_rgba(203,166,247,0.4)] text-center no-underline"
         >
           DOWNLOAD_SPEC_SHEET.PDF
         </a>
      </div>
    </motion.section>
  );
}

function About() {
  return (
    <motion.section 
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -10 }}
      className="space-y-16"
    >
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 pb-12">
        <div className="space-y-10">
          <div className="space-y-2">
            <h2 className="text-4xl md:text-6xl font-black text-white leading-tight uppercase">
              System <span className="text-mauve italic">Overview</span>
            </h2>
            <div className="h-1 w-20 bg-mauve" />
          </div>
          <div className="space-y-8 text-gray-400 text-xl leading-relaxed font-medium">
            <p className="border-l-2 border-mauve pl-6">
              I am a results-driven <span className="text-white">Software Engineer III</span> with 6+ years of experience in architecting high-performance backend systems and deploying mission-critical AI solutions.
            </p>
            <p className="text-gray-500 text-lg">
              Throughout my tenure at <span className="text-blue">American Express</span>, <span className="text-blue">Jio Platforms</span>, and <span className="text-blue">Innovaccer</span>, I've specialized in transforming complex business requirements into scalable technical implementations that drive significant ROI.
            </p>
            <div className="p-8 bg-surface-dim rounded-3xl border border-border-subtle relative italic text-gray-300 shadow-inner">
              <span className="text-6xl text-mauve/10 absolute -top-4 -left-2 select-none font-black font-serif">"</span>
              I balance a high-performance innovative mindset with rigorous engineering standards to solve the industry's most challenging scalability bottlenecks.
            </div>
          </div>
          
          <div className="grid grid-cols-2 gap-6">
            <StatsBox value="6+" label="YEARS_XP" color="blue" />
            <StatsBox value="100%" label="HIPAA_COMPLIANT" color="peach" />
          </div>
        </div>

        <div className="space-y-6">
          <div className="bg-surface-header border border-border-subtle rounded-3xl p-8 shadow-2xl relative">
            <div className="absolute top-4 right-6 text-[10px] text-gray-700 font-mono">01_CORE_TECH_STACK</div>
            <h3 className="text-xs font-black text-mauve uppercase tracking-[0.3em] mb-8 flex items-center gap-3">
              <div className="w-1.5 h-1.5 rounded-full bg-mauve animate-ping" /> TECHNICAL_SKILLS
            </h3>
            <div className="space-y-6">
              {Object.entries(RESUME_DATA.skills).map(([category, items]) => (
                <div key={category} className="space-y-3">
                  <div className="text-[10px] uppercase text-gray-500 font-bold tracking-widest">{category.replace('_', ' ')}</div>
                  <div className="flex flex-wrap gap-2">
                    {(items as string[]).map((skill, i) => (
                      <span key={`${category}-${i}`} className="px-3 py-1.5 bg-surface-dim border border-border-subtle text-[11px] font-bold rounded-lg text-gray-400 hover:text-white hover:border-blue transition-all cursor-default">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </motion.section>
  );
}

function StatsBox({ value, label, color }: { value: string; label: string; color: string }) {
  const colors: Record<string, string> = {
    blue: "text-blue",
    peach: "text-peach",
    green: "text-green",
    mauve: "text-mauve"
  };
  return (
    <div className="bg-surface-dim border border-border-subtle rounded-2xl p-6 text-center group hover:border-blue/50 transition-colors">
      <div className={cn("text-3xl font-black mb-1", colors[color])}>{value}</div>
      <div className="text-[10px] text-gray-600 font-bold uppercase tracking-widest group-hover:text-gray-400 transition-colors">{label}</div>
    </div>
  );
}

function Experience() {
  return (
    <motion.section 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="space-y-20 pb-10"
    >
      <div className="space-y-12">
        <div className="inline-flex items-center gap-3 px-4 py-2 bg-mauve/5 border border-mauve/20 text-mauve rounded-xl text-xs font-bold uppercase tracking-widest">
          <Briefcase size={16} /> WORK_HISTORY_LOG --VERBOSE
        </div>

        <div className="space-y-6">
          {RESUME_DATA.experience.map((exp, idx) => (
            <div key={idx} className="bg-surface-dim border border-border-subtle rounded-2xl p-8 hover:bg-surface-header transition-all group border-l-4 border-l-transparent hover:border-l-mauve">
              <div className="flex flex-col md:flex-row md:items-center justify-between mb-6 gap-4">
                <div>
                  <h3 className="text-2xl font-black text-white group-hover:text-mauve transition-colors uppercase italic tracking-tight">
                    {exp.role}
                  </h3>
                  <div className="flex items-center gap-4 mt-2">
                    <span className="text-blue font-bold text-sm tracking-wide">{exp.company}</span>
                    <span className="text-gray-700">|</span>
                    <span className="text-gray-500 text-xs font-mono">{exp.location}</span>
                  </div>
                </div>
                <div className="text-[11px] font-bold px-4 py-1.5 bg-surface-darker border border-border-subtle rounded-full text-gray-400">
                  {exp.period}
                </div>
              </div>
              <div className="grid grid-cols-1 gap-3">
                {exp.highlights.map((h, i) => (
                  <div key={i} className="flex items-start gap-4 text-gray-400 text-[15px] leading-relaxed">
                    <ChevronRight size={18} className="text-green/50 mt-0.5 shrink-0" />
                    <p className="group-hover:text-gray-300 transition-colors">{h}</p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Education Section Added for Recruiters */}
      <div className="space-y-12 pt-10 border-t border-border-subtle">
        <div className="inline-flex items-center gap-3 px-4 py-2 bg-blue/5 border border-blue/20 text-blue rounded-xl text-xs font-bold uppercase tracking-widest">
           <Globe size={16} /> ACADEMIC_CREDENTIALS
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {RESUME_DATA.education.map((edu, idx) => (
            <div key={idx} className="bg-surface-dim border border-border-subtle rounded-2xl p-6 group hover:border-blue transition-all">
              <div className="space-y-4">
                <div className="flex justify-between items-start">
                  <div className="text-peach font-bold text-xs font-mono">{edu.period}</div>
                  <div className="text-gray-600 text-[10px] font-bold uppercase tracking-widest italic">LVL_0{idx+1}</div>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-white group-hover:text-blue transition-colors leading-tight mb-1">{edu.degree}</h3>
                  <p className="text-gray-500 text-sm">{edu.school}</p>
                </div>
                <div className="pt-4 flex items-center gap-2 text-[10px] text-gray-700 font-bold uppercase">
                  <div className="w-1 h-1 rounded-full bg-gray-700" />
                  {edu.location}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </motion.section>
  );
}

function Contact() {
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("sending");
    
    const formData = new FormData(e.currentTarget);
    const payload = {
      name: formData.get("sender_name"),
      email: formData.get("sender_email"),
      message: formData.get("message_body"),
    };

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      if (response.ok) {
        setStatus("success");
      } else {
        setStatus("error");
      }
    } catch (error) {
      console.error("Submission failed:", error);
      setStatus("error");
    }
  };

  return (
    <motion.section 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="max-w-xl mx-auto space-y-16 py-8"
    >
      <div className="text-center space-y-4">
        <h2 className="text-5xl font-black text-white italic tracking-tighter uppercase">Get In Touch</h2>
        <p className="text-gray-600 font-mono text-xs uppercase tracking-[0.4em]">Establish a Direct Connection Channel</p>
      </div>

      <div className="bg-surface-dim border border-border-subtle rounded-3xl overflow-hidden shadow-2xl relative">
        <div className="h-2 bg-gradient-to-r from-red via-mauve to-blue" />
        
        {status === "success" ? (
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="p-16 text-center space-y-8"
          >
            <div className="w-24 h-24 bg-green/10 flex items-center justify-center rounded-3xl mx-auto text-green group shadow-[0_0_30px_rgba(166,227,161,0.1)] border border-green/20">
              <Send size={40} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
            </div>
            <div className="space-y-3">
              <h3 className="text-3xl font-black text-white">MESSAGE SENT.</h3>
              <p className="text-gray-500 leading-relaxed">Thank you for reaching out. I will review your message and respond shortly.</p>
            </div>
            <button onClick={() => setStatus("idle")} className="bg-surface-header border border-border-subtle px-8 py-3 rounded-xl text-xs font-bold hover:bg-mauve hover:text-surface-darker transition-all">SEND_ANOTHER</button>
          </motion.div>
        ) : status === "error" ? (
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="p-16 text-center space-y-8"
          >
            <div className="w-24 h-24 bg-red/10 flex items-center justify-center rounded-3xl mx-auto text-red border border-red/20 shadow-[0_0_30px_rgba(237,135,150,0.1)]">
              <div className="text-4xl font-black">!</div>
            </div>
            <div className="space-y-3">
              <h3 className="text-3xl font-black text-white italic">DISPATCH FAILED.</h3>
              <p className="text-gray-500 leading-relaxed">The relay server is currently unreachable. Please try again or reach out via LinkedIn.</p>
            </div>
            <button onClick={() => setStatus("idle")} className="bg-surface-header border border-border-subtle px-8 py-3 rounded-xl text-xs font-bold hover:bg-red hover:text-surface-darker transition-all">RETRY_TRANSMISSION</button>
          </motion.div>
        ) : (
          <form className="p-10 space-y-8" onSubmit={handleSubmit}>
            <div className="space-y-6">
              <FormInput name="sender_name" label="Full Name / Organization" placeholder="e.g. Hiring Manager at Google" />
              <FormInput name="sender_email" label="Business Email" type="email" placeholder="name@company.com" />
              <div className="space-y-2">
                <label className="text-[10px] uppercase text-gray-600 font-black ml-1 tracking-widest">$ message_body</label>
                <textarea name="message_body" required rows={4} placeholder="Hello Ayush, we're interested in your experience with..." className="w-full bg-surface-darker border border-border-subtle rounded-xl px-5 py-4 text-white text-sm focus:border-green outline-none transition-all resize-none placeholder:text-gray-800 font-mono shadow-inner" />
              </div>
            </div>
            <button 
              disabled={status === "sending"}
              type="submit" 
              className={cn(
                "w-full py-5 bg-mauve text-surface-darker font-black text-sm uppercase tracking-[0.3em] rounded-xl shadow-xl hover:bg-white transition-all transform active:scale-[0.98] relative overflow-hidden group",
                status === "sending" && "opacity-50 cursor-wait"
              )}
            >
              <div className="relative z-10">{status === "sending" ? "SENDING..." : "Send Message"}</div>
              <div className="absolute inset-0 bg-white/10 group-hover:translate-x-full transition-transform duration-1000 -translate-x-full skew-x-12" />
            </button>
          </form>
        )}
      </div>

      <div className="flex justify-center flex-wrap gap-x-12 gap-y-4 text-[10px] font-bold font-mono text-gray-700 uppercase tracking-widest">
        <div className="flex items-center gap-2">
          <div className="w-2 h-2 rounded-full bg-green shadow-[0_0_8px_#a6e3a1]" /> CHANNEL: SECURE
        </div>
        <div className="flex items-center gap-2">
          <div className="w-2 h-2 rounded-full bg-blue" /> PROTOCOL: HTTPS
        </div>
        <div className="flex items-center gap-2 text-gray-500">
          <div className="w-2 h-2 rounded-full bg-gray-800" /> RECIPIENT: ayushgarg05@gmail.com
        </div>
      </div>
    </motion.section>
  );
}

function FormInput({ name, label, type = "text", placeholder }: { name: string; label: string; type?: string; placeholder: string }) {
  return (
    <div className="space-y-2">
      <label className="text-[10px] uppercase text-gray-600 font-black ml-1 tracking-widest">$ {label}</label>
      <input name={name} required type={type} placeholder={placeholder} className="w-full bg-surface-darker border border-border-subtle rounded-xl px-5 py-4 text-white text-sm focus:border-mauve outline-none transition-all placeholder:text-gray-800 font-mono shadow-inner" />
    </div>
  );
}

function SocialLink({ href, icon }: { href: string; icon: React.ReactNode }) {
  return (
    <a href={href} target="_blank" rel="noopener noreferrer" className="p-4 bg-surface-header border border-border-subtle rounded-2xl text-gray-500 hover:text-mauve hover:border-mauve hover:bg-mauve/5 transition-all shadow-lg group">
      <div className="group-hover:scale-110 transition-transform">
        {icon}
      </div>
    </a>
  );
}
