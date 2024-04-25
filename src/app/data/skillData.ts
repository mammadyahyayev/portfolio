enum SkillCategory {
    TECHNICAL, SOCIAL
}

export type Skill = {
    name: string;
    category: SkillCategory;
}

export const skillData: Skill[] = [
    {
        name: "Java SE/EE",
        category: SkillCategory.TECHNICAL
    },
    {
        name: "Spring Framework",
        category: SkillCategory.TECHNICAL
    },
    {
        name: "Spring Boot",
        category: SkillCategory.TECHNICAL
    },
    {
        name: "Spring Security",
        category: SkillCategory.TECHNICAL
    },
    {
        name: "Spring Cloud",
        category: SkillCategory.TECHNICAL
    },
    {
        name: "Spring Actuator",
        category: SkillCategory.TECHNICAL
    },
    {
        name: "Hibernate",
        category: SkillCategory.TECHNICAL
    },
    {
        name: "Maven",
        category: SkillCategory.TECHNICAL
    },
    {
        name: "Gradle",
        category: SkillCategory.TECHNICAL
    },
    {
        name: "Domain Driven Design (DDD)",
        category: SkillCategory.TECHNICAL
    },
    {
        name: "Test Driven Development (TDD)",
        category: SkillCategory.TECHNICAL
    },

    {
        name: "REST & SOAP",
        category: SkillCategory.TECHNICAL
    },

    {
        name: "Design Patterns",
        category: SkillCategory.TECHNICAL
    },
    {
        name: "SOLID",
        category: SkillCategory.TECHNICAL
    },
    {
        name: "Microservices",
        category: SkillCategory.TECHNICAL
    },
    {
        name: "CI/CD",
        category: SkillCategory.TECHNICAL
    },
    {
        name: "Docker",
        category: SkillCategory.TECHNICAL
    },
    {
        name: "Kubernetes",
        category: SkillCategory.TECHNICAL
    },
    {
        name: "Git",
        category: SkillCategory.TECHNICAL
    },
    {
        name: "ElasticSearch",
        category: SkillCategory.TECHNICAL
    },
    {
        name: "Apache Kafka",
        category: SkillCategory.TECHNICAL
    },


    {
        name: "Oracle",
        category: SkillCategory.TECHNICAL
    },
    {
        name: "MySQL",
        category: SkillCategory.TECHNICAL
    },
    {
        name: "PostgresSQL",
        category: SkillCategory.TECHNICAL
    },
    {
        name: "MsSQL Server",
        category: SkillCategory.TECHNICAL
    },
    {
        name: "PL-SQL",
        category: SkillCategory.TECHNICAL
    },
    {
        name: "NoSQL",
        category: SkillCategory.TECHNICAL
    },
    {
        name: "MongoDB",
        category: SkillCategory.TECHNICAL
    },


    {
        name: "C#",
        category: SkillCategory.TECHNICAL
    },
    {
        name: ".NET",
        category: SkillCategory.TECHNICAL
    },
    {
        name: "WPF",
        category: SkillCategory.TECHNICAL
    },

    {
        name: "JavaScript",
        category: SkillCategory.TECHNICAL
    },
    {
        name: "TypeScript",
        category: SkillCategory.TECHNICAL
    },
    {
        name: "HTML",
        category: SkillCategory.TECHNICAL
    },
    {
        name: "CSS",
        category: SkillCategory.TECHNICAL
    },
    {
        name: "React",
        category: SkillCategory.TECHNICAL
    },
    {
        name: "Angular",
        category: SkillCategory.TECHNICAL
    },

    {
        name: "Python",
        category: SkillCategory.TECHNICAL
    },
    {
        name: "NumPY",
        category: SkillCategory.TECHNICAL
    },
    {
        name: "Pandas",
        category: SkillCategory.TECHNICAL
    },


    {
        name: "Productive",
        category: SkillCategory.SOCIAL
    },
    {
        name: "Hard-Working",
        category: SkillCategory.SOCIAL
    },
    {
        name: "Leadership",
        category: SkillCategory.SOCIAL
    },
    {
        name: "Fast Learning",
        category: SkillCategory.SOCIAL
    },
    {
        name: "Adaptability",
        category: SkillCategory.SOCIAL
    },
    {
        name: "Leadership",
        category: SkillCategory.SOCIAL
    },
    {
        name: "Cooperation",
        category: SkillCategory.SOCIAL
    },
    {
        name: "Communication",
        category: SkillCategory.SOCIAL
    },
]
export const skillDataByCategory = skillData.reduce((previousValue, currentValue) => {
    if (!previousValue) {
        previousValue = new Map<string, string[]>
    }
    const skills = previousValue.get(SkillCategory[currentValue.category]) ?? [];
    skills.push(currentValue.name)
    previousValue.set(SkillCategory[currentValue.category], skills);
    return previousValue
}, new Map<string, string[]>)
