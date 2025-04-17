import Image from "next/image"
import { Github, Linkedin, Mail, ExternalLink, Database, Server, Code, BarChart4 } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function Home() {
  return (
    <div className="min-h-screen bg-zinc-100">
      {/* Header */}
      <header className="sticky top-0 z-10 bg-white border-b border-zinc-200">
        <div className="container flex items-center justify-between h-16 px-4 mx-auto md:px-6">
          <div className="flex items-center gap-2">
            <Database className="w-6 h-6 text-red-600" />
            <span className="text-xl font-bold">Tamajyoti Dhar</span>
          </div>
          <nav className="hidden md:flex items-center gap-6">
            <a href="#about" className="text-zinc-600 hover:text-red-600 transition-colors">
              About
            </a>
            <a href="#skills" className="text-zinc-600 hover:text-red-600 transition-colors">
              Skills
            </a>
            <a href="#projects" className="text-zinc-600 hover:text-red-600 transition-colors">
              Projects
            </a>
            <a href="#contact" className="text-zinc-600 hover:text-red-600 transition-colors">
              Contact
            </a>
          </nav>
          <Button className="bg-red-600 hover:bg-red-700 text-white">
            <Mail className="w-4 h-4 mr-2" />
            +91-9008054298
          </Button>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-zinc-800 to-zinc-900 text-white">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-[url('/placeholder.svg?height=800&width=1600')] bg-cover bg-center" />
        </div>
        <div className="container relative px-4 mx-auto md:px-6">
          <div className="grid gap-6 md:grid-cols-2 md:gap-10 items-center">
            <div className="space-y-4">
              <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl">
                Helping Startups set up <span className="text-red-500"> Data Functions </span>
              </h1>
              <p className="max-w-[600px] text-zinc-300 md:text-xl">
               I help startups design scalable data pipelines, architect real-time analytics systems, and apply machine learning to solve their complex business problems.
              </p>
              <div className="flex flex-col gap-3 min-[400px]:flex-row">
                <Button className="bg-red-600 hover:bg-red-700 text-white">View Projects</Button>
                <Button
                variant="outline"
                className="border-red-500 text-red-500 hover:bg-red-500 hover:text-white"
                asChild
              >
                <a href="/resume.pdf" download>
                  Download Resume
                </a>
              </Button>
              </div>
            </div>
            <div className="flex justify-center">
              <div className="relative w-[280px] h-[280px] md:w-[320px] md:h-[320px] rounded-full bg-zinc-800 border-4 border-red-600 overflow-hidden">
                <Image src="/placeholder.svg?height=320&width=320" alt="Profile" fill className="object-cover" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-16 bg-white">
        <div className="container px-4 mx-auto md:px-6">
          <div className="flex flex-col items-center text-center mb-10">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl text-zinc-900">
              About <span className="text-red-600">Me</span>
            </h2>
            <div className="mt-2 w-20 h-1 bg-red-600 rounded-full"></div>
          </div>
          <div className="grid gap-10 md:grid-cols-2 items-center">
            <div className="space-y-4">
              <p className="text-zinc-700">
                I'm a passionate Data Engineer with expertise in designing and implementing data pipelines, ETL
                processes, and data warehousing solutions. With a strong foundation in both software engineering and
                data science, I bridge the gap between raw data and actionable insights.
              </p>
              <p className="text-zinc-700">
                My experience spans across various industries including finance, healthcare, and e-commerce, where I've
                successfully delivered scalable data solutions that drive business decisions.
              </p>
              <div className="pt-4">
                <h3 className="text-xl font-semibold text-zinc-900 mb-2">Education</h3>
                <div className="space-y-2">
                  <div className="p-4 border border-zinc-200 rounded-lg bg-zinc-50">
                    <div className="font-medium text-zinc-900">Master of Science in Data Engineering</div>
                    <div className="text-zinc-600">Stanford University, 2018-2020</div>
                  </div>
                  <div className="p-4 border border-zinc-200 rounded-lg bg-zinc-50">
                    <div className="font-medium text-zinc-900">Bachelor of Science in Computer Science</div>
                    <div className="text-zinc-600">MIT, 2014-2018</div>
                  </div>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="p-6 bg-zinc-100 rounded-lg border border-zinc-200 flex flex-col items-center text-center">
                <div className="w-12 h-12 rounded-full bg-red-100 flex items-center justify-center mb-4">
                  <Database className="w-6 h-6 text-red-600" />
                </div>
                <h3 className="font-medium text-zinc-900">Data Pipelines</h3>
                <p className="text-sm text-zinc-600 mt-2">Building efficient ETL/ELT workflows</p>
              </div>
              <div className="p-6 bg-zinc-100 rounded-lg border border-zinc-200 flex flex-col items-center text-center">
                <div className="w-12 h-12 rounded-full bg-red-100 flex items-center justify-center mb-4">
                  <Server className="w-6 h-6 text-red-600" />
                </div>
                <h3 className="font-medium text-zinc-900">Data Warehousing</h3>
                <p className="text-sm text-zinc-600 mt-2">Designing scalable data storage</p>
              </div>
              <div className="p-6 bg-zinc-100 rounded-lg border border-zinc-200 flex flex-col items-center text-center">
                <div className="w-12 h-12 rounded-full bg-red-100 flex items-center justify-center mb-4">
                  <Code className="w-6 h-6 text-red-600" />
                </div>
                <h3 className="font-medium text-zinc-900">Big Data</h3>
                <p className="text-sm text-zinc-600 mt-2">Processing large-scale datasets</p>
              </div>
              <div className="p-6 bg-zinc-100 rounded-lg border border-zinc-200 flex flex-col items-center text-center">
                <div className="w-12 h-12 rounded-full bg-red-100 flex items-center justify-center mb-4">
                  <BarChart4 className="w-6 h-6 text-red-600" />
                </div>
                <h3 className="font-medium text-zinc-900">Data Analysis</h3>
                <p className="text-sm text-zinc-600 mt-2">Extracting valuable insights</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-16 bg-zinc-100">
        <div className="container px-4 mx-auto md:px-6">
          <div className="flex flex-col items-center text-center mb-10">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl text-zinc-900">
              Technical <span className="text-red-600">Skills</span>
            </h2>
            <div className="mt-2 w-20 h-1 bg-red-600 rounded-full"></div>
          </div>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            <div className="bg-white p-6 rounded-lg shadow-sm border border-zinc-200">
              <h3 className="text-xl font-semibold mb-4 text-zinc-900">Programming Languages</h3>
              <div className="space-y-3">
                <SkillBar name="Python" percentage={90} />
                <SkillBar name="SQL" percentage={95} />
                <SkillBar name="Scala" percentage={80} />
                <SkillBar name="Java" percentage={75} />
              </div>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm border border-zinc-200">
              <h3 className="text-xl font-semibold mb-4 text-zinc-900">Big Data Technologies</h3>
              <div className="space-y-3">
                <SkillBar name="Apache Spark" percentage={85} />
                <SkillBar name="Hadoop" percentage={80} />
                <SkillBar name="Kafka" percentage={75} />
                <SkillBar name="Airflow" percentage={90} />
              </div>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm border border-zinc-200">
              <h3 className="text-xl font-semibold mb-4 text-zinc-900">Cloud Platforms</h3>
              <div className="space-y-3">
                <SkillBar name="AWS" percentage={90} />
                <SkillBar name="Google Cloud" percentage={85} />
                <SkillBar name="Azure" percentage={75} />
                <SkillBar name="Snowflake" percentage={80} />
              </div>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm border border-zinc-200">
              <h3 className="text-xl font-semibold mb-4 text-zinc-900">Databases</h3>
              <div className="space-y-3">
                <SkillBar name="PostgreSQL" percentage={95} />
                <SkillBar name="MongoDB" percentage={85} />
                <SkillBar name="Cassandra" percentage={75} />
                <SkillBar name="Redis" percentage={80} />
              </div>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm border border-zinc-200">
              <h3 className="text-xl font-semibold mb-4 text-zinc-900">Data Visualization</h3>
              <div className="space-y-3">
                <SkillBar name="Tableau" percentage={85} />
                <SkillBar name="Power BI" percentage={80} />
                <SkillBar name="D3.js" percentage={70} />
                <SkillBar name="Matplotlib" percentage={90} />
              </div>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm border border-zinc-200">
              <h3 className="text-xl font-semibold mb-4 text-zinc-900">DevOps</h3>
              <div className="space-y-3">
                <SkillBar name="Docker" percentage={90} />
                <SkillBar name="Kubernetes" percentage={80} />
                <SkillBar name="CI/CD" percentage={85} />
                <SkillBar name="Terraform" percentage={75} />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-16 bg-white">
        <div className="container px-4 mx-auto md:px-6">
          <div className="flex flex-col items-center text-center mb-10">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl text-zinc-900">
              Featured <span className="text-red-600">Projects</span>
            </h2>
            <div className="mt-2 w-20 h-1 bg-red-600 rounded-full"></div>
          </div>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            <ProjectCard
              title="Real-time Analytics Platform"
              description="Designed and implemented a real-time analytics platform using Apache Kafka, Spark Streaming, and Elasticsearch to process and visualize streaming data from IoT devices."
              tags={["Kafka", "Spark", "Elasticsearch", "Python"]}
              image="/placeholder.svg?height=200&width=400"
            />
            <ProjectCard
              title="Data Warehouse Migration"
              description="Led the migration of a legacy data warehouse to Snowflake, implementing modern ELT processes and improving query performance by 300% while reducing operational costs."
              tags={["Snowflake", "dbt", "Airflow", "SQL"]}
              image="/placeholder.svg?height=200&width=400"
            />
            <ProjectCard
              title="ML Feature Store"
              description="Built a centralized feature store for machine learning models, enabling feature reuse, versioning, and consistent feature transformations across multiple data science teams."
              tags={["Python", "Redis", "PostgreSQL", "Docker"]}
              image="/placeholder.svg?height=200&width=400"
            />
            <ProjectCard
              title="Data Quality Framework"
              description="Developed an automated data quality framework that monitors data pipelines, detects anomalies, and alerts stakeholders about potential data issues before they impact business operations."
              tags={["Great Expectations", "Airflow", "Python", "Grafana"]}
              image="/placeholder.svg?height=200&width=400"
            />
            <ProjectCard
              title="Customer 360 Data Platform"
              description="Architected a Customer 360 data platform that integrates data from multiple sources to provide a unified view of customer interactions and behavior."
              tags={["AWS", "Glue", "Redshift", "Python"]}
              image="/placeholder.svg?height=200&width=400"
            />
            <ProjectCard
              title="Streaming ETL Pipeline"
              description="Implemented a streaming ETL pipeline for processing financial transactions in real-time, enabling fraud detection and instant analytics."
              tags={["Flink", "Kafka", "Cassandra", "Scala"]}
              image="/placeholder.svg?height=200&width=400"
            />
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 bg-zinc-900 text-white">
        <div className="container px-4 mx-auto md:px-6">
          <div className="flex flex-col items-center text-center mb-10">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              Get In <span className="text-red-500">Touch</span>
            </h2>
            <div className="mt-2 w-20 h-1 bg-red-500 rounded-full"></div>
          </div>
          <div className="grid gap-10 md:grid-cols-2">
            <div className="space-y-6">
              <h3 className="text-2xl font-semibold">Contact Information</h3>
              <p className="text-zinc-300">
                I'm currently available for freelance work and full-time positions. Feel free to reach out if you have a
                project that needs data engineering expertise.
              </p>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-red-600/20 flex items-center justify-center">
                    <Mail className="w-5 h-5 text-red-500" />
                  </div>
                  <div>
                    <div className="text-sm text-zinc-400">Email</div>
                    <div>contact@dataengineer.com</div>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-red-600/20 flex items-center justify-center">
                    <Linkedin className="w-5 h-5 text-red-500" />
                  </div>
                  <div>
                    <div className="text-sm text-zinc-400">LinkedIn</div>
                    <div>linkedin.com/in/dataengineer</div>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-red-600/20 flex items-center justify-center">
                    <Github className="w-5 h-5 text-red-500" />
                  </div>
                  <div>
                    <div className="text-sm text-zinc-400">GitHub</div>
                    <div>github.com/dataengineer</div>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-zinc-800 p-6 rounded-lg">
              <h3 className="text-2xl font-semibold mb-6">Send Me a Message</h3>
              <form className="space-y-4">
                <div className="grid gap-4 sm:grid-cols-2">
                  <div className="space-y-2">
                    <label htmlFor="name" className="text-sm font-medium text-zinc-300">
                      Name
                    </label>
                    <input
                      id="name"
                      type="text"
                      className="w-full px-3 py-2 bg-zinc-700 border border-zinc-600 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
                      placeholder="Your name"
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="email" className="text-sm font-medium text-zinc-300">
                      Email
                    </label>
                    <input
                      id="email"
                      type="email"
                      className="w-full px-3 py-2 bg-zinc-700 border border-zinc-600 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
                      placeholder="Your email"
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <label htmlFor="subject" className="text-sm font-medium text-zinc-300">
                    Subject
                  </label>
                  <input
                    id="subject"
                    type="text"
                    className="w-full px-3 py-2 bg-zinc-700 border border-zinc-600 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
                    placeholder="Subject"
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="message" className="text-sm font-medium text-zinc-300">
                    Message
                  </label>
                  <textarea
                    id="message"
                    rows={4}
                    className="w-full px-3 py-2 bg-zinc-700 border border-zinc-600 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
                    placeholder="Your message"
                  />
                </div>
                <Button className="w-full bg-red-600 hover:bg-red-700 text-white">Send Message</Button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 bg-zinc-950 text-zinc-400">
        <div className="container px-4 mx-auto md:px-6">
          <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
            <div className="flex items-center gap-2">
              <Database className="w-5 h-5 text-red-500" />
              <span className="text-lg font-semibold text-white">DataEngineer</span>
            </div>
            <div className="flex items-center gap-4">
              <a href="#" className="text-zinc-400 hover:text-red-500 transition-colors">
                <Github className="w-5 h-5" />
                <span className="sr-only">GitHub</span>
              </a>
              <a href="#" className="text-zinc-400 hover:text-red-500 transition-colors">
                <Linkedin className="w-5 h-5" />
                <span className="sr-only">LinkedIn</span>
              </a>
              <a href="#" className="text-zinc-400 hover:text-red-500 transition-colors">
                <Mail className="w-5 h-5" />
                <span className="sr-only">Email</span>
              </a>
            </div>
            <div className="text-sm">© 2023 DataEngineer. All rights reserved.</div>
          </div>
        </div>
      </footer>
    </div>
  )
}

// Skill Bar Component
function SkillBar({ name, percentage }: { name: string; percentage: number }) {
  return (
    <div className="space-y-1">
      <div className="flex justify-between text-sm">
        <span className="font-medium text-zinc-800">{name}</span>
        <span className="text-zinc-600">{percentage}%</span>
      </div>
      <div className="h-2 bg-zinc-200 rounded-full overflow-hidden">
        <div
          className="h-full bg-gradient-to-r from-red-600 to-red-500 rounded-full"
          style={{ width: `${percentage}%` }}
        />
      </div>
    </div>
  )
}

// Project Card Component
function ProjectCard({
  title,
  description,
  tags,
  image,
}: {
  title: string
  description: string
  tags: string[]
  image: string
}) {
  return (
    <div className="bg-zinc-50 rounded-lg overflow-hidden border border-zinc-200 transition-all duration-300 hover:shadow-md hover:border-red-200">
      <div className="relative h-48 overflow-hidden">
        <Image
          src={image || "/placeholder.svg"}
          alt={title}
          fill
          className="object-cover transition-transform duration-500 hover:scale-105"
        />
      </div>
      <div className="p-6">
        <h3 className="text-xl font-semibold mb-2 text-zinc-900">{title}</h3>
        <p className="text-zinc-600 mb-4">{description}</p>
        <div className="flex flex-wrap gap-2 mb-4">
          {tags.map((tag, index) => (
            <span key={index} className="px-2 py-1 text-xs font-medium bg-red-100 text-red-700 rounded-full">
              {tag}
            </span>
          ))}
        </div>
        <Button
          variant="outline"
          className="w-full border-zinc-300 text-zinc-700 hover:bg-red-50 hover:text-red-700 hover:border-red-200"
        >
          View Project <ExternalLink className="w-4 h-4 ml-2" />
        </Button>
      </div>
    </div>
  )
}