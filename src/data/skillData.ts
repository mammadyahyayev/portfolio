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
        name: "Apache Kafka",
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
