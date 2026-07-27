// ============================================================================
// EDIT EVERYTHING HERE.  All site copy lives in this one file.
// Content sourced from Nirvisha's full-stack résumé (Nirvisha FULL-STACK.pdf).
// NOTE: résumé header reads "Nirvisha Gondaliya"; display name kept as
// "Nirvisha Vora" per request - change `name` below if it should be Gondaliya.
// ============================================================================

export const profile = {
  name: 'Nirvisha Vora',
  initials: 'NV',
  role: 'Full Stack Developer',
  // Hero
  heroGreeting: 'hello world',
  heroTagline: 'I build scalable web apps - front to back.',
  heroBlurb:
    'Full-Stack Developer with 6+ years building production web applications with React, Next.js and Node.js - across travel, real estate, music, fashion and AI.',
  // About
  philosophy: 'clean architecture, real performance, shipped products',
  about:
    'Full-Stack Developer with 6+ years of experience building scalable web applications using ' +
    'React.js, Node.js, Next.js and other modern JavaScript frameworks. I specialise in front-end ' +
    'architecture, state management (Redux, RxJS) and REST/GraphQL APIs. I’ve led cross-functional ' +
    'teams and delivered high-impact projects across travel, real estate, music, fashion and AI - ' +
    'owning products end to end, from technical architecture to ship.',
  location: 'Gujarat, India',
  availability: 'Remote · Available immediately',
  email: 'nirvisha.v@gmail.com',
  phone: '+91 99799 84015',
  resumeUrl: '/resume.pdf',
  // Web3Forms access key (delivers contact form to her Gmail)
  web3formsKey: '08308001-c305-40cf-9de5-e8a4f2455722',
}

export const socials = [
  { label: 'LinkedIn', url: 'https://www.linkedin.com/in/nirvishavora/', icon: 'linkedin' },
  { label: 'Email', url: 'mailto:nirvisha.v@gmail.com', icon: 'mail' },
]

// Skills grouped by tab - straight from the résumé's Technical Skills.
export const skillGroups = [
  {
    name: 'Frontend',
    skills: [
      'React.js', 'Next.js', 'Vue.js', 'Astro.js', 'TypeScript', 'JavaScript',
      'Redux', 'Redux-Saga', 'Redux-Toolkit', 'RxJS', 'Tailwind CSS', 'Material UI',
    ],
  },
  {
    name: 'Backend',
    skills: ['Node.js', 'Express.js', 'NestJS', 'AdonisJS', 'Firebase', 'REST APIs', 'GraphQL'],
  },
  {
    name: 'Databases',
    skills: ['MongoDB', 'MySQL', 'MSSQL', 'NoSQL'],
  },
  {
    name: 'Tools & DevOps',
    skills: ['Git', 'GitHub', 'GitLab', 'Bitbucket', 'Docker', 'Postman', 'Swagger'],
  },
  {
    name: 'CMS',
    skills: ['WordPress', 'Shopify'],
  },
]

// The technologies surfaced in the hero "work stack" strip.
export const workStack = ['React', 'Next.js', 'TypeScript', 'Node.js', 'Redux', 'RxJS', 'Tailwind', 'MongoDB']

// Projects - real client work. Order matches the brief.
export const projects = [
  {
    title: 'WithMe.so',
    domain: 'SaaS · Creator',
    role: 'Lead Frontend Developer',
    blurb:
      'All-in-one content monetization and coaching platform. Built the full UI from Figma - responsive layouts, onboarding flows, dashboard and real-time modules, wired to the backend APIs.',
    tags: ['React', 'Tailwind CSS', 'Material UI', 'React Router'],
    image: '/projects/withme.png',
    live: 'https://withme.so',
  },
  {
    title: 'vidBoard.ai',
    domain: 'AI · Video',
    role: 'Frontend Lead',
    blurb:
      'Text-to-video platform with 100+ AI presenters and 500+ voices. Built the AI-powered UI features and a reusable component library, improving UX and page load times.',
    tags: ['React', 'Tailwind CSS', 'Material UI', 'React Router'],
    image: '/projects/vidboard.png',
    live: 'https://www.vidboard.ai/',
  },
  {
    title: 'MeMusic',
    domain: 'Music · Platform',
    role: 'Full Stack Developer',
    blurb:
      'Music platform with dynamic user dashboards, an upload system and admin portal. Built the APIs, database schemas, authentication and deployment pipelines.',
    tags: ['Next.js', 'MongoDB', 'Tailwind CSS'],
    image: '/projects/memusic.png',
    live: 'https://www.memusic.io',
  },
  {
    title: 'Carbon Analytics',
    domain: 'Analytics · Sustainability',
    role: 'Full Stack Developer',
    blurb:
      'Carbon footprint analytics with real-time dashboards and visual charts. Built the APIs, auth and admin features, with an optimised calculation pipeline.',
    tags: ['Next.js', 'Node.js', 'MongoDB'],
    image: '/projects/carbonanalytics.png',
    live: 'https://www.carbonanalytics.com',
  },
  {
    title: 'Plaved',
    domain: 'SaaS · Construction',
    blurb:
      'Site-management SaaS that centralises visits, photos, notes and signed reports from mobile. Node.js and React, deployed on AWS.',
    tags: ['React', 'Node.js', 'AWS'],
    image: '/projects/plaved.png',
    live: 'https://plaved.com',
  },
  {
    title: 'QuickFluence',
    domain: 'Marketing · Influencer',
    blurb:
      'Influencer discovery and hiring marketplace with search, profiles and campaign management. Laravel back end with a React front end.',
    tags: ['React', 'Laravel'],
    image: '/projects/quickfluence.png',
    live: 'https://quickfluence.com/',
  },
  {
    title: 'Tropical Sky',
    domain: 'Travel',
    blurb:
      'Luxury travel booking portal with custom search, advanced filters and end-to-end payment workflows.',
    tags: ['React', 'Node.js', 'REST API', 'Payments'],
    image: '/projects/tropicalsky.png',
    live: 'https://www.tropicalsky.co.uk/',
  },
  {
    title: 'Practice Perfect',
    domain: 'Healthcare · EdTech',
    blurb:
      'AI-powered consultation trainer for NHS clinicians - realistic AI patients, framework-aligned scenarios and instant, personalised feedback.',
    tags: ['React', 'Next.js', 'Node.js', 'AI'],
    image: '/projects/practiceperfect.png',
    live: 'https://www.practiceperfect.co.uk/',
  },
  {
    title: 'Stars of Boston',
    domain: 'Real Estate',
    blurb:
      'Custom real estate platform with advanced property search, rich filtering and an integrated booking flow.',
    tags: ['React', 'Node.js', 'MongoDB', 'REST API'],
    image: '/projects/starsofboston.png',
    live: 'https://www.starsofboston.com/',
  },
  {
    title: 'London Fashion Week',
    domain: 'Fashion',
    blurb:
      'Lead developer on the official London Fashion Week build - high-performance, content-rich site with secure Nuvei payments.',
    tags: ['Next.js', 'Astro.js', 'Redux-Saga', 'RxJS', 'Nuvei'],
    image: '/projects/londonfashionweek.png',
    live: 'https://londonfashionweek.co.uk/',
  },
]

export const experience = [
  {
    role: 'Full-Stack Developer / Freelancer',
    company: 'Self-Employed · Remote',
    period: 'Mar 2021 - Present',
    points: [
      'Delivered 10+ end-to-end full-stack web applications for global clients.',
      'Built scalable React / Next.js frontends and integrated REST / GraphQL APIs.',
      'Designed technical architecture and storage strategies, improving app performance by 25%.',
      'Resolved high-priority software issues while maintaining high client satisfaction.',
    ],
  },
  {
    role: 'Lead Mobile App & Frontend Developer',
    company: 'Tecocraft Ltd. · Gujarat, India',
    period: 'Nov 2017 - Feb 2020',
    points: [
      'Converted legacy apps into modern React Native / React.js codebases.',
      'Built real-time notifications, Stripe / Braintree payments and user dashboards.',
      'Led responsive design across web & mobile using Bootstrap, Tailwind and SASS.',
      'Collaborated with cross-border teams in Agile environments.',
    ],
  },
]

export const achievements = [
  { title: '6+ yrs', detail: 'Building and shipping scalable full-stack web applications.' },
  { title: '10+ apps', detail: 'End-to-end full-stack products delivered for global clients.' },
  { title: '+25%', detail: 'App performance gained through better architecture & storage strategy.' },
]

export const education = {
  degree: 'B.E. - Computer Science',
  school: 'T.R. Tanti College',
  period: 'Aug 2015 - Jul 2017 · CGPA 8.09 / 10',
}

export const quote = {
  text: 'Simplicity is the ultimate sophistication.',
  author: 'Leonardo da Vinci',
}
