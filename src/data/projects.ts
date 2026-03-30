export interface Project {
  title: string;
  description: string;
  longDescription?: string;
  tech: string[];
  github?: string;
  demo?: string;
  category: string;
  featured: boolean;
  year: string;
  highlight?: string;
  thumbnail?: string;
}

export const projects: Project[] = [
  {
    title: 'MobyGames - Video Game Database',
    description: 'Video game archival and portfolio/career website at Atari, serving as a comprehensive database for game metadata, credits, and history.',
    longDescription: 'Currently working on MobyGames at Atari Games India. Integrated OAuth & SSO login (Google, LinkedIn, Steam) to reduce onboarding friction, resolved 20+ critical security issues across DB, network, and DDoS vectors, refactored the analytics and visualisation layer using Jinja, Vue and Flask - driving a 25% uplift in monthly paid users. Also integrated Google Gemini AI for intelligent backend data scraping to improve data availability.',
    tech: ['Python', 'Flask', 'Jinja', 'Vue', 'Google Gemini AI', 'OAuth/SSO', 'AWS'],
    demo: 'https://www.mobygames.com/',
    thumbnail: '/resources/mobygames-screenshot.png',
    category: 'Live Product',
    featured: true,
    year: '2025–Present',
    highlight: 'Currently at Atari',
  },
  {
    title: 'Market Data Quality Monitor',
    description: 'Live web app for monitoring market data quality across Bloomberg, JPMorgan, ICE and other vendors.',
    longDescription: 'Spearheaded at PIMCO (via Gemini Solutions). Reduced manual validation time by 75% and automated 90%+ of human-hours spent on data quality checks.',
    tech: ['Python', 'Flask', 'Plotly', 'JavaScript', 'Oracle SQL', 'DataDog'],
    category: 'Data Dashboard',
    featured: false,
    year: '2021–2023',
    highlight: '75% reduction in manual ops',
  },
  {
    title: 'FastAPI Market Data Microservice',
    description: 'High-performance async FastAPI service for on-demand market data retrieval and processing at PIMCO.',
    longDescription: 'Improved API latency by 40% over legacy batch jobs. Integrated AWS Step Functions for async job execution, cutting data update times from ~15 min to under 2 min.',
    tech: ['Python', 'FastAPI', 'AWS Step Functions', 'PostgreSQL', 'Elasticsearch'],
    category: 'Backend API',
    featured: false,
    year: '2022–2024',
    highlight: '40% latency improvement',
  },
  {
    title: 'Jaivik - B2B Agriculture Dealing Portal',
    description: 'A B2B platform for the Govt. of Uttarakhand where businesses directly buy from farmers via bidding.',
    longDescription: 'Built during Smart India Hackathon 2020, Jaivik enables farmers to list inventory, track bids, and forecast optimal selling prices using a SARIMA ML model - empowering them to choose the most profitable bids.',
    tech: ['Python', 'Flask', 'SARIMA ML', 'PostgreSQL', 'JavaScript', 'Adobe XD'],
    demo: 'https://xd.adobe.com/view/a7e4a9ad-fd65-4504-8eac-fca504cfb4e1-f2b7/?fullscreen',
    thumbnail: '/resources/jaivik-screenshot.png',
    category: 'B2B Portal',
    featured: true,
    year: '2019–2020',
    highlight: 'Smart India Hackathon Finalist',
  },
  {
    title: 'GPT-4o AI Chatbot for Market Data',
    description: 'Conversational Slack AI assistant with integrated entire backend, enabling non-technical users to query market data.',
    tech: ['Python', 'FastAPI', 'GPT-4o', 'REST APIs', 'AWS'],
    category: 'AI / LLM',
    featured: false,
    year: '2024',
    highlight: 'GPT-4o powered',
  },
];
