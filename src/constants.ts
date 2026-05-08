export const RESUME_DATA = {
  name: "Ayush Garg",
  title: "Software Engineer III",
  experience_years: "6+",
  email: "ayushgarg05@gmail.com",
  phone: "+91 9479356841",
  linkedin: "https://in.linkedin.com/in/ayushgarg05",
  website: "https://findayush.com",
  location: "Noida, India",
  summary: "Software Developer with 6+ years of experience in designing scalable backend systems, AI-powered applications, and cloud-based solutions. Proficient in Python-based frameworks, microservices architecture, and data-driven automation.",
  skills: {
    languages: ["Python (Expert)", "Java", "Go", "TypeScript", "JavaScript", "SQL"],
    backend: ["FastAPI", "Flask", "Django", "Spring Boot", "Node.js", "REST & gRPC APIs", "Microservices Architecture"],
    databases: ["PostgreSQL", "MongoDB", "Couchbase", "MySQL", "Redis", "Elasticsearch"],
    cloud_devops: ["Kubernetes (K8s)", "Docker", "GCP", "Microsoft Azure", "CI/CD Pipelines", "Terraform"],
    ai_ml: ["LLMs (GPT, Whisper, Qwen)", "LangChain", "Vector Databases (FAISS)", "MLServer", "OCR", "NLP", "PyTorch/Tensorflow"],
    messaging_workflow: ["Apache Kafka", "Argo Workflows", "Netflix Conductor", "RabbitMQ"],
    leadership: ["System Design", "Code Reviews", "Mentorship", "Agile Methodologies", "Stakeholder Management"]
  },
  experience: [
    {
      company: "Innovaccer Inc.",
      role: "Software Engineer III",
      period: "Jul 2025 – Present",
      location: "Noida",
      highlights: [
        "Architecting AI-driven Prior Authorization and Utilization Management solutions for US healthcare leaders, ensuring 100% HIPAA compliance and SOC2 data security standards.",
        "Developing automated clinical decision support systems using Generative AI (LLMs) and advanced NLP to interpret complex medical documentation.",
        "Implementing standardized data exchange protocols using HL7 and FHIR to enable interoperability across diverse hospital management systems.",
        "Designing highly available, fault-tolerant microservices on Kubernetes, reducing system latency by 25% for real-time AI inference.",
        "Leading cross-functional efforts to integrate intelligent agents into healthcare workflows, significantly reducing clinical review turnaround times.",
        "Optimizing cloud resource utilization on GCP through efficient container orchestration and horizontal scaling strategies."
      ]
    },
    {
      company: "JIO Platforms (Reliance)",
      role: "Software Engineer III",
      period: "Nov 2022 – Jul 2025",
      location: "Bangalore",
      highlights: [
        "Project: Enterprise Batch Processing System - Designed and built a high-throughput asynchronous job execution engine handling 10,000+ daily requests using Python, Kafka, and Argo.",
        "Engineered the orchestration layer to manage long-running data processing tasks across distributed Kubernetes clusters, ensuring 99.9% job completion reliability.",
        "Project: Clinical Real-Time Speech-to-Text - Developed a gRPC-based low-latency transcription service leveraging Whisper LLM for hospital environments.",
        "Deployed the system on GCP using MLServer, supporting 5+ regional languages for real-time doctor-patient consultation documentation.",
        "Project: Audio Insights Engine for Jio Centers - Developed a massive scale pipeline for transcription, translation, and sentiment analysis on 20,000+ call recordings daily.",
        "Enabled data-driven decision making for customer support leadership by extracting actionable emotion-based insights through custom NLP models.",
        "Mentored junior developers and drove engineering best practices, including TDD and automated integration testing."
      ]
    },
    {
      company: "American Express",
      role: "Software Developer II",
      period: "Oct 2020 – Nov 2022",
      location: "Bangalore",
      highlights: [
        "Automated high-volume KYC (Know Your Customer) document verification using Spring Boot microservices and Machine Learning-based OCR pipelines.",
        "Reduced manual processing overhead by 30%, resulting in faster customer onboarding and compliance auditing for global markets.",
        "Designed and deployed an NLP-powered Email Classification system for customer support, achieving a 45% reduction in manual triaging time.",
        "Optimized legacy backend APIs through refactoring and caching strategies, improving overall system response time by 40% under peak loads.",
        "Collaborated with product teams to translate complex financial regulations into robust, automated software workflows."
      ]
    },
    {
      company: "American Express",
      role: "Software Developer",
      period: "Jul 2019 – Oct 2020",
      location: "Bangalore",
      highlights: [
        "Engineered Python-based automation frameworks integrated with Netflix Conductor and Microsoft O365 APIs to streamline enterprise operations.",
        "Developed a Fraud Detection Engine leveraging machine learning algorithms to analyze real-time transaction streams.",
        "The system successfully identified and prevented an estimated $10M+ in fraudulent transactions within the first year of deployment.",
        "Implemented secure API endpoints and robust data validation layers to ensure the integrity of sensitive financial data."
      ]
    },
    {
      company: "American Express",
      role: "Intern",
      period: "Jan – Jun 2019",
      location: "Bangalore",
      highlights: [
        "Conceptualized and built an automated Duplicate Invoice Detection system for the global accounts payable department.",
        "Utilized pattern matching and fuzzy logic algorithms to identify anomalies, saving an additional $10M by preventing erroneous payments.",
        "Collaborated closely with financial auditors to refine logic for high-accuracy fraud signal detection."
      ]
    },
    {
      company: "Hike Messenger.",
      role: "Intern",
      period: "Jun – Jul 2016",
      location: "Bangalore",
      highlights: [
        "Developed a custom Python log parser to analyze Android activity logs, identifying memory leaks and UI thread blocking operations.",
        "Provided technical reports that led to a 15% improvement in application responsiveness and an 8% reduction in crash frequency.",
        "Gained early exposure to high-scale mobile messaging architecture and agile development cycles."
      ]
    }
  ],
  education: [
    {
      degree: "M.Tech, Software Engineering",
      school: "Birla Institute of Technology, Pilani",
      period: "2021 – 2023",
      location: "Remote/Part-time"
    },
    {
      degree: "B.Tech, Computer Science",
      school: "Vellore Institute of Technology, Vellore",
      period: "2015 – 2019",
      location: "Vellore, India"
    }
  ],
  projects: [
    {
      name: "Batch Processing System",
      tech: "Kafka, Argo, Kubernetes, Python",
      description: "Distributed job execution engine handling 10K+ daily requests for asynchronous tasks."
    },
    {
      name: "Speech-to-Text Engine",
      tech: "Whisper LLM, gRPC, GCP",
      description: "Real-time multilingual transcription system deployed for clinical hospital environments."
    },
    {
      name: "Fraud Detection Module",
      tech: "ML, Python, Big Data",
      description: "Real-time transaction analysis saving ~$20M total across US market segments."
    },
    {
      name: "NLP Email Classifier",
      tech: "FastAPI, NLP, Python",
      description: "Automated classification system reducing manual triaging effort by 45% for enterprise scale."
    },
    {
      name: "KYC Automation Pipeline",
      tech: "Spring Boot, OCR, ML",
      description: "Intelligent document verification system reducing manual KYC processing by 30%."
    },
    {
      name: "Audio Insight Generator",
      tech: "STT, Emotion AI, NLP",
      description: "Actionable intel extractor processing 20K+ call center recordings daily."
    }
  ]
};
