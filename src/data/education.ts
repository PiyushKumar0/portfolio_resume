export interface Education {
  degree: string;
  field: string;
  institution: string;
  location: string;
  period: string;
  highlights?: string[];
}

export const education: Education[] = [
  {
    degree: 'Bachelor of Technology',
    field: 'Computer Science & Engineering',
    institution: 'Raj Kumar Goel Institute of Technology',
    location: 'Ghaziabad, Uttar Pradesh (AKTU)',
    period: 'August 2017 – July 2021',
    highlights: [
      'Published research paper on AI based price prediction for agricultural commodities using SARIMA model',
      'Smart India Hackathon 2020 finalist',
      'Freelance graphic designer and social media manager for college literary club',
      'Represented college and won at multiple national level events, e.g., IIT-Roorkee',
    ],
  },
];
