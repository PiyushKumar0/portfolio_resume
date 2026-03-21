export interface Achievement {
  title: string;
  issuer: string;
  year: string;
  description: string;
  icon: string;
  featured: boolean;
}

export const achievements: Achievement[] = [
  {
    title: '"On the Spot" Award - Q2 2024',
    issuer: 'Gemini Solutions',
    year: '2024',
    description: 'Recognised for timely client issue resolution and being one of the highest performers in the organisation.',
    icon: '🏆',
    featured: true,
  },
  {
    title: '"On the Spot" Award - Q1 2022',
    issuer: 'Gemini Solutions',
    year: '2022',
    description: 'Excellence in team contribution and developing a client-ready dashboard in record time.',
    icon: '⚡',
    featured: true,
  },
  {
    title: 'Published Research Paper',
    issuer: 'International Journal of Innovative Research in Technology',
    year: '2020',
    description: '"Krishi: A Price Prediction System" (Paper ID: 151698) - ML-based agricultural price forecasting.',
    icon: '📄',
    featured: true,
  },
  {
    title: 'Smart India Hackathon Finalist',
    issuer: 'Ministry of Education, India',
    year: '2020',
    description: 'Software division finalist for Jaivik - a B2B agriculture dealing portal for the Govt. of Uttarakhand.',
    icon: '🥈',
    featured: false,
  },
  {
    title: '1st Prize - Writing Competition',
    issuer: "IIT Roorkee - Thomso'19",
    year: '2019',
    description: 'First prize winner in the writing competition at IIT Roorkee\'s annual cultural fest.',
    icon: '✍️',
    featured: false,
  },
  {
    title: '2nd Prize - Extempore Competition',
    issuer: "IIT Roorkee - Thomso'19",
    year: '2019',
    description: 'Runner-up in the extempore speaking competition.',
    icon: '🎤',
    featured: false,
  },
  {
    title: 'Asia-Pacific Junior Science Competition',
    issuer: 'Amity University, Manesar (Podium Finish)',
    year: '2016',
    description: 'Represented India at the Asia-Pacific level Junior Science Competition, securing a podium position.',
    icon: '🌏',
    featured: false,
  },
];
