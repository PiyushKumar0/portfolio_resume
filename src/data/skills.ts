export type SkillCategory = 'Languages' | 'Frameworks' | 'Databases' | 'Cloud' | 'Observability' | 'Tools';

export interface Skill {
  name: string;
  icon: string;   // emoji or simple text icon
  category: SkillCategory;
}

export const skills: Skill[] = [
  // Languages
  { name: 'Python',    icon: '🐍', category: 'Languages' },
  { name: 'SQL',       icon: '🗄️', category: 'Languages' },
  { name: 'TypeScript',icon: '📘', category: 'Languages' },
  { name: 'JavaScript',icon: '⚡', category: 'Languages' },

  // Frameworks
  { name: 'FastAPI',   icon: '⚡', category: 'Frameworks' },
  { name: 'Flask',     icon: '🍶', category: 'Frameworks' },
  { name: 'Jinja',     icon: '🎨', category: 'Frameworks' },
  { name: 'Pandas',    icon: '🐼', category: 'Frameworks' },
  { name: 'Pytest',    icon: '✅', category: 'Frameworks' },
  { name: 'Plotly',    icon: '📊', category: 'Frameworks' },
  { name: 'Vue.js',    icon: '💚', category: 'Frameworks' },

  // Databases
  { name: 'PostgreSQL',     icon: '🐘', category: 'Databases' },
  { name: 'Oracle SQL',     icon: '🔴', category: 'Databases' },
  { name: 'Elasticsearch', icon: '🔍', category: 'Databases' },
  { name: 'AWS Aurora',     icon: '☁️', category: 'Databases' },
  { name: 'AWS Timestream', icon: '⏱️', category: 'Databases' },

  // Cloud
  { name: 'AWS S3',        icon: '🪣', category: 'Cloud' },
  { name: 'AWS EC2',       icon: '💻', category: 'Cloud' },
  { name: 'AWS EKS',       icon: '⚙️', category: 'Cloud' },
  { name: 'Step Functions',icon: '🔄', category: 'Cloud' },
  { name: 'CloudWatch',    icon: '📡', category: 'Cloud' },
  { name: 'GitHub Actions',icon: '🤖', category: 'Cloud' },
  { name: 'GitLab CI/CD',  icon: '🦊', category: 'Cloud' },

  // Observability
  { name: 'Datadog',  icon: '🐕', category: 'Observability' },
  { name: 'Splunk',   icon: '🔦', category: 'Observability' },
  { name: 'Grafana',  icon: '📈', category: 'Observability' },
  { name: 'PagerDuty',icon: '🚨', category: 'Observability' },

  // Tools
  { name: 'Git',           icon: '🌿', category: 'Tools' },
  { name: 'GitHub Copilot',icon: '🤖', category: 'Tools' },
  { name: 'Claude AI',     icon: '🧠', category: 'Tools' },
  { name: 'Docker',        icon: '🐳', category: 'Tools' },
  { name: 'Swagger',       icon: '📋', category: 'Tools' },
  { name: 'Jira',          icon: '📌', category: 'Tools' },
  { name: 'Postman',       icon: '📮', category: 'Tools' },
  { name: 'Jupyter',       icon: '📓', category: 'Tools' },
];

export const skillCategories: SkillCategory[] = [
  'Languages', 'Frameworks', 'Databases', 'Cloud', 'Observability', 'Tools',
];
