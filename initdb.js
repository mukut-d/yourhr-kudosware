const sql = require("better-sqlite3");
const db = sql("jobs.db");

const dummyJobs = [
  {
    title: "Software Engineer",
    slug: "software-engineer",
    image: "/images/software-engineer.jpg",
    summary:
      "A skilled developer needed to work on backend systems and build scalable applications.",
    responsibilities: `
       1. Write clean, maintainable code:
          Develop backend services and APIs using modern technologies.
 
       2. Collaborate with cross-functional teams:
          Work with designers, product managers, and other engineers to deliver high-quality software.
 
       3. Debug and improve existing systems:
          Troubleshoot issues and optimize performance for existing applications.
     `,
    requirements: `
       1. Bachelor's degree in Computer Science or related field.
       2. Proficiency in Java, Python, or similar programming languages.
       3. Strong problem-solving skills and ability to work in a team.
     `,
    poster: "John Doe",
    poster_email: "johndoe@example.com",
  },
  {
    title: "Marketing Specialist",
    slug: "marketing-specialist",
    image: "/images/software-engineer.jpg",
    summary:
      "A creative marketing expert to plan, execute, and manage digital campaigns.",
    responsibilities: `
       1. Develop marketing strategies:
          Plan and implement marketing campaigns across various channels.
 
       2. Analyze performance:
          Use analytics tools to measure campaign success and optimize future efforts.
 
       3. Collaborate with content creators:
          Work with the design and content teams to produce engaging materials.
     `,
    requirements: `
       1. Experience with SEO, SEM, and social media marketing.
       2. Strong communication and analytical skills.
       3. Bachelor's degree in Marketing, Business, or related field.
     `,
    poster: "Sarah Lee",
    poster_email: "sarahlee@example.com",
  },
  {
    title: "Data Analyst",
    slug: "data-analyst",
    image: "/images/software-engineer.jpg",
    summary:
      "Seeking a detail-oriented data analyst to interpret complex data and provide actionable insights.",
    responsibilities: `
       1. Collect and clean data:
          Work with large datasets to identify trends and patterns.
 
       2. Create visualizations:
          Build dashboards and reports to present data in a clear and concise way.
 
       3. Collaborate with teams:
          Work with other departments to drive data-informed decision-making.
     `,
    requirements: `
       1. Proficiency in SQL, Python, and Excel.
       2. Strong analytical and problem-solving skills.
       3. Bachelor's degree in Data Science, Statistics, or related field.
     `,
    poster: "Max Schwarz",
    poster_email: "maxschwarz@example.com",
  },
  {
    title: "Graphic Designer",
    slug: "graphic-designer",
    image: "/images/software-engineer.jpg",
    summary:
      "Looking for a creative graphic designer to develop visual content for marketing and branding efforts.",
    responsibilities: `
       1. Design marketing materials:
          Create logos, banners, and social media graphics.
 
       2. Collaborate with the marketing team:
          Work closely with marketing to ensure visual content aligns with branding.
 
       3. Stay updated on design trends:
          Keep up-to-date with industry trends and incorporate new techniques.
     `,
    requirements: `
       1. Proficiency in Adobe Creative Suite (Photoshop, Illustrator, etc.).
       2. Strong portfolio showcasing creative work.
       3. Bachelor's degree in Graphic Design or related field.
     `,
    poster: "Emily Chen",
    poster_email: "emilychen@example.com",
  },
  {
    title: "Project Manager",
    slug: "project-manager",
    image: "/images/software-engineer.jpg",
    summary:
      "An organized and strategic project manager to lead teams and ensure project success.",
    responsibilities: `
       1. Oversee project timelines:
          Manage deadlines, budgets, and resources for multiple projects.
 
       2. Communicate with stakeholders:
          Ensure clear communication between teams and clients.
 
       3. Identify risks and solve problems:
          Mitigate risks and find solutions to keep projects on track.
     `,
    requirements: `
       1. Experience in project management methodologies (Agile, Scrum, etc.).
       2. Strong leadership and communication skills.
       3. PMP or related certification is a plus.
     `,
    poster: "Laura Smith",
    poster_email: "laurasmith@example.com",
  },
  {
    title: "Accountant",
    slug: "accountant",
    image: "/images/software-engineer.jpg",
    summary:
      "A detail-oriented accountant needed to manage financial records, budgets, and compliance.",
    responsibilities: `
       1. Manage financial transactions:
          Handle accounts payable/receivable and payroll.
 
       2. Prepare financial reports:
          Produce balance sheets, profit/loss statements, and other financial documents.
 
       3. Ensure compliance:
          Stay updated on tax laws and ensure the company meets all legal requirements.
     `,
    requirements: `
       1. Proficiency in accounting software (QuickBooks, Xero, etc.).
       2. Bachelor's degree in Accounting, Finance, or related field.
       3. CPA certification preferred.
     `,
    poster: "Franz Huber",
    poster_email: "franzhuber@example.com",
  },
  {
    title: "Customer Service Representative",
    slug: "customer-service-representative",
    image: "/images/software-engineer.jpg",
    summary:
      "A friendly and patient customer service representative to assist customers with inquiries and issues.",
    responsibilities: `
       1. Handle customer inquiries:
          Respond to customer questions and provide solutions.
 
       2. Resolve issues:
          Troubleshoot problems and ensure customer satisfaction.
 
       3. Maintain records:
          Log customer interactions and follow up on outstanding issues.
     `,
    requirements: `
       1. Excellent communication and interpersonal skills.
       2. Experience in customer service or related field.
       3. Ability to work in a fast-paced environment.
     `,
    poster: "Sophia Green",
    poster_email: "sophiagreen@example.com",
  },
];

db.prepare(
  `
   CREATE TABLE IF NOT EXISTS jobs (
       id INTEGER PRIMARY KEY AUTOINCREMENT,
       slug TEXT NOT NULL UNIQUE,
       title TEXT NOT NULL,
       image TEXT NOT NULL,
      summary TEXT NOT NULL,
       responsibilities TEXT NOT NULL,
       requirements TEXT NOT NULL,
       poster TEXT NOT NULL,
       poster_email TEXT NOT NULL
    )
`
).run();

async function initData() {
  const stmt = db.prepare(`
      INSERT INTO jobs VALUES (
         null,
         @slug,
         @title,
         @image,
         @summary,
         @responsibilities,
          @requirements,
         @poster,
         @poster_email
      )
   `);

  for (const jobs of dummyJobs) {
    stmt.run(jobs);
  }
}

initData();
