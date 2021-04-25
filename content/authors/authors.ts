export type Author = {
  photo: string; // url of photo relative to content/authors/images/, EXCLUDING EXTENSION
  name: string;
  title: string;
  blurb: string;
  email?: string;
  facebook?: string;
  linkedin?: string;
  github?: string;
  website?: string;
  codeforces?: string;
};

export const Authors: Author[] = [
  {
    photo: 'krish',
    name: 'Krish Thawani',
    title: 'Content Creator',
    blurb:
      'Krish Thawani is cool cowboy',
    email: 'krishthawani46@gmail.com',
    linkedin:'krishthawani',
    github: 'Mrkr1sher',
  },
  {
    photo: 'prasad',
    name: 'Aditya Prasad',
    title: 'Content Creator',
    blurb:
      'Aditya Prasad is kool kid',
    email: 'adityaprasad9032@gmail.com',
    linkedin:'adityaprasad01',
    github: 'iAdityaEmpire',
  },
  {
    photo: 'adityap',
    name: 'Aathreya Kadambi',
    title: 'Content Creator',
    blurb:
      'Aathreya is Aathreya',
    email: 'aathreyakadambi@gmail.com',
    github: 'aathreyakadambi',
  },
];
