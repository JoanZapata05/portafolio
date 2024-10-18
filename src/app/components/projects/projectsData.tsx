
export interface ProjectData {
    image: string;
    title: string;
    description: string;
    demoLink?: string;
    repoLink?: string;
  }
  
  export const projectsData: ProjectData[] = [
    {
      image: './skillswapimg.jpg', 
      title: 'SkillSwap',
      description: 'Descripción breve del Proyecto 1.',
      demoLink: 'https://skill-swap-app-pink.vercel.app/',
      repoLink: 'hhttps://github.com/JoanZapata05/skillSwap',
    },
    {
      image: './applepage.jpg',
      title: 'Copy Apple page',
      description: 'Descripción breve del Proyecto 2.',
      demoLink: 'https://applejoan.netlify.app/',
      repoLink: 'https://github.com/JoanZapata05/Landing-page',
    },
  ];
