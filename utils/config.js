const email = 'sandhya_srinivasan@outlook.com';

const intro = `Hi, # I'm *Sandhya, # a Full Stack developer`;

const navLinks = [
  {
    name: 'Home',
    url: '/#',
  },
  {
    name: 'Expertise',
    url: '/#expertise',
  },
  {
    name: 'Experience',
    url: '/#experience',
  },
  {
    name: 'Blogs',
    url: '/#blogs',
  },
  {
    name: 'Contact',
    url: '/#contact',
  },
];

const description = `Senior Web Developer with extensive experience in multiple javascript libraries and frameworks, with the ability to analyse, design and 
develop highly scalable and quality assured cloud-native applications.`;

const about_me = [
  {
    key: 'text',
    text: `I enjoy exploring new technologies and tools that can improve development workflows and enhance user experiences. Over the years I've worked at Wipro
    Digital, I have had the chance to work across multiple stacks and
    technologies. I've gained knowledge in both front-end and
    backend javascript frameworks like ReactJS, NodeJS, NextJS.`,
  },
  {
    key: 'text',
    text: `I am well-versed in agile methodologies and have experience collaborating with cross-functional teams and stake holders to ensure project success. I have also mentored junior developers, which has allowed me to refine my leadership and communication skills. I am a `,
    link_text: 'Certified Kubernetes Application developer',
    link_url:
      'https://www.credly.com/badges/818c1f5f-17ad-45dd-8a78-73fddc273b3f',
    target: '_blank',
    connector: ` and an `,
    second_text: ' AWS Certified Developer Associate.',
    second_url:
      'https://www.credly.com/badges/2ede14c3-7d8b-4172-9cfb-377e53a2d249/public_url',
  },
  {
    key: 'link',
    text: `I would welcome the chance to explore potential roles and discuss how I could contribute to your organization. If you come across any suitable opportunities that align with my skills and experience, feel free to `,
    link_text: 'reach out to me.',
    link_url: '/#contact',
  },
];

const skills = [
  {
    name: 'Frontend development',
    skill: '90%',
    color: '#F79489',
  },
  {
    name: 'React',
    skill: '85%',
    color: '#009d68',
  },
  {
    name: 'Typescript',
    skill: '83%',
    color: '#76bcf6',
  },
  {
    name: 'Kubernetes',
    skill: '80%',
    color: '#8FDDE7',
  },
  {
    name: 'Backend development',
    skill: '75%',
    color: '#2F5233',
  },
  {
    name: 'Node JS',
    skill: '75%',
    color: '#F79489',
  },
  {
    name: 'Next JS',
    skill: '70%',
    color: '#EF7C8E',
  },
];

const experience = [
  {
    title: 'Front end Developer, Advantest  July 2023 - Present',
    location: 'Advantest Europe GmbH, Stuttgart, Germany',
    summary:
        'As a frontend developer in an R&D team, I build and optimize product features and internal tools, focusing on usability and performance with the latest technologies.',
    stacks_used: [
      'React JS',
      'Redux Toolkit',
      'RTK',
      'Typescript',
    ],
  },
  {
    title: 'Lead Full Stack Developer, Wipro Digital   June 2021 - March 2023',
    location: 'Lloyds Banking Group, Remote',
    summary:
      'Developed an all in one ecosystem (B2B) called Model Maker for the data analysts of the bank to develop and deploy algorithms for risk management and fraud migitation. Led a team of 5 engineers to develop and maintain the application.',
    stacks_used: [
      'React JS',
      'Redux',
      'Node.js',
      'Kubernetes',
      'Docker',
      'Linux Admin',
    ],
  },
  {
    title: 'Senior Front end developer, Wipro Digital    June 2019 - May 2021',
    location: 'Lloyds Banking Group, London',
    summary:
      'Worked with a tight-knit team of 5 and developed multiple front end web applications using React and Redux for Payments, Insurance and Claims journey. ',
    stacks_used: ['Javascript', 'React JS', 'Redux', 'Less', 'Cypress'],
  },
  {
    title: 'Full Stack developer, Wipro Digital    June 2016 - May 2019',
    location: 'Energy and Natural Utilities, Bengaluru',
    summary:
      'Worked with a team of three and designed and developed multiple Web and Mobile applications (hybrid and Native) as POCs to validate application ideas and showcase the design to the customer',
    stacks_used: [
      'Javascript',
      'React JS',
      'Node JS',
      'Android',
      'NLP Bots',
      'Ionic',
      'Microservice',
    ],
  },
];

const contact_me = ` I am currently looking for opportunities and If you'd like to discuss a project or potential job opportunity, please get in touch via email, twitter or LinkedIn
`;

export {
  description,
  intro,
  navLinks,
  about_me,
  skills,
  email,
  experience,
  contact_me,
};
