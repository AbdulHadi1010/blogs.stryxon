interface Project {
  title: string
  description: string
  href?: string
  imgSrc?: string
  tags?: string[]
  category?: string
}

const projectsData: Project[] = [
  // AI Automation & Agents
  {
    title: 'Automated Contract Workflow: Monday.com, DocuSign & Make',
    description:
      'Engineered a fully automated legal workflow connecting Monday.com to DocuSign via Make.com. The system dynamically generates contracts, captures e-signatures, and updates CRM status in real-time, reducing manual processing time by 90%.',
    imgSrc: 'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=800&h=600&fit=crop',
    tags: ['Make.com', 'DocuSign', 'CRM', 'Automation', 'Monday.com', 'API Integration'],
    category: 'AI Automation & Agents',
  },
  {
    title: 'Automated YouTube to Shorts: HeyGen, OpenAI & Notion',
    description:
      'Built an automated content pipeline that fetches YouTube transcripts and uses OpenAI to identify viral hooks. The workflow organizes scripts in Notion and triggers HeyGen to generate AI avatar videos instantly, scaling ad production without manual editing.',
    imgSrc: 'https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=800&h=600&fit=crop',
    tags: ['OpenAI API', 'HeyGen', 'Notion', 'Python', 'Content Automation'],
    category: 'AI Automation & Agents',
  },
  {
    title: 'AI Voice Agent for Automated Lead Calling & CRM Sync',
    description:
      'Developed an autonomous voice agent that ingests leads and triggers instant outbound calls using Twilio and DeepGram. The AI conducts natural conversations, qualifies leads, and logs transcripts directly into the CRM, ensuring 100% data capture.',
    imgSrc: 'https://images.unsplash.com/photo-1516321497487-e288fb19713f?w=800&h=600&fit=crop',
    tags: ['Twilio', 'DeepGram', 'Python', 'CRM Automation', 'Voice AI'],
    category: 'AI Automation & Agents',
  },
  {
    title: 'AI Voice Agent with Twilio, DeepGram & ElevenLabs',
    description:
      'Architected a low-latency voice pipeline integrating DeepGram (STT) and ElevenLabs (TTS) for human-like conversational capability. Utilized LiveKit for real-time streaming, enabling the agent to handle complex customer support queries with sub-second response times.',
    imgSrc: 'https://images.unsplash.com/photo-1589254065878-42c9da997008?w=800&h=600&fit=crop',
    tags: ['ElevenLabs', 'Twilio', 'LiveKit', 'OpenAI API', 'Python'],
    category: 'AI Automation & Agents',
  },

  // AI Engineering & RAG
  {
    title: 'Intelligent Automation Agents with LangGraph & FastAPI',
    description:
      'Designed autonomous agents using LangGraph for multi-step reasoning and complex decision-making. Built custom MCP servers to securely connect agents to internal databases and developed a high-performance FastAPI backend for real-time execution.',
    imgSrc: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&h=600&fit=crop',
    tags: ['LangGraph', 'FastAPI', 'Python', 'AI Agents', 'OpenAI API'],
    category: 'AI Engineering & RAG',
  },
  {
    title: 'Enterprise RAG Knowledge Agent: n8n, Pinecone & OpenAI',
    description:
      'Engineered a RAG pipeline using n8n that ingests and chunks internal Google Drive documents into Pinecone. The system uses semantic search to provide instant, source-backed answers to employee queries, eliminating manual document searching.',
    imgSrc: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop',
    tags: ['n8n', 'Pinecone', 'RAG', 'OpenAI API', 'Vector Database'],
    category: 'AI Engineering & RAG',
  },
  {
    title: 'Domain-Specific RAG Systems for Medical & Legal Sectors',
    description:
      'Developed specialized RAG systems using domain-specific embedding models for HIPAA-compliant medical search and legal case law retrieval. Implemented hybrid search strategies in ChromaDB to ensure high accuracy and strict data governance.',
    imgSrc: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800&h=600&fit=crop',
    tags: ['RAG', 'LangChain', 'ChromaDB', 'NLP', 'Python'],
    category: 'AI Engineering & RAG',
  },
  {
    title: 'Llama 3-Powered Flask Server with Mobile Integration',
    description:
      'Integrated the Llama 3 LLM with a mobile app via a robust Flask backend hosted on AWS. Implemented Nginx for load balancing and SSL, enabling mobile users to interact with the AI model with low latency and high security.',
    imgSrc: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&h=600&fit=crop',
    tags: ['Llama 3', 'Flask', 'AWS', 'Mobile Integration', 'Python'],
    category: 'AI Engineering & RAG',
  },
  {
    title: 'DreamPixels: AI Image Gen with AWS Bedrock & Serverless',
    description:
      'Built a generative AI app transforming text prompts into images using Stable Diffusion and Amazon Bedrock. Utilized a serverless AWS Lambda architecture to handle high-concurrency image generation requests for the Flutter mobile frontend.',
    imgSrc: 'https://images.unsplash.com/photo-1547954575-855750c57bd3?w=800&h=600&fit=crop',
    tags: ['AWS Lambda', 'Generative AI', 'Flutter', 'Bedrock', 'Serverless'],
    category: 'AI Engineering & RAG',
  },
  {
    title: 'Mobile App for Digit Detection (CNN) on AWS EC2',
    description:
      'Deployed a Convolutional Neural Network (CNN) on AWS EC2 to power a real-time digit recognition mobile app. The system processes handwritten inputs via a Flask API, demonstrating seamless integration between Deep Learning models and mobile interfaces.',
    imgSrc: 'https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?w=800&h=600&fit=crop',
    tags: ['TensorFlow', 'AWS EC2', 'Flask', 'Computer Vision', 'Python'],
    category: 'AI Engineering & RAG',
  },

  // Cloud & DevOps
  {
    title: 'High-Performance LLM Deployment: DeepSeek & Mistral on AWS',
    description:
      'Deployed DeepSeek and Mistral LLMs on AWS c5.2xlarge (CPU) and g4dn.xlarge (GPU) instances using Ollama. Optimized performance by compiling Ollama for native CPU architectures, ensuring cost-effective inference for private LLM hosting.',
    imgSrc: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&h=600&fit=crop',
    tags: ['AWS EC2', 'Ollama', 'LLM Ops', 'Linux', 'GPU Optimization'],
    category: 'Cloud & DevOps',
  },
  {
    title: 'Jenkins CI/CD Pipeline Deployment with Docker & GitHub',
    description:
      'Built a robust CI/CD pipeline using Jenkins to automate software testing and deployment. Integrated Docker and GitHub Actions to streamline release cycles, reducing deployment failures and ensuring consistent production environments.',
    imgSrc: 'https://images.unsplash.com/photo-1618401471353-b98afee0b2eb?w=800&h=600&fit=crop',
    tags: ['Jenkins', 'Docker', 'CI/CD', 'GitHub', 'Linux'],
    category: 'Cloud & DevOps',
  },
  {
    title: 'Enterprise Data Security: IBM Guardium & Compliance',
    description:
      'Implemented Data Activity Monitoring (DAM) across enterprise fleets to secure sensitive PII. Engineered real-time audit workflows for GDPR/PCI DSS compliance and enforced data masking policies without requiring application code changes.',
    imgSrc: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?w=800&h=600&fit=crop',
    tags: ['IBM Guardium', 'Data Security', 'Compliance', 'Database Security', 'Linux'],
    category: 'Cloud & DevOps',
  },
  {
    title: 'Moltbot Installation & Configuration (Linux/macOS)',
    description:
      'Executed cross-platform deployment of Moltbot, managing dependencies and environment configurations on both Ubuntu and macOS. Verified system integrity through extensive CLI testing to ensure immediate operational readiness.',
    imgSrc: 'https://images.unsplash.com/photo-1629654297299-c8506221ca97?w=800&h=600&fit=crop',
    tags: ['Linux', 'Bash Scripting', 'System Admin', 'macOS', 'CLI'],
    category: 'Cloud & DevOps',
  },

  // Containerization & Kubernetes
  {
    title: 'High-Performance Kubernetes Multi-Node Cluster Deployment',
    description:
      'Designed and deployed a fault-tolerant multi-node Kubernetes cluster using kubeadm. Configured RBAC security policies, persistent storage, and integrated Prometheus/Grafana for full-stack cluster observability.',
    imgSrc: 'https://images.unsplash.com/photo-1667372393119-3d4c48d07fc9?w=800&h=600&fit=crop',
    tags: ['Kubernetes', 'Docker', 'Prometheus', 'Linux', 'DevOps'],
    category: 'Containerization & Kubernetes',
  },
  {
    title: 'Kubernetes Cluster Bootstrapping Using Ansible',
    description:
      'Automated the provisioning of Kubernetes clusters using Ansible playbooks. This reduced setup time by 80% and ensured consistent configuration of networking, security, and monitoring tools across all nodes.',
    imgSrc: 'https://images.unsplash.com/photo-1639322537228-f710d846310a?w=800&h=600&fit=crop',
    tags: ['Ansible', 'Kubernetes', 'Automation', 'Terraform', 'DevOps'],
    category: 'Containerization & Kubernetes',
  },
  {
    title: 'OpenShift Deployment for Enterprise Applications',
    description:
      'Deployed Red Hat OpenShift clusters to support secure, multi-tenant enterprise workloads. Configured automated scaling and strict security contexts to meet enterprise governance standards.',
    imgSrc: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&h=600&fit=crop',
    tags: ['OpenShift', 'Kubernetes', 'Red Hat', 'Cloud Security', 'DevOps'],
    category: 'Containerization & Kubernetes',
  },
  {
    title: 'ElasticSearch with Grafana on Kubernetes for Log Analytics',
    description:
      'Deployed a scalable ELK stack on Kubernetes for real-time log analysis. Integrated Fluentd for efficient log forwarding and configured Grafana dashboards to visualize system health and performance metrics.',
    imgSrc: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop',
    tags: ['Elasticsearch', 'Kubernetes', 'Grafana', 'Kibana', 'DevOps'],
    category: 'Containerization & Kubernetes',
  },
  {
    title: 'Deploying Cassandra & Apache Spark on Kubernetes',
    description:
      'Orchestrated a high-performance Big Data stack on Kubernetes, deploying Cassandra StatefulSets and Spark workers. Optimized resource limits and HDFS integration to handle large-scale data processing workloads.',
    imgSrc: 'https://images.unsplash.com/photo-1544197150-b99a580bb7a8?w=800&h=600&fit=crop',
    tags: ['Apache Spark', 'Kubernetes', 'Cassandra', 'Big Data', 'DevOps'],
    category: 'Containerization & Kubernetes',
  },

  // Cloudera & Big Data
  {
    title: 'Cloudera CDP Cluster Health Check & Performance Tuning',
    description:
      'Conducted deep-dive diagnostics on Cloudera CDP clusters to identify performance bottlenecks in HDFS and YARN. Implemented tuning parameters that enhanced system stability and query speeds.',
    imgSrc: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&h=600&fit=crop',
    tags: ['Cloudera', 'Hadoop', 'Performance Tuning', 'Linux', 'Big Data'],
    category: 'Cloudera & Big Data',
  },
  {
    title: 'Cloudera Public Cloud Upgrade on Azure Data Lake',
    description:
      'Led the migration and upgrade of Cloudera workloads to Azure Data Lake. Optimized the architecture for cloud-native performance while maintaining strict security and compliance with enterprise governance.',
    imgSrc: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&h=600&fit=crop',
    tags: ['Cloudera', 'Azure', 'Data Lake', 'Cloud Migration', 'Big Data'],
    category: 'Cloudera & Big Data',
  },
  {
    title: 'High-Availability Storage Infrastructure: IBM Storage Ceph',
    description:
      'Deployed a multi-node IBM Storage Ceph cluster to provide unified Block and Object storage. Tuned CRUSH maps for maximum I/O throughput and achieved 99.99% uptime for critical enterprise analytics workloads.',
    imgSrc: 'https://images.unsplash.com/photo-1544197150-b99a580bb7a8?w=800&h=600&fit=crop',
    tags: ['Ceph', 'Storage', 'Linux', 'High Availability', 'Red Hat'],
    category: 'Cloudera & Big Data',
  },

  // Web Application Development
  {
    title: 'Resolvix: Centralized Log Management (ELK Stack & PWA)',
    description:
      'Architected a Progressive Web App (PWA) for centralized log management. Built with a React/Vite frontend and Node.js backend, integrating ELK Stack and Python daemons for real-time log ingestion and visualization.',
    imgSrc: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop',
    tags: ['React', 'Node.js', 'ELK Stack', 'PWA', 'Python'],
    category: 'Web Application Development',
  },
  {
    title: 'E-Commerce Web App Deployment on AWS',
    description:
      'Designed and deployed a scalable e-commerce platform on AWS. Configured EC2 Auto Scaling groups and RDS Multi-AZ deployments to ensure high availability and consistent performance during traffic spikes.',
    imgSrc: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&h=600&fit=crop',
    tags: ['AWS EC2', 'React', 'E-commerce', 'CI/CD'],
    category: 'Web Application Development',
  },
  {
    title: 'The Freelance PM Club: Job Board & Marketplace',
    description:
      'Built a comprehensive marketplace platform using Next.js and TypeScript. Developed features for talent sourcing, subscription management via Stripe, and community interaction, creating a seamless ecosystem for project managers.',
    imgSrc: 'https://images.unsplash.com/photo-1557426272-fc759fdf7a8d?w=800&h=600&fit=crop',
    tags: ['Next.js', 'TypeScript', 'Stripe', 'Web App', 'React'],
    category: 'Web Application Development',
  },
  {
    title: 'AI Travel Agent Platform via Django REST Framework',
    description:
      'Architected a robust travel booking backend using Django REST Framework. Integrated third-party flight and hotel APIs, utilizing PostgreSQL for data storage and Redis for caching to deliver real-time itinerary generation.',
    imgSrc: 'https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=800&h=600&fit=crop',
    tags: ['Django', 'Python', 'PostgreSQL', 'Redis', 'API Integration'],
    category: 'Web Application Development',
  },

  // Mobile App Development
  {
    title: 'Architez: Architecture & Project Management App',
    description:
      'Built a cross-platform mobile app for architects using React Native. Implemented a scalable Firebase backend for real-time project updates and a highly interactive UI for design collaboration and management.',
    imgSrc: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=800&h=600&fit=crop',
    tags: ['React Native', 'Firebase', 'Mobile App', 'UI/UX', 'API Integration'],
    category: 'Mobile App Development',
  },
  {
    title: 'KidsClinic: Pediatric Health & Appointment App',
    description:
      'Developed a HIPAA-compliant pediatric health app enabling secure appointment scheduling and medical tracking. Engineered the React Native frontend and Node.js backend to ensure smooth data synchronization and user privacy.',
    imgSrc: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=800&h=600&fit=crop',
    tags: ['React Native', 'Node.js', 'Mobile App', 'Healthcare', 'Firebase'],
    category: 'Mobile App Development',
  },
  {
    title: 'Investicoon: Stock Trading App with AI Chatbot',
    description:
      'Created a real-time stock market tracking app featuring an integrated AI chatbot. Utilized FastAPI for high-performance data delivery and React Native for a responsive cross-platform user experience.',
    imgSrc: 'https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=800&h=600&fit=crop',
    tags: ['React Native', 'FastAPI', 'AI Integration', 'Mobile App', 'Finance'],
    category: 'Mobile App Development',
  },
  {
    title: 'Coach Abi: AI-Driven Therapy & Health App',
    description:
      'Developed a mental health support app with an integrated OpenAI-powered therapy bot. Designed an intuitive mobile interface using React Native and Redux to promote user engagement and secure communication.',
    imgSrc: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800&h=600&fit=crop',
    tags: ['React Native', 'OpenAI API', 'AWS', 'Mobile App', 'Redux'],
    category: 'Mobile App Development',
  },
]

export default projectsData
