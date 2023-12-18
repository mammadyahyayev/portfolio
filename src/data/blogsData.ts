export interface BlogPost {
    id: string;
    date: string;
    title: string;
    link: string,
    linkLabel: string;
    imageSrc: string;
    tags: string[];
}

export const blogPostsData: BlogPost[] = [
    {
        id: 'how-to-design-utility-classes-in-java-15772c5a6e1f',
        date: "Jan 3, 2021",
        title: "How to design Utility classes in Java?",
        link: "https://mammadyahya.medium.com/how-to-design-utility-classes-in-java-15772c5a6e1f",
        imageSrc: "https://miro.medium.com/v2/resize:fit:720/format:webp/1*G6RyqRUM8c3A29S7OMihcg.jpeg",
        tags: ['java', 'design', 'utility'],
        linkLabel: "mammadyahya.medium.com"
    },

    {
        id: 'what-is-the-main-difference-between-asserttimeout-and-asserttimeoutpreemptively-55eb7add837e',
        date: "Dec 26, 2020",
        title: "What is the main difference between assertTimeout and assertTimeoutPreemptively?",
        link: "https://mammadyahya.medium.com/what-is-the-main-difference-between-asserttimeout-and-asserttimeoutpreemptively-55eb7add837e",
        imageSrc: "https://miro.medium.com/v2/resize:fit:720/format:webp/1*A7E6HKBOg-8UfcmTiJLtuw.jpeg",
        tags: ['junit', 'testing'],
        linkLabel: "mammadyahya.medium.com"
    },

    {
        id: 'apache-kafka-and-spring-boot-producer-and-consumer-example-97334367aa4b',
        date: "Nov 19, 2020",
        title: "Apache Kafka and Spring Boot Producer and Consumer Example",
        link: "https://mammadyahya.medium.com/apache-kafka-and-spring-boot-producer-and-consumer-example-97334367aa4b",
        imageSrc: "https://miro.medium.com/v2/resize:fit:720/format:webp/1*UKFK-HyM4QUvCjx6EKgz1g.png",
        tags: ['spring', 'spring boot', 'apache kafka', 'publisher subscriber'],
        linkLabel: "mammadyahya.medium.com"
    },
]
