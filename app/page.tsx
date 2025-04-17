import { Github, Linkedin, Mail } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export default function Portfolio() {
  return (
    <div className="flex min-h-screen flex-col">
      <header className="sticky top-0 z-10 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-14 items-center">
          <div className="mr-4 hidden md:flex">
            <Link href="/" className="mr-6 flex items-center space-x-2">
              <span className="font-bold">DataML Portfolio</span>
            </Link>
            <nav className="flex items-center space-x-6 text-sm font-medium">
              <Link href="#about" className="transition-colors hover:text-foreground/80">
                About
              </Link>
              <Link href="#experience" className="transition-colors hover:text-foreground/80">
                Experience
              </Link>
              <Link href="#projects" className="transition-colors hover:text-foreground/80">
                Projects
              </Link>
              <Link href="#contact" className="transition-colors hover:text-foreground/80">
                Contact
              </Link>
            </nav>
          </div>
          <div className="flex flex-1 items-center justify-between space-x-2 md:justify-end">
            <div className="w-full flex-1 md:w-auto md:flex-none">
              <nav className="flex items-center justify-between md:hidden">
                <Link href="/" className="flex items-center space-x-2">
                  <span className="font-bold">DataML Portfolio</span>
                </Link>
                <Button variant="ghost" size="icon">
                  <span className="sr-only">Toggle menu</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-6 w-6"
                  >
                    <line x1="4" x2="20" y1="12" y2="12" />
                    <line x1="4" x2="20" y1="6" y2="6" />
                    <line x1="4" x2="20" y1="18" y2="18" />
                  </svg>
                </Button>
              </nav>
            </div>
            <div className="flex items-center gap-2">
              <Link href="https://github.com" target="_blank" rel="noreferrer">
                <Button variant="ghost" size="icon">
                  <Github className="h-4 w-4" />
                  <span className="sr-only">GitHub</span>
                </Button>
              </Link>
              <Link href="https://linkedin.com" target="_blank" rel="noreferrer">
                <Button variant="ghost" size="icon">
                  <Linkedin className="h-4 w-4" />
                  <span className="sr-only">LinkedIn</span>
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </header>
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                    Data & Machine Learning Engineer
                  </h1>
                  <p className="max-w-[600px] text-muted-foreground md:text-xl">
                    Transforming data into actionable insights and building intelligent systems
                  </p>
                </div>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <Link href="#contact">
                    <Button>Get in Touch</Button>
                  </Link>
                  <Link href="#projects">
                    <Button variant="outline">View Projects</Button>
                  </Link>
                </div>
              </div>
              <div className="flex items-center justify-center">
                <Image
                  src="/placeholder.svg?height=400&width=400"
                  width={400}
                  height={400}
                  alt="Profile"
                  className="aspect-square overflow-hidden rounded-full object-cover border border-border"
                />
              </div>
            </div>
          </div>
        </section>
        <section id="about" className="w-full py-12 md:py-24 lg:py-32 bg-muted/40">
          <div className="container px-4 md:px-6">
            <div className="mx-auto flex max-w-[58rem] flex-col items-center justify-center gap-4 text-center">
              <h2 className="text-3xl font-bold leading-[1.1] sm:text-3xl md:text-6xl">About Me</h2>
              <p className="max-w-[85%] leading-normal text-muted-foreground sm:text-lg sm:leading-7">
                I'm a passionate Data and Machine Learning Engineer with expertise in building data pipelines,
                developing predictive models, and creating data-driven solutions. With a strong foundation in
                statistics, programming, and machine learning algorithms, I help organizations leverage their data to
                make better decisions and automate processes.
              </p>
              <div className="mt-6 flex flex-wrap justify-center gap-4">
                <Badge className="px-3 py-1 text-sm">Python</Badge>
                <Badge className="px-3 py-1 text-sm">TensorFlow</Badge>
                <Badge className="px-3 py-1 text-sm">PyTorch</Badge>
                <Badge className="px-3 py-1 text-sm">Scikit-learn</Badge>
                <Badge className="px-3 py-1 text-sm">Pandas</Badge>
                <Badge className="px-3 py-1 text-sm">SQL</Badge>
                <Badge className="px-3 py-1 text-sm">Big Data</Badge>
                <Badge className="px-3 py-1 text-sm">Data Visualization</Badge>
                <Badge className="px-3 py-1 text-sm">Cloud Computing</Badge>
                <Badge className="px-3 py-1 text-sm">MLOps</Badge>
              </div>
            </div>
          </div>
        </section>
        <section id="experience" className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="mx-auto max-w-[58rem] space-y-12">
              <div className="space-y-4 text-center">
                <h2 className="text-3xl font-bold leading-[1.1] sm:text-3xl md:text-6xl">Work Experience</h2>
                <p className="text-muted-foreground sm:text-lg">My professional journey in the world of data and ML</p>
              </div>
              <div className="grid gap-8 md:gap-12">
                <div className="grid gap-1">
                  <div className="flex items-center justify-between">
                    <h3 className="text-xl font-bold">Senior Data Scientist</h3>
                    <div className="text-sm text-muted-foreground">2021 - Present</div>
                  </div>
                  <div className="text-lg font-semibold">Tech Innovations Inc.</div>
                  <p className="text-muted-foreground">
                    Led a team of data scientists in developing machine learning models for customer segmentation and
                    churn prediction. Implemented MLOps practices to streamline model deployment and monitoring. Reduced
                    customer churn by 15% through predictive analytics.
                  </p>
                </div>
                <div className="grid gap-1">
                  <div className="flex items-center justify-between">
                    <h3 className="text-xl font-bold">Machine Learning Engineer</h3>
                    <div className="text-sm text-muted-foreground">2018 - 2021</div>
                  </div>
                  <div className="text-lg font-semibold">Data Solutions Corp.</div>
                  <p className="text-muted-foreground">
                    Designed and implemented end-to-end machine learning pipelines for recommendation systems. Optimized
                    data processing workflows, reducing processing time by 40%. Collaborated with cross-functional teams
                    to integrate ML solutions into production systems.
                  </p>
                </div>
                <div className="grid gap-1">
                  <div className="flex items-center justify-between">
                    <h3 className="text-xl font-bold">Data Analyst</h3>
                    <div className="text-sm text-muted-foreground">2016 - 2018</div>
                  </div>
                  <div className="text-lg font-semibold">Analytics Pioneers</div>
                  <p className="text-muted-foreground">
                    Performed exploratory data analysis and created interactive dashboards for business stakeholders.
                    Developed automated reporting systems using Python and SQL. Identified key business insights that
                    led to a 20% increase in operational efficiency.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section id="projects" className="w-full py-12 md:py-24 lg:py-32 bg-muted/40">
          <div className="container px-4 md:px-6">
            <div className="mx-auto max-w-[58rem] space-y-12">
              <div className="space-y-4 text-center">
                <h2 className="text-3xl font-bold leading-[1.1] sm:text-3xl md:text-6xl">Projects</h2>
                <p className="text-muted-foreground sm:text-lg">
                  A showcase of my data science and machine learning projects
                </p>
              </div>
              <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-3">
                <Card>
                  <CardHeader>
                    <CardTitle>Predictive Maintenance System</CardTitle>
                    <CardDescription>Machine Learning, IoT, Time Series Analysis</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="aspect-video overflow-hidden rounded-lg">
                      <Image
                        src="/placeholder.svg?height=200&width=350"
                        width={350}
                        height={200}
                        alt="Predictive Maintenance Dashboard"
                        className="object-cover"
                      />
                    </div>
                    <p className="mt-4 text-muted-foreground">
                      Developed a predictive maintenance system using sensor data to forecast equipment failures before
                      they occur, reducing downtime by 35%.
                    </p>
                    <div className="mt-4 flex flex-wrap gap-2">
                      <Badge variant="outline">Python</Badge>
                      <Badge variant="outline">TensorFlow</Badge>
                      <Badge variant="outline">Time Series</Badge>
                    </div>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader>
                    <CardTitle>Customer Segmentation Engine</CardTitle>
                    <CardDescription>Clustering, Data Visualization, Marketing Analytics</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="aspect-video overflow-hidden rounded-lg">
                      <Image
                        src="/placeholder.svg?height=200&width=350"
                        width={350}
                        height={200}
                        alt="Customer Segmentation Visualization"
                        className="object-cover"
                      />
                    </div>
                    <p className="mt-4 text-muted-foreground">
                      Created an advanced customer segmentation system using unsupervised learning techniques, enabling
                      targeted marketing campaigns that increased conversion rates by 25%.
                    </p>
                    <div className="mt-4 flex flex-wrap gap-2">
                      <Badge variant="outline">Scikit-learn</Badge>
                      <Badge variant="outline">Pandas</Badge>
                      <Badge variant="outline">Tableau</Badge>
                    </div>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader>
                    <CardTitle>NLP-Powered Document Classifier</CardTitle>
                    <CardDescription>Natural Language Processing, Deep Learning</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="aspect-video overflow-hidden rounded-lg">
                      <Image
                        src="/placeholder.svg?height=200&width=350"
                        width={350}
                        height={200}
                        alt="NLP Document Classification"
                        className="object-cover"
                      />
                    </div>
                    <p className="mt-4 text-muted-foreground">
                      Built an automated document classification system using transformer-based NLP models, achieving
                      92% accuracy in categorizing legal documents.
                    </p>
                    <div className="mt-4 flex flex-wrap gap-2">
                      <Badge variant="outline">PyTorch</Badge>
                      <Badge variant="outline">BERT</Badge>
                      <Badge variant="outline">Hugging Face</Badge>
                    </div>
                  </CardContent>
                </Card>
              </div>
              <div className="flex justify-center">
                <Link href="https://github.com" target="_blank" rel="noreferrer">
                  <Button variant="outline" className="gap-1">
                    <Github className="h-4 w-4" />
                    View More Projects on GitHub
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>
        <section id="contact" className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="mx-auto grid max-w-[58rem] gap-4 text-center">
              <div className="space-y-3">
                <h2 className="text-3xl font-bold leading-[1.1] sm:text-3xl md:text-6xl">Get in Touch</h2>
                <p className="text-muted-foreground sm:text-lg">
                  Interested in working together? Feel free to reach out to me.
                </p>
              </div>
              <div className="mx-auto w-full max-w-sm space-y-2">
                <div className="flex flex-col items-center justify-center gap-4 text-center">
                  <div className="flex items-center gap-2">
                    <Mail className="h-5 w-5" />
                    <Link href="mailto:contact@example.com" className="text-primary underline underline-offset-4">
                      contact@example.com
                    </Link>
                  </div>
                  <div className="flex items-center gap-2">
                    <Linkedin className="h-5 w-5" />
                    <Link
                      href="https://linkedin.com"
                      target="_blank"
                      rel="noreferrer"
                      className="text-primary underline underline-offset-4"
                    >
                      linkedin.com/in/dataml-engineer
                    </Link>
                  </div>
                  <div className="flex items-center gap-2">
                    <Github className="h-5 w-5" />
                    <Link
                      href="https://github.com"
                      target="_blank"
                      rel="noreferrer"
                      className="text-primary underline underline-offset-4"
                    >
                      github.com/dataml-engineer
                    </Link>
                  </div>
                </div>
              </div>
              <div className="mt-4">
                <Button className="gap-1">
                  <Mail className="h-4 w-4" />
                  Send Message
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="w-full border-t py-6">
        <div className="container flex flex-col items-center justify-center gap-4 px-4 md:px-6 md:flex-row">
          <p className="text-center text-sm leading-loose text-muted-foreground md:text-left">
            © {new Date().getFullYear()} Data ML Engineer Portfolio. All rights reserved.
          </p>
          <div className="flex items-center gap-4">
            <Link href="https://github.com" target="_blank" rel="noreferrer">
              <Button variant="ghost" size="icon">
                <Github className="h-4 w-4" />
                <span className="sr-only">GitHub</span>
              </Button>
            </Link>
            <Link href="https://linkedin.com" target="_blank" rel="noreferrer">
              <Button variant="ghost" size="icon">
                <Linkedin className="h-4 w-4" />
                <span className="sr-only">LinkedIn</span>
              </Button>
            </Link>
            <Link href="mailto:contact@example.com">
              <Button variant="ghost" size="icon">
                <Mail className="h-4 w-4" />
                <span className="sr-only">Email</span>
              </Button>
            </Link>
          </div>
        </div>
      </footer>
    </div>
  )
}
