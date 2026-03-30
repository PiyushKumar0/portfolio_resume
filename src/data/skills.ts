export type SkillCategory = 'Languages' | 'Frameworks' | 'Databases' | 'Cloud & Infra' | 'Observability' | 'CI/CD';

export interface Skill {
  name: string;
  category: SkillCategory;
}

export const skills: Skill[] = [
  // Languages
  { name: 'Python',      category: 'Languages' },
  { name: 'SQL',         category: 'Languages' },
  { name: 'TypeScript',  category: 'Languages' },

  // Frameworks
  { name: 'FastAPI',     category: 'Frameworks' },
  { name: 'Flask',       category: 'Frameworks' },
  { name: 'Pandas',      category: 'Frameworks' },
  { name: 'Pytest',      category: 'Frameworks' },
  { name: 'Vue.js',      category: 'Frameworks' },

  // Databases
  { name: 'PostgreSQL',     category: 'Databases' },
  { name: 'Oracle SQL',     category: 'Databases' },
  { name: 'Elasticsearch',  category: 'Databases' },

  // Cloud & Infra
  { name: 'AWS',       category: 'Cloud & Infra' },
  { name: 'Docker',    category: 'Cloud & Infra' },

  // Observability
  { name: 'Datadog',    category: 'Observability' },
  { name: 'Splunk',     category: 'Observability' },
  { name: 'Grafana',    category: 'Observability' },
  { name: 'PagerDuty',  category: 'Observability' },

  // CI/CD
  { name: 'GitHub Actions',  category: 'CI/CD' },
  { name: 'GitLab CI/CD',    category: 'CI/CD' },
];

export const skillCategories: SkillCategory[] = [
  'Languages', 'Frameworks', 'Databases', 'Cloud & Infra', 'Observability', 'CI/CD',
];
