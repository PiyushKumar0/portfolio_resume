export interface Achievement {
  title: string;
  issuer: string;
  year: string;
  description: string;
  featured: boolean;
  link?: string;
}

export const achievements: Achievement[] = [
  {
    title: '"On the Spot" Award - Q2 2024',
    issuer: 'Gemini Solutions',
    year: '2024',
    description: 'Recognised for timely client issue resolution and being one of the highest performers in the organisation.',
    featured: true,
  },
  {
    title: '"On the Spot" Award - Q1 2022',
    issuer: 'Gemini Solutions',
    year: '2022',
    description: 'Excellence in team contribution and developing a client-ready dashboard in record time.',
    featured: true,
  },
  {
    title: 'Published Research Paper',
    issuer: 'International Journal of Innovative Research in Technology',
    year: '2020',
    description: '"Krishi: A Price Prediction System" (Paper ID: 151698) - ML-based agricultural price forecasting.',
    featured: true,
    link: 'https://ijirt.org/article?manuscript=151698',
  },
  {
    title: 'Smart India Hackathon Finalist',
    issuer: 'Ministry of Education, India',
    year: '2020',
    description: 'Software division finalist for Jaivik - a B2B agriculture dealing portal for the Govt. of Uttarakhand.',
    featured: false,
  },
];
