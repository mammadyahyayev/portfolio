export interface Experience {
    id: string;
    date: string;
    company: string;
    link: string,
    role: string;
    duration: string;
    beginDate: Date;
    endDate?: Date;
    description?: string;
    tags: string[]
}

type EmploymentHistory = Experience;

export const employmentHistoryData: EmploymentHistory[] = [
    {
        id: 'abb',
        date: "Nov 2024 - Present",
        role: "Software Engineer",
        company: "ABB",
        link: "https://abb-bank.az",
        duration: "1 month",
        beginDate: new Date(2024, 2),
        endDate: new Date(),
        description: "",
        tags: ['Java', 'Spring Framework', 'Microservices']
    },
    {
        id: 'aistgroup',
        date: "Mar 2024 - Nov 2024",
        role: "Software Engineer",
        company: "AISTGroup",
        link: "https://aist.group/",
        duration: "9 months",
        beginDate: new Date(2024, 2),
        endDate: new Date(2024, 10),
        description: "",
        tags: ['Java', 'Spring Framework', 'RabbitMQ']
    },
    {
        id: 'smartscoring',
        date: "Apr 2022 - Mar 2024",
        role: "Software Engineer",
        company: "SmartScoring",
        link: "https://smartscoring.com/",
        duration: "2 years",
        beginDate: new Date(2022, 3),
        endDate: new Date(2024, 2),
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
        beginDate: new Date(2022, 0),
        endDate: new Date(2022, 3),
        description: "Design, develop and maintain SQL scripts, stored procedures, and functions.\n" +
            "Monitor and optimize database performance, identifying and addressing potential bottlenecks or issues.\n" +
            "Manage database security, ensuring that data is protected and only accessible to authorized users.",
        tags: ['RDBMS', 'Sql Server']
    }
]

export const showDurationInStr = (beginDate: Date, endDate: Date): string => {
    if (!beginDate || !endDate) {
        throw new Error("beginDate or endDate can't be null!")
    }

    const beginDateYear = beginDate.getFullYear();
    const beginDateMonth = beginDate.getMonth();

    const endDateYear = endDate.getFullYear();
    const endDateMonth = endDate.getMonth();

    const diffInYears = endDateYear - beginDateYear;
    const diffInMonths = Math.abs(endDateMonth - beginDateMonth);

    let result = '';

    if (diffInYears > 0) {
        result += diffInYears + (diffInYears > 1 ? " years" : " year");
    }

    if (diffInMonths > 0) {
        result += diffInMonths + (diffInMonths > 1 ? " months" : " month");
    }

    return result;
}
