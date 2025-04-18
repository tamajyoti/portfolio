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
   title: "Real-time Analytics Platform",
   description:
     "Designed and implemented a real-time analytics platform using Apache Kafka, Spark Streaming, and Elasticsearch to process and visualize streaming data from IoT devices.",
   tags: ["Kafka", "Spark", "Elasticsearch", "Python"],
   image: "/placeholder.svg?height=200&width=400",
   challenges:
     "Handling millions of events per second while maintaining low latency was a significant challenge. Additionally, ensuring data consistency across the pipeline required careful design.",
   solution:
     "Implemented a scalable architecture with Kafka for message queuing, Spark Streaming for real-time processing, and Elasticsearch for fast querying. Used Kafka Connect for reliable data ingestion and custom connectors for data transformation.",
   outcomes:
     "Reduced data processing latency from minutes to seconds, enabling real-time decision making. The platform now processes over 10TB of data daily with 99.9% reliability.",
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
     "Architected a Customer 360 data platform that integrates data from multiple sources to provide a unified view of customer interactions and behavior.",
   tags: ["AWS", "Glue", "Redshift", "Python"],
   image: "/placeholder.svg?height=200&width=400",
   challenges:
     "Customer data was siloed across multiple systems, making it difficult to get a complete view of customer journeys and behavior patterns.",
   solution:
     "Designed a lake house architecture using AWS services, with Glue for ETL, Redshift for analytics, and custom identity resolution algorithms for customer matching.",
   outcomes:
     "Enabled personalized marketing campaigns resulting in 25% higher conversion rates and improved customer retention by 15% through better targeting.",
 },
 {
   title: "Streaming ETL Pipeline",
   description:
     "Implemented a streaming ETL pipeline for processing financial transactions in real-time, enabling fraud detection and instant analytics.",
   tags: ["Flink", "Kafka", "Cassandra", "Scala"],
   image: "/placeholder.svg?height=200&width=400",
   challenges:
     "Processing high-volume financial transactions in real-time with strict latency requirements while ensuring data accuracy and completeness.",
   solution:
     "Leveraged Apache Flink for stateful stream processing, Kafka for messaging, and Cassandra for fast writes. Implemented exactly-once processing semantics and sophisticated monitoring.",
   outcomes:
     "Reduced fraud detection time from hours to milliseconds, saving the company an estimated $2M annually in fraud prevention. Enabled real-time financial analytics for business users.",
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



