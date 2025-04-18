// data.tsx
import { Database, Server, Code, BarChart4, BrainCircuit } from "lucide-react";


// Types
export interface Skill {
 title: string;
 skills: string[];
}


export interface Project {
 title: string;
 description: string;
 tags: string[];
 image: string;
 challenges?: string;
 solution?: string;
 outcomes?: string;
}


export interface AboutFeature {
 icon: React.ElementType;
 title: string;
 description: string;
}


// About section features
export const aboutFeatures: AboutFeature[] = [
 {
   icon: Database,
   title: "Data Pipelines",
   description: "Building efficient ETL/ELT workflows",
 },
 {
   icon: BrainCircuit,
   title: "Machine Learning",
   description: "Building and deploying scalable ML pipelines",
 },
 {
   icon: Code,
   title: "Big Data",
   description: "Processing large-scale datasets",
 },
 {
   icon: BarChart4,
   title: "Data Analysis",
   description: "Extracting valuable insights",
 },
];


// Skills section data
export const skills: Skill[] = [
 {
   title: "Programming Languages",
   skills: ["Python", "SQL", "Scala", "R", "VBA"],
 },
 {
   title: "Big Data Technologies",
   skills: ["Apache Spark", "Hadoop", "Kafka", "Airflow"],
 },
 {
   title: "Cloud Platforms",
   skills: ["AWS", "Snowflake", "Google Cloud", "Azure"],
 },
 {
   title: "Databases",
   skills: [
     "PostgreSQL",
     "Redshift",
     "Snowflake",
     "MongoDB",
     "ElasticSearch",
     "Neo4j",
   ],
 },
 {
   title: "Data Tools & Visualization",
   skills: [
     "DBT",
     "Fivetran",
     "Segment",
     "Helpshift",
     "Tableau",
     "Power BI",
     "Matplotlib",
   ],
 },
 {
   title: "DevOps",
   skills: ["Docker", "Kubernetes", "CI/CD", "Terraform"],
 },
 {
   title: "Machine Learning",
   skills: ["TensorFlow", "PyTorch", "MLflow", "NLP", "LLM"],
 },
 {
   title: "API Development",
   skills: ["REST", "FastAPI", "Flask"],
 },
];


// Projects section data
export const projects: Project[] = [
 {
    title: "Real-time Gaming Event Pipeline",
    description: 
      "Built a real-time event processing pipeline for a gaming startup using Kafka, PySpark, and S3 on Kubernetes to process millions of player events per hour for analytics and personalization.",
    tags: ["Kafka", "PySpark", "S3", "Kubernetes", "Docker", "Gaming"],
    image: "/placeholder.svg?height=200&width=400",
    challenges: 
      "Processing high-volume user events with low latency and limited compute resources, while handling out-of-order data, skewed distributions, and minimizing S3 file fragmentation.",
    solution: 
      "Designed a modular pipeline with Kafka for ingestion, PySpark Structured Streaming for real-time transformations, and S3 for tiered storage. Used Kubernetes to orchestrate containerized Spark jobs with autoscaling, dynamic resource allocation, and late event handling through watermarking.",
    outcomes: 
      "Achieved 99.9% uptime while processing over ~50 million events daily. Reduced infrastructure cost by 30% using adaptive partitioning and compaction strategies, enabling faster analytics and real-time insights across multiple games."
 },
 {
   title: "Data Warehouse Migration",
   description:
     "Led the migration of a legacy data warehouse to Snowflake, implementing modern ELT processes and improving query performance by 300% while reducing operational costs.",
   tags: ["Snowflake", "dbt", "Airflow", "SQL"],
   image: "/placeholder.svg?height=200&width=400",
   challenges:
     "The legacy system had complex dependencies and years of technical debt. We needed to migrate without disrupting ongoing business operations.",
   solution:
     "Developed a phased migration strategy using dbt for transformation logic, Airflow for orchestration, and comprehensive testing frameworks. Implemented a dual-write approach to ensure data consistency during the transition.",
   outcomes:
     "Reduced infrastructure costs by 40%, improved query performance by 300%, and enabled self-service analytics for business users.",
 },
 {
   title: "ML Feature Store",
   description:
     "Built a centralized feature store for machine learning models, enabling feature reuse, versioning, and consistent feature transformations across multiple data science teams.",
   tags: ["Python", "Redis", "PostgreSQL", "Docker"],
   image: "/placeholder.svg?height=200&width=400",
   challenges:
     "Different teams were creating redundant features with inconsistent definitions, leading to model drift and inconsistent results across the organization.",
   solution:
     "Designed a centralized feature store with online (Redis) and offline (PostgreSQL) storage. Implemented feature versioning, lineage tracking, and automated metadata management.",
   outcomes:
     "Reduced feature development time by 60%, improved model consistency, and enabled rapid experimentation through feature reuse.",
 },
 {
   title: "Data Quality Framework",
   description:
     "Developed an automated data quality framework that monitors data pipelines, detects anomalies, and alerts stakeholders about potential data issues before they impact business operations.",
   tags: ["Great Expectations", "Airflow", "Python", "Grafana"],
   image: "/placeholder.svg?height=200&width=400",
   challenges:
     "Data quality issues were often discovered too late, after they had already impacted business decisions or customer experiences.",
   solution:
     "Implemented Great Expectations for data validation, integrated with Airflow for workflow orchestration, and built custom anomaly detection algorithms. Created dashboards in Grafana for monitoring data quality metrics.",
   outcomes:
     "Reduced data incidents by 80%, improved data team productivity, and increased trust in data throughout the organization.",
 },
 {
    title: "Customer 360 Data Platform",
    description:
      "Built a Customer 360 data platform for a marketing tech company to unify customer behavior across mobile apps, websites, CRMs, and marketing channels for personalized targeting.",
    tags: ["Python", "dbt", "Segment", "Redshift", "Airflow", "S3"],
    image: "/placeholder.svg?height=200&width=400",
    challenges:
      "Customer data was fragmented across multiple tools, making it hard to unify identities and understand complete user journeys for effective campaign targeting.",
    solution:
      "Ingested customer event data via Segment into S3 and Redshift. Used Python and dbt to model unified customer profiles with custom identity resolution logic based on email, device ID, and behavioral signals. Orchestrated pipelines using Airflow.",
    outcomes:
      "Enabled precise audience segmentation and campaign personalization, leading to a 25% lift in conversion rates and 15% improvement in customer retention. Reduced data analyst prep time by 40% through self-serve access to unified profiles.",
  },
  {
    title: "LLM-Powered PII Detection for Enterprise Data Stores",
    description:
      "Designed, fine-tuned, and deployed an LLM-based system to identify and classify sensitive information such as PII in enterprise data environments, enhancing data governance and compliance.",
    tags: ["Python", "Hugging Face Transformers", "BERT", "GPT-3", "Docker", "Kubernetes"],
    image: "/placeholder.svg?height=200&width=400",
    challenges:
      "Enterprise data was stored across disparate systems with inconsistent formats, making it difficult to detect personally identifiable information (PII) at scale with high precision.",
    solution:
      "Fine-tuned transformer models like BERT and GPT-3 on labeled cybersecurity and compliance datasets. Applied NLP techniques such as Named Entity Recognition and token classification to scan and tag sensitive data across structured and unstructured sources.",
    outcomes:
      "Achieved over 91% precision in identifying PII, reducing compliance audit preparation time by 60% and significantly lowering the risk of data breaches. Integrated into automated data monitoring pipelines for continuous protection.",
  },
];


// Personal information
export const personalInfo = {
 name: "Tamajyoti Dhar",
 email: "tamajyoti.dhar@gmail.com",
 phone: "+91-9008054298",
 linkedin: "https://www.linkedin.com/in/tamajyoti-dhar-6494022b/",
 github: "github.com/tamajyoti",
 shortBio:
   "I help startups design scalable data pipelines, architect real-time analytics systems, and apply machine learning to solve their complex business problems.",
};



