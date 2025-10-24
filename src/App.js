import React from 'react';
import Sidebar from './components/Sidebar';
import linkedinLogo from './assets/linkedin.png';
import githubLogo from './assets/github.png';
import { Typewriter } from 'react-simple-typewriter';
import ContactForm from './components/ContactForm';



function App() {

  return (
    <div className="relative font-sans">
      {/* Sidebar with built-in responsiveness (mobile drawer + desktop fixed) */}
      <Sidebar />

      {/* Sections */}
  <div className="min-h-screen w-full flex flex-col md:flex-row items-center justify-center bg-gray-50 text-center md:text-left px-6 pt-16 md:pt-0" id="home">
  {/* Profile Photo */}
  <div className="mb-8 md:mb-0 md:mr-12">
    <img
      src={require('./assets/ArpitaMadhukarKalburgi.png')}
      alt="Arpita"
      className="w-48 sm:w-60 md:w-72 h-auto rounded-[20px] shadow-2xl hover:scale-105 transition-transform duration-300 md:mr-12 mx-auto md:mx-0"

    />
  </div>

  {/* Intro Text and Buttons */}
 <div className="max-w-xl">
  <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-gray-800 mb-4">Hi, I'm Arpita!</h1>


<p className="text-xl text-gray-700 font-semibold mb-1">
  <Typewriter
    words={['Cloud Engineer','Software Engineer','Data Developer']}
    loop={0}
    cursor
    cursorStyle="|"
    typeSpeed={70}
    deleteSpeed={50}
    delaySpeed={1200}
  />
</p>


  <p className="text-lg text-gray-600 mb-6 leading-relaxed">
    Building scalable backend systems, cloud-native solutions, and intelligent data pipelines.
  </p>

  <p className="text-base uppercase text-gray-500 tracking-wider mb-6">
    Python • SQL • JavaScript • REST API • AI 
  </p>

  <div className="flex items-center gap-6">
    {/*<a
      href="https://your-resume-link.com"
      target="_blank"
      rel="noopener noreferrer"
      className="bg-[#0f2940] text-white px-6 py-2 rounded-full font-semibold text-base hover:bg-[#1f446c] transition"
    >
      View Resume
    </a> */}
    {/* LinkedIn with logo */}
    <a
      href="https://www.linkedin.com/in/arpita-kalburgi/"
      target="_blank"
      rel="noopener noreferrer"
      className="flex items-center gap-2 text-[#0f2940] font-medium text-base underline hover:text-yellow-500 transition"
    >
      <img src={linkedinLogo} alt="LinkedIn" className="w-5 h-5" />
      LinkedIn
    </a>

    {/* GitHub with logo */}
    <a
      href="https://github.com/ArpitaMKalburgi"
      target="_blank"
      rel="noopener noreferrer"
      className="flex items-center gap-2 text-[#0f2940] font-medium text-base underline hover:text-yellow-500 transition"
    >
      <img src={githubLogo} alt="GitHub" className="w-5 h-5" />
      GitHub
    </a>
  </div>
</div>


</div>


      <div className="min-h-screen w-full flex flex-col items-center justify-center bg-white px-8 py-16" id="about">
  <h3 className="text-4xl font-black mb-10 text-[#0f2940] text-center">ABOUT ME</h3>
  <div className="max-w-3xl text-center md:text-left leading-relaxed text-gray-800 space-y-4">
    <p>
      I have nearly <strong>3 years of experience</strong> working across <strong>AWS, Azure, and ServiceNow</strong>, building scalable cloud and data solutions.
    </p>
    <p>
      Currently pursuing my <strong>Master’s in Information Technology</strong> at <strong>UNC Charlotte</strong> (Jan 2024 – Dec 2025), I’ve contributed to a <strong>research project</strong> focused on <strong>AI-driven food–disease visualization</strong>.
    </p>
    <p>
      Alongside my studies, I work as a <strong>Data Analyst</strong> at the university’s <strong>Reservations Department</strong>, optimizing reporting and insights.
    </p>
    <p>
      I also serve as a <strong>Graduate Teaching Assistant</strong> for <strong>Human-Centered Design (ITIS 6300/8300)</strong>, supporting 40+ students.
    </p>
    <p>
      I love <strong>building systems, solving real-world problems</strong>, and am actively seeking <strong>full-time opportunities</strong> in <strong>Cloud, Data, or AI-driven development</strong> roles.
    </p>
  </div>
</div>


    <div className="min-h-screen w-full bg-[#f9fafb] text-gray-800 px-6 py-20" id="experience">
  <h3 className="text-4xl font-extrabold text-center text-[#1f2937] mb-16">EXPERIENCE</h3>

  <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
    {/* Accenture - ServiceNow Developer */}
    <div className="bg-white rounded-xl p-6 shadow-md border border-gray-200 hover:shadow-lg transition">
      <h3 className="text-sm font-bold text-[#1d4ed8] uppercase">Accenture</h3>
      <p className="text-lg font-semibold mt-1">Cloud & Platform Engineer</p>
      <p className="text-sm text-gray-500 mb-3">10 months · April 2023 – Jan 2024</p>
      <p className="text-sm mb-2"><span className="font-semibold text-gray-700">Skills Used:</span> Java, Go, MongoDB, Multithreading, AWS, Caching, Microservices, Docker, Kubernetes, Jenkins, CI/CD, JUnit, Karate</p>
      <ul className="list-disc pl-5 text-sm leading-relaxed text-gray-700 space-y-1">
        <li>Built and deployed scalable microservices using Java, Micronaut, and MongoDB, improving reliability and performance in distributed systems.</li>
        <li>Automated CI/CD pipelines and Kubernetes deployments on AWS with Jenkins and GoLang, streamlining delivery and reducing release times.</li>
        <li>Expanded automated testing coverage with JUnit and Karate while mentoring engineers on Agile and cloud-native best practices.</li>
      </ul>
    </div>

    {/* Accenture - Application Dev Associate */}
    <div className="bg-white rounded-xl p-6 shadow-md border border-gray-200 hover:shadow-lg transition">
      <h3 className="text-sm font-bold text-[#1d4ed8] uppercase">Accenture</h3>
      <p className="text-lg font-semibold mt-1">Software Engineer</p>
      <p className="text-sm text-gray-500 mb-3">2 Years 1 Month · Apr 2021 – March 2023</p>
      <p className="text-sm mb-2"><span className="font-semibold text-gray-700">Skills Used:</span> GCP, Rest API, MongoDB, NodeJS, Azure, DevOps, CI/CD</p>
      <ul className="list-disc pl-5 text-sm leading-relaxed text-gray-700 space-y-1">
        <li>Developed automated CI/CD pipelines in Azure DevOps using YAML to deploy Node.js APIs on GCP App Engine, improving delivery consistency and speed.</li>
        <li>Engineered system reliability scripts in Shell for container health checks, log collection, and recovery enhancing incident triage efficiency by 30%.</li>
        <li>Strengthened cloud infrastructure security and compliance by managing IAM, Cloud Storage, and KMS configurations for controlled access and reproducibility.</li>
        <li>Automated data ingestion pipelines using Node.js and StreamSets to efficiently load and transform raw text data into MongoDB collections.</li>
      </ul>
    </div>

    {/* Cognizant - Data Analyst */}
    <div className="bg-white rounded-xl p-6 shadow-md border border-gray-200 hover:shadow-lg transition">
      <h3 className="text-sm font-bold text-[#1d4ed8] uppercase">Cognizant Technology Solutions</h3>
      <p className="text-lg font-semibold mt-1">Software Engineer</p>
      <p className="text-sm text-gray-500 mb-3">3 Months · Dec 2020 – Mar 2021</p>
      <p className="text-sm mb-2"><span className="font-semibold text-gray-700">Skills Used:</span> Java, SpringBoot, AWS, Microservices, REST APIs, System Migration, Cloud Optimization</p>
      <ul className="list-disc pl-5 text-sm leading-relaxed text-gray-700 space-y-1">
        <li>Enhanced retail systems with REST APIs & SpringBoot on AWS, improving efficiency.</li>
        <li>Migrated legacy Java applications into SpringBoot microservices with AWS, improving operational agility.</li>
      </ul>
    </div>
  </div>
</div>


<div className="py-16 px-4 bg-white" id="certifications">
  <div className="max-w-6xl mx-auto bg-gray-50 rounded-xl shadow-lg p-8">
    <h3 className="text-4xl font-extrabold text-center text-[#0f2940] mb-10">CERTIFICATIONS & ACCREDITATIONS</h3>

    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8 justify-center items-center">
      {/* Repeat this block for each certification */}
      <div className="flex flex-col items-center group hover:scale-105 transition-transform duration-300">
        <img
          src={require('./assets/AWS-SSA.png')}
          alt="AWS Certified Solutions Architect"
          className="w-20 h-20 sm:w-24 sm:h-24 md:w-28 md:h-28 object-contain"
        />
        <p className="text-center font-semibold text-[#0f2940] text-sm md:text-base mb-1">
    AWS Certified Solutions Architect - Associate
  </p>
        <a
          href="https://www.credly.com/badges/09a6fc14-8ddc-4b3b-8058-2d560682651a/public_url"
          target="_blank"
          rel="noopener noreferrer"
          className="mt-2 text-sm font-medium text-[#0f2940] opacity-0 group-hover:opacity-100 transition-opacity"
        >
          Show Credentials →
        </a>
      </div>

      {/* Repeat for all 6 certifications with appropriate links/images */}


      <div className="flex flex-col items-center group hover:scale-105 transition-transform duration-300">
        <img
          src={require('./assets/OCI-GenAI.png')}
          alt="Oracle Cloud Infrastructure Generative AI Professional"
          className="w-20 h-20 sm:w-24 sm:h-24 md:w-28 md:h-28 object-contain"
        />
        <p className="text-center font-semibold text-[#0f2940] text-sm md:text-base mb-1">
    Oracle Cloud Infrastructure Generative AI Professional
  </p>
        <a
          href="https://catalog-education.oracle.com/ords/certview/sharebadge?id=54FA0F73368A734A3447C6A2BF2D5248EB94E929EF95E43FD8BA97CDA4830D6F"
          target="_blank"
          rel="noopener noreferrer"
          className="mt-2 text-sm font-medium text-[#0f2940] opacity-0 group-hover:opacity-100 transition-opacity"
        >
          Show Credentials →
        </a>
      </div>
      
      <div className="flex flex-col items-center group hover:scale-105 transition-transform duration-300">
        <img
          src={require('./assets/SNow-CSA.png')}
          alt="ServiceNow Certified System Administrator"
          className="w-20 h-20 sm:w-24 sm:h-24 md:w-28 md:h-28 object-contain"
        />
        <p className="text-center font-semibold text-[#0f2940] text-sm md:text-base mb-1">
    ServiceNow Certified System Administrator
  </p>
        <a
          href="https://www.linkedin.com/in/arpita-kalburgi/recent-activity/images/"
          target="_blank"
          rel="noopener noreferrer"
          className="mt-2 text-sm font-medium text-[#0f2940] opacity-0 group-hover:opacity-100 transition-opacity"
        >
          Show Credentials →
        </a>
      </div>
      <div className="flex flex-col items-center group hover:scale-105 transition-transform duration-300">
        <img
          src={require('./assets/SNow-FD.png')}
          alt="Micro-Certification - Flow Designer"
          className="w-20 h-20 sm:w-24 sm:h-24 md:w-28 md:h-28 object-contain"
        />
        <p className="text-center font-semibold text-[#0f2940] text-sm md:text-base mb-1">
    ServiceNow Micro-Certification - Flow Designer
  </p>
        <a
          href="https://example.com/cert1"
          target="_blank"
          rel="noopener noreferrer"
          className="mt-2 text-sm font-medium text-[#0f2940] opacity-0 group-hover:opacity-100 transition-opacity"
        >
          Show Credentials →
        </a>
      </div>
      <div className="flex flex-col items-center group hover:scale-105 transition-transform duration-300">
        <img
          src={require('./assets/SNow-ATF.png')}
          alt="Micro-Certification - Automated Test Framework"
          className="w-20 h-20 sm:w-24 sm:h-24 md:w-28 md:h-28 object-contain"
        />
        <p className="text-center font-semibold text-[#0f2940] text-sm md:text-base mb-1">
    ServiceNow Micro-Certification - Automated Test Framework
  </p>
        <a
          href="https://example.com/cert1"
          target="_blank"
          rel="noopener noreferrer"
          className="mt-2 text-sm font-medium text-[#0f2940] opacity-0 group-hover:opacity-100 transition-opacity"
        >
          Show Credentials →
        </a>
      </div>
      <div className="flex flex-col items-center group hover:scale-105 transition-transform duration-300">
        <img
          src={require('./assets/Databricks Fundamentals.png')}
          alt="Academy Accreditation - Databricks Fundamentals"
          className="w-20 h-20 sm:w-24 sm:h-24 md:w-28 md:h-28 object-contain"
        />
        <p className="text-center font-semibold text-[#0f2940] text-sm md:text-base mb-1">
    Academy Accreditation - Databricks Fundamentals
  </p>
        <a
          href="https://credentials.databricks.com/321a9033-e942-4031-a168-0318e243e624#acc.jRVAvzhy"
          target="_blank"
          rel="noopener noreferrer"
          className="mt-2 text-sm font-medium text-[#0f2940] opacity-0 group-hover:opacity-100 transition-opacity"
        >
          Show Credentials →
        </a>
      </div>
      <div className="flex flex-col items-center group hover:scale-105 transition-transform duration-300">
        <img
          src={require('./assets/Databricks Gen-AI.png')}
          alt="Academy Accreditation - Generative AI Fundamentals"
          className="w-20 h-20 sm:w-24 sm:h-24 md:w-28 md:h-28 object-contain"
        />
        <p className="text-center font-semibold text-[#0f2940] text-sm md:text-base mb-1">
    Academy Accreditation - Generative AI Fundamentals
  </p>
        <a
          href="https://credentials.databricks.com/ed0a4038-5227-4c28-b572-220755c2f6e7#acc.mwpMHxO8"
          target="_blank"
          rel="noopener noreferrer"
          className="mt-2 text-sm font-medium text-[#0f2940] opacity-0 group-hover:opacity-100 transition-opacity"
        >
          Show Credentials →
        </a>
      </div>
    </div>
  </div>
</div>

      <div className="min-h-screen bg-gray-100 px-6 py-20" id="projects">
  <h3 className="text-4xl font-extrabold text-center text-[#0f2940] mb-16">PROJECTS</h3>

  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
    {/* Example project card - repeat 6 times */}
    <div className="bg-white shadow-lg rounded-lg p-6 flex flex-col justify-between hover:shadow-2xl transition duration-300">
      <div>
        <h3 className="text-xl font-bold text-[#0f2940] mb-2">Byte-to-Bite</h3>
        <p className="text-sm text-gray-600">Designed and developed Byte-to-Bite, an AI-powered recipe and inventory management app that generates personalized meals from available ingredients, reducing food waste through intelligent recommendations.</p>
      </div>
      <a
  href="https://github.com/Amaru333/cci-hackathon-2025-backend"
  target="_blank"
  rel="noopener noreferrer"
  className="mt-6 inline-flex items-center text-[#0f2940] font-medium text-sm hover:bg-[#eef3f2] px-2 py-1 rounded transition duration-200"
>
  <span>GitHub Repository</span>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth={2}
    stroke="currentColor"
    className="w-4 h-4 ml-1"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M17 8l4 4m0 0l-4 4m4-4H3"
    />
  </svg>
</a>
    </div>
    <div className="bg-white shadow-lg rounded-lg p-6 flex flex-col justify-between hover:shadow-2xl transition duration-300">
      <div>
        <h3 className="text-xl font-bold text-[#0f2940] mb-2">Orders ETL Pipeline</h3>
        <p className="text-sm text-gray-600">Designed a serverless ETL pipeline on AWS that converts raw JSON orders into optimized Parquet datasets using Lambda and Glue, queryable via Athena.</p>
      </div>
      <a
  href="https://github.com/ArpitaMKalburgi/Orders-ETL-Pipeline"
  target="_blank"
  rel="noopener noreferrer"
  className="mt-6 inline-flex items-center text-[#0f2940] font-medium text-sm hover:bg-[#eef3f2] px-2 py-1 rounded transition duration-200"
>
  <span>GitHub Repository</span>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth={2}
    stroke="currentColor"
    className="w-4 h-4 ml-1"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M17 8l4 4m0 0l-4 4m4-4H3"
    />
  </svg>
</a>
    </div>

    <div className="bg-white shadow-lg rounded-lg p-6 flex flex-col justify-between hover:shadow-2xl transition duration-300">
      <div>
        <h3 className="text-xl font-bold text-[#0f2940] mb-2">AQI Forecasting</h3>
        <p className="text-sm text-gray-600">Built ML model to predict air quality index using weather and traffic data.</p>
      </div>
      <a
  href="https://github.com/ArpitaMKalburgi/AQI-Forecasting"
  target="_blank"
  rel="noopener noreferrer"
  className="mt-6 inline-flex items-center text-[#0f2940] font-medium text-sm hover:bg-[#eef3f2] px-2 py-1 rounded transition duration-200"
>
  <span>GitHub Repository</span>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth={2}
    stroke="currentColor"
    className="w-4 h-4 ml-1"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M17 8l4 4m0 0l-4 4m4-4H3"
    />
  </svg>
</a>
    </div>

    <div className="bg-white shadow-lg rounded-lg p-6 flex flex-col justify-between hover:shadow-2xl transition duration-300">
      <div>
        <h3 className="text-xl font-bold text-[#0f2940] mb-2">Restaurant Business Intelligence Sentiment Analysis</h3>
        <p className="text-sm text-gray-600">Built a Restaurant Business Intelligence pipeline integrating sales, pricing, and customer sentiment using SQL, Python, BigQuery, Tableau to visualize sales trends and apply NLP sentiment analysis for smarter pricing decisions.</p>
      </div>
            <a
  href="https://github.com/ArpitaMKalburgi/Restaurant-Business-Intelligence-Sentiment-Analysis"
  target="_blank"
  rel="noopener noreferrer"
  className="mt-6 inline-flex items-center text-[#0f2940] font-medium text-sm hover:bg-[#eef3f2] px-2 py-1 rounded transition duration-200"
>
  <span>GitHub Repository</span>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth={2}
    stroke="currentColor"
    className="w-4 h-4 ml-1"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M17 8l4 4m0 0l-4 4m4-4H3"
    />
  </svg>
</a>
    </div>

    <div className="bg-white shadow-lg rounded-lg p-6 flex flex-col justify-between hover:shadow-2xl transition duration-300">
      <div>
        <h3 className="text-xl font-bold text-[#0f2940] mb-2">Bubble Chart (Private Repo: Request access)</h3>
        <p className="text-sm text-gray-600">Designed a data-driven D3.js bubble visualization that connects foods, nutrients, and disease impact through dynamic filtering and visual storytelling.</p>
      </div>
            <a
  href="https://github.com/ArpitaMKalburgi/BubbleChart---MetaboFoodDB"
  target="_blank"
  rel="noopener noreferrer"
  className="mt-6 inline-flex items-center text-[#0f2940] font-medium text-sm hover:bg-[#eef3f2] px-2 py-1 rounded transition duration-200"
>
  <span>GitHub Repository</span>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth={2}
    stroke="currentColor"
    className="w-4 h-4 ml-1"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M17 8l4 4m0 0l-4 4m4-4H3"
    />
  </svg>
</a>
    </div>

    
    <div className="bg-white shadow-lg rounded-lg p-6 flex flex-col justify-between hover:shadow-2xl transition duration-300">
      <div>
        <h3 className="text-xl font-bold text-[#0f2940] mb-2">Analysis of blinkit - PowerBI</h3>
        <p className="text-sm text-gray-600">Built ML model to predict air quality index using weather and traffic data.</p>
      </div>
            <a
  href="https://github.com/ArpitaMKalburgi/Analysis-of-blinkit---PowerBI"
  target="_blank"
  rel="noopener noreferrer"
  className="mt-6 inline-flex items-center text-[#0f2940] font-medium text-sm hover:bg-[#eef3f2] px-2 py-1 rounded transition duration-200"
>
  <span>GitHub Repository</span>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth={2}
    stroke="currentColor"
    className="w-4 h-4 ml-1"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M17 8l4 4m0 0l-4 4m4-4H3"
    />
  </svg>
</a>
    </div>

    <div className="bg-white shadow-lg rounded-lg p-6 flex flex-col justify-between hover:shadow-2xl transition duration-300">
      <div>
        <h3 className="text-xl font-bold text-[#0f2940] mb-2">Personal Budget</h3>
        <p className="text-sm text-gray-600">Developed a budget management dashboard with real-time expense tracking and data visualization using Python, Flask, and Chart.js.</p>
      </div>
            <a
  href="https://github.com/ArpitaMKalburgi/personal-budget"
  target="_blank"
  rel="noopener noreferrer"
  className="mt-6 inline-flex items-center text-[#0f2940] font-medium text-sm hover:bg-[#eef3f2] px-2 py-1 rounded transition duration-200"
>
  <span>GitHub Repository</span>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth={2}
    stroke="currentColor"
    className="w-4 h-4 ml-1"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M17 8l4 4m0 0l-4 4m4-4H3"
    />
  </svg>
</a>
    </div>


    {/* Copy & customize this for each of your 6 projects */}
  </div>
</div>

{/* HACKATHONS & CASE STUDIES */}
<div className="min-h-screen w-full flex flex-col items-center justify-center bg-[#f8f9fa] text-[#0f2940] px-8 py-20" id="hackathons">
  <h3 className="text-4xl font-black mb-16 text-center">HACKATHONS & CASE STUDIES</h3>

  <div className="max-w-6xl grid grid-cols-1 md:grid-cols-2 gap-12">
    
    {/* Hackathon Card */}
    <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition duration-300 border-t-4 border-[#0f2940]">
      <h3 className="text-2xl font-bold mb-3">CCI Hackathon 2025 - University of North Carolina at Charlotte</h3>
      <p className="text-gray-700 mb-4">
        Won 2nd place at the UNC Charlotte CCI Startup Hackathon for building Byte to Bite, an AI-powered recipe and pantry assistant that personalizes meals using Perplexity AI and Kronos Labs API.
      </p>
      <p className="text-sm text-gray-600">🏆 2nd Runner Up</p>
    </div>

    {/* Case Study Card */}
    <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition duration-300 border-t-4 border-[#0f2940]">
      <h3 className="text-2xl font-bold mb-3">MetaboFoodDB – Research Use Case</h3>
      <p className="text-gray-700 mb-4">
        Designed an AI-powered visualization platform mapping food–disease relationships using Generative AI and D3.js, improving data accessibility for nutritional insights.
      </p>
      <p className="text-sm text-gray-600">🔬 Focus: Generative AI, Data Visualization, Healthcare Informatics</p>
    </div>

  </div>
</div>

{/* CONFERENCES & PROFESSIONAL EVENTS */}
<div className="min-h-screen w-full flex flex-col items-center justify-center bg-[#f0f7f4] text-[#0f2940] px-8 py-20" id="conferences">
  <h3 className="text-4xl font-black mb-16 text-center">CONFERENCES & PROFESSIONAL EVENTS</h3>

  <div className="max-w-6xl grid grid-cols-1 md:grid-cols-2 gap-12">

    {/* Conference Card 1 */}
    <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition duration-300 border-t-4 border-[#0f2940]">
      <h3 className="text-2xl font-bold mb-3">AWS re:Invent 2025 – Builders</h3>
      <p className="text-gray-700 mb-4">
        Attending AWS’s re:Invent 2025 in Las Vegas, exploring cloud-native architectures, Gen AI innovation, and networking with AWS engineers.
      </p>
      <p className="text-sm text-gray-600">☁️ Focus: Cloud Computing | AI Infrastructure | DevOps Best Practices</p>
    </div>

  </div>
</div>

{/* TEACHING & MENTORING */}
<div className="min-h-screen w-full flex flex-col items-center justify-center bg-[#f9fafb] text-[#0f2940] px-8 py-20" id="teaching">
  <h3 className="text-4xl font-black mb-16 text-center">TEACHING & MENTORING</h3>

  <div className="max-w-4xl bg-white p-8 rounded-2xl shadow-md hover:shadow-lg transition-all duration-300">
    <h3 className="text-2xl font-bold mb-3">Graduate Teaching Assistant – Human-Centered Design (ITIS 6300/8300)</h3>
    <p className="text-gray-700 mb-3">
      Supporting over <strong>40+ graduate students</strong> leading in-class activity, creating concise rubric, providing feedback, office hours & grading.

    </p>
    <p className="text-sm text-gray-600">🎓 University of North Carolina at Charlotte | 2024 – Present</p>
  </div>
</div>


      {/* EDUCATION */}
      <div className="min-h-screen w-full flex flex-col items-center justify-center bg-[#aad4bd] text-[#0f2940] px-8 py-20" id="education">

  <h3 className="text-4xl font-black mb-16 text-center">EDUCATION</h3>

  {/* UNC Charlotte */}
  <div className="flex flex-col md:flex-row items-start justify-center gap-8 mb-16 w-full max-w-6xl">
    <img
      src={require('./assets/UNCC-Logo.png')}
      alt="UNC Charlotte Logo"
      className="w-28 sm:w-32 md:w-40 h-auto object-contain bg-white p-2 shadow-lg"
    />
    <div className="space-y-3">
      <h3 className="text-xl font-bold">
        Master of Science in Information Technology, GPA: 4.0/4.0
      </h3>
      <p className="text-base font-medium">
        University of North Carolina, Charlotte &nbsp; | &nbsp; 2 years &nbsp; | &nbsp; May 2025
      </p>
      <p className="text-sm leading-relaxed">
        <span className="font-semibold">Coursework:</span> Network-Based App Development, Applied Databases, Big Data Analytics, Software Systems Design & Implementation, Data Science (Individual Study), Cloud Computing for Data Analysis, Information Ethics, Security & Policies, Human-Centered Design, Principles of Info Security & Privacy, System Integration
      </p>
    </div>
  </div>

  {/* BEC - aligned like UNC */}
  <div className="flex flex-col md:flex-row items-start justify-center gap-8 w-full max-w-6xl">
    <img
      src={require('./assets/BEC-Logo.png')}
      alt="BEC Logo"
      className="w-28 sm:w-32 md:w-40 h-auto object-contain rounded-full border-4 border-yellow-400 shadow-lg bg-white p-2"
    />
    <div className="space-y-3">
      <h3 className="text-xl font-bold">
        Bachelor in Information Science & Engineering
      </h3>
      <p className="text-base font-medium">
        Basaveshwar Engineering College &nbsp; | &nbsp; 4 years &nbsp; | &nbsp; Sept 2020
      </p>
      <p className="text-sm leading-relaxed">
        <span className="font-semibold">Coursework:</span> Data Structures & Algorithms, Java Programming, Python, Cloud Computing, DBMS, Operating Systems, Software Engineering, Web Technologies, AI, ML, Big Data, Data Mining, Computer Networks, Computer Organization, Graph Theory
      </p>
    </div>
  </div>
</div>



<ContactForm />


<footer className="bg-[#0f2940] text-white text-center py-6 mt-10">
  <div className="flex flex-col md:flex-row items-center justify-center gap-6">
    <p className="text-sm">&copy; {new Date().getFullYear()} Arpita Madhukar Kalburgi. All rights reserved.</p>
  </div>
</footer>

</div>
  );
}

export default App;
