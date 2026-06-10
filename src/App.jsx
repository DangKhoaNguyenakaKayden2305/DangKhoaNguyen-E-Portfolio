import React from "react";
import { createRoot } from "react-dom/client";
import { motion } from "framer-motion";
import {
  ArrowUpRight,
  BarChart3,
  BrainCircuit,
  Database,
  FileText,
  GitBranch,
  GraduationCap,
  Link,
  Mail,
  ShieldCheck,
  Sparkles,
  Workflow,
} from "lucide-react";
import "./styles.css";

const fadeUp = {
  initial: { opacity: 0, y: 28 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.25 },
  transition: { duration: 0.65, ease: "easeOut" },
};

const projects = [
  {
    title: "STREAT Coffee Data Integration Project",
    label: "Flagship Data Project",
    icon: <BrainCircuit />,
    image: "/images/streat-dashboard.png",
    desc: "Contributed to a prototype purchase order management system using Firebase and Power BI, exploring how digital data capture and dashboard reporting could improve purchase order visibility and reduce manual operational tracking.",
    stack: [
      "Excel",
      "Data Integration",
      "ETL",
      "Power BI Dashboards",
      "Database",
      "Business Process Improvement",
    ],
    status: "Completed",
    highlight: true,
    demo: "https://github.com/DangKhoaNguyenakaKayden2305/STREAT-Coffee-integrated-operations-system-Team-Project/blob/main/STREAT%20BA%20Project/STREAT%20DASHBOARD%20PROTOTYPE.pdf",
  },
  {
    title: "Retail Performance Dashboard with AI",
    label: "Data Product",
    icon: <Database />,
    image: "/images/retail-dashboard.jpg",
    desc: "An AI-assisted retail dashboard that tracks performance across sales, product analysis, customers and supply chain, turning POS, inventory and logistics data into actionable insights for store-level decision making.",
    stack: ["SQL", "Python", "dbt", "Snowflake", "Power BI", "AI"],
    status: "Completed",
    demo: "https://www.linkedin.com/feed/update/urn:li:activity:7417388102773821440/",
  },
  {
    title:
      "Sunshine Grocery ML Analysis - Winner RMIT x Microsoft Machine Learning Business Case Challenge",
    label: "Machine Learning",
    icon: <BarChart3 />,
    image: "/images/promowise.jpg",
    desc: "Analyzed retail sales data to support customer segmentation, product performance analysis and promotion effectiveness recommendations, later extended into PromoWise, a Streamlit app that analyzes promotion and pricing effectiveness to recommend optimal retail promotion strategies.",
    stack: ["Python", "Azure AI", "Machine Learning", "Power BI", "Streamlit"],
    status: "Completed",
    demo: "https://promowise-app.streamlit.app/",
  },
  {
    title: "KayBot - Personal Portfolio Chatbot",
    label: "Chatbot",
    icon: <ShieldCheck />,
    image: "/images/kaybot.jpg",
    desc: "A chatbot that answering all questions about myself including my education, my working experiences and skill sets as my Personal Portfolio",
    stack: [
      "AI Engineer",
      "Python",
      "FlaskAPI",
      "RAG",
      "Security",
      "HTML",
      "CSS",
    ],
    status: "Completed",
  },
  {
    title: "HR Analytics Dashboard",
    label: "BI Dashboard",
    icon: <Workflow />,
    image: "/images/hr-dashboard.png",
    desc: "A workforce analytics dashboard with comprehensive insights report exploring attrition, tenure, salary patterns, employee demographics and operational working conditions.",
    stack: ["Python", "Tableau", "Excel"],
    status: "Completed",
    links: [
      {
        label: "GitHub",
        href: "https://github.com/DangKhoaNguyenakaKayden2305/hr-attrition-rate-dashboards-analysis/blob/main/README.md",
      },
      {
        label: "Tableau Dashboard",
        href: "https://public.tableau.com/app/profile/dang.khoa.nguyen3045/viz/HR_Attrition_Analysis_Dashboard/Dashboard1?publish=yes",
      },
    ],
  },
  {
    title: "Data Migration on Databricks",
    label: "Data Engineering",
    icon: <Database />,
    image: "/images/databricks-migration.png",
    desc: "A data migration project moving legacy data systems onto Databricks, covering pipeline redesign, data quality validation and lakehouse architecture for scalable analytics.",
    stack: [
      "Databricks",
      "PySpark",
      "ETL",
      "Data Engineering",
      "Lakehouse",
      "SQL",
    ],
    status: "Completed",
  },
];

const skills = [
  {
    icon: <FileText />,
    title: "Business Analysis",
    text: "Requirements, user stories, acceptance criteria, process mapping, stakeholder analysis and system thinking.",
  },
  {
    icon: <BarChart3 />,
    title: "Data Analytics",
    text: "SQL, Excel, Python, data cleaning, EDA, KPI design, dashboard storytelling and business recommendations.",
  },
  {
    icon: <Sparkles />,
    title: "AI Workflow Prototyping",
    text: "LLM-assisted workflows, prompt design, AI copilots, document analysis and automation concepts.",
  },
  {
    icon: <ShieldCheck />,
    title: "Governance & Risk",
    text: "Cybersecurity risk, IT governance, AI ethics, business continuity, COBIT 2019 and ISO/IEC 38500.",
  },
];

const education = [
  {
    degree: "Master of Business Information Technology",
    institution: "RMIT University",
    period: "2024 – 2026",
    summary:
      "Completing a Master of Business Information Technology, building on a business background with deeper data, analytics, governance and digital systems coursework. Cumulative GPA: 3.3.",
    courses: [
      {
        year: "2024",
        code: "BUSM4610",
        title: "Business Project Management",
        mark: "66",
        grade: "CR",
      },
      {
        year: "2024",
        code: "ISYS2038",
        title: "Database Design and Development",
        mark: "81",
        grade: "HD",
      },
      {
        year: "2024",
        code: "ISYS2395",
        title: "Business Systems Analysis and Design",
        mark: "76",
        grade: "DI",
      },
      {
        year: "2024",
        code: "ISYS3374",
        title: "Business Analytics",
        mark: "81",
        grade: "HD",
      },
      {
        year: "2025",
        code: "INTE1002",
        title: "Digital Risk Management and Information Security",
        mark: null,
        grade: null,
      },
      {
        year: "2025",
        code: "INTE2397",
        title: "Knowledge Management",
        mark: null,
        grade: null,
      },
      {
        year: "2025",
        code: "INTE2412",
        title: "Governance and Change in Digital Business",
        mark: null,
        grade: null,
      },
      {
        year: "2025",
        code: "ISYS3300",
        title: "Business Ethics for a Digital Society",
        mark: null,
        grade: null,
      },
      {
        year: "2025",
        code: "INTE1030",
        title: "Digital Strategy",
        mark: null,
        grade: "DI",
      },
      {
        year: "2025",
        code: "COSC2531",
        title: "Programming Fundamentals",
        mark: null,
        grade: "HD",
      },
      {
        year: "2025",
        code: "ISYS3303",
        title: "Business IT Project",
        mark: null,
        grade: "CR",
      },
      {
        year: "2025",
        code: "BUSM4448",
        title: "Business Research Design",
        mark: null,
        grade: null,
      },
      {
        year: "2026",
        code: "ISYS2396",
        title: "Intelligent Enterprise Systems",
        mark: null,
        grade: null,
      },
      {
        year: "2026",
        code: "INTE2689",
        title: "Modern Business Intelligence",
        mark: null,
        grade: null,
      },
      {
        year: "2026",
        code: "ISYS3438",
        title: "Visual & Communication Insights in Business",
        mark: null,
        grade: null,
      },
      {
        year: "2026",
        code: "ISYS3466",
        title: "Machine Learning for Business Professionals",
        mark: null,
        grade: null,
      },
    ],
  },
  {
    degree: "Bachelor of Business (Management)",
    institution: "RMIT University",
    period: "2021 – 2024",
    summary:
      "Completed 15 July 2024, conferred 18 December 2024. Built a foundation across management, finance, marketing, economics, entrepreneurship and business information systems.",
    courses: [
      {
        year: "2021",
        code: "ACCT2105",
        title: "Accounting in Organisations and Society",
        mark: "64",
        grade: "CR",
      },
      {
        year: "2021",
        code: "BUSM4185",
        title: "Introduction to Management",
        mark: "76",
        grade: "DI",
      },
      {
        year: "2021",
        code: "ECON1193",
        title: "Business Statistics 1",
        mark: "64",
        grade: "CR",
      },
      {
        year: "2021",
        code: "ECON1194",
        title: "Prices and Markets",
        mark: "64",
        grade: "CR",
      },
      {
        year: "2021",
        code: "ISYS2109",
        title: "Business Information Systems",
        mark: "67",
        grade: "CR",
      },
      {
        year: "2021",
        code: "LAW2447",
        title: "Commercial Law",
        mark: "64",
        grade: "CR",
      },
      {
        year: "2021",
        code: "MKTG1205",
        title: "Marketing Principles",
        mark: "57",
        grade: "PA",
      },
      {
        year: "2022",
        code: "BAFI3182",
        title: "Financial Markets and Institutions",
        mark: "57",
        grade: "PA",
      },
      {
        year: "2022",
        code: "BAFI3184",
        title: "Corporate Finance",
        mark: "61",
        grade: "CR",
      },
      {
        year: "2022",
        code: "BUSM2301",
        title: "Organisations",
        mark: "52",
        grade: "PA",
      },
      {
        year: "2022",
        code: "BUSM3310",
        title: "Human Resource Management",
        mark: "73",
        grade: "DI",
      },
      {
        year: "2022",
        code: "BUSM4188",
        title: "Leadership",
        mark: "67",
        grade: "CR",
      },
      {
        year: "2022",
        code: "BUSM4403",
        title: "Ethics and Governance",
        mark: "68",
        grade: "CR",
      },
      {
        year: "2022",
        code: "BUSM4561",
        title: "Work in Global Society",
        mark: "70",
        grade: "DI",
      },
      {
        year: "2022",
        code: "ECON1192",
        title: "Macroeconomics 1",
        mark: "68",
        grade: "CR",
      },
      {
        year: "2023",
        code: "BAFI1026",
        title: "Derivatives and Risk Management",
        mark: "76",
        grade: "DI",
      },
      {
        year: "2023",
        code: "BAFI1042",
        title: "Equity Investment and Portfolio Management",
        mark: "62",
        grade: "CR",
      },
      {
        year: "2023",
        code: "BUSM1222",
        title: "Global Business",
        mark: "64",
        grade: "CR",
      },
      {
        year: "2023",
        code: "BUSM1311",
        title: "The Foundations of Entrepreneurship",
        mark: "65",
        grade: "CR",
      },
      {
        year: "2023",
        code: "BUSM3125",
        title: "Strategy",
        mark: "54",
        grade: "PA",
      },
      {
        year: "2023",
        code: "BUSM4546",
        title: "Organisational Experience",
        mark: "62",
        grade: "CR",
      },
      {
        year: "2023",
        code: "BUSM4550",
        title: "Innovation Management",
        mark: "66",
        grade: "CR",
      },
      {
        year: "2023",
        code: "BUSM4599",
        title: "Business Skills for Start Ups",
        mark: "84",
        grade: "HD",
      },
      {
        year: "2024",
        code: "BUSM4583",
        title: "Entrepreneurial and Innovation Ecosystems",
        mark: null,
        grade: null,
      },
    ],
  },
];

function Navbar() {
  return (
    <header className="nav">
      <a className="brand" href="#top">
        <span className="brandMark">KD</span>
        <span>Khoa Nguyen</span>
      </a>
      <nav>
        <a href="#work">Work</a>
        <a href="#skills">Skills</a>
        <a href="#projects">Projects</a>
        <a href="#contact" className="navButton">
          Contact
        </a>
      </nav>
    </header>
  );
}

function Hero() {
  return (
    <section id="top" className="hero">
      <div className="orb orbOne" />
      <div className="orb orbTwo" />

      <motion.div className="heroLeft" {...fadeUp}>
        <div className="pill">
          <span className="pulse" />
          Melbourne · Business Information System · Technical Business
          Analyst/Data Analyst/AI and Automation
        </div>
        <h1>
          I turn messy business problems into{" "}
          <span>data-driven digital solutions.</span>
        </h1>
        <p className="heroText">
          I am building a portfolio at the intersection of Business Analysis,
          Data Analytics, AI workflow design and IT governance. My goal is to
          become the kind of analyst who can understand the problem, map the
          system, inspect the data and prototype a practical solution.
        </p>

        <div className="heroActions">
          <a className="primaryBtn" href="#projects">
            View projects <ArrowUpRight size={18} />
          </a>
          <a className="secondaryBtn" href="#work">
            See positioning
          </a>
        </div>

        <div className="metrics">
          <div>
            <strong>6+</strong>
            <span>Portfolio case studies</span>
          </div>
          <div>
            <strong>4</strong>
            <span>Focus areas</span>
          </div>
          <div>
            <strong>2026</strong>
            <span>AI-ready BA direction</span>
          </div>
        </div>
      </motion.div>

      <motion.div
        className="heroRight"
        {...fadeUp}
        transition={{ duration: 0.75, delay: 0.1 }}
      >
        <div className="heroPhotoCard">
          <img src="/images/profile-photo.jpg" alt="Khoa Nguyen" />
        </div>

        <div className="floatingCard topFloat">
          <span>SQL · Python · Power BI</span>
        </div>
        <div className="floatingCard bottomFloat">
          <span>AI · Governance · Risk</span>
        </div>
      </motion.div>
    </section>
  );
}

function WorkPositioning() {
  return (
    <section id="work" className="section split">
      <motion.div {...fadeUp}>
        <p className="kicker">Positioning</p>
        <h2>Not just a document-writing BA.</h2>
      </motion.div>
      <motion.div className="copyPanel" {...fadeUp}>
        <p>
          My portfolio is designed around a practical analyst identity: someone
          who can translate stakeholder needs into system requirements, explore
          data, design dashboards, understand risk and prototype AI-enabled
          workflows.
        </p>
        <p>
          The direction is{" "}
          <strong>Technical Business Analyst / Data Product Analyst</strong>:
          business-first, but technical enough to build proof, communicate with
          developers and validate ideas through working prototypes.
        </p>
      </motion.div>
    </section>
  );
}

function Skills() {
  return (
    <section id="skills" className="section">
      <motion.div {...fadeUp}>
        <p className="kicker">Toolkit</p>
        <h2>Skills organised around solution delivery.</h2>
      </motion.div>

      <div className="skillGrid">
        {skills.map((skill, index) => (
          <motion.div
            className="skillCard"
            key={skill.title}
            {...fadeUp}
            transition={{ duration: 0.55, delay: index * 0.05 }}
          >
            <div className="iconWrap">{skill.icon}</div>
            <h3>{skill.title}</h3>
            <p>{skill.text}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

function Projects() {
  return (
    <section id="projects" className="section projectsSection">
      <motion.div className="sectionHead" {...fadeUp}>
        <div>
          <p className="kicker">Selected Projects</p>
          <h2>Case studies with business value, not just pretty dashboards.</h2>
        </div>
        <p>
          These projects are shaped to show the full analyst loop: problem →
          data/system analysis → prototype → recommendation.
        </p>
      </motion.div>

      <div className="projectGrid">
        {projects.map((project, index) => (
          <motion.article
            className={`projectCard ${project.highlight ? "featured" : ""}`}
            key={project.title}
            {...fadeUp}
            transition={{ duration: 0.55, delay: index * 0.04 }}
          >
            {project.image && (
              <div className="projectCardImage">
                <img src={project.image} alt={project.title} />
              </div>
            )}
            <div className="projectTop">
              <div className="projectIcon">{project.icon}</div>
              <span className="projectStatus">{project.status}</span>
            </div>
            <p className="projectLabel">{project.label}</p>
            <h3>{project.title}</h3>
            <p className="projectDesc">{project.desc}</p>
            <div className="stackList">
              {project.stack.map((item) => (
                <span key={item}>{item}</span>
              ))}
            </div>
            {project.links ? (
              <div className="projectLinks">
                {project.links.map((link) => (
                  <a
                    key={link.label}
                    className="projectLink"
                    href={link.href}
                    target="_blank"
                    rel="noreferrer"
                  >
                    {link.label} <ArrowUpRight size={16} />
                  </a>
                ))}
              </div>
            ) : project.demo ? (
              <a
                className="projectLink"
                href={project.demo}
                target="_blank"
                rel="noreferrer"
              >
                View live demo <ArrowUpRight size={16} />
              </a>
            ) : (
              <a className="projectLink" href="#contact">
                Add live demo later <ArrowUpRight size={16} />
              </a>
            )}
          </motion.article>
        ))}
      </div>
    </section>
  );
}

function Timeline() {
  const items = [
    [
      "Business foundation",
      "Management, finance, accounting and stakeholder-focused problem solving.",
    ],
    [
      "Data analytics layer",
      "Dashboards, KPI design, SQL/Python learning, retail and HR analytics case work.",
    ],
    [
      "Technical bridge",
      "Building toward FastAPI, Streamlit, GitHub, cloud deployment and AI workflow prototypes.",
    ],
    [
      "Career direction",
      "Technical BA, Data Analyst, AI/Data Product Analyst and junior solution consulting roles.",
    ],
  ];

  return (
    <section className="section timelineSection">
      <motion.div {...fadeUp}>
        <p className="kicker">Growth Map</p>
        <h2>The portfolio direction.</h2>
      </motion.div>
      <div className="timeline">
        {items.map(([title, text], i) => (
          <motion.div
            className="timelineItem"
            key={title}
            {...fadeUp}
            transition={{ duration: 0.55, delay: i * 0.05 }}
          >
            <span>0{i + 1}</span>
            <div>
              <h3>{title}</h3>
              <p>{text}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

function Education() {
  return (
    <section id="education" className="section">
      <motion.div {...fadeUp}>
        <p className="kicker">Background</p>
        <h2>Education</h2>
      </motion.div>
      <div className="eduGrid">
        {education.map((edu, index) => (
          <motion.div
            className="eduCard"
            key={edu.degree}
            {...fadeUp}
            transition={{ duration: 0.55, delay: index * 0.05 }}
          >
            <div className="eduHeader">
              <div>
                <p className="eduMeta">
                  {edu.institution} · {edu.period}
                </p>
                <h3>{edu.degree}</h3>
              </div>
              <GraduationCap />
            </div>
            <p className="eduSummary">{edu.summary}</p>
            <div className="eduCourseList">
              {edu.courses.map((course) => (
                <div className="eduRow" key={course.code}>
                  <span className="eduCode">{course.code}</span>
                  <span className="eduTitle">{course.title}</span>
                </div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

function Contact() {
  return (
    <section id="contact" className="contact">
      <motion.div className="contactCard" {...fadeUp}>
        <p className="kicker">Let’s connect</p>
        <h2>Open to BA, DA and AI/data product opportunities.</h2>
        <p>
          I am especially interested in roles where business analysis, data
          insight, system design and practical AI adoption meet.
        </p>
        <div className="contactLinks">
          <a href="mailto:khoa.d.nguyen2305@gmail.com">
            <Mail size={18} /> Email
          </a>
          <a
            href="https://www.linkedin.com/in/dang-khoa-kayden-nguyen-590882303/"
            target="_blank"
            rel="noreferrer"
          >
            <Link size={18} /> LinkedIn
          </a>
          <a
            href="https://github.com/DangKhoaNguyenakaKayden2305"
            target="_blank"
            rel="noreferrer"
          >
            <GitBranch size={18} /> GitHub
          </a>
        </div>
      </motion.div>
    </section>
  );
}

function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <WorkPositioning />
        <Skills />
        <Projects />
        <Timeline />
        <Education />
        <Contact />
      </main>
      <footer>
        <p>© 2026 Khoa Nguyen · Built with React + Vite</p>
      </footer>
    </>
  );
}

createRoot(document.getElementById("root")).render(<App />);
