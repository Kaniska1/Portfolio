export const profile = {
  name: 'Kaniska Mitra',
  initials: 'KM',
  role: 'CSE Student & Aspiring Software Developer',
  location: 'Kolkata, India',
  college: 'Techno Main Salt Lake',
  email: 'kaniska.mitra@gmail.com',
  available: true,
  heroPhoto: '/profile.jpeg',
  aboutPhoto: '/coder.jpeg',
  resume: 'https://drive.google.com/file/d/1b7azrwIos4yuk2WGhYqLem00lZNjLZvR/view?usp=sharing',
  intro:
    'I build modern full-stack applications with clean architecture, intuitive user experiences, and scalable backend systems. Passionate about problem solving and continuous learning, I enjoy transforming ideas into polished software.',
  typing: [
    'Computer Science Undergrad Student',
    'Aspiring Software Developer',
    'Hack4Bengal 4.0 Winner',
    'AI, ML and Web 3 Enthusiast',
  ],
  socials: {
    github: 'https://github.com/Kaniska1',
    linkedin: 'https://www.linkedin.com/in/kaniskamitra',
    leetcode: 'https://leetcode.com/u/Kaniska1/',
  },
}

export const navItems = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Stack', href: '#stack' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Education', href: '#education' },
  { label: 'Achievements', href: '#achievements' },
  { label: 'Contact', href: '#contact' },
]

export const stats = [
  { value: '4×', label: 'Hackathon Finalist' },
  { value: '1×', label: 'MLH Hackathon winner' },
  { value: '100+', label: 'LeetCode Problems' },
  
]

export const skills = [
  {
    title: 'Competitive Coding',
    code: '01',
    description:
      'Consistent problem solving in Java and Python, with a growing command of data structures, algorithms, dynamic programming, graphs, and greedy techniques.',
    tags: ['DSA', 'Java', 'Python', 'LeetCode'],
  },
  {
    title: 'Web Development',
    code: '02',
    description:
      'Building full-stack products with modern frontend systems, secure APIs, databases, authentication, responsive interfaces, and deployment-ready architecture.',
    tags: ['Next.js', 'React', 'Node.js', 'MongoDB'],
  },
  {
    title: 'Graphic Design',
    code: '03',
    description:
      'Creating strong visual identities, social creatives, event collateral, layouts, and product interfaces with an eye for hierarchy and storytelling.',
    tags: ['Canva', 'Figma', 'Photoshop', 'UI Design'],
  },
  {
    title: 'Public Speaking',
    code: '04',
    description:
      'Pitching products, presenting technical ideas, hosting events, leading teams, and communicating clearly across both formal and high-energy settings.',
    tags: ['Pitching', 'Leadership', 'Hosting', 'Storytelling'],
  },
]

export const techStack = [
  { name: "Python", icon: "devicon-python-plain", group: "Language", note: "Automation, data work, and AI integrations" },
  { name: "Java", icon: "devicon-java-plain", group: "Language", note: "Competitive programming and core CS" },
  { name: "C", icon: "devicon-c-plain", group: "Language", note: "Programming fundamentals and systems coursework" },
  { name: "JavaScript", icon: "devicon-javascript-plain", group: "Language", note: "Modern ES syntax" },
  { name: "TypeScript", icon: "devicon-typescript-plain", group: "Language", note: "Typed application development" },

  { name: "Next.js", icon: "devicon-nextjs-plain", group: "Frontend", note: "App Router and full-stack apps" },
  { name: "React", icon: "devicon-react-original", group: "Frontend", note: "Reusable component systems" },
  { name: "Tailwind CSS", icon: "devicon-tailwindcss-original", group: "Frontend", note: "Utility-first styling" },

  { name: "Node.js", icon: "devicon-nodejs-plain", group: "Backend", note: "Server-side APIs" },
  { name: "Express.js", icon: "devicon-express-original", group: "Backend", note: "REST APIs" },

  { name: "MongoDB", icon: "devicon-mongodb-plain", group: "Database", note: "Document database" },
  { name: "MySQL", icon: "devicon-mysql-plain", group: "Database", note: "Relational database" },

  { name: "HTML5", icon: "devicon-html5-plain", group: "Frontend", note: "Semantic markup" },
  { name: "CSS3", icon: "devicon-css3-plain", group: "Frontend", note: "Responsive styling" },


  { name: "Pandas", icon: "devicon-pandas-plain", group: "Data", note: "Data analysis" },
  { name: "NumPy", icon: "devicon-numpy-plain", group: "Data", note: "Scientific computing" },

  { name: "Photoshop", icon: "devicon-photoshop-plain", group: "Design", note: "Graphic design" },
  { name: "GitHub", icon: "devicon-github-original", group: "Tools", note: "Collaboration" },
  { name: "Postman", icon: "devicon-postman-plain", group: "Tools", note: "API testing" },
  { name: "Arduino", icon: "devicon-arduino-plain", group: "Tools", note: "Embedded systems" },
]

export type Project = {
  name: string
  tagline: string
  description: string
  tech: string[]
  github: string
  demo?: string
  accent: string
  status: string
}

export const projects: Project[] = [
  {
    name: 'MindSnap',
    tagline: 'AI microlearning platform',
    description:
      'Transforms long-form content into swipeable learning cards, quizzes, and a focused AI-assisted study flow. Won 2nd place overall and Civic Tech runner-up at Hack4Bengal 2025.',
    tech: ['Next.js', 'JavaScript', 'Gemini API', 'Tailwind CSS'],
    github: 'https://github.com/Kaniska1/MindSnap',
    accent: 'MS',
    status: 'Award-winning',
  },
  {
    name: 'Valecta',
    tagline: 'AI hiring intelligence',
    description:
      'An intelligent recruitment platform with resume analysis, certificate verification, voice and video interview workflows, and candidate confidence scoring.',
    tech: ['Next.js', 'Appwrite', 'Flask', 'AI APIs'],
    github: 'https://github.com/Kaniska1/Valecta-StatusCode2',
    accent: 'VA',
    status: 'Hackathon build',
  },
  {
    name: 'Stockify',
    tagline: 'Stock management system',
    description:
      'A full-stack stock market management platform with authentication, wallet funds, buy and sell flows, portfolio tracking, transaction history, and market insights.',
    tech: ['Next.js', 'Node.js', 'Express.js', 'MongoDB', 'JWT'],
    github: 'https://github.com/Kaniska1/Stockify',
    accent: 'ST',
    status: 'Full stack',
  },
  {
    name: 'Coordina',
    tagline: 'Urban inter-departmental coordination platform',
    description:
      'A comprehensive urban management platform designed to transform Indian cities for a smarter tomorrow, offering tools for project management, resource allocation and conflict resolution.',
    tech: ['Next.js', 'TypeScript', 'MongoDB', 'Tailwind CSS', 'Langchain'],
    github: 'https://github.com/Kaniska1/Coordina',
    accent: 'CD',
    status: 'SIH finalist',
  },
  {
    name: 'Youtube to Spotify Playlist Syncer',
    tagline: 'Sync YouTube videos to Spotify playlists',
    description:
      'A web application that allows users to convert their favorite YouTube videos into Spotify playlists, enabling seamless music discovery and playlist management across platforms.',
    tech: ['python', 'Spotify API', 'YouTube API'],
    github: 'https://github.com/Kaniska1/youtube-to-spotify',
    accent: 'YS',
    status: 'Product project',
  },
  
  
]

export const education = [{
    period: '2021',
    title: 'Secondary Education (Class 10)',
    org: 'W.W.A. Cossipore English School, Kolkata',
    detail:
      'ICSE with 97% aggregate. Coursework included Computer Science Applications as a core subject.',
  },

  {
    period: '2021 — 2023',
    title: 'Higher Secondary Education (Class 12)',
    org: 'W.W.A. Cossipore English School, Kolkata',
    detail:
      'ISC with 94.5% aggregate. Coursework included Computer Science, Physics, Chemistry, and Mathematics.',
  },
  {
    period: '2023 — ongoing',
    title: 'B.Tech in Computer Science & Engineering',
    org: 'Techno Main Salt Lake, Kolkata',
    detail:
      'CGPA: 7.89. Coursework includes Data Structures & Algorithms, DBMS, Operating Systems, Computer Networks, Software Engineering, Cryptography, IoT, and AI fundamentals.',
  },
]

export const achievements = [
  { title: 'Hack4Bengal 2025 Winner', meta: '2nd overall · Civic Tech runner-up', icon: 'trophy' },
  { title: 'Smart India Hackathon Finalist', meta: 'National finalist with Coordina', icon: 'award' },
  { title: 'Smart Bengal Hackathon Finalist', meta: 'Grand finalist with SealiX', icon: 'award' },
  { title: 'StatusCode 2 Finalist', meta: 'Built Valecta under hackathon constraints', icon: 'code' },
  { title: 'Hult Prize Runners Up', meta: 'On-Campus runners-up with AquaSolve', icon: 'brain' },
  { title: 'QZone Head', meta: 'Head of the official quizzing society at TMSL', icon: 'users' },
]
