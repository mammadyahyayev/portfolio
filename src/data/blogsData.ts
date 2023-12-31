export interface BlogPost {
    id: string;
    dateStr: string;
    title: string;
    link: string,
    linkLabel: string;
    imageSrc: string;
    tags: string[];
    date: Date;
}

export const blogPostsData: BlogPost[] = [
    {
        id: 'how-to-design-utility-classes-in-java-15772c5a6e1f',
        dateStr: "Jan 3, 2021",
        title: "How to design Utility classes in Java?",
        link: "https://mammadyahya.medium.com/how-to-design-utility-classes-in-java-15772c5a6e1f",
        imageSrc: "https://miro.medium.com/v2/resize:fit:720/format:webp/1*G6RyqRUM8c3A29S7OMihcg.jpeg",
        tags: ['java', 'design', 'utility'],
        linkLabel: "mammadyahya.medium.com",
        date: new Date(2021, 0, 3)
    },

    {
        id: 'what-is-the-main-difference-between-asserttimeout-and-asserttimeoutpreemptively-55eb7add837e',
        dateStr: "Dec 26, 2020",
        title: "What is the main difference between assertTimeout and assertTimeoutPreemptively?",
        link: "https://mammadyahya.medium.com/what-is-the-main-difference-between-asserttimeout-and-asserttimeoutpreemptively-55eb7add837e",
        imageSrc: "https://miro.medium.com/v2/resize:fit:720/format:webp/1*A7E6HKBOg-8UfcmTiJLtuw.jpeg",
        tags: ['junit', 'testing'],
        linkLabel: "mammadyahya.medium.com",
        date: new Date(2020, 11, 26)
    },

    {
        id: 'apache-kafka-and-spring-boot-producer-and-consumer-example-97334367aa4b',
        dateStr: "Nov 19, 2020",
        title: "Apache Kafka and Spring Boot Producer and Consumer Example",
        link: "https://mammadyahya.medium.com/apache-kafka-and-spring-boot-producer-and-consumer-example-97334367aa4b",
        imageSrc: "https://miro.medium.com/v2/resize:fit:720/format:webp/1*UKFK-HyM4QUvCjx6EKgz1g.png",
        tags: ['spring', 'spring boot', 'apache kafka', 'publisher subscriber'],
        linkLabel: "mammadyahya.medium.com",
        date: new Date(2020, 10, 19)
    },

    {
        id: '3-most-popular-git-questions-on-stackoverflow-1555bb30993c',
        dateStr: "Feb 2, 2023",
        title: "15 Git Questions on Stackoverflow Will Make You Better Developer",
        link: "https://mammadyahya.medium.com/3-most-popular-git-questions-on-stackoverflow-1555bb30993c",
        imageSrc: "https://miro.medium.com/v2/resize:fit:720/format:webp/0*qRNva7P1ry8P9kqV.png",
        tags: ['git', 'stackoverflow'],
        linkLabel: "mammadyahya.medium.com",
        date: new Date(2023, 1, 2)
    },

    {
        id: 'great-way-to-learn-programming-if-you-cant-afford-courses-26da6329fc01',
        dateStr: "Feb 22, 2023",
        title: "Great Way to Learn Programming If You Can’t Afford Courses",
        link: "https://mammadyahya.medium.com/great-way-to-learn-programming-if-you-cant-afford-courses-26da6329fc01",
        imageSrc: "https://miro.medium.com/v2/resize:fit:720/format:webp/1*NUa0WUUDPloZvwFQxZGyig.jpeg",
        tags: ['tips', 'learning', 'courses'],
        linkLabel: "mammadyahya.medium.com",
        date: new Date(2023, 1, 22)
    },

    {
        id: '3-1-best-simple-notion-tips-to-boost-productivity-c0b215a7ffb9',
        dateStr: "Apr 25, 2023",
        title: "3+1 Best Simple Notion Tips to Boost Productivity",
        link: "https://mammadyahya.medium.com/3-1-best-simple-notion-tips-to-boost-productivity-c0b215a7ffb9",
        imageSrc: "https://miro.medium.com/v2/resize:fit:720/format:webp/0*fV8Rf0tRjVrC91k4",
        tags: ['notion', 'productivity', 'time management'],
        linkLabel: "mammadyahya.medium.com",
        date: new Date(2023, 3, 25)
    },

    {
        id: 'how-did-i-become-productive-with',
        dateStr: "Apr 5, 2023",
        title: "How Did I Become Productive with This Simple Effective Method?",
        link: "https://readyforfuture.substack.com/p/how-did-i-become-productive-with",
        imageSrc: "https://substack-post-media.s3.amazonaws.com/public/images/11e502eb-a4b3-4cc3-a1d5-82d8151ba2e0_768x512.jpeg",
        tags: ['effectiveness', 'productivity', 'time management'],
        linkLabel: "readyforfuture.substack.com",
        date: new Date(2023, 3, 5)
    },

    {
        id: 'how-to-boost-language-learning-process-with-tiny-technique-faeff1cbdaf6',
        dateStr: "May 1, 2023",
        title: "How to Boost Language Learning Process with Tiny Technique?",
        link: "https://mammadyahya.medium.com/how-to-boost-language-learning-process-with-tiny-technique-faeff1cbdaf6",
        imageSrc: "https://miro.medium.com/v2/resize:fit:720/format:webp/0*XD-O_8LpcfPgfOXl",
        tags: ['language learning', 'productivity', 'english'],
        linkLabel: "mammadyahya.medium.com",
        date: new Date(2023, 4, 1)
    },

    {
        id: '9-simple-killer-tips-control-productivity-like-a-manager-bc6f3b33dc34',
        dateStr: "May 4, 2023",
        title: "9 Simple Killer Tips: Control Productivity Like a Manager",
        link: "https://mammadyahya.medium.com/9-simple-killer-tips-control-productivity-like-a-manager-bc6f3b33dc34",
        imageSrc: "https://miro.medium.com/v2/resize:fit:720/format:webp/0*-v5Zs-6iFEFTiIcG",
        tags: ['time management', 'productivity', 'distraction'],
        linkLabel: "mammadyahya.medium.com",
        date: new Date(2023, 4, 4)
    },

    {
        id: 'what-is-the-best-time-to-learn-new',
        dateStr: "Mar 30, 2023",
        title: "What is The Best Time to Learn New Things Effectively?",
        link: "https://readyforfuture.substack.com/p/what-is-the-best-time-to-learn-new",
        imageSrc: "https://substackcdn.com/image/fetch/w_320,h_213,c_fill,f_webp,q_auto:good,fl_progressive:steep,g_center/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2F79f035ab-f1a4-4924-8452-361d5a24e6ff_3648x5472.jpeg",
        tags: ['learning', 'productivity', 'time management'],
        linkLabel: "readyforfuture.substack.com",
        date: new Date(2023, 2, 30)
    },

    {
        id: 'how-to-create-presentations-quick-and-easy-way-9a67fa845271',
        dateStr: "May 13, 2023",
        title: "How to Create Presentations Quick and Easy Way?",
        link: "https://mammadyahya.medium.com/how-to-create-presentations-quick-and-easy-way-9a67fa845271",
        imageSrc: "https://miro.medium.com/v2/resize:fit:640/format:webp/0*gYqD_Kd1a7tScU3H",
        tags: ['time management', 'powerpoint', 'presentation'],
        linkLabel: "mammadyahya.medium.com",
        date: new Date(2023, 4, 13)
    },

    {
        id: 'how-has-the-kindle-had-such-a-big',
        dateStr: "Mar 28, 2023",
        title: "How Kindle Played a Big Role in my LIFE?",
        link: "https://readyforfuture.substack.com/p/how-has-the-kindle-had-such-a-big",
        imageSrc: "https://substackcdn.com/image/fetch/w_320,h_213,c_fill,f_webp,q_auto:good,fl_progressive:steep,g_center/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2F55c45e6c-3f15-4a81-b929-493c33864523_509x339.jpeg",
        tags: ['kindle', 'life', 'success'],
        linkLabel: "readyforfuture.substack.com",
        date: new Date(2023, 2, 28)
    },

    {
        id: 'how-to-improve-typing-skill',
        dateStr: "Mar 28, 2023",
        title: "Improve Typing Skill and Save Tons of Time",
        link: "https://readyforfuture.substack.com/p/how-to-improve-typing-skill",
        imageSrc: "https://substackcdn.com/image/fetch/w_320,h_213,c_fill,f_webp,q_auto:good,fl_progressive:steep,g_center/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2Fa41829f2-3f7e-4584-800a-038e861a79a7_4928x3264.jpeg",
        tags: ['skill', 'typing', 'skill development'],
        linkLabel: "readyforfuture.substack.com",
        date: new Date(2023, 2, 28)
    },

    {
        id: 'jshell-command-line-tool-powerful-game-changer-for-java-7f3593d62fc0',
        dateStr: "May 30, 2023",
        title: "JShell Command Line Tool — Powerful Game Changer for Java",
        link: "https://mammadyahya.medium.com/jshell-command-line-tool-powerful-game-changer-for-java-7f3593d62fc0",
        imageSrc: "https://miro.medium.com/v2/resize:fit:720/format:webp/0*5r1tb7_P5cRpKrpW.png",
        tags: ['java', 'jshell', 'command line tool'],
        linkLabel: "mammadyahya.medium.com",
        date: new Date(2023, 4, 30)
    },

    {
        id: 'how-to-use-rstudio-aa3c27696e6f',
        dateStr: "Jun 3, 2023",
        title: "How to Use RStudio Effectively?",
        link: "https://towardsdev.com/how-to-use-rstudio-aa3c27696e6f",
        imageSrc: "https://miro.medium.com/v2/resize:fit:720/format:webp/0*mKCT6ka4sBKYaRm6",
        tags: ['r', 'r studio', 'data science'],
        linkLabel: "towardsdev.com",
        date: new Date(2023, 5, 3)
    },

    {
        id: 'how-to-write-messages-with-dynamic-values-in-java-8ce4c1566bdf',
        dateStr: "Jun 8, 2023",
        title: "How to Write Messages With Dynamic Values in Java?",
        link: "https://mammadyahya.medium.com/how-to-write-messages-with-dynamic-values-in-java-8ce4c1566bdf",
        imageSrc: "/src/assets/post-default-thumbnail.png",
        tags: ['java'],
        linkLabel: "mammadyahya.medium.com",
        date: new Date(2023, 5, 8)
    },

    {
        id: 'handshake-between-r-and-java-c3589774b6e4',
        dateStr: "Jun 14, 2023",
        title: "Handshake between R and Java?",
        link: "https://towardsdev.com/handshake-between-r-and-java-c3589774b6e4",
        imageSrc: "https://miro.medium.com/v2/resize:fit:720/format:webp/1*AMkGGDX3169fhOfwy7Mx3A.png",
        tags: ['java', 'r'],
        linkLabel: "towardsdev.com",
        date: new Date(2023, 5, 14)
    },

    {
        id: 'an-easy-ways-to-work-with-dates-in-r-b87e80519c24',
        dateStr: "Jun 22, 2023",
        title: "An Easy Ways to Work With Dates in R",
        link: "https://mammadyahya.medium.com/an-easy-ways-to-work-with-dates-in-r-b87e80519c24",
        imageSrc: "https://miro.medium.com/v2/resize:fit:720/format:webp/0*9PG0BjxZrP1JEdf5.jpg",
        tags: ['r', 'date/time'],
        linkLabel: "mammadyahya.medium.com",
        date: new Date(2023, 5, 22)
    },

    {
        id: 'how-to-visualize-source-code-of-net-framework-91beb4e2ba45',
        dateStr: "Jul 14, 2023",
        title: "How to Visualize Source Code of .NET Framework?",
        link: "https://mammadyahya.medium.com/how-to-visualize-source-code-of-net-framework-91beb4e2ba45",
        imageSrc: "https://miro.medium.com/v2/resize:fit:720/format:webp/0*Z7lzAlZOQrJtmFO8",
        tags: ['csharp', '.net'],
        linkLabel: "mammadyahya.medium.com",
        date: new Date(2023, 6, 14)
    },

    {
        id: 'what-is-the-difference-between-fill-and-color-in-ggplot2-2b8e35a12015',
        dateStr: "Aug 23, 2023",
        title: "What is the Difference Between fill and color in ggplot2?",
        link: "https://towardsdev.com/what-is-the-difference-between-fill-and-color-in-ggplot2-2b8e35a12015",
        imageSrc: "/src/assets/post-default-thumbnail.png",
        tags: ['r', 'ggplot2'],
        linkLabel: "towardsdev.com",
        date: new Date(2023, 7, 23)
    },

    {
        id: 'what-is-trim-in-mean-function-21b221e8896a',
        dateStr: "Aug 28, 2023",
        title: "What is trim in mean function?",
        link: "https://mammadyahya.medium.com/what-is-trim-in-mean-function-21b221e8896a",
        imageSrc: "https://miro.medium.com/v2/resize:fit:720/format:webp/0*59h5j_RYIYK6a5JK.jpg",
        tags: ['r', 'data science'],
        linkLabel: "mammadyahya.medium.com",
        date: new Date(2023, 7, 28)
    },

    {
        id: 'what-is-na-rm-in-sd-function-16521753efe6',
        dateStr: "Sep 2, 2023",
        title: "What is na.rm in sd() function?",
        link: "https://mammadyahya.medium.com/what-is-na-rm-in-sd-function-16521753efe6",
        imageSrc: "https://miro.medium.com/v2/resize:fit:720/format:webp/0*59h5j_RYIYK6a5JK.jpg",
        tags: ['r', 'data science'],
        linkLabel: "mammadyahya.medium.com",
        date: new Date(2023, 8, 2)
    },

    {
        id: 'how-to-use-strsplit-function-in-r-18178f84ebd9',
        dateStr: "Sep 7, 2023",
        title: "How to use strsplit() function in R?",
        link: "https://mammadyahya.medium.com/how-to-use-strsplit-function-in-r-18178f84ebd9",
        imageSrc: "https://miro.medium.com/v2/resize:fit:720/format:webp/0*59h5j_RYIYK6a5JK.jpg",
        tags: ['r', 'data science'],
        linkLabel: "mammadyahya.medium.com",
        date: new Date(2023, 8, 7)
    },

    {
        id: 'how-to-use-traditional-for-loop-in-r-8792907c2399',
        dateStr: "Sep 15, 2023",
        title: "How to Use traditional for loop in R?",
        link: "https://mammadyahya.medium.com/how-to-use-traditional-for-loop-in-r-8792907c2399",
        imageSrc: "https://miro.medium.com/v2/resize:fit:720/format:webp/0*59h5j_RYIYK6a5JK.jpg",
        tags: ['r', 'data science'],
        linkLabel: "mammadyahya.medium.com",
        date: new Date(2023, 8, 15)
    },

    {
        id: 'how-to-use-while-loop-in-r-c960b3bdb1e',
        dateStr: "Sep 25, 2023",
        title: "How to use while loop in R?",
        link: "https://mammadyahya.medium.com/how-to-use-while-loop-in-r-c960b3bdb1e",
        imageSrc: "https://miro.medium.com/v2/resize:fit:720/format:webp/0*59h5j_RYIYK6a5JK.jpg",
        tags: ['r', 'data science'],
        linkLabel: "mammadyahya.medium.com",
        date: new Date(2023, 8, 25)
    },

    {
        id: 'how-to-work-enthusiastically',
        dateStr: "Aug 21, 2023",
        title: "How to Work Enthusiastically?",
        link: "https://readyforfuture.substack.com/p/how-to-work-enthusiastically",
        imageSrc: "https://substackcdn.com/image/fetch/w_320,h_213,c_fill,f_webp,q_auto:good,fl_progressive:steep,g_center/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2Ff9af7a2a-54bf-45ed-b676-20c1ce43c1b8_4872x3248.jpeg",
        tags: ['planning', 'productivity', 'time management'],
        linkLabel: "readyforfuture.substack.com",
        date: new Date(2023, 7, 21)
    },
]
