import React, { useState } from 'react';
import Sidebar from './components/Sidebar';
import linkedinLogo from './assets/linkedin.png';
import githubLogo from './assets/github.png';


function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="relative font-sans">
      {/* Hamburger Menu */}
      <button onClick={() => setMenuOpen(true)} className="fixed top-6 left-6 z-50">
        <div className="w-8 h-1 bg-black mb-1"></div>
        <div className="w-8 h-1 bg-black mb-1"></div>
        <div className="w-8 h-1 bg-black"></div>
      </button>

      {/* Sidebar */}
      {menuOpen && <Sidebar closeMenu={() => setMenuOpen(false)} />}

      {/* Sections */}
      <div className="h-screen w-full flex flex-col md:flex-row items-center justify-center bg-gray-50 text-center md:text-left px-6" id="home">
  {/* Profile Photo */}
  <div className="mb-8 md:mb-0 md:mr-12">
    <img
      src={require('./assets/ArpitaMadhukarKalburgi.png')}
      alt="Arpita"
      className="w-72 h-auto rounded-[20px] shadow-2xl hover:scale-105 transition-transform duration-300 mr-12"

    />
  </div>

  {/* Intro Text and Buttons */}
 <div className="max-w-xl">
  <h1 className="text-6xl font-extrabold text-gray-800 mb-4">Hi, I'm Arpita!</h1>

  <p className="text-xl text-gray-700 font-semibold mb-1">
    Cloud Engineer & Data Developer
  </p>

  <p className="text-lg text-gray-600 mb-6 leading-relaxed">
    Building scalable backend systems, cloud-native solutions, and intelligent data pipelines.
  </p>

  <p className="text-base uppercase text-gray-500 tracking-wider mb-6">
    ETL • Spark • AWS • SQL • Airflow • Python
  </p>

  <div className="flex items-center gap-6">
    <a
      href="https://your-resume-link.com"
      target="_blank"
      rel="noopener noreferrer"
      className="bg-[#0f2940] text-white px-6 py-2 rounded-full font-semibold text-base hover:bg-[#1f446c] transition"
    >
      View Resume
    </a>

    {/* LinkedIn with logo */}
    <a
      href="https://linkedin.com/in/your-profile"
      target="_blank"
      rel="noopener noreferrer"
      className="flex items-center gap-2 text-[#0f2940] font-medium text-base underline hover:text-yellow-500 transition"
    >
      <img src={linkedinLogo} alt="LinkedIn" className="w-5 h-5" />
      LinkedIn
    </a>

    {/* GitHub with logo */}
    <a
      href="https://github.com/yourusername"
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


      <div className="h-screen w-full flex items-center justify-center bg-white" id="about">
        <h2 className="text-4xl font-semibold">About Me</h2>
      </div>

      {/* EDUCATION */}
      <div className="min-h-screen w-full flex flex-col items-center justify-center bg-[#aad4bd] text-[#0f2940] px-8 py-20" id="education">

  <h2 className="text-5xl font-black mb-16 text-center">EDUCATION</h2>

  {/* UNC Charlotte */}
  <div className="flex flex-col md:flex-row items-start justify-center gap-8 mb-16 w-full max-w-6xl">
    <img
      src={require('./assets/UNCC-Logo.png')}
      alt="UNC Charlotte Logo"
      className="w-40 h-auto object-contain bg-white p-2 shadow-lg"
    />
    <div className="space-y-3">
      <h3 className="text-xl font-bold">
        Master of Science in Information Technology, GPA: 4.0/4.0
      </h3>
      <p className="text-base font-medium">
        University of North Carolina, Charlotte &nbsp; | &nbsp; 2 years &nbsp; | &nbsp; May 2025
      </p>
      <p className="text-sm leading-relaxed">
        <span className="font-semibold">Coursework:</span> Network-Based App Development, Applied Databases, Big Data Analytics, Software Systems Design & Implementation, Data Science (Individual Study), Cloud Computing & Data Analysis, Information Ethics, Security & Policies, Principles of Info Security & Privacy
      </p>
    </div>
  </div>

  {/* BEC - aligned like UNC */}
  <div className="flex flex-col md:flex-row items-start justify-center gap-8 w-full max-w-6xl">
    <img
      src={require('./assets/BEC-Logo.png')}
      alt="BEC Logo"
      className="w-40 h-auto object-contain rounded-full border-4 border-yellow-400 shadow-lg bg-white p-2"
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


      <div className="h-screen w-full flex items-center justify-center bg-white" id="experience">
        
  <div className="min-h-screen w-full bg-[#f9fafb] text-gray-800 px-6 py-20" id="experience">
  <h2 className="text-5xl font-extrabold text-center text-[#1f2937] mb-16">EXPERIENCE</h2>

  <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
    {/* Accenture - ServiceNow Developer */}
    <div className="bg-white rounded-xl p-6 shadow-md border border-gray-200 hover:shadow-lg transition">
      <h3 className="text-sm font-bold text-[#1d4ed8] uppercase">Accenture</h3>
      <p className="text-lg font-semibold mt-1">ServiceNow Developer</p>
      <p className="text-sm text-gray-500 mb-3">7 months · Jun 2023 – Jan 2024</p>
      <p className="text-sm mb-2"><span className="font-semibold text-gray-700">Skills Used:</span> Service Portal, HTML, Angular, GlideRecord, Virtual Agent, REST API</p>
      <ul className="list-disc pl-5 text-sm leading-relaxed text-gray-700 space-y-1">
        <li>Developed widgets for incident status and downtime alerts, reducing duplicate tickets.</li>
        <li>Configured Virtual Agent for agent assignment automation, boosting routing by 25%.</li>
        <li>Maintained sprint boards and ensured alignment with delivery goals.</li>
      </ul>
    </div>

    {/* Accenture - Application Dev Associate */}
    <div className="bg-white rounded-xl p-6 shadow-md border border-gray-200 hover:shadow-lg transition">
      <h3 className="text-sm font-bold text-[#1d4ed8] uppercase">Accenture</h3>
      <p className="text-lg font-semibold mt-1">Application Development Associate</p>
      <p className="text-sm text-gray-500 mb-3">2 Years 1 Month · Apr 2021 – May 2023</p>
      <p className="text-sm mb-2"><span className="font-semibold text-gray-700">Skills Used:</span> ServiceNow, JIRA, Flow Designer, CSAT/DSAT, UI Builder, GlideRecord</p>
      <ul className="list-disc pl-5 text-sm leading-relaxed text-gray-700 space-y-1">
        <li>Built ServiceNow workflows, dashboards & chatbots across departments.</li>
        <li>Improved SLA visibility and incident resolution using performance analytics.</li>
        <li>Reduced manual fulfillment effort by 30% via automated catalog items.</li>
      </ul>
    </div>

    {/* Cognizant - Data Analyst */}
    <div className="bg-white rounded-xl p-6 shadow-md border border-gray-200 hover:shadow-lg transition">
      <h3 className="text-sm font-bold text-[#1d4ed8] uppercase">Cognizant Technology Solutions</h3>
      <p className="text-lg font-semibold mt-1">Data & Reporting Analyst</p>
      <p className="text-sm text-gray-500 mb-3">3 Months · Dec 2020 – Mar 2021</p>
      <p className="text-sm mb-2"><span className="font-semibold text-gray-700">Skills Used:</span> SQL, Python, Power BI, ETL, Forecasting</p>
      <ul className="list-disc pl-5 text-sm leading-relaxed text-gray-700 space-y-1">
        <li>Built ETL pipelines for 10M+ records and improved reporting automation by 40%.</li>
        <li>Created sales/churn forecasting models that increased ROI by 22%.</li>
        <li>Developed Power BI dashboards for 6 regions to reduce manual reporting.</li>
      </ul>
    </div>
  </div>
</div>


      </div>

<div className="py-16 px-4 bg-white" id="certifications">
  <div className="max-w-6xl mx-auto bg-gray-50 rounded-xl shadow-lg p-8">
    <h2 className="text-4xl font-extrabold text-center text-[#0f2940] mb-10">Certifications</h2>

    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8 justify-center items-center">
      {/* Repeat this block for each certification */}
      <div className="flex flex-col items-center group hover:scale-105 transition-transform duration-300">
        <img
          src={require('./assets/AWS-SSA.png')}
          alt="AWS Certified Solutions Architect"
          className="w-30 h-30 object-contain"
        />
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
          src={require('./assets/AWS-SSA.png')}
          alt="AWS Certified Solutions Architect"
          className="w-30 h-30 object-contain"
        />
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
          src={require('./assets/OCI-GenAI.png')}
          alt="AWS Certified Solutions Architect"
          className="w-30 h-30 object-contain"
        />
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
          className="w-30 h-30 object-contain"
        />
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
          className="w-30 h-30 object-contain"
        />
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
          className="w-30 h-30 object-contain"
        />
        <a
          href="https://example.com/cert1"
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
  <h2 className="text-5xl font-extrabold text-center text-[#0f2940] mb-16">PROJECTS</h2>

  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
    {/* Example project card - repeat 6 times */}
    <div className="bg-white shadow-lg rounded-lg p-6 flex flex-col justify-between hover:shadow-2xl transition duration-300">
      <div>
        <h3 className="text-xl font-bold text-[#0f2940] mb-2">AQI Forecasting</h3>
        <p className="text-sm text-gray-600">Built ML model to predict air quality index using weather and traffic data.</p>
      </div>
      <a
  href="https://github.com/your-username/aqi-forecasting"
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
        <p className="text-sm text-gray-600">Built ML model to predict air quality index using weather and traffic data.</p>
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
        <h3 className="text-xl font-bold text-[#0f2940] mb-2">Bubble Chart</h3>
        <p className="text-sm text-gray-600">Built ML model to predict air quality index using weather and traffic data.</p>
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
        <p className="text-sm text-gray-600">Built ML model to predict air quality index using weather and traffic data.</p>
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


      <div className="py-12 bg-gray-100 flex items-center justify-center px-2" id="contact">
  <div className="w-full max-w-xs bg-white p-3 rounded-xl shadow-md">


    <h2 className="text-3xl font-bold mb-6 text-center text-[#0f2940]">Get In Touch</h2>

    <form className="space-y-4">
      <div>
        <label className="block mb-1 text-sm font-medium text-gray-700">Name</label>
        <input
          type="text"
          placeholder="Your name"
          className="w-full border border-gray-300 rounded-md p-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#f16e44]"
        />
      </div>
      <div>
        <label className="block mb-1 text-sm font-medium text-gray-700">Email</label>
        <input
          type="email"
          placeholder="Your email"
          className="w-full border border-gray-300 rounded-md p-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#f16e44]"
        />
      </div>
      <div>
        <label className="block mb-1 text-sm font-medium text-gray-700">Message</label>
        <textarea
          rows="3"
          placeholder="Write your message..."
          className="w-full border border-gray-300 rounded-md p-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#f16e44]"
        ></textarea>
      </div>
      <button
        type="submit"
        className="w-full bg-[#f16e44] text-white py-2 rounded-md font-semibold hover:bg-[#e05a30] transition duration-300 text-sm"
      >
        Send Message
      </button>
    </form>

    {/* Optional: Socials */}
    <div className="mt-6 flex justify-center gap-6 text-xl text-[#0f2940]">
      <a href="mailto:your@email.com" className="hover:text-[#f16e44]">📧</a>
      <a href="https://github.com/yourgithub" target="_blank" rel="noopener noreferrer" className="hover:text-[#f16e44]">🐱</a>
      <a href="https://linkedin.com/in/yourlinkedin" target="_blank" rel="noopener noreferrer" className="hover:text-[#f16e44]">🔗</a>
    </div>
  </div>
</div>

<footer className="bg-[#0f2940] text-white text-center py-6 mt-10">
  <div className="flex flex-col md:flex-row items-center justify-center gap-6">
    <p className="text-sm">&copy; {new Date().getFullYear()} Arpita Madhukar Kalburgi. All rights reserved.</p>
  </div>
</footer>

</div>
  );
}

export default App;
