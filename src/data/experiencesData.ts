export interface Experience {
    id: string;
    date: string;
    company: string;
    link: string,
    role: string;
    duration: string;
    description?: string;
    tags: string[]
}

type EmploymentHistory = Experience;
// type EducationHistory = Experience;

export const employmentHistoryData: EmploymentHistory[] = [
    {
        id: 'aistgroup',
        date: "March 2024 - Present",
        role: "Software Engineer",
        company: "AISTGroup",
        link: "https://aist.group/",
        duration: "1 months",
        description: "Develop and maintain desktop based applications.\n" +
            "Decreased deployment time by 95% through implementation of easy-to-understand scripting\n" +
            "Upgrade and maintain existing systems to ensure that they meet evolving business needs.\n" +
            "Write and implement efficient code to ensure that code is scalable, maintainable, and secure.\n" +
            "Continuously improve software development processes by identifying areas for improvement.",
        tags: ['Java', 'Spring Framework', 'RabbitMQ']
    },
    {
        id: 'smartscoring',
        date: "Apr 2022 - March 2024",
        role: "Software Engineer",
        company: "SmartScoring",
        link: "https://smartscoring.com/",
        duration: "2 years",
        description: "Develop and maintain desktop based applications.\n" +
            "Decreased deployment time by 95% through implementation of easy-to-understand scripting\n" +
            "Upgrade and maintain existing systems to ensure that they meet evolving business needs.\n" +
            "Write and implement efficient code to ensure that code is scalable, maintainable, and secure.\n" +
            "Continuously improve software development processes by identifying areas for improvement.",
        tags: ['C#', '.NET', 'WPF', 'Java', 'gRPC', 'TypeScript', 'Angular']
    },
    {
        id: 'logix',
        date: "Jan 2022 - Apr 2022",
        role: "SQL Developer",
        company: "Logix",
        link: "http://logix.az/",
        duration: "4 months",
        description: "Design, develop and maintain SQL scripts, stored procedures, and functions.\n" +
            "Monitor and optimize database performance, identifying and addressing potential bottlenecks or issues.\n" +
            "Manage database security, ensuring that data is protected and only accessible to authorized users.",
        tags: ['RDBMS', 'Sql Server']
    }
]

//
// export const educationHistoryData: EducationHistory[] = [
//     {
//         date: "Sep 2022 - Jul 2024",
//         title: "Azerbaijan State University of Oil and Industry",
//         duration: "2 years",
//         description: "Master, Artificial Intelligence"
//     },
//     {
//         date: "Sep 2018 - Jul 2022",
//         title: "Azerbaijan State University of Oil and Industry",
//         duration: "4 years",
//         description: "Bachelor, Information Technology"
//     }
// ]
