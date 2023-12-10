export interface ITimeline {
    date: string;
    title: string;
    duration: string;
    description?: string;
}

type EmploymentHistory = ITimeline;
type EducationHistory = ITimeline;

export const employmentHistoryData: EmploymentHistory[] = [
    {
        date: "Apr 2022 - Present",
        title: "Software Engineer",
        duration: "1 year 9 months",
        description: "Develop and maintain desktop based applications.\n" +
            "Decreased deployment time by 95% through implementation of easy-to-understand scripting\n" +
            "Upgrade and maintain existing systems to ensure that they meet evolving business needs.\n" +
            "Write and implement efficient code to ensure that code is scalable, maintainable, and secure.\n" +
            "Continuously improve software development processes by identifying areas for improvement."
    },
    {
        date: "Jan 2022 - Apr 2022",
        title: "SQL Developer",
        duration: "4 months",
        description: "Design, develop and maintain SQL scripts, stored procedures, and functions.\n" +
            "Monitor and optimize database performance, identifying and addressing potential bottlenecks or issues.\n" +
            "Manage database security, ensuring that data is protected and only accessible to authorized users."
    }
]

export const educationHistoryData: EducationHistory[] = [
    {
        date: "Sep 2022 - Jul 2024",
        title: "Azerbaijan State University of Oil and Industry",
        duration: "2 years",
        description: "Master, Artificial Intelligence"
    },
    {
        date: "Sep 2018 - Jul 2022",
        title: "Azerbaijan State University of Oil and Industry",
        duration: "4 years",
        description: "Bachelor, Information Technology"
    }
]
