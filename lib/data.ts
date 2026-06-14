export const profile = {
  name: "Aditya Dipak Dhonde",
  shortName: "Aditya Dhonde",
  brand: "AD",
  brandInfinity: "AD∞",
  location: "Navi Mumbai, Maharashtra, India",
  email: "adityadhonde249@mail.com",
  github: "https://github.com/AdityaD4455",
  linkedin: "https://www.linkedin.com/in/aditya-dhonde4455/",
  roles: [
    "Data Scientist",
    "Machine Learning Engineer",
    "AI Engineer",
    "Generative AI Developer",
    "Data Analyst",
  ],
  headline: "Building Intelligent Systems with AI, Machine Learning & Data Science",
  subheadline:
    "Transforming data into intelligent solutions through Machine Learning, Generative AI, Data Analytics, and modern software engineering.",
};

export const education = [
  {
    degree: "B.E. Computer Science Engineering (AI & ML)",
    school: "MGM College of Engineering",
    period: "2024 — 2027",

  },
  {
    degree: "Diploma in Artificial Intelligence & Machine Learning",
    school: "Agnel Polytechnic",
    period: "2021 — 2024",
    detail: "Foundation in AI/ML systems & applied programming",
  },
];

export const timeline = [
  { year: "2021", title: "Started AIML Journey", desc: "Began studying Artificial Intelligence & Machine Learning fundamentals at the diploma level." },
  { year: "2023", title: "Industry Internship", desc: "Gained first hands-on exposure to real-world web development workflows." },
  { year: "2024", title: "Started Engineering", desc: "Enrolled in B.E. Computer Science Engineering, specializing in AI & ML." },
  { year: "2025", title: "Advanced AI Projects", desc: "Built production-style ML, RAG and analytics systems end-to-end." },
  { year: "2026", title: "Research Publication", desc: "Published research on real-time AI-powered social media analytics in IRJMETS." },
  { year: "Future", title: "AI Engineer", desc: "Building intelligent systems at scale for an AI-first company." },
];

export const counters = [
  { label: "Projects Completed", value: 5, suffix: "+" },
  { label: "Research Papers", value: 1 },
  { label: "Technologies Learned", value: 20, suffix: "+" },
  { label: "Internships", value: 1 },
];

export const skillCategories = [
  {
    title: "Programming",
    color: "violet",
    skills: [
      { name: "Python", level: 90 },
      { name: "SQL", level: 85 },
      { name: "Java", level: 70 },
    ],
  },
  {
    title: "Machine Learning",
    color: "cyan",
    skills: [
      { name: "Scikit-Learn", level: 88 },
      { name: "TensorFlow", level: 80 },
      { name: "Keras", level: 78 },
      { name: "XGBoost", level: 82 },
    ],
  },
  {
    title: "Data Analytics",
    color: "green",
    skills: [
      { name: "Pandas", level: 92 },
      { name: "NumPy", level: 88 },
      { name: "Power BI", level: 85 },
      { name: "Excel", level: 90 },
      { name: "Plotly", level: 80 },
    ],
  },
  {
    title: "Generative AI",
    color: "violet",
    skills: [
      { name: "LangChain", level: 85 },
      { name: "Ollama", level: 82 },
      { name: "RAG", level: 86 },
      { name: "ChromaDB", level: 80 },
      { name: "LLMs", level: 85 },
    ],
  },
  {
    title: "Cloud & Tools",
    color: "cyan",
    skills: [
      { name: "AWS EC2", level: 75 },
      { name: "Docker", level: 78 },
      { name: "Git", level: 88 },
      { name: "GitHub", level: 90 },
    ],
  },
];

export const labCategories = [
  { title: "Machine Learning", desc: "Predictive modeling, classification & regression pipelines built for real-world data." },
  { title: "Deep Learning", desc: "Neural network architectures for complex pattern recognition tasks." },
  { title: "Computer Vision", desc: "Image-based recognition and processing systems." },
  { title: "NLP", desc: "Sentiment analysis, text mining and language understanding." },
  { title: "Generative AI", desc: "LLM-powered applications and intelligent content generation." },
  { title: "RAG Systems", desc: "Retrieval-augmented generation over local & vector databases." },
  { title: "AI Agents", desc: "Autonomous, tool-using agents for task automation." },
  { title: "Data Analytics", desc: "Dashboards and reporting that turn raw data into decisions." },
];

export const projects = [
  {
    id: "insightsphere",
    title: "InsightSphere AI Pro",
    description: "Real-time social media analytics platform with AI-powered insights.",
    longDescription:
      "A real-time analytics platform that ingests social media data and applies NLP-driven sentiment analysis and trend detection, surfacing AI-generated reports through interactive Power BI dashboards.",
    tech: ["Python", "NLP", "Power BI", "REST APIs"],
    features: ["Sentiment Analysis", "Trend Detection", "AI Reporting"],
    github: "https://github.com/AdityaD4455/InsightSphere-AI",
    demo: "#",
    metric: "Published Research",
  },
  {
    id: "ollama-rag",
    title: "Ollama LLM RAG System",
    description: "Local, privacy-first AI assistant for document Q&A using RAG.",
    longDescription:
      "A fully local retrieval-augmented generation system using Ollama for inference and ChromaDB for vector search, enabling semantic PDF question-answering through a Streamlit interface — no data leaves the machine.",
    tech: ["Python", "LangChain", "Ollama", "ChromaDB", "Streamlit"],
    features: ["Local AI", "PDF Q&A", "Semantic Search", "Vector Database"],
    github: "https://github.com/AdityaD4455/ollama-rag",
    demo: "#",
    metric: "100% Local Inference",
  },
  {
    id: "data-refinery",
    title: "Data Refinery",
    description: "Automated data cleaning and preprocessing platform.",
    longDescription:
      "A Streamlit-based platform that automates common data cleaning tasks — handling missing values, outliers and type conversion — using Pandas and Scikit-Learn pipelines, cutting manual prep time significantly.",
    tech: ["Python", "Pandas", "Scikit-Learn", "Streamlit"],
    features: ["Automated Cleaning", "Outlier Detection", "Export Pipelines"],
    github: "https://github.com/AdityaD4455/Data-Refinery",
    demo: "#",
    metric: "Faster Data Prep",
  },
  {
    id: "nova-ai",
    title: "Nova AI Assistant",
    description: "Multilingual AI voice assistant supporting English, Hindi & Marathi.",
    longDescription:
      "A multilingual conversational assistant combining speech recognition with API-driven responses, supporting English, Hindi and Marathi for natural, accessible interaction.",
    tech: ["Python", "Speech Recognition", "APIs"],
    features: ["English", "Hindi", "Marathi"],
    github: "https://github.com/AdityaD4455/nova-web-assistant",
    demo: "#",
    metric: "3 Languages",
  },
  {
    id: "cloud-compiler",
    title: "Cloud-Based Online Code Compiler",
    description: "Secure, multi-language code execution platform on AWS.",
    longDescription:
      "A cloud-hosted code execution environment using Docker for sandboxed, secure multi-language execution, deployed on AWS EC2 with a Flask backend.",
    tech: ["Docker", "AWS EC2", "Flask"],
    features: ["Secure Execution", "Multi-Language Support"],
    github: "https://github.com/AdityaD4455/cloudcode",
    demo: "#",
    metric: "Multi-Language Sandbox",
  },
];

export const research = {
  title:
    "InsightSphere AI Pro: A Real-Time Social Media Analytics Platform with AI-Powered Insights",
  journal: "IRJMETS",
  date: "April 2026",
  abstract:
    "This paper presents InsightSphere AI Pro, a real-time analytics platform that applies natural language processing and machine learning to social media data streams, enabling automated sentiment analysis, trend detection and AI-generated reporting for data-driven decision making.",
};

export const experience = [
  {
    company: "Infodeal Technologies",
    role: "Web Development Intern",
    period: "2023",
    points: [
      "Contributed to front-end and back-end development tasks on live web projects.",
      "Collaborated with a development team using version control and agile workflows.",
      "Gained hands-on experience translating requirements into working features.",
    ],
    tech: ["HTML", "CSS", "JavaScript", "Git"],
  },
];

export const certifications = [
  { name: "NPTEL Certification", issuer: "NPTEL", year: "2024" },
  { name: "GDG Bootcamp", issuer: "Google Developer Groups", year: "2025" },
  { name: "AI/ML Certification", issuer: "Industry Partner", year: "2025" },
  { name: "Cloud Fundamentals", issuer: "AWS", year: "2025" },
];
