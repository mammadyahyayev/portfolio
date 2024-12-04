import azscrape from '../styles/media/azscrape.png';
import nioHttpServer from '../styles/media/nioHttpServer.png';
import keywordFinder from '../styles/media/keyword_finder.png';
import clientTracking from '../styles/media/client_tracking.png';

export type Project = {
    name: string;
    description: string;
    year: string;
    technologies: string[];
    imageSrc: string;
    link?: string | undefined;
}

export const projectsData: Project[] = [
    {
        name: 'Non-blocking HTTP server',
        technologies: ['Java 17'],
        year: "2024",
        description: "Non-blocking HTTP server",
        imageSrc: nioHttpServer,
        link: 'https://github.com/mammadyahyayev/nio-http-server',
    },
    {
        name: 'AZScrape',
        technologies: ['Java 17', 'Selenium'],
        year: "2022",
        description: "The application simplify scraping process from different websites by using built-in templates. Don't need to write scraping for every website, provide necessary configurations and let the application scrapes for you.",
        imageSrc: azscrape,
        link: 'https://github.com/mammadyahyayev/azscrape',
    },
    {
        name: 'Keyword Finder',
        technologies: ['Shell Scripting'],
        year: "2022",
        description: "Keyword Finder is a tool which helps to search keywords among .pdf, .docx without opening them and prints the files that include searched keywords",
        link: 'https://github.com/mammadyahyayev/keyword-finder',
        imageSrc: keywordFinder
    },
    {
        name: 'Client Tracking',
        technologies: ['Java 11', 'Spring Boot', 'Redis'],
        year: "2021",
        description: "The application will block clients if they exceeds preset request limits, and will not be able to send request until API owner approval.",
        imageSrc: clientTracking
    },
    {
        name: 'Sudoku',
        technologies: ['HTML', 'CSS', 'TypeScript'],
        year: "2023",
        description: "The Sudoku game with different levels.",
        link: 'https://github.com/mammadyahyayev/games/tree/master/sudoku',
        imageSrc: ""
    },
    {
        name: 'Cafe Booking',
        technologies: ['Java 8', 'Java Swing', 'MySQL'],
        year: "2020",
        description: "",
        link: 'https://github.com/mammadyahyayev/cafe-desktop-app',
        imageSrc: ""
    },
    {
        name: 'Library Management',
        technologies: ['Java 8', 'Java Swing', 'MySQL'],
        year: "2019",
        description: "",
        link: 'https://github.com/mammadyahyayev/library-desktop-app',
        imageSrc: ""
    },
]
