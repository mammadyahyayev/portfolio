export type ProjectItem = {
    name: string;
    description: string;
    technologies: string[];
    imageSrc: string;
    link: string;
}

export const projectsData: ProjectItem[] = [
    {
        name: 'AZScrape',
        technologies: ['Java', 'Selenium'],
        description: "The application simplify scraping process from different websites by using built-in templates. Don't need to write scraping for every website, provide necessary configurations and let the application scrapes for you.",
        link: 'https://github.com/mammadyahyayev/azscrape',
        imageSrc: "/src/assets/azscrape.png"
    },
    {
        name: 'Keyword Finder',
        technologies: ['Shell Scripting'],
        description: "Keyword Finder is a tool which helps to search keywords among .pdf, .docx without opening them and prints the files that include searched keywords",
        link: 'https://github.com/mammadyahyayev/keyword-finder',
        imageSrc: "/src/assets/keyword_finder.png"
    },
    {
        name: 'Client Tracking',
        technologies: ['Java', 'Spring Boot', 'Redis'],
        description: "The application will block clients if they exceeds preset request limits, and will not be able to send request until API owner approval.",
        link: 'https://github.com/mammadyahyayev/client-tracking',
        imageSrc: "/src/assets/client_tracking.png"
    },
    {
        name: 'Cafe Booking',
        technologies: ['Java', 'Java Swing', 'MySQL'],
        description: "",
        link: 'https://github.com/mammadyahyayev/cafe-desktop-app',
        imageSrc: ""
    },
    {
        name: 'Library Management',
        technologies: ['Java', 'Java Swing', 'MySQL'],
        description: "",
        link: 'https://github.com/mammadyahyayev/library-desktop-app',
        imageSrc: ""
    },
]
