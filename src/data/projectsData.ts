export type ProjectItem = {
    name: string;
    description: string;
    year: string;
    technologies: string[];
    imageSrc: string;
    link?: string | undefined;
}

export const projectsData: ProjectItem[] = [
    {
        name: 'AZScrape',
        technologies: ['Java 17', 'Selenium'],
        year: "2022",
        description: "The application simplify scraping process from different websites by using built-in templates. Don't need to write scraping for every website, provide necessary configurations and let the application scrapes for you.",
        imageSrc: "/azscrape.png"
    },
    {
        name: 'Keyword Finder',
        technologies: ['Shell Scripting'],
        year: "2022",
        description: "Keyword Finder is a tool which helps to search keywords among .pdf, .docx without opening them and prints the files that include searched keywords",
        link: 'https://github.com/mammadyahyayev/keyword-finder',
        imageSrc: "/keyword_finder.png"
    },
    {
        name: 'Client Tracking',
        technologies: ['Java 11', 'Spring Boot', 'Redis'],
        year: "2021",
        description: "The application will block clients if they exceeds preset request limits, and will not be able to send request until API owner approval.",
        imageSrc: "/client_tracking.png"
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
