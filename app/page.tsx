"use client";
import Image from "next/image";
import {
 Github,
 Linkedin,
 Mail,
 ExternalLink,
 Database,
 MessageCircle,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { ProjectModal } from "@/components/ProjectModal";
import { useState } from "react";
import { aboutFeatures, skills, projects, personalInfo } from "@/lib/data";


export default function Home() {
 const formattedPhone = personalInfo.phone
   .replace(/\s+/g, "")
   .replace(/[-+()]/g, "");
 const whatsAppUrl = `https://wa.me/${formattedPhone}`;
 return (
   <div className="min-h-screen bg-zinc-100">
     {/* Header */}
     <header className="sticky top-0 z-10 bg-white border-b border-zinc-200">
       <div className="container flex items-center justify-between h-16 px-4 mx-auto md:px-6">
         <div className="flex items-center gap-2">
           <Database className="w-6 h-6 text-red-600" />
           <span className="text-xl font-bold">{personalInfo.name}</span>
         </div>
         <nav className="hidden md:flex items-center gap-6">
           <a
             href="#about"
             className="text-zinc-600 hover:text-red-600 transition-colors"
           >
             About
           </a>
           <a
             href="#skills"
             className="text-zinc-600 hover:text-red-600 transition-colors"
           >
             Skills
           </a>
           <a
             href="#projects"
             className="text-zinc-600 hover:text-red-600 transition-colors"
           >
             Projects
           </a>
           <a
             href="#contact"
             className="text-zinc-600 hover:text-red-600 transition-colors"
           >
             Contact
           </a>
         </nav>
         <a
           href={whatsAppUrl}
           target="_blank"
           rel="noopener noreferrer"
           className="inline-block"
         >
           <button className="bg-red-600 hover:bg-red-700 text-white py-2 px-4 rounded flex items-center">
             <MessageCircle className="w-4 h-4 mr-2 text-green-500" />
             {personalInfo.phone}
           </button>
         </a>
       </div>
     </header>


     {/* Hero Section */}
     <section className="relative py-20 bg-gradient-to-br from-zinc-800 to-zinc-900 text-white">
       <div className="absolute inset-0 opacity-10">
         <div className="absolute inset-0 bg-[url('/images/data_background.png?height=800&width=1600')] bg-cover bg-center" />
       </div>
       <div className="container relative px-4 mx-auto md:px-6">
         <div className="grid gap-6 md:grid-cols-2 md:gap-10 items-center">
           <div className="space-y-4">
             <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl">
               Helping Startups set up{" "}
               <span className="text-red-500"> Data Functions </span>
             </h1>
             <p className="max-w-[600px] text-zinc-300 md:text-xl">
               {personalInfo.shortBio}
             </p>
             <div className="flex flex-col gap-3 min-[400px]:flex-row">
               <a href="#projects">
                 <Button className="bg-red-600 hover:bg-red-700 text-white">
                   View Projects
                 </Button>
               </a>
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
               <Image
                 src="/images/profile_pic.png?height=320&width=320"
                 alt="Profile"
                 fill
                 className="object-cover"
               />
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
             <p className="text-zinc-700 text-justify">
               I'm a results-driven Data Engineer with over a decade of
               experience designing and implementing scalable data pipelines,
               ETL frameworks, and robust data warehousing solutions. With a
               unique blend of software engineering discipline and data science
               acumen, I specialize in transforming raw data into impactful
               insights that drive business outcomes.
             </p>
             <p className="text-zinc-700 text-justify">
               My passion lies in working with startups—building data systems
               from the ground up, defining analytics strategies, and setting
               up efficient, scalable infrastructures that evolve with the
               business. I've successfully led cross-functional teams and
               delivered value through both optimized data architecture and
               complex machine learning pipelines.
             </p>
             <p className="text-zinc-700 text-justify">
               Over the years, I've worked across a range of industries
               including finance, adtech, gaming, and web3—enabling data-driven
               decision-making through high-quality, production-grade
               solutions. Whether it's architecting a modern data stack or
               spearheading end-to-end ML initiatives, I bring a strong
               execution mindset and a deep commitment to delivering measurable
               impact.
             </p>
           </div>
           <div className="grid grid-cols-2 gap-4">
             {aboutFeatures.map((feature, index) => (
               <div
                 key={index}
                 className="p-6 bg-zinc-100 rounded-lg border border-zinc-200 flex flex-col items-center text-center"
               >
                 <div className="w-12 h-12 rounded-full bg-red-100 flex items-center justify-center mb-4">
                   {<feature.icon className="w-6 h-6 text-red-600" />}
                 </div>
                 <h3 className="font-medium text-zinc-900">{feature.title}</h3>
                 <p className="text-sm text-zinc-600 mt-2">
                   {feature.description}
                 </p>
               </div>
             ))}
           </div>
         </div>
       </div>
     </section>


     {/* Skills Section */}
     <section id="skills" className="py-16 bg-zinc-100">
       <div className="container px-4 mx-auto md:px-6">
         <div className="flex flex-col items-center text-center mb-12">
           <h2 className="text-3xl font-bold tracking-tight sm:text-4xl text-zinc-900">
             Technical <span className="text-red-600">Skills</span>
           </h2>
           <div className="mt-2 w-20 h-1 bg-red-600 rounded-full"></div>
         </div>
         <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
           {skills.map((skillCategory) => (
             <div
               key={skillCategory.title}
               className="bg-white p-6 rounded-lg shadow-sm border border-zinc-200"
             >
               <h3 className="text-xl font-semibold mb-4 text-zinc-900">
                 {skillCategory.title}
               </h3>
               <div className="flex flex-wrap gap-2">
                 {skillCategory.skills.map((skill) => (
                   <span
                     key={skill}
                     className="inline-block px-3 py-1 text-sm font-medium bg-zinc-200 text-zinc-800 rounded-full"
                   >
                     {skill}
                   </span>
                 ))}
               </div>
             </div>
           ))}
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
           {projects.map((project, index) => (
             <ProjectCard
               key={index}
               title={project.title}
               description={project.description}
               tags={project.tags}
               image={project.image}
               challenges={project.challenges}
               solution={project.solution}
               outcomes={project.outcomes}
             />
           ))}
         </div>
       </div>
     </section>


     <section id="contact" className="py-16 bg-zinc-900 text-white">
  <div className="container px-4 mx-auto md:px-6">
    <div className="flex flex-col items-center text-center mb-10">
      <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
        Get In <span className="text-red-500">Touch</span>
      </h2>
      <div className="mt-2 w-20 h-1 bg-red-500 rounded-full" />
      <p className="mt-4 max-w-xl text-zinc-300">
        Whether you're building something ambitious or just want to connect over data, ML, or startup challenges — drop me a line. I’d love to hear from you.
      </p>
    </div>

    <div className="max-w-2xl mx-auto space-y-6">
      <div className="flex items-center gap-4">
        <div className="w-10 h-10 rounded-full bg-red-600/20 flex items-center justify-center">
          <Mail className="w-5 h-5 text-red-500" />
        </div>
        <div>
          <div className="text-sm text-zinc-400">Email</div>
          <a
            href={`mailto:${personalInfo.email}`}
            className="text-white hover:text-red-400 transition-colors"
          >
            {personalInfo.email}
          </a>
        </div>
      </div>

      <div className="flex items-center gap-4">
        <div className="w-10 h-10 rounded-full bg-red-600/20 flex items-center justify-center">
          <Linkedin className="w-5 h-5 text-red-500" />
        </div>
        <div>
          <div className="text-sm text-zinc-400">LinkedIn</div>
          <a
            href={personalInfo.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-red-400 transition-colors flex items-center"
          >
            <span className="truncate">{personalInfo.linkedin.replace("https://www.", "")}</span>
            <ExternalLink className="w-3 h-3 ml-2 text-zinc-500" />
          </a>
        </div>
      </div>

      <div className="flex items-center gap-4">
        <div className="w-10 h-10 rounded-full bg-red-600/20 flex items-center justify-center">
          <Github className="w-5 h-5 text-red-500" />
        </div>
        <div>
          <div className="text-sm text-zinc-400">GitHub</div>
          <a
            href={`https://${personalInfo.github}`}
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-red-400 transition-colors flex items-center"
          >
            {personalInfo.github}
            <ExternalLink className="w-3 h-3 ml-2 text-zinc-500" />
          </a>
        </div>
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
             <span className="text-lg font-semibold text-white">
               DataEngineer
             </span>
           </div>
           <div className="text-sm">
             © 2025 {personalInfo.name}. All rights reserved.
           </div>
         </div>
       </div>
     </footer>
   </div>
 );
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
 );
}


// Project Card Component
function ProjectCard({
 title,
 description,
 tags,
 image,
 challenges,
 solution,
 outcomes,
}: {
 title: string;
 description: string;
 tags: string[];
 image: string;
 challenges?: string;
 solution?: string;
 outcomes?: string;
}) {
 const [isModalOpen, setIsModalOpen] = useState(false);


 return (
   <>
     <div className="bg-zinc-50 rounded-lg overflow-hidden border border-zinc-200 transition-all duration-300 hover:shadow-md hover:border-red-200">
       <div className="p-6">
         <h3 className="text-xl font-semibold mb-2 text-zinc-900">{title}</h3>
         <p className="text-zinc-600 mb-4">{description}</p>
         <div className="flex flex-wrap gap-2 mb-4">
           {tags.map((tag, index) => (
             <span
               key={index}
               className="px-2 py-1 text-xs font-medium bg-red-100 text-red-700 rounded-full"
             >
               {tag}
             </span>
           ))}
         </div>
         <Button
           variant="outline"
           className="w-full border-zinc-300 text-zinc-700 hover:bg-red-50 hover:text-red-700 hover:border-red-200"
           onClick={() => setIsModalOpen(true)}
         >
           View Details <ExternalLink className="w-4 h-4 ml-2" />
         </Button>
       </div>
     </div>


     <ProjectModal
       isOpen={isModalOpen}
       onClose={() => setIsModalOpen(false)}
       title={title}
       description={description}
       techStack={tags}
       challenges={challenges}
       solution={solution}
       outcomes={outcomes}
     />
   </>
 );
}



