export interface Experience {
  company: string;
  role: string;
  period: string;
  location: string;
  type: 'Full-time' | 'Contract';
  projects: {
    name: string;
    url?: string;
    bullets: string[];
  }[];
  tech: string[];
  current?: boolean;
}

export const experiences: Experience[] = [
  {
    company: 'Atari Games India Pvt Ltd',
    role: 'Senior Software Engineer',
    period: 'October 2025 – Present',
    location: 'Delhi, India',
    type: 'Full-time',
    current: true,
    projects: [
      {
        name: 'Video Game Archival Website: mobygames.com',
        url: 'https://www.mobygames.com/',
        bullets: [
          'Integrated OAuth & SSO login (Google, LinkedIn, Steam) reducing user onboarding friction and increasing customer collection rate by <strong>20%</strong>.',
          'Resolved 20+ critical security issues (DB, network, DDoS) reducing potential breach probability by <strong>15%</strong>.',
          'Refactored analytics & visualisation on Jinja, Vue and Flask for better UI, driving up to <strong>25% increase</strong> in monthly paid users.',
          'Integrated Google Gemini AI-based data scraping in the backend for improved data availability.',
        ],
      },
    ],
    tech: ['Python', 'Flask', 'Jinja', 'Vue', 'Redis', 'PostgreSQL', 'Docker', 'Google Gemini AI'],
  },
  {
    company: 'Gemini Solutions Pvt Ltd',
    role: 'Technology Solutions Lead',
    period: 'January 2021 – October 2025',
    location: 'Gurugram, Haryana, India',
    type: 'Full-time',
    projects: [
      {
        name: 'FastAPI Service for Market Data Operations - PIMCO',
        bullets: [
          'Designed & deployed FastAPI microservice for on-demand market data retrieval, improving API latency by <strong>40%</strong> vs legacy batch jobs.',
          'Added async job execution via AWS Step Functions, reducing data update time from <strong>~15 min to &lt;2 min</strong>.',
          'Led team to build a GPT-4o based AI chatbot with integrated REST endpoints for non-technical user interaction.',
        ],
      },
      {
        name: 'Flask ETL Service Python Migration – PIMCO',
        bullets: [
          'Migrated core Flask codebase from Python 2.7 → 3.8, increasing execution speed by up to <strong>20%</strong>.',
          'Updated REST endpoints & ORM queries; increased Pytest test coverage by <strong>50%</strong> and refactored core logic.',
          'Added logging & monitoring on DataDog; automated unit/integration testing with Pytest.',
        ],
      },
      {
        name: 'DataOps – PIMCO',
        bullets: [
          'Spearheaded a live market data quality monitoring web app (Plotly, Flask, JS), reducing manual validation time by <strong>75%</strong>.',
          'Automated Data Quality checks & set up ETL pipelines for vendors (Bloomberg, JPMorgan, ICE), cutting human-hours by <strong>90%+</strong> since inception.',
        ],
      },
    ],
    tech: ['Python', 'FastAPI', 'Flask', 'Pandas', 'Pytest', 'Oracle SQL', 'PostgreSQL', 'Elasticsearch', 'AWS', 'Datadog', 'Splunk', 'Plotly'],
  },
];
